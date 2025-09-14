from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import FastAPI, Depends, HTTPException
from model import UserRegister,UserLogin
from fastapi.middleware.cors import CORSMiddleware
from DB import user_collection
from jose import JWTError, jwt
from bson import ObjectId
from datetime import datetime, timedelta
from passlib.hash import bcrypt
app = FastAPI()

origins = [
    "http://localhost:5173",   # Vite dev server
    "http://127.0.0.1:5173",   # sometimes needed
    # You can add production domains here, e.g. "https://myapp.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],              # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],              # Allow all headers
)
# Secret key to sign the JWT
SECRET_KEY = "supersecretkey123"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return bcrypt.hash(password)

def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.verify(plain, hashed)

def create_access_token(sub_data: dict, expires_delta: timedelta = None):
    to_encode = sub_data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token
@app.get("/")
def read_root():
    MESSAGE=''
    try:
        ep1="http://127.0.0.1:8000/UserLogin"
        ep2="http://127.0.0.1:8000/UserRegister"
        MESSAGE=f'Please Login through below links or {ep1} or {ep2}'
    except:pass
    return MESSAGE
@app.post("/login")
def UserLogin(data:OAuth2PasswordRequestForm=Depends()):
    user=user_collection.find_one({'username':data.username})
    print(user,type(data))
    if user:
        if not user or not verify_password(data.password,user['password']):
            raise HTTPException(status_code=400, detail="Invalid credentials")
        
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            sub_data={"sub": data.username},
            expires_delta=access_token_expires
        )
        return {"message": "Logged Success","access_token": access_token, "token_type": "bearer"}
    else:
        print('User not exists')
        return {'message':'User not exists, Please Register'}
        # return {'message':'User Not Exists, లాగిన్ చెయ్యాలంటే ముందు రిజిస్టర్ అవ్వాలి (ఉచ్చ ఆగుతలేదా బ్రో!)'}
@app.post("/register")
def UserRegister(data:UserRegister):
    user=user_collection.find_one({'username':data.username})
    email=user_collection.find_one({"email":data.email})
    if user:
        return {"message": "Username already exists, try new!", "user": data.username}
    elif email:
        return {"message": "Email Id already exists, try new!", "email": data.email}
    else:
        insert=user_collection.insert_one({'email':data.email,"username":data.username,"password":hash_password(data.password)})
        return {"message": "User added Successfully"}
        # return {"message": "User added Successfully!"}
    # return 'Please Register here😊!'
@app.put("/reset-password")
def ResetPassword(data:OAuth2PasswordRequestForm=Depends()):
    user=user_collection.find_one({'username':data.username})
    if user:
        user_collection.update_one(
            {"_id":ObjectId(user['_id'])},
            {"$set":{"password":hash_password(data.password)}}
        )
        print({'message':'Password reset Success, Please login'})
        return{'message':'Password reset Success, Please login'}
    else:
        print('User not exists')
        return {'message':'User not exists, Please Register'}
# if __name__ == "__main__":
#     uvicorn.run(host="0.0.0.0", port=8000, reload=True)
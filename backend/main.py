from passlib.context import CryptContext
from fastapi import FastAPI
from model import UserRegister,UserLogin
from fastapi.middleware.cors import CORSMiddleware
from DB import user_collection
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

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)
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
def UserLogin(data:UserLogin):
    user=user_collection.find_one({'username':data.username})
    print(user,type(data))
    if user:
        if not user or verify_password(data.password,user['password']):
        # if user['password']==data.password:
            return {"message": "Logged Success", "user": data.username}
        else:return {"message": "Username or Password didn't matched", "user": data.username}
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
# if __name__ == "__main__":
#     uvicorn.run(host="0.0.0.0", port=8000, reload=True)
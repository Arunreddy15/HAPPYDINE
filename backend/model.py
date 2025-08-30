from pydantic import BaseModel,EmailStr

class UserRegister(BaseModel):
    email:EmailStr
    username:str
    password:str
class UserLogin(BaseModel):
    username:str
    password:str
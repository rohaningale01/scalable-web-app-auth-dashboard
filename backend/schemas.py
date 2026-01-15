from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


# 🔽 TASK SCHEMAS
class TaskCreate(BaseModel):
    title: str


class TaskUpdate(BaseModel):
    title: str
    status: str


class TaskResponse(BaseModel):
    id: int
    title: str
    status: str

    class Config:
        orm_mode = True

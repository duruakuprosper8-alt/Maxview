from pydantic import BaseModel
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str
    avatar: str | None = None

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

class UserUpdate(BaseModel):
    name: str | None = None
    avatar: str | None = None

class BookmarkCreate(BaseModel):
    content_id: int
    content_type: str
    note: str | None = None


class BookmarkResponse(BaseModel):
    id: int
    user_id: int
    content_id: int
    content_type: str
    note: str | None = None

    class Config:
        from_attributes = True
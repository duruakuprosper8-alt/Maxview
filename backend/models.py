from sqlalchemy import Column, Integer, String, Enum, TIMESTAMP, Text
from database import Base
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), unique=True, nullable=False, index=True)
    password_hash = Column(String(125), nullable=False)
    role = Column(Enum("user", "admin"), default="user")
    avatar = Column(String(500), nullable=True)
    created_at = Column(TIMESTAMP, nullable=True)

class Bookmark(Base):
    __tablename__ = "bookmarks"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, nullable=False)
    content_id = Column(Integer, nullable=False)
    content_type = Column(String(50), nullable=False)
    note = Column(Text, nullable=True)
    created_at = Column(TIMESTAMP, nullable=True)
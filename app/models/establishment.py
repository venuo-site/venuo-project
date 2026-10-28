from __future__ import annotations
from sqlmodel import SQLModel, Field
from datetime import datetime

class Establishment(SQLModel, table=True):
    __tablename__ = "establishments"
    
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(min_length=3, max_length=200, index=True)
    description: str | None = Field(default=None, max_length=1000)
    category: str = Field(index=True)
    
    latitude: float = Field(ge=-90.0, le=90.0)
    longitude: float = Field(ge=-180.0, le=180.0)
    
    address: str | None = Field(default=None)
    city: str | None = Field(default=None)
    state: str | None = Field(default=None)
    
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    rating: float = Field(default=0.0, ge=0.0, le=5.0)
    views_count: int = Field(default=0, ge=0)

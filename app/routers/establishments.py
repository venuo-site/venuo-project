from __future__ import annotations
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List
from datetime import datetime

from app.core.database import get_session
from app.models.establishment import Establishment

router = APIRouter(prefix="/establishments", tags=["Establishments"])

@router.post("/", response_model=Establishment, status_code=201)
def create_establishment(
    establishment: Establishment, 
    session: Session = Depends(get_session)
):
    session.add(establishment)
    session.commit()
    session.refresh(establishment)
    return establishment

@router.get("/", response_model=List[Establishment])
def list_establishments(
    skip: int = 0, 
    limit: int = 100, 
    category: str | None = None, 
    session: Session = Depends(get_session)
):
    query = select(Establishment).offset(skip).limit(limit)
    if category:
        query = query.where(Establishment.category == category)
    return session.exec(query).all()

@router.get("/{establishment_id}", response_model=Establishment)
def get_establishment(
    establishment_id: int, 
    session: Session = Depends(get_session)
):
    establishment = session.get(Establishment, establishment_id)
    if not establishment:
        raise HTTPException(status_code=404, detail="Estabelecimento não encontrado")
    return establishment

@router.put("/{establishment_id}", response_model=Establishment)
def update_establishment(
    establishment_id: int, 
    establishment_update: Establishment, 
    session: Session = Depends(get_session)
):
    establishment = session.get(Establishment, establishment_id)
    if not establishment:
        raise HTTPException(status_code=404, detail="Estabelecimento não encontrado")
    
    update_data = establishment_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(establishment, key, value)
        
    establishment.updated_at = datetime.utcnow()
    session.add(establishment)
    session.commit()
    session.refresh(establishment)
    return establishment

@router.delete("/{establishment_id}", status_code=204)
def delete_establishment(
    establishment_id: int, 
    session: Session = Depends(get_session)
):
    establishment = session.get(Establishment, establishment_id)
    if not establishment:
        raise HTTPException(status_code=404, detail="Estabelecimento não encontrado")
    
    session.delete(establishment)
    session.commit()
    return None

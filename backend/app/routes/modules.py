from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Module
from app.schemas import ModuleSchema

router = APIRouter(prefix="/modules", tags=["modules"])


@router.get("", response_model=list[ModuleSchema])
def list_modules(db: Session = Depends(get_db)):
    """Return all learning modules."""
    return db.query(Module).all()


@router.get("/{module_id}", response_model=ModuleSchema)
def get_module(module_id: str, db: Session = Depends(get_db)):
    """Return one module by id."""
    module = db.query(Module).filter(Module.id == module_id).first()
    if not module:
        raise HTTPException(status_code=404, detail="Module not found")
    return module

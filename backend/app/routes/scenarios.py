from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Decision, Scenario
from app.schemas import ScenarioSchema, SubmissionRequest, SubmissionResponse
from app.services.feedback_service import generate_feedback

router = APIRouter(prefix="/scenarios", tags=["scenarios"])


@router.get("", response_model=list[ScenarioSchema])
def list_scenarios(db: Session = Depends(get_db)):
    """Return all phishing scenarios."""
    return db.query(Scenario).all()


@router.get("/{scenario_id}", response_model=ScenarioSchema)
def get_scenario(scenario_id: str, db: Session = Depends(get_db)):
    """Return one scenario by id."""
    scenario = db.query(Scenario).filter(Scenario.id == scenario_id).first()
    if not scenario:
        raise HTTPException(status_code=404, detail="Scenario not found")
    return scenario


@router.post("/{scenario_id}/submit", response_model=SubmissionResponse)
def submit_decision(scenario_id: str, request: SubmissionRequest, db: Session = Depends(get_db)):
    """Evaluate the user's decision and return feedback."""
    scenario = db.query(Scenario).filter(Scenario.id == scenario_id).first()
    if not scenario:
        raise HTTPException(status_code=404, detail="Scenario not found")

    decision = Decision(
        id=str(uuid4()),
        scenario_id=scenario.id,
        selected_action=request.selected_action,
        identified_cues=request.identified_cues or [],
    )
    db.add(decision)
    db.commit()

    return generate_feedback(scenario, request)

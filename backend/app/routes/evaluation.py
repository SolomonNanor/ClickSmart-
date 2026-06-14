from fastapi import APIRouter

from app.services.scoring_service import evaluation_questions, score_evaluation
from app.schemas import EvaluationResponse, EvaluationScoreRequest

router = APIRouter(prefix="/evaluation", tags=["evaluation"])


@router.get("/questions")
def get_questions():
    """Return the evaluation matrix questions for the prototype."""
    return evaluation_questions()


@router.post("/score", response_model=EvaluationResponse)
def score_matrix(payload: EvaluationScoreRequest):
    """Score the evaluation matrix and return a percentage + level."""
    return score_evaluation(payload)

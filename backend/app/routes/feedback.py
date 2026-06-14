from fastapi import APIRouter

router = APIRouter(prefix="/feedback", tags=["feedback"])


@router.get("")
def feedback_home():
    """Feedback is returned during scenario submission."""
    return {"message": "Feedback generation is handled during scenario submission."}

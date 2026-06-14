from typing import Dict, List, Optional

from pydantic import BaseModel, ConfigDict, Field


class ApiSchema(BaseModel):
    """Base schema that lets FastAPI read SQLAlchemy model attributes."""

    model_config = ConfigDict(from_attributes=True)


class ModuleSchema(ApiSchema):
    id: str
    title: str
    description: str
    content: str
    key_points: List[str]
    estimated_time: str
    category: str


class CueSchema(ApiSchema):
    cue_type: str
    cue_text: str
    explanation: str
    diagnostic_level: int = Field(..., ge=0, le=4)


class ScenarioSchema(ApiSchema):
    id: str
    title: str
    message_subject: str
    sender: str
    message_body: str
    scenario_type: str
    is_phishing: bool
    phishing_cues: List[CueSchema]
    correct_action: str
    explanation: str


class SubmissionRequest(BaseModel):
    selected_action: str = Field(..., description="User decision for the scenario")
    identified_cues: Optional[List[str]] = None


class SubmissionResponse(BaseModel):
    is_correct: bool
    missed_cues: List[str]
    identified_cues: List[str]
    explanation: str
    safer_action_advice: str


class EvaluationQuestion(BaseModel):
    id: str
    name: str
    rationale: str


class EvaluationScoreItem(EvaluationQuestion):
    score: int = Field(..., ge=0, le=4)


class EvaluationScoreRequest(BaseModel):
    areas: Dict[str, List[EvaluationScoreItem]]


class EvaluationResponse(BaseModel):
    total_score: int
    total_possible: int
    percentage: float
    level: str
    color: str
    areas: Dict[str, List[EvaluationScoreItem]]

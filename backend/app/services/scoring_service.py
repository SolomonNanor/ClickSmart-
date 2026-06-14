from app.schemas import EvaluationScoreRequest


def evaluation_questions():
    """Return evaluation matrix questions and the 0-4 scoring scale."""
    return {
        "areas": {
            "Usable Security": [
                {"id": "us-clear-guidance", "name": "Clear guidance", "rationale": "The system gives simple next steps."},
                {"id": "us-low-friction", "name": "Low friction", "rationale": "The experience supports quick decisions without confusion."},
                {"id": "us-actionable-feedback", "name": "Actionable feedback", "rationale": "Feedback explains what to do next safely."},
            ],
            "Cognitive Support": [
                {"id": "cs-memory-support", "name": "Memory support", "rationale": "The interface helps users remember what to check."},
                {"id": "cs-confidence", "name": "Confidence support", "rationale": "The flow supports learner confidence without overload."},
                {"id": "cs-short-lessons", "name": "Short lessons", "rationale": "Learning content is divided into manageable microlearning units."},
            ],
            "Cue-Diagnosticity": [
                {"id": "cd-cue-clarity", "name": "Cue clarity", "rationale": "Each phishing cue is easy to interpret."},
                {"id": "cd-diagnostic-strength", "name": "Diagnostic strength", "rationale": "The cues help distinguish phishing from legitimate messages."},
                {"id": "cd-missed-cues", "name": "Missed cue feedback", "rationale": "The system shows important cues the learner did not identify."},
            ],
        },
        "scale": {
            0: "Not supported",
            1: "Weakly supported",
            2: "Partly supported",
            3: "Mostly supported",
            4: "Strongly supported",
        },
    }


def score_evaluation(payload: EvaluationScoreRequest):
    """Score indicators, convert the total to a percentage, and assign a level."""
    total_points = 0
    total_possible = 0

    for indicators in payload.areas.values():
        for item in indicators:
            total_points += item.score
            total_possible += 4

    percentage = round((total_points / total_possible) * 100, 2) if total_possible else 0.0

    if percentage >= 80:
        level = "High"
        color = "Green"
    elif percentage >= 60:
        level = "Moderate"
        color = "Yellow"
    elif percentage >= 40:
        level = "Low"
        color = "Orange"
    else:
        level = "Very Low"
        color = "Red"

    return {
        "total_score": total_points,
        "total_possible": total_possible,
        "percentage": percentage,
        "level": level,
        "color": color,
        "areas": payload.areas,
    }

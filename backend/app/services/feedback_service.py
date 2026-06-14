from app.schemas import SubmissionRequest


def _normalise(value: str) -> str:
    """Make user-entered cues easier to compare with stored cue text."""
    return value.strip().lower()


def _decision_is_correct(is_phishing: bool, selected_action: str) -> bool:
    """Check common beginner-friendly action labels from the frontend or API."""
    action = _normalise(selected_action)

    phishing_actions = ["report", "do not click", "don't click", "ignore", "verify", "block"]
    safe_actions = ["open", "continue", "safe", "legitimate", "official app", "official website", "verify"]

    if is_phishing:
        return any(option in action for option in phishing_actions)

    return any(option in action for option in safe_actions) and "report" not in action


def generate_feedback(scenario, request: SubmissionRequest):
    """Generate human-friendly feedback using scenario cues and the user's answer."""
    stored_cues = scenario.phishing_cues or []
    selected_cues = {_normalise(cue) for cue in request.identified_cues or []}

    expected_cues = {
        _normalise(cue["cue_text"]): cue["cue_text"]
        for cue in stored_cues
        if cue.get("cue_text") and cue.get("diagnostic_level", 0) >= 2
    }
    cue_types = {
        _normalise(cue["cue_type"]): cue["cue_text"]
        for cue in stored_cues
        if cue.get("cue_type") and cue.get("diagnostic_level", 0) >= 2
    }

    identified_cues = []
    for selected in selected_cues:
        if selected in expected_cues:
            identified_cues.append(expected_cues[selected])
        elif selected in cue_types:
            identified_cues.append(cue_types[selected])

    identified_cues = sorted(set(identified_cues))
    missed_cues = sorted(set(expected_cues.values()) - set(identified_cues)) if scenario.is_phishing else []
    is_correct = _decision_is_correct(scenario.is_phishing, request.selected_action)

    explanation = scenario.explanation
    safer_action_advice = (
        "Report the message, do not click its links, and verify the request through an official channel."
        if scenario.is_phishing
        else "Continue through the official app or website, and avoid entering sensitive details from message links."
    )

    return {
        "is_correct": is_correct,
        "missed_cues": missed_cues,
        "identified_cues": identified_cues,
        "explanation": explanation,
        "safer_action_advice": safer_action_advice,
    }

import os

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./clicksmart.db")

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()


def get_db():
    """Yield a database session for each request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def seed_initial_data():
    """Insert the initial learning content and scenarios."""
    from app.models import Module, Scenario

    db = SessionLocal()
    try:
        modules = [
            Module(
                id="mod-1",
                title="Spotting Suspicious Links",
                description="A short lesson about how phishing emails trick users into clicking unsafe links.",
                content=(
                    "Phishing messages often create urgency, use unexpected links, and copy familiar "
                    "brands. Before clicking, slow down and compare the visible link, sender, and message "
                    "context with what you expected to receive."
                ),
                key_points=["Check the sender", "Hover before you click", "Verify through the real website"],
                estimated_time="5 min",
                category="Foundation",
            ),
            Module(
                id="mod-2",
                title="Reading the Sender Carefully",
                description="Learn why sender details matter in phishing awareness.",
                content=(
                    "Attackers often use look-alike domains, free email accounts, or subtle spelling changes "
                    "to sound trusted. The sender name alone is not enough; the full email address matters."
                ),
                key_points=["Look for small spelling changes", "Confirm the domain", "Use official contact routes"],
                estimated_time="4 min",
                category="Sender Analysis",
            ),
            Module(
                id="mod-3",
                title="Recognising Pressure Tactics",
                description="Understand how urgency and fear can reduce careful decision-making.",
                content=(
                    "A message that threatens account closure, payment loss, or disciplinary action is trying "
                    "to push you into a fast response. Treat pressure as a cue to pause and verify."
                ),
                key_points=["Pause when a message feels urgent", "Do not use links in suspicious messages", "Report uncertainty"],
                estimated_time="4 min",
                category="Cognitive Support",
            ),
        ]

        scenarios = [
            Scenario(
                id="sc-1",
                title="Urgent Payroll Update",
                message_subject="Action required: payroll update today",
                sender="payroll@payrol1-support.com",
                message_body="Your payroll portal requires immediate verification. Click here to avoid account lockout.",
                scenario_type="Email",
                is_phishing=True,
                phishing_cues=[
                    {"cue_type": "Urgency", "cue_text": "immediate verification", "explanation": "The message creates pressure so the user acts quickly.", "diagnostic_level": 3},
                    {"cue_type": "Suspicious domain", "cue_text": "payrol1-support.com", "explanation": "The domain uses the number 1 instead of the letter l.", "diagnostic_level": 4},
                    {"cue_type": "Threat", "cue_text": "avoid account lockout", "explanation": "Threats are common in phishing because they increase anxiety.", "diagnostic_level": 3},
                ],
                correct_action="Do not click the link. Report the message and contact payroll through the official website.",
                explanation="This email combines urgency, a look-alike domain, and a threat of account lockout.",
            ),
            Scenario(
                id="sc-2",
                title="Bank Security Alert",
                message_subject="Security alert: verify your banking details",
                sender="security@yourbank.example",
                message_body="We detected unusual activity. Please login through your banking app to review your account.",
                scenario_type="Email",
                is_phishing=False,
                phishing_cues=[
                    {"cue_type": "Official channel", "cue_text": "banking app", "explanation": "The message directs the user to an official channel instead of a suspicious link.", "diagnostic_level": 1},
                ],
                correct_action="Open the bank's official app or website directly rather than following message links.",
                explanation="This message is lower risk because it points users to an official app, but careful verification is still appropriate.",
            ),
            Scenario(
                id="sc-3",
                title="Shared Document Request",
                message_subject="Document shared with you: Dissertation payment schedule",
                sender="research-office@university-support.net",
                message_body="A private document has been shared with you. Sign in with your university password to view it.",
                scenario_type="Email",
                is_phishing=True,
                phishing_cues=[
                    {"cue_type": "Unexpected attachment/link", "cue_text": "private document", "explanation": "Unexpected shared documents should be verified before opening.", "diagnostic_level": 3},
                    {"cue_type": "Credential request", "cue_text": "university password", "explanation": "Requests for passwords outside the official login flow are highly suspicious.", "diagnostic_level": 4},
                    {"cue_type": "Suspicious domain", "cue_text": "university-support.net", "explanation": "The sender does not use the official university domain.", "diagnostic_level": 4},
                ],
                correct_action="Do not enter credentials. Report the message and access documents through the official university portal.",
                explanation="This message asks for credentials through a non-official domain, which is a strong phishing signal.",
            ),
        ]

        for module in modules:
            existing_module = db.query(Module).filter(Module.id == module.id).first()
            if existing_module:
                existing_module.title = module.title
                existing_module.description = module.description
                existing_module.content = module.content
                existing_module.key_points = module.key_points
                existing_module.estimated_time = module.estimated_time
                existing_module.category = module.category
            else:
                db.add(module)

        for scenario in scenarios:
            existing_scenario = db.query(Scenario).filter(Scenario.id == scenario.id).first()
            if existing_scenario:
                existing_scenario.title = scenario.title
                existing_scenario.message_subject = scenario.message_subject
                existing_scenario.sender = scenario.sender
                existing_scenario.message_body = scenario.message_body
                existing_scenario.scenario_type = scenario.scenario_type
                existing_scenario.is_phishing = scenario.is_phishing
                existing_scenario.phishing_cues = scenario.phishing_cues
                existing_scenario.correct_action = scenario.correct_action
                existing_scenario.explanation = scenario.explanation
            else:
                db.add(scenario)

        db.commit()
    finally:
        db.close()

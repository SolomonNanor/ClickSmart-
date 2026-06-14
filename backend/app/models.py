from sqlalchemy import Column, String, Boolean, Text, JSON, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base


class Module(Base):
    __tablename__ = "modules"

    id = Column(String, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    key_points = Column(JSON, nullable=False, default=list)
    estimated_time = Column(String, nullable=False)
    category = Column(String, nullable=False)


class Scenario(Base):
    __tablename__ = "scenarios"

    id = Column(String, primary_key=True, index=True)
    title = Column(String, nullable=False)
    message_subject = Column(String, nullable=False)
    sender = Column(String, nullable=False)
    message_body = Column(Text, nullable=False)
    scenario_type = Column(String, nullable=False)
    is_phishing = Column(Boolean, nullable=False, default=True)
    phishing_cues = Column(JSON, nullable=False, default=list)
    correct_action = Column(Text, nullable=False)
    explanation = Column(Text, nullable=False)

    decisions = relationship("Decision", back_populates="scenario")


class Decision(Base):
    __tablename__ = "decisions"

    id = Column(String, primary_key=True, index=True)
    scenario_id = Column(String, ForeignKey("scenarios.id"), nullable=False)
    selected_action = Column(String, nullable=False)
    identified_cues = Column(JSON, nullable=False, default=list)
    scenario = relationship("Scenario", back_populates="decisions")

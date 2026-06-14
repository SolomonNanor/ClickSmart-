from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine, seed_initial_data
from app.routes import modules, scenarios, feedback, evaluation

app = FastAPI(title="ClickSmart Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)
seed_initial_data()

app.include_router(modules.router, prefix="/api")
app.include_router(scenarios.router, prefix="/api")
app.include_router(feedback.router, prefix="/api")
app.include_router(evaluation.router, prefix="/api")

@app.get("/api/health")
def health_check():
    """Simple health endpoint for local development."""
    return {"status": "ok", "message": "ClickSmart backend is running"}

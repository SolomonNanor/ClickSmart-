# ClickSmart Backend

FastAPI backend for the ClickSmart phishing awareness prototype.

## Stack

- FastAPI
- SQLite for development
- SQLAlchemy ORM
- Pydantic schemas

## Run

From this directory:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8001 --reload
```

## API

- `GET /api/health`
- `GET /api/modules`
- `GET /api/modules/{module_id}`
- `GET /api/scenarios`
- `GET /api/scenarios/{scenario_id}`
- `POST /api/scenarios/{scenario_id}/submit`
- `GET /api/evaluation/questions`
- `POST /api/evaluation/score`

## Data

The backend seeds sample modules, scenarios, and evaluation content for development.

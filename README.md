# ClickSmart-

MSc Cyber Security dissertation project focused on microlearning-based phishing awareness and framework-based evaluation.

ClickSmart is a dissertation prototype for phishing awareness learning. It combines short lessons, simulated phishing scenarios, learner feedback, and an evaluation matrix for usable security, cognitive support, and cue-diagnosticity.

## Project Structure

- `frontend/` Next.js 16 + TypeScript + Tailwind CSS
- `backend/` FastAPI + SQLite + SQLAlchemy

## Run Locally

### Quick start (recommended)

The `setup.sh` script installs every dependency (root, frontend, and the
backend Python virtual environment) and then starts both servers:

```bash
./setup.sh
```

Other modes:

```bash
./setup.sh --install   # install dependencies only
./setup.sh --run       # start both servers (dependencies already installed)
```

It needs `node`, `npm`, `python3`, and `curl`. If the system is missing the
`python3-venv` package, the script bootstraps `pip` automatically.

### Manual steps

Install the root tooling, the frontend dependencies, and the backend
environment first:

```bash
npm install
npm --prefix frontend install
python3 -m venv backend/.venv
backend/.venv/bin/python -m pip install -r backend/requirements.txt
```

Then from the repository root:

```bash
npm run dev
```

The root dev command starts both apps with `concurrently`.

- Frontend: `http://127.0.0.1:3500`
- Backend: `http://127.0.0.1:8001`

## Frontend

The frontend includes:

- Landing page
- Session start page
- Dashboard
- Learning modules list and detail pages
- Phishing scenarios list and detail pages
- Feedback page
- Evaluation matrix page

## Backend

The backend exposes:

- `GET /api/health`
- `GET /api/modules`
- `GET /api/modules/{module_id}`
- `GET /api/scenarios`
- `GET /api/scenarios/{scenario_id}`
- `POST /api/scenarios/{scenario_id}/submit`
- `GET /api/evaluation/questions`
- `POST /api/evaluation/score`

## Notes

- The frontend uses local content if the backend is unavailable.
- Theme support is built in with a light default and a dark toggle.
- Mobile layouts are supported across the main screens.

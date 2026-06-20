#!/usr/bin/env bash
#
# ClickSmart local setup + run script.
#
# Installs all dependencies (root, frontend, backend) and then starts both
# the FastAPI backend and the Next.js frontend together.
#
# Usage:
#   ./setup.sh            install dependencies, then run both servers
#   ./setup.sh --install  install dependencies only (do not start servers)
#   ./setup.sh --run      start both servers (assumes dependencies installed)
#
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

GREEN="\033[0;32m"; YELLOW="\033[0;33m"; RED="\033[0;31m"; NC="\033[0m"
info() { printf "${GREEN}==>${NC} %s\n" "$1"; }
warn() { printf "${YELLOW}==>${NC} %s\n" "$1"; }
err()  { printf "${RED}==>${NC} %s\n" "$1" >&2; }

require() {
  command -v "$1" >/dev/null 2>&1 || { err "Required command '$1' not found. Please install it and retry."; exit 1; }
}

install_root() {
  info "Installing root tooling (concurrently)..."
  npm install
}

install_frontend() {
  info "Installing frontend dependencies (Next.js)..."
  ( cd frontend && npm install )
}

install_backend() {
  info "Setting up backend virtual environment (FastAPI)..."
  if [ ! -x "backend/.venv/bin/python" ]; then
    # Try the normal way first; fall back to manual pip bootstrap when the
    # system is missing the python3-venv / ensurepip package.
    if ! python3 -m venv backend/.venv 2>/dev/null; then
      warn "ensurepip unavailable; creating venv without pip and bootstrapping it."
      rm -rf backend/.venv
      python3 -m venv --without-pip backend/.venv
    fi
    if [ ! -x "backend/.venv/bin/pip" ] && ! backend/.venv/bin/python -m pip --version >/dev/null 2>&1; then
      info "Bootstrapping pip via get-pip.py..."
      tmp_getpip="$(mktemp)"
      curl -sS https://bootstrap.pypa.io/get-pip.py -o "$tmp_getpip"
      backend/.venv/bin/python "$tmp_getpip"
      rm -f "$tmp_getpip"
    fi
  fi
  info "Installing backend dependencies..."
  backend/.venv/bin/python -m pip install --upgrade pip >/dev/null
  backend/.venv/bin/python -m pip install -r backend/requirements.txt
}

run_all() {
  info "Starting ClickSmart..."
  info "  Backend:  http://127.0.0.1:8001"
  info "  Frontend: http://127.0.0.1:3500"
  info "Press Ctrl+C to stop both."
  npm run dev
}

MODE="${1:-all}"

require node
require npm
require python3
require curl

case "$MODE" in
  --install|install)
    install_root; install_frontend; install_backend
    info "Dependencies installed. Run './setup.sh --run' to start the app."
    ;;
  --run|run)
    run_all
    ;;
  all|"")
    install_root; install_frontend; install_backend; run_all
    ;;
  -h|--help)
    sed -n '2,14p' "$0"
    ;;
  *)
    err "Unknown option: $MODE"; sed -n '2,14p' "$0"; exit 1
    ;;
esac

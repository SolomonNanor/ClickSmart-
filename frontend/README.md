# ClickSmart Frontend

This is the rebuilt ClickSmart frontend for the phishing awareness prototype.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- App Router

## Run

From the repository root:

```bash
npm install
npm run dev
```

Or from this folder:

```bash
npm install
npm run dev
```

The frontend runs on `http://127.0.0.1:3500` in local development.

## Pages

- `/` landing page
- `/session` session start page
- `/dashboard` overview page
- `/modules` learning modules
- `/modules/[moduleId]` single module page
- `/scenarios` phishing scenarios
- `/scenarios/[scenarioId]` single scenario decision page
- `/feedback` scenario feedback page
- `/evaluation` evaluation matrix page

## Notes

- The frontend supports light and dark themes.
- Layouts are responsive for mobile and desktop screens.
- If the backend is unavailable, the frontend uses local content.

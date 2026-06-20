# ClickSmart — Gap Analysis

This document lists all outstanding gaps that need to be worked on, derived from:

- `project.md` (project plan)
- `supervisor_explanation.md` and `ClickSmart_Project_Explanation.docx`
- `Supervisor Meeting Outcome (1).docx` (supervisor instructions)
- Reviewer comments embedded in `ClickSmart - Solomon Nanor(2509769)_wFeedback (1).docx`
- The actual codebase under `frontend/` and `backend/`

Gaps are grouped by source and priority. Highest-priority items are marked **[P1]**.

---

## A. Supervisor meeting action items

Explicit instructions from the supervisor meeting. None are currently reflected in the code or write-up.

1. **[P1] Per-user evaluation matrix.** Build a matrix **per user** (User 1, User 2, User 3…) scored against the three constructs, with columns: Usable Security · Cognitive · Cue-Diagnosticity · Score(%) · Level. The current `backend/app/services/scoring_service.py` and `frontend/components/EvaluationMatrixForm.tsx` score the **system once**, with **no user identity** — this needs restructuring to per-user rows.
2. **Level must be score + colour code.** Partially done (backend returns `level` + `color`: Green/Yellow/Orange/Red), but it must be surfaced in the write-up table form per user, not just per system.
3. **[P1] Reference column.** Every matrix row must cite the theory/reference that supports it. Not present in code (`rationale` exists but no references) or in the dissertation table.
4. **Per-matrix justification.** For each matrix per user, state: (a) reason for choosing the matrix, (b) purpose, (c) the outcome. Missing entirely.
5. **Per-module scoring.** Each aspect of the platform (each module) must be individually evaluated/scored. Current matrix is generic, not module-by-module.
6. **[P1] Move Design Science Research section.** Remove DSR (Ch 2, §2.10) and insert it into the Methodology chapter (Ch 3).
7. **Reduce the Chapter 2 summary to 3 paragraphs.**
8. **Diagrams.** Rebuild in PowerPoint for legibility; use a consistent colour scheme across all diagrams; ensure clarity.
9. **Check the Table of Contents** and all subtitles/subheadings for consistency.
10. **Chapter preambles.** Before each chapter's introduction, add 2–3 lines linking back to the previous chapter (these chapters don't need a formal "Introduction" section — the preamble replaces it).
11. **Link each subtitle's summary to the main body** of its chapter.
12. **Total thesis word count target: 20,000 words** — track against this.

---

## B. Dissertation write-up gaps (reviewer comments)

13. **Shorten the title** (currently too long).
14. **Abstract.** Keep as a single paragraph; finalise at the end.
15. **Add government statistics and concrete examples** of phishing impact.
16. **Add missing references** throughout (several "include references here" flags).
17. **Empirical evidence throughout the literature review.** Repeatedly flagged: report what other researchers found empirically on (a) cognitive biases, (b) awareness-training effectiveness, (c) usable security in relation to phishing. Currently too assertion-based.
18. **Add more cognitive biases**, e.g. optimism bias, with linked example studies.
19. **Add System 1 / System 2 (dual-process) thinking** to the decision-making discussion.
20. **Bold the passages** where literature is tied to design choices.
21. **Use the word "microlearning" explicitly** where the text currently just says "learning" — and show where it fits in the framework diagram.
22. **Italicise the system name** *ClickSmart* throughout.
23. **Captions.** Make caption text smaller than body text; use a distinct colour for the main DSR phases in the framework diagram.
24. **Framework diagram flow.** Top and bottom halves don't integrate; process lines don't connect. Redraw so phases flow logically.
25. **Avoid famous logos / branding** in synthetic phishing emails (focus on microlearning potential, not real brands). Code uses safe placeholders (e.g. `yourbank.example`), but check all dissertation screenshots/scenarios for real logos.
26. **Explain the matrix columns** in prose.
27. **Put the wide matrix table in landscape** to fit the added reference/detail columns.

---

## C. System / artefact build gaps (code vs. plan)

28. **[P1] Tech-stack divergence from supervisor-facing docs.** `project.md` and the Project Explanation promise **React + Vite + browser local storage + JSON files, no complex backend**. The repo is actually **Next.js 16 + FastAPI + SQLite + SQLAlchemy** (`README.md`). Either reconcile the build back to the documented stack or update the dissertation/explanation to justify the change — currently they contradict each other.
29. **[P1] Evaluation feature doesn't match the supervisor's model.** Needs to capture user identity, per-construct scores, references, and per-module evaluation (see A1–A5). Biggest functional gap.
30. **Thin content.** Only 3 modules and 3 scenarios (`frontend/lib/mock-data.ts`). The plan lists 8 core cues (suspicious sender, deceptive URL, urgency, sensitive-info requests, unexpected attachments, spelling/grammar, brand impersonation, context mismatch); scenarios should cover all of them, including at least one legitimate (non-phishing) message to test diagnosticity.
31. **Decision-support prompts.** The plan calls for explicit step-by-step "inspect sender / link / urgency / attachment" prompts; verify these exist as a guided flow, not just a verdict form.
32. **Reflection / progress summary persistence.** Confirm progress tracking and a reflection summary screen are implemented (plan requires it; README mentions local fallback only).
33. **Cognitive walkthrough artefacts.** The evaluation plan needs documented task flows for the walkthrough; no walkthrough scaffolding/task list exists in the artefact yet.

---

## D. Cross-cutting consistency

34. **Three "source of truth" docs disagree.** `project.md`, `supervisor_explanation.md`, and the .docx describe the *planned* stack/features, while the README + code describe a *different* built state. Pick one and align all of them.
35. **Demonstration evidence.** The plan requires screenshots + step-by-step demo documentation (Week 10). None present yet.

---

## Priority summary

Start with the items where a supervisor instruction and a functional gap overlap:

- **#1 / #29** — rebuild the evaluation matrix as per-user, per-module, with references, score(%) and colour-coded level.
- **#6** — relocate the DSR section into the Methodology chapter.
- **#28 / #34** — resolve the documented-vs-built tech-stack contradiction.

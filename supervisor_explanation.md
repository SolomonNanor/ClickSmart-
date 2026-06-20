# ClickSmart Project Explanation for Supervisor

## Project Overview

ClickSmart is a proposed web-based phishing awareness artefact designed to help users improve their ability to detect phishing attempts. The project focuses on the human side of cybersecurity, particularly the cognitive and behavioural vulnerabilities that allow phishing attacks to remain effective. These vulnerabilities include trust in authority, urgency pressure, limited attention to technical cues, and difficulty judging whether a message is legitimate or malicious.

The artefact will use microlearning and interactive phishing scenarios to support users in recognising phishing cues and making safer security decisions. The project will be carried out using a Design Science Research (DSR) methodology, which is appropriate because the study involves designing, developing, demonstrating, and evaluating an artefact that addresses a practical problem.

## Research Problem

Phishing remains one of the most common and successful cyber threats because it exploits human judgement rather than only technical weaknesses. Traditional phishing awareness training can be passive, infrequent, or too general. As a result, users may understand phishing in theory but still fail to recognise warning signs during realistic decision-making situations.

ClickSmart responds to this problem by offering a focused, interactive prototype that helps users practise identifying phishing cues in realistic scenarios. Rather than relying only on long-form training, the system will use short learning modules, scenario-based practice, and immediate feedback.

## Aim

The aim of this project is to design, develop, demonstrate, and evaluate a microlearning-based phishing awareness artefact that supports phishing detection, secure decision-making, and phishing cue recognition.

## Research Questions

RQ1: How can a microlearning-based phishing awareness artefact be designed to support phishing detection?

RQ2: To what extent does the ClickSmart artefact align with usable security principles for supporting secure user behaviour?

RQ3: How effectively does the ClickSmart artefact support user decision-making processes in phishing detection, based on cognitive walkthrough analysis?

RQ4: How well does the ClickSmart artefact support recognition of phishing cues based on cue-diagnosticity constructs?

## Methodology

The project will follow a Design Science Research methodology. This methodology provides a structured process for creating and evaluating an artefact in response to a real-world problem.

The study will begin with problem identification, focusing on the continued effectiveness of phishing attacks due to human cognitive and behavioural vulnerabilities. A literature review will then be conducted to examine phishing awareness approaches, microlearning, human-centred cybersecurity, usable security, cognitive walkthrough methods, and cue-diagnosticity theory.

The findings from the literature review will be used to define the objectives and requirements of the ClickSmart artefact. The artefact will then be designed and developed as a web-based prototype. After development, the system will be demonstrated using structured user interaction scenarios. Finally, the artefact will be evaluated using a framework-based evaluation approach.

## Planned Artefact

ClickSmart will be a web-based prototype containing several connected features:

1. A dashboard where users can access learning modules and phishing scenarios.
2. Short microlearning modules explaining phishing cues and safe inspection behaviour.
3. Realistic phishing scenarios, such as suspicious emails or messages.
4. Cue recognition activities where users identify suspicious elements in a message.
5. Decision-support prompts that encourage users to inspect sender details, links, urgency, attachments, and requests for sensitive information.
6. Immediate feedback explaining whether the message is legitimate or phishing and why.
7. A reflection or progress summary that shows learning outcomes and areas for improvement.

The prototype will not aim to be a fully deployed production system. Instead, it will be a functional research artefact suitable for demonstration and framework-based evaluation.

## How the Project Will Be Done

The project will be completed in stages, following the Design Science Research process. First, the problem and research scope will be refined by reviewing literature on phishing awareness, microlearning, usable security, cognitive walkthroughs, and phishing cue recognition. The literature review will be used to identify design requirements for the artefact.

Next, the ClickSmart prototype will be planned through user flows, screen designs, and scenario structures. The prototype will then be developed as a web application. The development work will begin with the main interface and navigation, followed by microlearning modules, phishing scenarios, cue selection interactions, decision-support prompts, and feedback screens.

After the prototype has been built, the system will be demonstrated using structured user interaction scenarios. These scenarios will show how a user moves from learning about phishing cues to applying that knowledge in simulated phishing detection tasks.

The final stage will evaluate the artefact using framework-based methods. The evaluation findings will be analysed and connected back to the research questions. The dissertation will then present the artefact, demonstration, evaluation results, limitations, and recommendations for future improvement.

## Technologies Used

The following technologies were used to build and document the ClickSmart artefact:

- HTML5: to structure the web pages and learning content.
- CSS3: to style the interface and ensure a clean, usable layout.
- JavaScript: to support interaction, scenario logic, cue selection, and feedback.
- React: to build the prototype as a reusable component-based web application.
- Next.js: as the React framework that provides routing, page structure, and the development and build environment for the prototype.
- TypeScript: to improve code reliability and make the application logic easier to maintain.
- Tailwind CSS: to support consistent, responsive styling.
- PostCSS and Autoprefixer: to process the Tailwind styles and apply them consistently across browsers.
- FastAPI (Python): to provide the backend API for learning modules, phishing scenarios, feedback, and evaluation scoring.
- Uvicorn: to run the FastAPI backend during development.
- SQLAlchemy: to define the data models and interact with the database.
- SQLite: as a lightweight database for storing modules, scenarios, feedback, and evaluation results.
- JSON: to exchange microlearning content, phishing scenarios, cues, and feedback data between the frontend and backend.
- Browser Local Storage: to keep simple prototype progress and theme settings on the client.
- Node.js and npm: to manage the frontend environment and project dependencies.
- Concurrently: to run the frontend and backend together during development.
- Git and GitHub: to support version control, backup, and development history.
- Visual Studio Code or Codex: to write, organise, and maintain the project code.
- Microsoft PowerPoint: to design all project diagrams so that the wording is clearly visible and every diagram shares the same appearance and colour scheme, as advised by the supervisor.
- Microsoft Word: to prepare supervisor-facing documents and dissertation material.
- Microsoft Excel or tables: to organise the evaluation matrices, heuristic findings, and cognitive walkthrough results.

The prototype uses a lightweight FastAPI and SQLite backend rather than a third-party service such as Firebase or Supabase. The frontend can also fall back to local content if the backend is unavailable, so the system remains demonstrable as a self-contained research artefact.

## Evaluation Approach

The evaluation is framework-based and is organised around a conceptual evaluation framework that brings together three constructs: Usable Security, Cognitive (cognitive walkthrough), and Cue-Diagnosticity. Following supervisor guidance, the outcome of the evaluation is presented as a matrix in which each user is assessed against these three constructs. For each user the matrix records a score for every construct, an overall Score (%), and a Level shown both as a band and as a colour code. Each construct is supported by an established analytical method with references, and the framework states the reason for choosing the construct, its purpose, and the outcome it produces.

### Conceptual Evaluation Framework

| Construct | Reason for choosing it | Purpose | Method and references | Supports |
|---|---|---|---|---|
| Usable Security | Phishing succeeds when security information is hard to notice or understand, so the interface must make secure behaviour usable. | Assess clarity of security information, navigation, visibility of cues, feedback quality, error prevention, and cognitive load. | Usable security heuristic evaluation (Nielsen, 1994; Whitten & Tygar, 1999; Yee, 2004). | RQ2 |
| Cognitive | Phishing detection is a decision-making task, so it is important to model how a user thinks and acts at each step. | Model whether a typical user knows what action to take, notices the right options, and interprets feedback correctly. | Cognitive walkthrough (Polson et al., 1992; Wharton et al., 1994). | RQ3 |
| Cue-Diagnosticity | Safe decisions depend on noticing and correctly interpreting phishing cues. | Assess whether phishing cues are visible, meaningful, and useful for telling phishing from legitimate messages. | Cue-diagnosticity and cue-processing constructs (Vishwanath et al., 2011; Wang et al., 2012). | RQ4 |

### Scoring and Levels

Each construct is scored as a percentage from its method (heuristic ratings, walkthrough pass/fail per step, and cue-recognition accuracy). The overall Score (%) is the average of the three construct scores, and the Level is assigned from that score using a colour-coded band:

| Level | Score range | Colour code | Meaning |
|---|---|---|---|
| High | 80–100% | Green | The artefact strongly supports the construct for this user. |
| Moderate | 60–79% | Yellow | The artefact provides good support; minor improvement is needed. |
| Low | 40–59% | Orange | The artefact provides partial support; clear improvement is needed. |
| Very Low | 0–39% | Red | The artefact provides weak support; significant improvement is needed. |

### Evaluation Matrix (per user)

The results are recorded in a matrix with one row per user, as advised by the supervisor. Each cell holds the construct score, and the final columns hold the overall Score (%) and the colour-coded Level.

| User | Usable Security | Cognitive | Cue-Diagnosticity | Score (%) | Level |
|---|---|---|---|---|---|
| User 1 | | | | | |
| User 2 | | | | | |
| User 3 | | | | | |
| … | | | | | |

Each matrix is accompanied by a written explanation that states why the construct was chosen for that evaluation, the purpose of the matrix, and the outcome (the score and the colour-coded level) for each user. These explanations link the matrix results back to RQ2, RQ3, and RQ4.

## Demonstration Plan

The demonstration will show how a user interacts with ClickSmart from start to finish. A typical demonstration scenario may include the following:

1. The user opens the dashboard.
2. The user completes a short microlearning module on phishing cues.
3. The user enters a phishing scenario.
4. The user inspects a suspicious message.
5. The user decides whether the message is legitimate or phishing.
6. The user identifies suspicious cues.
7. The system provides immediate feedback.
8. The user reviews a short reflection or progress summary.

Screenshots and step-by-step explanations will be used to document the demonstration in the dissertation.

## Expected Contributions

The project is expected to contribute:

- A practical web-based phishing awareness prototype.
- A microlearning structure for phishing detection education.
- A scenario-based approach to supporting phishing decision-making.
- An evaluation of the artefact using usable security heuristics.
- A cognitive walkthrough analysis of phishing detection tasks.
- A cue-diagnosticity assessment of phishing cue recognition support.

## Project Scope

The project will focus on designing, developing, demonstrating, and evaluating the ClickSmart prototype. It will not include large-scale experimentation, live phishing simulations against real users, or deployment within an organisation. The evaluation remains framework-based, but it is applied per user through the evaluation matrix, so each user is scored against the usable security, cognitive, and cue-diagnosticity constructs.

This scope keeps the project achievable within the dissertation timeframe while still allowing for meaningful artefact development and evaluation.

## Proposed Timeline

The project can be completed over a 12-week period:

| Week | Activity | Expected Output |
|---|---|---|
| 1 | Confirm project scope, research problem, aim, and research questions | Refined project proposal and confirmed research direction |
| 2 | Conduct literature review on phishing awareness and microlearning | Literature notes and key themes |
| 3 | Review usable security, cognitive walkthrough, and cue-diagnosticity literature | Evaluation framework notes |
| 4 | Define artefact objectives, functional requirements, and evaluation criteria | Requirements list and evaluation plan |
| 5 | Design user flows, screen structure, and phishing scenario format | Wireframes and scenario plan |
| 6 | Set up React, TypeScript, Vite, Tailwind CSS, and project structure | Working development environment |
| 7 | Build dashboard, navigation, and microlearning module pages | First working prototype version |
| 8 | Build phishing scenario simulation, cue selection, and decision-support prompts | Interactive phishing detection workflow |
| 9 | Build feedback screens, progress/reflection features, and sample scenario data | Complete prototype feature set |
| 10 | Demonstrate the prototype using structured interaction scenarios and screenshots | Demonstration documentation |
| 11 | Conduct heuristic evaluation, cognitive walkthrough, and cue-diagnosticity assessment | Evaluation tables and findings |
| 12 | Analyse findings, discuss limitations, and prepare dissertation write-up | Final evaluation discussion and dissertation material |

This timeline may be adjusted depending on supervisor feedback, technical issues, or dissertation submission requirements.

## Proposed Dissertation Structure

1. Introduction
2. Literature Review
3. Methodology
4. Artefact Design and Development
5. Demonstration
6. Evaluation
7. Discussion
8. Conclusion

## Supervisor Requirements for the Write-Up

The following instructions from the supervisor meeting are applied to the dissertation write-up:

- The thesis should total around 20,000 words.
- The conceptual framework for design and evaluation is presented as a per-user matrix (Usable Security, Cognitive, Cue-Diagnosticity), each with a reason for its use, a purpose, references, and an outcome shown as a score and a colour-coded level, presented in table form with explanations.
- All diagrams are designed in PowerPoint so the wording is clearly visible, and every diagram shares the same appearance and colour scheme.
- The Chapter 2 summary is reduced to three paragraphs.
- The table of contents, subtitles, and subheadings are checked for consistency.
- Each chapter begins with two or three lines about the previous chapter before its introduction.
- The summary of every subtitle links back to the main body of the chapter.
- Design Science Research (previously Chapter 2, section 2.10) is moved into the Methodology chapter (Chapter 3); this is reflected in the dissertation structure below.

## Summary

ClickSmart is designed as a human-centred phishing awareness artefact that uses microlearning, realistic scenarios, cue recognition, and decision-support feedback to improve phishing detection. The project is well suited to Design Science Research because it involves the creation and evaluation of a purposeful artefact. The framework-based evaluation will allow the project to assess usability, decision-making support, and phishing cue recognition without requiring user-based experimentation.

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

## Technologies to Be Used

The following technologies are proposed for building and documenting the ClickSmart artefact:

- HTML5: to structure the web pages and learning content.
- CSS3: to style the interface and ensure a clean, usable layout.
- JavaScript: to support interaction, scenario logic, cue selection, and feedback.
- React: to build the prototype as a reusable component-based web application.
- TypeScript: to improve code reliability and make the application logic easier to maintain.
- Vite: to provide a fast development environment for the React prototype.
- Tailwind CSS: to support consistent, responsive styling.
- Lucide React Icons: to provide clear interface icons for navigation and actions.
- Browser Local Storage: to save simple prototype progress without requiring a full backend.
- JSON: to store microlearning content, phishing scenarios, cues, and feedback data.
- Node.js and npm: to manage the development environment and project dependencies.
- Git and GitHub: to support version control, backup, and development history.
- Visual Studio Code or Codex: to write, organise, and maintain the project code.
- Microsoft Word: to prepare supervisor-facing documents and dissertation material.
- Microsoft Excel or tables: to organise evaluation matrices, heuristic findings, and cognitive walkthrough results.

The prototype will not require a complex backend unless the project scope changes. If later needed, Firebase or Supabase could be considered for authentication, database storage, or hosted progress tracking, but these are not required for the initial research artefact.

## Evaluation Approach

The evaluation will be framework-based rather than based on user experimentation. This approach is suitable for the project scope because it allows the artefact to be assessed systematically against established principles and analytical methods.

### Usable Security Heuristic Evaluation

This evaluation will assess whether the interface supports secure behaviour while remaining usable. It will consider areas such as clarity of security information, ease of navigation, visibility of important cues, feedback quality, error prevention, and cognitive load.

This will help answer RQ2.

### Cognitive Walkthrough

The cognitive walkthrough will model how a typical user might move through phishing detection tasks in the system. It will examine whether users are likely to understand what action to take, notice relevant options, interpret feedback correctly, and make secure decisions.

This will help answer RQ3.

### Cue-Diagnosticity Assessment

The cue-diagnosticity assessment will examine how effectively the artefact helps users recognise and interpret phishing cues. This includes cues such as sender address, suspicious links, urgency, requests for sensitive information, unexpected attachments, grammar issues, brand impersonation, and mismatch between message and context.

This will help answer RQ4.

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

The project will focus on designing, developing, demonstrating, and evaluating the ClickSmart prototype. It will not include large-scale user testing, live phishing simulations against real users, or deployment within an organisation. The evaluation will be analytical and framework-based.

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

## Summary

ClickSmart is designed as a human-centred phishing awareness artefact that uses microlearning, realistic scenarios, cue recognition, and decision-support feedback to improve phishing detection. The project is well suited to Design Science Research because it involves the creation and evaluation of a purposeful artefact. The framework-based evaluation will allow the project to assess usability, decision-making support, and phishing cue recognition without requiring user-based experimentation.

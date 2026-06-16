# ClickSmart

ClickSmart is a web-based Design Science Research artefact for phishing awareness. The project aims to support phishing detection through short microlearning activities, realistic phishing scenarios, cue recognition, and decision-support feedback.

## Project Purpose

Phishing attacks remain effective because users often make fast decisions under pressure, overlook warning signs, or lack practical experience identifying suspicious messages. ClickSmart is designed to address this problem by helping users practise phishing detection in a focused, interactive, and human-centred way.

## Research Questions

RQ1: How can a microlearning-based phishing awareness artefact be designed to support phishing detection?

RQ2: To what extent does the ClickSmart artefact align with usable security principles for supporting secure user behaviour?

RQ3: How effectively does the ClickSmart artefact support user decision-making processes in phishing detection, based on cognitive walkthrough analysis?

RQ4: How well does the ClickSmart artefact support recognition of phishing cues based on cue-diagnosticity constructs?

## Methodology

The project follows a Design Science Research (DSR) methodology:

1. Problem identification
2. Literature review
3. Definition of solution objectives
4. Artefact design and development
5. Demonstration
6. Framework-based evaluation
7. Analysis and dissertation reporting

The evaluation will be framework-based rather than user-experiment based. The artefact will be assessed using usable security heuristics, cognitive walkthrough analysis, and cue-diagnosticity constructs.

## Planned Artefact Features

- Dashboard showing available learning modules and scenario activities
- Short microlearning modules about phishing detection
- Realistic phishing scenarios, such as emails, SMS messages, or login prompts
- Cue recognition interactions where users identify suspicious message elements
- Decision-support prompts that guide users through safe inspection behaviour
- Immediate feedback explaining whether a message is safe or suspicious
- Reflection or progress summary showing completed activities and learning points

## Core Phishing Cues

ClickSmart should help users recognise cues such as:

- Suspicious sender address
- Mismatched or deceptive URL
- Urgency or pressure language
- Requests for sensitive information
- Unexpected attachments
- Spelling, grammar, or formatting issues
- Brand impersonation
- Message-context mismatch

## Suggested Technical Direction

The prototype will be implemented as a web application using the following core technologies:

- HTML5 for page and content structure
- CSS3 for layout and visual styling
- JavaScript and TypeScript for application logic
- React for component-based interface development
- Vite for the development environment
- Tailwind CSS for responsive styling
- Lucide React Icons for interface icons
- Browser local storage for simple progress tracking
- JSON files for microlearning content, phishing scenarios, cues, and feedback
- Node.js and npm for dependency management
- Git and GitHub for version control

The system should prioritise clarity, usability, and realistic interaction over unnecessary technical complexity.

Optional future technologies:

- Firebase or Supabase if authentication, database storage, or hosted progress tracking becomes necessary
- Microsoft Excel or spreadsheet tables for evaluation matrices
- Microsoft Word for dissertation and supervisor-facing documentation

## Suggested Pages or Views

- Dashboard
- Microlearning module page
- Scenario simulation page
- Cue selection page
- Feedback page
- Results or reflection page

## Evaluation Plan

### Usable Security Heuristic Evaluation

Assess the interface against usable security principles, including clarity, visibility of security information, feedback quality, error prevention, navigation, and cognitive load.

### Cognitive Walkthrough

Analyse whether a typical user can complete key phishing detection tasks, understand what action to take, notice relevant cues, interpret feedback, and recover from mistakes.

### Cue-Diagnosticity Assessment

Evaluate whether the system makes phishing cues visible, meaningful, and useful for distinguishing phishing messages from legitimate messages.

## Implementation Timeline

The project is planned over 12 weeks:

| Week | Focus | Output |
|---|---|---|
| 1 | Confirm scope, problem, aim, and research questions | Refined proposal |
| 2 | Review phishing awareness and microlearning literature | Literature notes |
| 3 | Review usable security, cognitive walkthrough, and cue-diagnosticity literature | Evaluation framework notes |
| 4 | Define requirements and evaluation criteria | Requirements and evaluation plan |
| 5 | Design user flows, screen structure, and scenario format | Wireframes and scenario plan |
| 6 | Set up React, TypeScript, Vite, and Tailwind CSS | Working project structure |
| 7 | Build dashboard and microlearning module pages | First prototype version |
| 8 | Build phishing scenarios, cue selection, and decision-support prompts | Interactive detection workflow |
| 9 | Build feedback, progress, and reflection features | Complete prototype features |
| 10 | Demonstrate the system with structured scenarios | Demonstration documentation |
| 11 | Conduct framework-based evaluation | Evaluation tables and findings |
| 12 | Analyse results and prepare dissertation content | Final write-up material |

## Expected Dissertation Outputs

- Problem statement and project justification
- Literature review
- Artefact objectives and requirements
- Prototype design and development documentation
- Demonstration scenarios with screenshots
- Heuristic evaluation table
- Cognitive walkthrough table
- Cue-diagnosticity evaluation matrix
- Discussion of strengths, limitations, and improvements

## Development Notes for Future Codex Sessions

- Keep the artefact focused on phishing awareness and decision support.
- Avoid adding features that do not support the research questions.
- Prioritise realistic scenarios and clear feedback.
- Keep the interface simple, accessible, and easy to evaluate.
- When implementing, document design decisions so they can be linked back to DSR objectives and evaluation criteria.

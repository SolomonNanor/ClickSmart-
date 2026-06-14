import type {
  EvaluationQuestionsResponse,
  EvaluationScoreRequest,
  EvaluationScoreResponse,
  Module,
  Scenario,
  SubmissionRequest,
  SubmissionResponse,
} from './types';

export const localModules: Module[] = [
  {
    id: 'mod-1',
    title: 'Spotting Suspicious Links',
    description: 'Learn how phishing emails use urgency and look-alike links to push unsafe clicks.',
    content:
      'Phishing messages often create urgency, use unexpected links, and copy familiar brands. Before clicking, slow down and compare the visible link, sender, and message context with what you expected to receive.',
    key_points: ['Check the sender', 'Hover before you click', 'Verify through the real website'],
    estimated_time: '5 min',
    category: 'Foundation',
  },
  {
    id: 'mod-2',
    title: 'Reading the Sender Carefully',
    description: 'Learn why sender details matter in phishing awareness.',
    content:
      'Attackers often use look-alike domains, free email accounts, or subtle spelling changes to sound trusted. The sender name alone is not enough; the full email address matters.',
    key_points: ['Look for small spelling changes', 'Confirm the domain', 'Use official contact routes'],
    estimated_time: '4 min',
    category: 'Sender Analysis',
  },
  {
    id: 'mod-3',
    title: 'Recognising Pressure Tactics',
    description: 'Understand how urgency and fear can reduce careful decision-making.',
    content:
      'A message that threatens account closure, payment loss, or disciplinary action is trying to push you into a fast response. Treat pressure as a cue to pause and verify.',
    key_points: ['Pause when a message feels urgent', 'Do not use links in suspicious messages', 'Report uncertainty'],
    estimated_time: '4 min',
    category: 'Cognitive Support',
  },
];

export const localScenarios: Scenario[] = [
  {
    id: 'sc-1',
    title: 'Urgent Payroll Update',
    message_subject: 'Action required: payroll update today',
    sender: 'payroll@payrol1-support.com',
    message_body: 'Your payroll portal requires immediate verification. Click here to avoid account lockout.',
    scenario_type: 'Email',
    is_phishing: true,
    phishing_cues: [
      {
        cue_type: 'Urgency',
        cue_text: 'immediate verification',
        explanation: 'The message creates pressure so the user acts quickly.',
        diagnostic_level: 3,
      },
      {
        cue_type: 'Suspicious domain',
        cue_text: 'payrol1-support.com',
        explanation: 'The domain uses the number 1 instead of the letter l.',
        diagnostic_level: 4,
      },
      {
        cue_type: 'Threat',
        cue_text: 'avoid account lockout',
        explanation: 'Threats are common in phishing because they increase anxiety.',
        diagnostic_level: 3,
      },
    ],
    correct_action: 'Do not click the link. Report the message and contact payroll through the official website.',
    explanation: 'This email combines urgency, a look-alike domain, and a threat of account lockout.',
  },
  {
    id: 'sc-2',
    title: 'Bank Security Alert',
    message_subject: 'Security alert: verify your banking details',
    sender: 'security@yourbank.example',
    message_body: 'We detected unusual activity. Please login through your banking app to review your account.',
    scenario_type: 'Email',
    is_phishing: false,
    phishing_cues: [
      {
        cue_type: 'Official channel',
        cue_text: 'banking app',
        explanation: 'The message directs the user to an official channel instead of a suspicious link.',
        diagnostic_level: 1,
      },
    ],
    correct_action: "Open the bank's official app or website directly rather than following message links.",
    explanation: 'This message is lower risk because it points users to an official app, but careful verification is still appropriate.',
  },
  {
    id: 'sc-3',
    title: 'Shared Document Request',
    message_subject: 'Document shared with you: Dissertation payment schedule',
    sender: 'research-office@university-support.net',
    message_body: 'A private document has been shared with you. Sign in with your university password to view it.',
    scenario_type: 'Email',
    is_phishing: true,
    phishing_cues: [
      {
        cue_type: 'Unexpected attachment/link',
        cue_text: 'private document',
        explanation: 'Unexpected shared documents should be verified before opening.',
        diagnostic_level: 3,
      },
      {
        cue_type: 'Credential request',
        cue_text: 'university password',
        explanation: 'Requests for passwords outside the official login flow are highly suspicious.',
        diagnostic_level: 4,
      },
      {
        cue_type: 'Suspicious domain',
        cue_text: 'university-support.net',
        explanation: 'The sender does not use the official university domain.',
        diagnostic_level: 4,
      },
    ],
    correct_action: 'Do not enter credentials. Report the message and access documents through the official university portal.',
    explanation: 'This message asks for credentials through a non-official domain, which is a strong phishing signal.',
  },
];

export const evaluationQuestions: EvaluationQuestionsResponse = {
  areas: {
    'Usable Security': [
      { id: 'us-clear-guidance', name: 'Clear guidance', rationale: 'The system gives simple next steps.' },
      { id: 'us-low-friction', name: 'Low friction', rationale: 'The experience supports quick decisions without confusion.' },
      { id: 'us-actionable-feedback', name: 'Actionable feedback', rationale: 'Feedback explains what to do next safely.' },
    ],
    'Cognitive Support': [
      { id: 'cs-memory-support', name: 'Memory support', rationale: 'The interface helps users remember what to check.' },
      { id: 'cs-confidence', name: 'Confidence support', rationale: 'The flow supports learner confidence without overload.' },
      { id: 'cs-short-lessons', name: 'Short lessons', rationale: 'Learning content is divided into manageable microlearning units.' },
    ],
    'Cue-Diagnosticity': [
      { id: 'cd-cue-clarity', name: 'Cue clarity', rationale: 'Each phishing cue is easy to interpret.' },
      { id: 'cd-diagnostic-strength', name: 'Diagnostic strength', rationale: 'The cues help distinguish phishing from legitimate messages.' },
      { id: 'cd-missed-cues', name: 'Missed cue feedback', rationale: 'The system shows important cues the learner did not identify.' },
    ],
  },
  scale: {
    0: 'Not supported',
    1: 'Weakly supported',
    2: 'Partly supported',
    3: 'Mostly supported',
    4: 'Strongly supported',
  },
};

export function evaluateSubmissionLocally(scenarioId: string, request: SubmissionRequest): SubmissionResponse {
  const scenario = localScenarios.find((item) => item.id === scenarioId);

  if (!scenario) {
    return {
      is_correct: false,
      missed_cues: [],
      identified_cues: request.identified_cues ?? [],
      explanation: 'Scenario not found.',
      safer_action_advice: 'Return to the scenarios page and choose another message.',
    };
  }

  const selectedAction = request.selected_action.trim().toLowerCase();
  const identified = (request.identified_cues ?? []).map((value) => value.trim().toLowerCase());

  const phishingActions = ['report', 'do not click', "don't click", 'ignore', 'block', 'verify'];
  const safeActions = ['open official app', 'official website', 'verify through official channel', 'continue safely'];
  const actionIsCorrect = scenario.is_phishing
    ? phishingActions.some((item) => selectedAction.includes(item))
    : safeActions.some((item) => selectedAction.includes(item));

  const expectedCues = scenario.phishing_cues
    .filter((cue) => cue.diagnostic_level >= 2)
    .map((cue) => cue.cue_text.toLowerCase());

  const recognized = scenario.phishing_cues
    .map((cue) => cue.cue_text)
    .filter((cue) => identified.includes(cue.toLowerCase()));

  const missed = scenario.is_phishing
    ? scenario.phishing_cues.filter((cue) => expectedCues.includes(cue.cue_text.toLowerCase()) && !identified.includes(cue.cue_text.toLowerCase())).map((cue) => cue.cue_text)
    : [];

  return {
    is_correct: actionIsCorrect,
    missed_cues: missed,
    identified_cues: recognized,
    explanation: scenario.explanation,
    safer_action_advice: scenario.is_phishing
      ? 'Report the message, do not click its links, and verify the request through an official channel.'
      : 'Continue through the official app or website, and avoid entering sensitive details from message links.',
  };
}

export function scoreEvaluationLocally(payload: EvaluationScoreRequest) {
  let total_score = 0;
  let total_possible = 0;

  Object.values(payload.areas).forEach((group) => {
    group.forEach((item) => {
      total_score += item.score;
      total_possible += 4;
    });
  });

  const percentage = total_possible ? Math.round((total_score / total_possible) * 100) : 0;

  let level = 'Very Low';
  let color = 'Red';
  if (percentage >= 80) {
    level = 'High';
    color = 'Green';
  } else if (percentage >= 60) {
    level = 'Moderate';
    color = 'Yellow';
  } else if (percentage >= 40) {
    level = 'Low';
    color = 'Orange';
  }

  return {
    total_score,
    total_possible,
    percentage,
    level,
    color,
    areas: payload.areas,
  } satisfies EvaluationScoreResponse;
}

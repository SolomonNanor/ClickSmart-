export type Cue = {
  cue_type: string;
  cue_text: string;
  explanation: string;
  diagnostic_level: number;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  content: string;
  key_points: string[];
  estimated_time: string;
  category: string;
};

export type Scenario = {
  id: string;
  title: string;
  message_subject: string;
  sender: string;
  message_body: string;
  scenario_type: string;
  is_phishing: boolean;
  phishing_cues: Cue[];
  correct_action: string;
  explanation: string;
};

export type SubmissionRequest = {
  selected_action: string;
  identified_cues?: string[];
};

export type SubmissionResponse = {
  is_correct: boolean;
  missed_cues: string[];
  identified_cues: string[];
  explanation: string;
  safer_action_advice: string;
};

export type EvaluationQuestion = {
  id: string;
  name: string;
  rationale: string;
};

export type EvaluationQuestionsResponse = {
  areas: Record<string, EvaluationQuestion[]>;
  scale: Record<string, string>;
};

export type EvaluationScoreItem = EvaluationQuestion & {
  score: number;
};

export type EvaluationScoreRequest = {
  areas: Record<string, EvaluationScoreItem[]>;
};

export type EvaluationScoreResponse = {
  total_score: number;
  total_possible: number;
  percentage: number;
  level: string;
  color: string;
  areas: Record<string, EvaluationScoreItem[]>;
};

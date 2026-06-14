import { evaluationQuestions, evaluateSubmissionLocally, localModules, localScenarios, scoreEvaluationLocally } from './mock-data';
import type {
  EvaluationQuestionsResponse,
  EvaluationScoreRequest,
  EvaluationScoreResponse,
  Module,
  Scenario,
  SubmissionRequest,
  SubmissionResponse,
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:8001/api';

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: 'no-store',
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getHealth() {
  try {
    return await requestJson<{ status: string; message: string }>('/health');
  } catch {
    return { status: 'offline', message: 'Backend unavailable' };
  }
}

export async function getModules(): Promise<Module[]> {
  try {
    return await requestJson<Module[]>('/modules');
  } catch {
    return localModules;
  }
}

export async function getModule(moduleId: string): Promise<Module | null> {
  try {
    return await requestJson<Module>(`/modules/${moduleId}`);
  } catch {
    return localModules.find((module) => module.id === moduleId) ?? null;
  }
}

export async function getScenarios(): Promise<Scenario[]> {
  try {
    return await requestJson<Scenario[]>('/scenarios');
  } catch {
    return localScenarios;
  }
}

export async function getScenario(scenarioId: string): Promise<Scenario | null> {
  try {
    return await requestJson<Scenario>(`/scenarios/${scenarioId}`);
  } catch {
    return localScenarios.find((scenario) => scenario.id === scenarioId) ?? null;
  }
}

export async function submitScenarioDecision(scenarioId: string, payload: SubmissionRequest): Promise<SubmissionResponse> {
  try {
    return await requestJson<SubmissionResponse>(`/scenarios/${scenarioId}/submit`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch {
    return evaluateSubmissionLocally(scenarioId, payload);
  }
}

export async function getEvaluationQuestions(): Promise<EvaluationQuestionsResponse> {
  try {
    return await requestJson<EvaluationQuestionsResponse>('/evaluation/questions');
  } catch {
    return evaluationQuestions;
  }
}

export async function submitEvaluationScore(payload: EvaluationScoreRequest): Promise<EvaluationScoreResponse> {
  try {
    return await requestJson<EvaluationScoreResponse>('/evaluation/score', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  } catch {
    return scoreEvaluationLocally(payload);
  }
}

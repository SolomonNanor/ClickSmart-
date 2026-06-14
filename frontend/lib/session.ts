const LEARNER_KEY = 'clicksmart-learner-name';
const THEME_KEY = 'clicksmart-theme';
const FEEDBACK_KEY = 'clicksmart-last-feedback';

export function readLearnerName() {
  if (typeof window === 'undefined') return 'Learner';
  return window.localStorage.getItem(LEARNER_KEY) || 'Learner';
}

export function writeLearnerName(name: string) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LEARNER_KEY, name);
}

export function readTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function writeTheme(theme: 'light' | 'dark') {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(THEME_KEY, theme);
  document.documentElement.dataset.theme = theme;
}

export function writeFeedback(payload: unknown) {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(FEEDBACK_KEY, JSON.stringify(payload));
}

export function readFeedback<T>() {
  if (typeof window === 'undefined') return null;
  const raw = window.sessionStorage.getItem(FEEDBACK_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

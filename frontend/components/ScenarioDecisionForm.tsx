'use client';

import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { submitScenarioDecision } from '@/lib/api';
import { writeFeedback } from '@/lib/session';
import type { Scenario } from '@/lib/types';

const phishingActions = [
  'Do not click the link',
  'Report the message',
  'Verify through an official channel',
];

const safeActions = [
  'Open the official app or website',
  'Continue with the request',
  'Verify through an official channel',
];

export default function ScenarioDecisionForm({ scenario }: { scenario: Scenario }) {
  const router = useRouter();
  const actionOptions = useMemo(() => (scenario.is_phishing ? phishingActions : safeActions), [scenario.is_phishing]);
  const [selectedAction, setSelectedAction] = useState(actionOptions[0]);
  const [selectedCues, setSelectedCues] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function toggleCue(cueText: string) {
    setSelectedCues((current) =>
      current.includes(cueText) ? current.filter((item) => item !== cueText) : [...current, cueText]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await submitScenarioDecision(scenario.id, {
        selected_action: selectedAction,
        identified_cues: selectedCues,
      });

      writeFeedback({ scenario, result, selectedAction, selectedCues });
      router.push('/feedback');
    } catch {
      setError('Something went wrong while checking the decision.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="stack">
      <div className="stack-2">
        <p className="text-sm font-semibold app-heading">Choose an action</p>
        <div className="grid gap-2 sm:grid-cols-3">
          {actionOptions.map((option) => (
            <label key={option} className="cursor-pointer rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-3 text-sm">
              <input
                className="mr-2 align-middle"
                type="radio"
                name="selectedAction"
                value={option}
                checked={selectedAction === option}
                onChange={() => setSelectedAction(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="stack-2">
        <p className="text-sm font-semibold app-heading">Which cues did you notice?</p>
        <div className="grid gap-2">
          {scenario.phishing_cues.map((cue) => (
            <label key={cue.cue_text} className="flex items-start gap-3 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-3 text-sm">
              <input
                className="mt-1"
                type="checkbox"
                checked={selectedCues.includes(cue.cue_text)}
                onChange={() => toggleCue(cue.cue_text)}
              />
              <span>
                <span className="font-semibold app-heading">{cue.cue_type}: </span>
                <span className="app-muted">{cue.cue_text}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {error ? <p className="text-sm font-semibold" style={{ color: 'var(--danger)' }}>{error}</p> : null}

      <div>
        <button type="submit" className="app-btn-primary" disabled={loading}>
          {loading ? 'Checking...' : 'Submit decision'}
        </button>
      </div>
    </form>
  );
}

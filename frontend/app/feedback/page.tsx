'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import { readFeedback } from '@/lib/session';

type StoredFeedback = {
  scenario: {
    title: string;
    message_subject: string;
    sender: string;
  };
  result: {
    is_correct: boolean;
    missed_cues: string[];
    identified_cues: string[];
    explanation: string;
    safer_action_advice: string;
  };
};

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<StoredFeedback | null>(null);

  useEffect(() => {
    setFeedback(readFeedback<StoredFeedback>());
  }, []);

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader
          eyebrow="Feedback"
          title="Decision feedback"
          description="This page shows the result of your last scenario submission."
        />

        {feedback ? (
          <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            <Panel className="space-y-4">
              <div className={`app-chip w-fit ${feedback.result.is_correct ? 'border-[color:var(--good)] text-[color:var(--good)]' : 'border-[color:var(--danger)] text-[color:var(--danger)]'}`}>
                {feedback.result.is_correct ? 'Correct' : 'Needs review'}
              </div>
              <div className="stack-2">
                <p className="text-xl font-semibold app-heading">{feedback.scenario.title}</p>
                <p className="app-muted">{feedback.scenario.message_subject}</p>
                <p className="app-muted">{feedback.scenario.sender}</p>
              </div>
              <div className="stack-2">
                <p className="text-sm font-semibold app-heading">Identified cues</p>
                <div className="flex flex-wrap gap-2">
                  {feedback.result.identified_cues.length ? feedback.result.identified_cues.map((cue) => (
                    <span key={cue} className="app-chip">{cue}</span>
                  )) : <span className="app-muted">No cues captured yet.</span>}
                </div>
              </div>
              <div className="stack-2">
                <p className="text-sm font-semibold app-heading">Missed cues</p>
                <div className="flex flex-wrap gap-2">
                  {feedback.result.missed_cues.length ? feedback.result.missed_cues.map((cue) => (
                    <span key={cue} className="app-chip">{cue}</span>
                  )) : <span className="app-muted">None</span>}
                </div>
              </div>
            </Panel>

            <Panel className="space-y-4">
              <div className="stack-2">
                <p className="text-sm font-semibold app-heading">Explanation</p>
                <p className="leading-7 app-muted">{feedback.result.explanation}</p>
              </div>
              <div className="stack-2">
                <p className="text-sm font-semibold app-heading">Safer action advice</p>
                <p className="leading-7 app-muted">{feedback.result.safer_action_advice}</p>
              </div>
              <Link href="/scenarios" className="app-btn-secondary w-full">
                Try another scenario
              </Link>
            </Panel>
          </div>
        ) : (
          <Panel className="space-y-4">
            <p className="leading-7 app-muted">Submit a scenario decision first, then come back here to review feedback.</p>
            <Link href="/scenarios" className="app-btn-primary w-fit">
              Open scenarios
            </Link>
          </Panel>
        )}
      </div>
    </AppPage>
  );
}

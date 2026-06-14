'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import { readLearnerName, writeLearnerName } from '@/lib/session';

export default function SessionPage() {
  const router = useRouter();
  const [name, setName] = useState('Learner');

  useEffect(() => {
    setName(readLearnerName());
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    writeLearnerName(name.trim() || 'Learner');
    router.push('/dashboard');
  }

  return (
    <AppPage>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Session start"
          title="Set up a learner session."
          description="Add a learner name, then move straight into modules and phishing scenarios."
        />

        <Panel className="space-y-5">
          <form onSubmit={handleSubmit} className="stack">
            <label className="stack-2">
              <span className="text-sm font-semibold app-heading">Learner name</span>
              <input
                className="app-input"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <span className="text-sm app-muted">Use any name for this session.</span>
            </label>
            <button type="submit" className="app-btn-primary">
              Start session
            </button>
          </form>
          <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4 text-sm leading-6 app-muted">
            The name is stored locally in your browser so the dashboard can greet you during this session.
          </div>
        </Panel>
      </div>
    </AppPage>
  );
}

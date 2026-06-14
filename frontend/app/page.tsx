import Link from 'next/link';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';

const highlights = [
  'Microlearning lessons that focus on one phishing cue at a time',
  'Scenario practice with immediate feedback and safer action advice',
  'Evaluation scoring for usable security, cognitive support, and cue-diagnosticity',
];

export default function HomePage() {
  return (
    <AppPage>
      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="stack">
          <div className="inline-flex w-fit rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
            Dissertation prototype
          </div>
          <SectionHeader
            title="ClickSmart helps learners spot phishing cues and choose safer actions."
            description="This prototype combines short lessons, realistic phishing scenarios, fast feedback, and an evaluation matrix for usable security, cognitive support, and cue-diagnosticity."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/session" className="app-btn-primary">
              Start session
            </Link>
            <Link href="/dashboard" className="app-btn-secondary">
              Open dashboard
            </Link>
          </div>
          <div className="stack-3">
            {highlights.map((item) => (
              <div key={item} className="app-panel app-panel-soft p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
        </div>

        <Panel className="space-y-5">
          <div className="space-y-2">
            <p className="app-eyebrow">How it works</p>
            <h2 className="text-2xl font-semibold app-heading">A simple learning loop</h2>
          </div>
          <div className="stack">
            <div className="flex items-start gap-3 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
              <span className="app-badge shrink-0">1</span>
              <div>
                <p className="font-semibold app-heading">Start a session</p>
                <p className="mt-1 text-sm leading-6 app-muted">Enter a learner name and begin the flow.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
              <span className="app-badge shrink-0">2</span>
              <div>
                <p className="font-semibold app-heading">Review a module</p>
                <p className="mt-1 text-sm leading-6 app-muted">Read a short lesson that focuses on one cue.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
              <span className="app-badge shrink-0">3</span>
              <div>
                <p className="font-semibold app-heading">Judge a scenario</p>
                <p className="mt-1 text-sm leading-6 app-muted">Identify cues and choose a safer action.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
              <span className="app-badge shrink-0">4</span>
              <div>
                <p className="font-semibold app-heading">Read feedback and score the prototype</p>
                <p className="mt-1 text-sm leading-6 app-muted">Use the evaluation page to assess the learning design.</p>
              </div>
            </div>
          </div>
          <p className="text-sm app-muted">
            Need the backend too? The API runs at{' '}
            <a className="font-semibold text-[color:var(--accent)] underline-offset-4 hover:underline" href="http://127.0.0.1:8001/api/health">
              /api/health
            </a>{' '}
            during local development.
          </p>
        </Panel>
      </section>
    </AppPage>
  );
}

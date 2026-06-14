import Link from 'next/link';

import { AppPage, Panel, SectionHeader, StatCard } from '@/components/AppShell';
import { getHealth, getModules, getScenarios } from '@/lib/api';

export default async function DashboardPage() {
  const [health, modules, scenarios] = await Promise.all([getHealth(), getModules(), getScenarios()]);

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader
          eyebrow="Dashboard"
          title="Learner progress overview"
          description="Use this screen to jump between the microlearning module list, phishing scenarios, and evaluation matrix."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Backend" value={health.status} hint={health.message} />
          <StatCard label="Modules" value={String(modules.length)} hint="Short lessons available" />
          <StatCard label="Scenarios" value={String(scenarios.length)} hint="Practice messages to review" />
          <StatCard label="Flow" value="Ready" hint="Start with modules or scenarios" />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="space-y-4">
            <h2 className="text-xl font-semibold app-heading">Next steps</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/modules" className="app-btn-secondary">
                Open modules
              </Link>
              <Link href="/scenarios" className="app-btn-secondary">
                Open scenarios
              </Link>
              <Link href="/evaluation" className="app-btn-secondary">
                Score evaluation
              </Link>
              <Link href="/feedback" className="app-btn-secondary">
                Review feedback
              </Link>
            </div>
          </Panel>

          <Panel className="space-y-3">
            <h2 className="text-xl font-semibold app-heading">Why this matters</h2>
            <p className="leading-7 app-muted">
              ClickSmart is built for a dissertation prototype on phishing awareness. It keeps lessons short,
              scenarios realistic, and feedback immediate so learners can move from cue recognition to safer action.
            </p>
          </Panel>
        </div>
      </div>
    </AppPage>
  );
}

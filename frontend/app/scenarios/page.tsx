import Link from 'next/link';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import { getScenarios } from '@/lib/api';

export default async function ScenariosPage() {
  const scenarios = await getScenarios();

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader
          eyebrow="Practice"
          title="Phishing scenarios"
          description="Read the message, notice the cues, and choose the safest action."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {scenarios.map((scenario) => (
            <Panel key={scenario.id} className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="stack-2">
                  <p className="app-eyebrow">{scenario.scenario_type}</p>
                  <h2 className="text-xl font-semibold app-heading">{scenario.title}</h2>
                </div>
                <span className={`app-chip shrink-0 ${scenario.is_phishing ? 'border-[color:var(--danger)] text-[color:var(--danger)]' : ''}`}>
                  {scenario.is_phishing ? 'Phishing' : 'Legit'}
                </span>
              </div>
              <p className="leading-7 app-muted">{scenario.message_subject}</p>
              <Link href={`/scenarios/${scenario.id}`} className="app-btn-secondary w-full">
                Review scenario
              </Link>
            </Panel>
          ))}
        </div>
      </div>
    </AppPage>
  );
}

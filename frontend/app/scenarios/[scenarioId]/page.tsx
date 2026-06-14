import { notFound } from 'next/navigation';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import ScenarioDecisionForm from '@/components/ScenarioDecisionForm';
import { getScenario } from '@/lib/api';

export default async function ScenarioDetailPage({ params }: { params: { scenarioId: string } }) {
  const { scenarioId } = params;
  const scenario = await getScenario(scenarioId);

  if (!scenario) {
    notFound();
  }

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader
          eyebrow="Scenario decision"
          title={scenario.title}
          description="Look closely at the sender, subject, and message body before choosing an action."
        />

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Panel className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
                <p className="text-sm font-semibold app-heading">Subject</p>
                <p className="mt-1 leading-6 app-muted">{scenario.message_subject}</p>
              </div>
              <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
                <p className="text-sm font-semibold app-heading">Sender</p>
                <p className="mt-1 leading-6 app-muted">{scenario.sender}</p>
              </div>
            </div>
            <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
              <p className="text-sm font-semibold app-heading">Message</p>
              <p className="mt-2 leading-7 app-muted">{scenario.message_body}</p>
            </div>
            <div className="stack-2">
              <p className="text-sm font-semibold app-heading">Known cues in this scenario</p>
              <div className="flex flex-wrap gap-2">
                {scenario.phishing_cues.map((cue) => (
                  <span key={cue.cue_text} className="app-chip">
                    {cue.cue_type}: {cue.cue_text}
                  </span>
                ))}
              </div>
            </div>
          </Panel>

          <Panel className="space-y-4">
            <ScenarioDecisionForm scenario={scenario} />
          </Panel>
        </div>
      </div>
    </AppPage>
  );
}

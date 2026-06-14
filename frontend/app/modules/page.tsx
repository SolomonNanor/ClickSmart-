import Link from 'next/link';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import { getModules } from '@/lib/api';

export default async function ModulesPage() {
  const modules = await getModules();

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader
          eyebrow="Microlearning"
          title="Learning modules"
          description="Each module is short, readable, and focused on one phishing awareness idea."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Panel key={module.id} className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="stack-2">
                  <p className="app-eyebrow">{module.category}</p>
                  <h2 className="text-xl font-semibold app-heading">{module.title}</h2>
                </div>
                <span className="app-chip shrink-0">{module.estimated_time}</span>
              </div>
              <p className="leading-7 app-muted">{module.description}</p>
              <Link href={`/modules/${module.id}`} className="app-btn-secondary w-full">
                Open module
              </Link>
            </Panel>
          ))}
        </div>
      </div>
    </AppPage>
  );
}

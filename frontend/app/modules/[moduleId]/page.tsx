import Link from 'next/link';
import { notFound } from 'next/navigation';

import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import { getModule } from '@/lib/api';

export default async function ModuleDetailPage({ params }: { params: { moduleId: string } }) {
  const { moduleId } = params;
  const module = await getModule(moduleId);

  if (!module) {
    notFound();
  }

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader eyebrow="Module detail" title={module.title} description={module.description} />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="space-y-4">
            <p className="leading-7 app-muted">{module.content}</p>
            <div className="flex flex-wrap gap-2">
              {module.key_points.map((point) => (
                <span key={point} className="app-chip">
                  {point}
                </span>
              ))}
            </div>
          </Panel>

          <Panel className="space-y-4">
            <div className="grid gap-3 text-sm">
              <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
                <p className="font-semibold app-heading">Category</p>
                <p className="mt-1 app-muted">{module.category}</p>
              </div>
              <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
                <p className="font-semibold app-heading">Estimated time</p>
                <p className="mt-1 app-muted">{module.estimated_time}</p>
              </div>
            </div>
            <Link href="/modules" className="app-btn-secondary w-full">
              Back to modules
            </Link>
          </Panel>
        </div>
      </div>
    </AppPage>
  );
}

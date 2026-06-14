import Link from 'next/link';
import type { ReactNode } from 'react';

import NavBar from './NavBar';

export function AppPage({ children }: { children: ReactNode }) {
  return (
    <div className="app-page">
      <NavBar />
      <main className="app-shell py-5 sm:py-8 lg:py-10">{children}</main>
    </div>
  );
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`app-panel p-5 sm:p-6 ${className}`.trim()}>{children}</section>;
}

export function SectionHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <div className="stack-2">
      {eyebrow ? <p className="app-eyebrow">{eyebrow}</p> : null}
      <h1 className="text-2xl font-bold leading-tight app-heading sm:text-3xl">{title}</h1>
      {description ? <p className="max-w-3xl leading-7 app-muted">{description}</p> : null}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="app-panel p-4 sm:p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] app-muted">{label}</p>
      <p className="mt-2 text-2xl font-bold app-heading">{value}</p>
      {hint ? <p className="mt-2 text-sm leading-6 app-muted">{hint}</p> : null}
    </div>
  );
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-[color:var(--accent)] underline-offset-4 hover:underline">
      {children}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/session', label: 'Session' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/modules', label: 'Modules' },
  { href: '/scenarios', label: 'Scenarios' },
  { href: '/evaluation', label: 'Evaluation' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[color:var(--line)] bg-[color:var(--surface)]/95 backdrop-blur">
      <div className="app-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="app-badge">C</span>
          <span className="flex flex-col">
            <span className="font-bold app-heading">ClickSmart</span>
            <span className="text-xs app-muted">Phishing awareness prototype</span>
          </span>
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-2">
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`app-chip ${active ? 'border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

'use client';

import { useEffect, useState } from 'react';

import { readTheme, writeTheme } from '@/lib/session';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const initial = readTheme() as 'light' | 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function updateTheme(nextTheme: 'light' | 'dark') {
    setTheme(nextTheme);
    writeTheme(nextTheme);
  }

  return (
    <div className="inline-flex overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)]">
      <button
        type="button"
        onClick={() => updateTheme('light')}
        className={`min-h-10 px-3 py-2 text-sm font-semibold ${theme === 'light' ? 'bg-[color:var(--accent-soft)] text-[color:var(--accent)]' : 'app-muted'}`}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => updateTheme('dark')}
        className={`min-h-10 px-3 py-2 text-sm font-semibold ${theme === 'dark' ? 'bg-[color:var(--accent-soft)] text-[color:var(--accent)]' : 'app-muted'}`}
      >
        Dark
      </button>
    </div>
  );
}

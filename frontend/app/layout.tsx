import Script from 'next/script';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'ClickSmart',
  description: 'A phishing awareness microlearning prototype',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (() => {
            try {
              const key = 'clicksmart-theme';
              const stored = localStorage.getItem(key);
              const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = stored === 'dark' || stored === 'light' ? stored : preferred;
              document.documentElement.dataset.theme = theme;
            } catch (error) {}
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}

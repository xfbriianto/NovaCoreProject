import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NOVACORE - Digital Products for Modern Builders',
  description: 'Premium templates, AI orchestrators, SaaS boilerplates, and developer resources built for creators, startups, and modern innovators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

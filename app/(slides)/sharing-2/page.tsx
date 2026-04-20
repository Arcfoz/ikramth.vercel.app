import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const RevealPresentation = dynamic(
  () => import('./components/RevealPresentation'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen text-white"
        style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 100%)' }}>
        <div className="text-center">
          <div style={{
            width: '48px',
            height: '48px',
            border: '3px solid rgba(99, 102, 241, 0.2)',
            borderTopColor: '#6366f1',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px auto'
          }} />
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#94a3b8' }}>
            Loading presentation framework...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    )
  }
);

export const metadata: Metadata = {
  title: 'Integrasi N8N dengan OpenClaw - Self-Hosted Finance',
  description: 'Presentasi tentang integrasi N8N dengan OpenClaw sebagai pencatat keuangan pribadi menggunakan self-hosting infrastructure',
};

export default function Sharing2Page() {
  const slideUrl = '/slides/sharing-2.md';

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen text-white"
        style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 100%)' }}>
        <div className="text-center">
          <div style={{
            width: '48px',
            height: '48px',
            border: '3px solid rgba(99, 102, 241, 0.2)',
            borderTopColor: '#6366f1',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px auto'
          }} />
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#94a3b8' }}>
            Preparing presentation...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    }>
      <RevealPresentation slideUrl={slideUrl} />
    </Suspense>
  );
}

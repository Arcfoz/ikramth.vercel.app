import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with loading fallback to prevent SSR issues
const RevealPresentation = dynamic(
  () => import('./components/RevealPresentation'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading presentation framework...</p>
        </div>
      </div>
    )
  }
);

export default function SharingSessionPage() {
  // URL to the markdown file in the public folder
  const slideUrl = '/slides/sharing-1.md';

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Preparing presentation...</p>
        </div>
      </div>
    }>
      <RevealPresentation slideUrl={slideUrl} />
    </Suspense>
  );
}
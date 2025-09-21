'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealPresentationProps {
  slideUrl: string;
}

// Dynamic import for Reveal.js CSS with custom clean black styling
const RevealCSS = () => (
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/monokai.css" />
    <style>{`
      /* Clean Black UI Design using existing Sen font */
      .reveal {
        font-family: 'Sen', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #000000;
        color: #ffffff;
      }

      .reveal .slides {
        text-align: left;
      }

      .reveal .slides section {
        background: linear-gradient(135deg, #000000 0%, #111111 100%);
        border: 1px solid #333333;
        border-radius: 16px;
        padding: 60px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
        margin: 20px;
        backdrop-filter: blur(10px);
      }

      .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
        font-family: 'Sen', sans-serif;
        color: #ffffff;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.02em;
        margin-bottom: 32px;
      }

      .reveal h1 {
        font-size: 3.5rem;
        background: linear-gradient(45deg, #ffffff, #cccccc);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        margin-bottom: 48px;
      }

      .reveal h2 {
        font-size: 2.5rem;
        color: #f0f0f0;
        border-left: 4px solid #555555;
        padding-left: 20px;
        margin-bottom: 36px;
      }

      .reveal h3 {
        font-size: 1.8rem;
        color: #e0e0e0;
        margin-bottom: 28px;
      }

      .reveal p {
        font-size: 1.2rem;
        line-height: 1.6;
        color: #cccccc;
        margin-bottom: 24px;
      }

      .reveal ul, .reveal ol {
        margin-left: 0;
        padding-left: 0;
      }

      .reveal li {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #cccccc;
        margin-bottom: 12px;
        padding-left: 24px;
        position: relative;
      }

      .reveal ul li::before {
        content: "▸";
        color: #888888;
        position: absolute;
        left: 0;
        font-weight: bold;
      }

      .reveal ol li::before {
        content: counter(li) ".";
        counter-increment: li;
        color: #888888;
        position: absolute;
        left: 0;
        font-weight: bold;
      }

      .reveal ol {
        counter-reset: li;
      }

      .reveal pre {
        background: #1a1a1a;
        border: 1px solid #333333;
        border-radius: 12px;
        padding: 24px;
        margin: 24px 0;
        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      .reveal code {
        background: #1a1a1a;
        color: #f8f8f2;
        padding: 4px 8px;
        border-radius: 6px;
        font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
        font-size: 0.9em;
      }

      .reveal pre code {
        background: transparent;
        padding: 0;
        font-size: 1rem;
        line-height: 1.5;
      }

      .reveal blockquote {
        background: #111111;
        border-left: 4px solid #555555;
        padding: 20px 24px;
        margin: 24px 0;
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: #dddddd;
      }

      .reveal strong {
        color: #ffffff;
        font-weight: 700;
      }

      .reveal em {
        color: #dddddd;
        font-style: italic;
      }

      /* Controls */
      .reveal .controls {
        color: #ffffff;
        bottom: 40px;
        right: 40px;
      }

      .reveal .controls button {
        color: #888888;
        transition: color 0.3s ease;
      }

      .reveal .controls button:hover {
        color: #ffffff;
      }

      /* Progress bar */
      .reveal .progress {
        color: #ffffff;
        height: 3px;
      }

      .reveal .progress span {
        background: linear-gradient(90deg, #555555, #ffffff);
      }

      /* Slide number */
      .reveal .slide-number {
        color: #888888;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 14px;
      }

      /* Fragment animations */
      .reveal .fragment.highlight-current-blue {
        color: #74a9ff;
      }

      .reveal .fragment.highlight-red {
        color: #ff6b6b;
      }

      .reveal .fragment.highlight-green {
        color: #51cf66;
      }

      /* Center content for title slides */
      .reveal .slides section.center {
        text-align: center;
      }

      .reveal .slides section.center h1,
      .reveal .slides section.center h2,
      .reveal .slides section.center h3 {
        text-align: center;
      }

      /* Responsive design */
      @media (max-width: 768px) {
        .reveal .slides section {
          padding: 40px 30px;
          margin: 10px;
        }

        .reveal h1 {
          font-size: 2.5rem;
        }

        .reveal h2 {
          font-size: 2rem;
        }

        .reveal p, .reveal li {
          font-size: 1rem;
        }
      }
    `}</style>
  </>
);

export default function RevealPresentation({ slideUrl }: RevealPresentationProps) {
  const presentationRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const initializeReveal = async () => {
      try {
        if (!presentationRef.current) return;

        // Dynamic import of Reveal.js and plugins
        const [
          { default: Reveal },
          { default: RevealMarkdown },
          { default: RevealHighlight },
          { default: RevealNotes }
        ] = await Promise.all([
          import('reveal.js'),
          import('reveal.js/plugin/markdown/markdown'),
          import('reveal.js/plugin/highlight/highlight'),
          import('reveal.js/plugin/notes/notes')
        ]);

        if (!mounted) return;

        // Initialize new Reveal instance
        const deck = new Reveal(presentationRef.current, {
          // Core options
          controls: true,
          progress: true,
          center: true,
          hash: true,
          history: true,

          // Transition options
          transition: 'slide',
          transitionSpeed: 'default',
          backgroundTransition: 'slide',

          // Markdown configuration
          markdown: {
            separator: '^\r?\n---\r?\n$',
            verticalSeparator: '^\r?\n--\r?\n$',
            notesSeparator: 'Note:',
            smartypants: true
          },

          // Highlight configuration
          highlight: {
            highlightOnLoad: true
          },

          // Plugins
          plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
        });

        // Store deck reference for cleanup
        deckRef.current = deck;

        // Initialize and wait for ready
        await deck.initialize();

        if (mounted) {
          setIsLoaded(true);
        }

      } catch (err) {
        console.error('Failed to initialize Reveal.js:', err);
        if (mounted) {
          setError(`Failed to load presentation: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
      }
    };

    initializeReveal();

    // Cleanup function
    return () => {
      mounted = false;
      if (deckRef.current) {
        try {
          deckRef.current.destroy();
          deckRef.current = null;
        } catch (err) {
          console.warn('Error during cleanup:', err);
        }
      }
    };
  }, [slideUrl]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Presentation Load Error</h1>
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <RevealCSS />

      {!isLoaded && (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading presentation...</p>
          </div>
        </div>
      )}

      <div
        className={`reveal ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        ref={presentationRef}
      >
        <div className="slides">
          <section
            data-markdown={slideUrl}
            data-separator="^\r?\n---\r?\n$"
            data-separator-vertical="^\r?\n--\r?\n$"
            data-separator-notes="^Note:"
          >
          </section>
        </div>
      </div>
    </div>
  );
}
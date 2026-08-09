'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealPresentationProps {
  slideUrl: string;
}

const RevealCSS = () => (
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/monokai.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
    <style>{`
      /* ===== INDIGO + SLATE THEME ===== */

      :root {
        --accent: #6366f1;
        --accent-light: #a5b4fc;
        --accent-dim: #4f46e5;
        --bg-primary: #0d1117;
        --bg-secondary: #111827;
        --bg-card: rgba(17, 24, 39, 0.7);
        --border: rgba(99, 102, 241, 0.15);
        --text-primary: #e0e7ff;
        --text-secondary: #94a3b8;
        --text-muted: #475569;
        --glow: rgba(99, 102, 241, 0.3);
      }

      /* Base presentation */
      .reveal {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: var(--bg-primary);
        color: var(--text-primary);
      }

      /* Slides container */
      .reveal .slides section {
        text-align: left;
        box-sizing: border-box;
      }

      /* ===== TYPOGRAPHY ===== */
      
      .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.03em;
        margin-bottom: 28px;
      }

      .reveal h1 {
        font-size: 2.8rem;
        background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 60%, #4f46e5 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        margin-bottom: 12px;
      }

      .reveal h2 {
        font-size: 1.9rem;
        color: var(--text-primary);
        border-left: none;
        padding-left: 0;
        margin-bottom: 6px;
        position: relative;
      }

      .reveal h3 {
        font-size: 1.6rem;
        color: #e2e8f0;
        margin-bottom: 20px;
        font-weight: 700;
      }

      .reveal p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-secondary);
        margin-bottom: 14px;
        font-weight: 400;
      }

      /* ===== LISTS ===== */

      .reveal ul, .reveal ol {
        margin-left: 0;
        padding-left: 0;
      }

      .reveal li {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
        margin-bottom: 10px;
        padding-left: 28px;
        position: relative;
        list-style: none;
      }

      .reveal ul li::before {
        content: "▹";
        color: var(--accent);
        position: absolute;
        left: 0;
        font-weight: bold;
        font-size: 1.2em;
      }

      /* ===== CODE ===== */
      
      .reveal pre {
        background: rgba(5, 10, 20, 0.9);
        border: 1px solid rgba(99, 102, 241, 0.18);
        border-radius: 12px;
        padding: 24px;
        margin: 20px 0;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        position: relative;
        overflow: hidden;
      }

      .reveal pre::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent);
      }

      .reveal code {
        background: rgba(99, 102, 241, 0.08);
        color: #c7d2fe;
        padding: 3px 8px;
        border-radius: 6px;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.85em;
        border: 1px solid rgba(99, 102, 241, 0.15);
      }

      .reveal pre code {
        background: transparent;
        padding: 0;
        font-size: 0.9rem;
        line-height: 1.6;
        border: none;
        color: #e2e8f0;
      }

      /* ===== BLOCKQUOTE ===== */
      
      .reveal blockquote {
        background: rgba(99, 102, 241, 0.05);
        border-left: 3px solid var(--accent);
        padding: 20px 24px;
        margin: 20px 0;
        border-radius: 0 12px 12px 0;
        font-style: italic;
        color: #cbd5e1;
      }

      .reveal strong {
        color: var(--text-primary);
        font-weight: 700;
      }

      .reveal em {
        color: #cbd5e1;
        font-style: italic;
      }

      /* ===== TECH BADGES ===== */
      
      .tech-badge {
        display: inline-block;
        background: rgba(99, 102, 241, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.25);
        color: #a5b4fc !important;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 0.8rem !important;
        font-weight: 500;
        letter-spacing: 0.02em;
        transition: all 0.3s ease;
        backdrop-filter: blur(8px);
      }

      .tech-badge:hover {
        background: rgba(99, 102, 241, 0.18);
        border-color: rgba(99, 102, 241, 0.4);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
      }

      /* ===== IFRAMES ===== */
      
      .reveal iframe {
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      }

      /* ===== CONTROLS ===== */
      
      .reveal .controls {
        color: var(--accent);
        bottom: 32px;
        right: 32px;
      }

      .reveal .controls button {
        color: rgba(99, 102, 241, 0.45);
        transition: all 0.3s ease;
      }

      .reveal .controls button:hover {
        color: var(--accent);
        filter: drop-shadow(0 0 6px var(--glow));
      }

      /* ===== PROGRESS BAR ===== */

      .reveal .progress {
        height: 2px;
        background: rgba(99, 102, 241, 0.1);
      }

      .reveal .progress span {
        background: linear-gradient(90deg, #4f46e5, #6366f1, #a5b4fc);
      }

      /* ===== SLIDE NUMBER ===== */

      .reveal .slide-number {
        color: var(--text-muted);
        background: rgba(13, 17, 23, 0.85);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(99, 102, 241, 0.15);
        border-radius: 10px;
        padding: 6px 12px;
        font-size: 13px;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
      }

      /* ===== FRAGMENT ANIMATIONS ===== */
      
      .reveal .fragment {
        transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .reveal .fragment.visible {
        opacity: 1;
      }

      .reveal .fragment:not(.visible) {
        opacity: 0;
      }

      .reveal .fragment.highlight-current-blue {
        color: var(--accent-light);
      }

      .reveal .fragment.highlight-red {
        color: #fca5a5;
      }

      .reveal .fragment.highlight-green {
        color: #86efac;
      }

      /* ===== CUSTOM ANIMATIONS ===== */

      .req-card {
        transition: box-shadow 0.4s ease, filter 0.4s ease;
      }

      .req-card:hover {
        box-shadow: 0 12px 40px rgba(99, 102, 241, 0.12);
        filter: brightness(1.08);
      }

      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.2); }
        50% { box-shadow: 0 0 16px 2px rgba(99, 102, 241, 0.12); }
      }

      .reveal .slides section.present {
        animation: slideIn 0.5s ease;
      }

      @keyframes slideIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      /* ===== CENTERED SLIDES ===== */

      .reveal .slides section.center {
        text-align: center;
      }

      .reveal .slides section.center h1,
      .reveal .slides section.center h2,
      .reveal .slides section.center h3 {
        text-align: center;
      }

      .reveal .slides section.center h2 {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--text-secondary);
        margin-top: -4px;
        background: none;
        -webkit-text-fill-color: var(--text-secondary);
      }

      /* ===== RESPONSIVE ===== */
      
      @media (max-width: 768px) {
        .reveal .slides section {
          padding: 24px 20px;
          border-radius: 12px;
        }

        .reveal h1 { font-size: 1.8rem; }
        .reveal h2 { font-size: 1.4rem; }
        .reveal h3 { font-size: 1.1rem; }
        .reveal p, .reveal li { font-size: 0.9rem; }
      }

      /* ===== GRID IMAGE PLACEHOLDER ===== */
      
      .screenshot-placeholder {
        background: 
          linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(168,85,247,0.05) 100%),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            rgba(99,102,241,0.03) 20px,
            rgba(99,102,241,0.03) 21px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(99,102,241,0.03) 20px,
            rgba(99,102,241,0.03) 21px
          );
      }

      /* ===== FLOW STEPS ===== */
      .flow-step {
        transition: all 0.3s ease;
      }
      
      .flow-step:hover {
        transform: scale(1.05);
      }

      /* ===== SUBTLE PARTICLE EFFECT ===== */
      .reveal::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
          radial-gradient(1px 1px at 20% 30%, rgba(99, 102, 241, 0.2), transparent),
          radial-gradient(1px 1px at 75% 15%, rgba(165, 180, 252, 0.15), transparent),
          radial-gradient(1px 1px at 50% 80%, rgba(99, 102, 241, 0.1), transparent),
          radial-gradient(1px 1px at 85% 65%, rgba(79, 70, 229, 0.15), transparent);
        pointer-events: none;
        z-index: -1;
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

        const deck = new Reveal(presentationRef.current, {
          controls: true,
          progress: true,
          center: true,
          hash: true,
          history: true,
          slideNumber: 'c/t',

          width: 900,
          height: 600,
          margin: 0.06,
          minScale: 0.1,
          maxScale: 2.0,

          transition: 'slide',
          transitionSpeed: 'default',
          backgroundTransition: 'fade',

          markdown: {
            separator: '^\\r?\\n---\\r?\\n$',
            verticalSeparator: '^\\r?\\n--\\r?\\n$',
            notesSeparator: 'Note:',
            smartypants: true
          },

          highlight: {
            highlightOnLoad: true
          },

          plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
        });

        deckRef.current = deck;
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
      <div className="flex items-center justify-center min-h-screen text-white"
        style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0a0a2e 100%)' }}>
        <div className="text-center">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚠️</div>
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Presentation Load Error
          </h1>
          <p className="text-red-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl font-medium transition-all"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              fontFamily: 'Inter, sans-serif',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen" style={{ background: '#0a0a1a' }}>
      <RevealCSS />

      {!isLoaded && (
        <div className="flex items-center justify-center min-h-screen text-white"
          style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0a0a2e 100%)' }}>
          <div className="text-center">
            <div style={{
              width: '48px', height: '48px',
              border: '3px solid rgba(99, 102, 241, 0.2)',
              borderTopColor: '#6366f1', borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              margin: '0 auto 16px auto'
            }} />
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#94a3b8' }}>
              Loading presentation...
            </p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        </div>
      )}

      <div
        className={`reveal ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}
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

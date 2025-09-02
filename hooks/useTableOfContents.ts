"use client";

import { useState, useEffect } from 'react';

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function useTableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const extractHeadings = () => {
      const contentContainer = document.querySelector('.prose');
      if (!contentContainer) return;
      
      const headings = contentContainer.querySelectorAll('h2, h3, h4');
      const tocItems: TOCItem[] = Array.from(headings).map((heading) => {
        const button = heading.querySelector('button');
        const title = button?.textContent?.replace(/^#\s*/, '') || heading.textContent?.replace(/^#\s*/, '') || '';
        return {
          id: heading.id,
          title: title.trim(),
          level: parseInt(heading.tagName.charAt(1)),
        };
      });
      setToc(tocItems);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        const topMostEntry = visibleEntries.reduce((closest, entry) => {
          const currentTop = entry.boundingClientRect.top;
          const closestTop = closest.boundingClientRect.top;
          return currentTop < closestTop ? entry : closest;
        });
        
        setActiveId(topMostEntry.target.id);
      } else {
        const contentContainer = document.querySelector('.prose');
        if (contentContainer) {
          const firstHeading = contentContainer.querySelector('h2, h3, h4') as HTMLElement;
          if (firstHeading) {
            const firstHeadingTop = firstHeading.getBoundingClientRect().top;
            if (firstHeadingTop > 200) {
              setActiveId('');
            }
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-100px 0% -80% 0%',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const timer = setTimeout(() => {
      extractHeadings();
      const contentContainer = document.querySelector('.prose');
      if (contentContainer) {
        const headings = contentContainer.querySelectorAll('h2, h3, h4');
        headings.forEach((heading) => observer.observe(heading));
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 100;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return { toc, activeId, scrollToHeading };
}
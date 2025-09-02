"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      // If there's a hash, scroll to that element after content loads
      const targetId = hash.substring(1);
      
      const scrollToTarget = () => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      };

      // Wait for images and other content to load
      if (document.readyState === 'complete') {
        setTimeout(scrollToTarget, 300);
      } else {
        window.addEventListener('load', () => {
          setTimeout(scrollToTarget, 300);
        }, { once: true });
      }
    } else {
      // No hash, scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
}
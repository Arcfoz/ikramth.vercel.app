"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 bg-[#10132E] border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-[#1a1d35] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#000319] transition-all duration-200 z-50 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      onMouseLeave={(e) => e.currentTarget.blur()}
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTopButton;

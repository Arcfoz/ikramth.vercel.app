"use client";
import { slugify } from "@/lib/utils/slugify";

type HashScrollProps = {
  text: React.ReactNode;
  event?: () => void;
};

export default function HashScroll({ text, event }: HashScrollProps) {
  const hash = slugify(text);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (event) event();
    
    const target = document.getElementById(hash);
    
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 100;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${hash}`);
    }
  };
  
  return (
    <button
      onClick={handleClick}
      className="group relative w-full text-left hover:text-zinc-300 cursor-pointer"
    >
      <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:-left-5 lg:text-2xl">
        #
      </span>
      {text}
    </button>
  );
}

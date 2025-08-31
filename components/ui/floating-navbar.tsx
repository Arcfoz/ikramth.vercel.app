"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [initialRender, setInitialRender] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      // Always show navbar at the top of the page
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        // Show navbar when scrolling up, hide when scrolling down
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const pathname = usePathname();

  useEffect(() => {
    // Set initial visibility based on scroll position
    const handleInitialScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
      }
      setInitialRender(false);
    };

    // Run on mount
    handleInitialScroll();
    
    // Also listen for scroll events during initial render
    window.addEventListener('scroll', handleInitialScroll, { once: true });
    
    return () => {
      window.removeEventListener('scroll', handleInitialScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] xl:mx-auto mx-10 flex max-w-7xl items-center justify-center space-x-4 rounded-full border border-white/[0.2] bg-[#0D1329]/75  px-8 py-5 shadow-[0px_2px3px-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur supports-[backdrop-filter]:bg-[#0D1329]/75 ",
          className,
        )}
        style={{
          width: initialRender ? "100%" : "auto",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              `relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300 ${
                pathname === navItem.link ||
                (navItem.link !== "/" && pathname.includes(navItem.link))
                  ? "text-zinc-50 underline"
                  : ""
              }`,
            )}
          >
            <span className="text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
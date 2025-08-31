"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "scale" | "bounce" | "slide";
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = "default", children, className = "", ...props }, ref) => {
    const variants = {
      default: {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 },
      },
      scale: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      },
      bounce: {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { y: 0, scale: 1 },
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
      slide: {
        whileHover: { x: 2 },
        whileTap: { x: 0 },
        transition: { duration: 0.2 },
      },
    };

    return (
      <motion.button
        ref={ref}
        className={className}
        {...variants[variant]}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
"use client";

import { motion } from "framer-motion";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";

import type { UseScrollOptions } from "framer-motion";

interface UseScrollAnimationOptions {
  offset?: UseScrollOptions["offset"];
  outputRange?: number[];
}

export function useScrollAnimation({
  offset = ["start end", "end start"],
  outputRange = [0, 1],
}: UseScrollAnimationOptions = {}) {
  const { scrollYProgress } = useScroll({
    offset,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return { scrollYProgress, opacity, scale, y };
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
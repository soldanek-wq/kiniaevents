"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  /** Re-trigger on every scroll pass instead of animating once. */
  once?: boolean;
}

/**
 * Single entry point for scroll-triggered reveals across the site.
 * Keeps every section's animation timing consistent without repeating
 * the same initial/whileInView/viewport boilerplate in each component.
 *
 * Also respects prefers-reduced-motion at the animation-engine level
 * (not just via the global CSS override): when set, content appears
 * instantly instead of animating in.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-90px" }}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

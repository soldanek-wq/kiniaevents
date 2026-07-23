import type { Variants } from "framer-motion";

/**
 * Shared motion language for the whole site: quiet, editorial, and
 * consistent. Every section reveal draws from these three variants so
 * animation timing never has to be reasoned about twice.
 *
 * Timing is deliberately unhurried — luxury motion reads as calm, not
 * quick. No overshoot, no bounce; every curve settles rather than
 * springs. `prefers-reduced-motion` is enforced globally in
 * globals.css, and `Reveal` additionally checks `useReducedMotion()`
 * so users who prefer it see content appear instantly, not animate in.
 */
export const EASE = [0.16, 0.6, 0.14, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: EASE },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.4, delay, ease: EASE },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1.3, delay, ease: EASE },
  }),
};

export const staggerContainer = (stagger = 0.14, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

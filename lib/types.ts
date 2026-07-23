import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  /** Grid span used by the magazine-style layout, e.g. "lg:col-span-7" */
  span: string;
  aspect: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

/** A value/way-of-working card — replaces client testimonials, which
 * this brand deliberately does not use (no invented reviews or quotes). */
export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavItem {
  href: string;
  label: string;
}

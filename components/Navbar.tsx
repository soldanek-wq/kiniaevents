"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navItems } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-8xl items-center justify-between px-6 md:h-28 md:px-10">
        <a href="#top" className="group flex items-center gap-4">
          {/* Monogram enlarged ~55% over the previous size so the KN
              mark reads clearly at a glance, matching fashion-house
              navigation conventions. */}
          <span className="relative h-14 w-14 shrink-0 md:h-16 md:w-16">
            <Logo
              variant="on-dark"
              size={128}
              priority
              className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <Logo
              variant="on-light"
              size={128}
              priority
              className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span
              className={`font-display text-[1.05rem] tracking-[0.04em] transition-colors duration-500 ${
                scrolled ? "text-ink" : "text-ivory"
              }`}
            >
              Kinga Nagiewicz
            </span>
            <span
              className={`mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.3em] transition-colors duration-500 ${
                scrolled ? "text-ink/50" : "text-ivory/60"
              }`}
            >
              Events Atelier
            </span>
          </span>
        </a>

        <div
          className={`hidden items-center gap-10 text-[0.8rem] font-medium tracking-wide transition-colors duration-500 lg:flex ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          {navItems.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`hidden px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 lg:inline-flex ${
            scrolled ? "btn-solid" : "btn-outline"
          }`}
        >
          Umów konsultację
        </a>

        <button
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          className={`transition-colors duration-500 lg:hidden ${scrolled ? "text-ink" : "text-ivory"}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden border-t border-ink/10 bg-ivory lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8 text-base">
              {navItems.slice(1).map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-ink">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-solid px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em]"
              >
                Umów konsultację
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

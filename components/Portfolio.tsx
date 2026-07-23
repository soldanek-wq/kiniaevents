"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "./Reveal";
import AtelierLabel from "./AtelierLabel";
import { portfolioItems } from "@/lib/data";
import { EASE } from "@/lib/motion";
import type { PortfolioItem } from "@/lib/types";

export default function Portfolio() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = selected ? "hidden" : "";
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="portfolio" className="bg-ivory px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-dark">
                Realizacje
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 max-w-lg text-3xl leading-tight sm:text-4xl md:text-5xl">
                Wybrane realizacje.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-ink/60">
              Wybór wydarzeń, które zaprojektowaliśmy w ostatnich sezonach na terenie całej Polski.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {portfolioItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.08}
              className={`group relative cursor-pointer overflow-hidden ${item.span}`}
            >
              <button
                onClick={() => setSelected(item)}
                className={`relative block w-full ${item.aspect}`}
                aria-label={`Zobacz realizację: ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                <AtelierLabel text={item.category} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-6 pt-16">
                  <p className="text-left text-[10px] uppercase tracking-[0.22em] text-ivory/70">
                    {item.location}
                  </p>
                  <p className="font-display mt-1 text-left text-lg text-ivory md:text-xl">
                    {item.title}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-6 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
          >
            <button
              aria-label="Zamknij podgląd"
              className="absolute right-6 top-6 text-ivory/70 transition-colors hover:text-ivory"
              onClick={() => setSelected(null)}
            >
              <X className="h-7 w-7" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-center text-[10px] uppercase tracking-[0.22em] text-gold-light">
                {selected.category} — {selected.location}
              </p>
              <p className="font-display mt-2 text-center text-2xl text-ivory">{selected.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

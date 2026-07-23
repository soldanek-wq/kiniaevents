"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { trustPoints } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

/**
 * Replaces a conventional testimonials section. The brand does not use
 * client quotes or invented statistics — this states how the studio
 * works instead, which is honest and, done well, reads as more
 * premium than a wall of five-star cards.
 */
export default function Trust() {
  return (
    <section id="trust" className="bg-ivory px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-8xl">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-dark">
              Dlaczego my
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl">
              Dlaczego klienci powierzają nam swoje wydarzenia?
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="group border border-ink/10 bg-white px-8 py-11 transition-colors duration-500 hover:border-gold/40"
              >
                <Icon
                  className="h-6 w-6 text-gold transition-transform duration-500 ease-editorial group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
                <h3 className="font-display mt-8 text-lg">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

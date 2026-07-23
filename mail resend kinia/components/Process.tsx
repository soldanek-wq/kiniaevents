"use client";

import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-beige px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-8xl">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-dark">Współpraca</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl">
              Jak wygląda współpraca
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-24">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[1.05em] hidden h-px bg-ink/10 md:block"
          />
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08} className="relative">
                <span className="font-display block text-4xl italic text-gold/50 md:text-5xl">
                  {step.index}
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-wide text-ink md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { fadeUp, scaleIn } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-8xl items-center gap-20 lg:grid-cols-12 lg:gap-8">
        {/* Portrait column — intentionally not boxed: no card, no frame,
            no circle. The cutout carries its own real transparency, so
            the figure sits directly on the section's ivory background
            at its natural proportions, allowed to run slightly wider
            than its column on desktop. A soft drop-shadow (which
            follows the silhouette, not a rectangle) grounds it without
            looking like a pasted sticker. */}
        <Reveal
          variants={scaleIn}
          delay={0.1}
          className="relative order-2 lg:order-1 lg:col-span-6 lg:-ml-10"
        >
          <span
            aria-hidden
            className="font-display pointer-events-none absolute -top-10 left-1/2 -z-10 w-[140%] -translate-x-1/2 select-none text-center text-[5.5rem] italic leading-none tracking-tight text-ink/[0.06] sm:text-[8rem] md:-top-16 md:text-[11rem] lg:text-[13rem]"
          >
            ATELIER
          </span>

          <Image
            src="/images/about-kinga.png"
            alt="Kinga Nagiewicz, założycielka Events Atelier"
            width={1156}
            height={1972}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="mx-auto h-auto w-full max-w-md object-contain drop-shadow-[0_30px_50px_rgba(15,15,15,0.14)] md:max-w-lg lg:max-w-xl"
          />
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <Reveal>
            <h2 className="font-display max-w-md text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Poznaj założycielkę Events Atelier
            </h2>
          </Reveal>

          <Reveal delay={0.1} variants={fadeUp}>
            <div className="mt-9 max-w-xl space-y-5 text-base leading-relaxed text-ink/70 md:text-[1.05rem]">
              <p>
                Za każdą udaną realizacją stoi człowiek, który potrafi połączyć kreatywność z
                perfekcyjną organizacją.
              </p>
              <p>
                Kinga Nagiewicz jest założycielką Events Atelier — marki stworzonej z pasji do
                organizacji wydarzeń, które pozostają w pamięci uczestników na długo.
              </p>
              <p>
                Każdy projekt traktuje indywidualnie, wsłuchując się w potrzeby klienta i dbając
                o to, aby każdy element tworzył spójną, elegancką całość.
              </p>
              <p>
                Specjalizuje się w organizacji eventów firmowych, bankietów, gali, targów oraz
                przyjęć prywatnych na terenie całej Polski.
              </p>
              <p>
                Jej priorytetem jest nie tylko perfekcyjna organizacja, ale również stworzenie
                atmosfery, dzięki której klienci mogą skupić się na tym, co naprawdę ważne.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 border-l border-gold/40 pl-6">
              <p className="font-display text-xl italic leading-snug text-ink md:text-2xl">
                &bdquo;Każde wydarzenie to nowa historia. Moją rolą jest sprawić, aby została
                zapamiętana jako wyjątkowa.&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/45">— Kinga Nagiewicz</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


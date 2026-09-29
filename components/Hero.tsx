"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LogoLockup } from "./Logo";
import { fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <header id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <Image
        src="/images/hero.jpg"
        alt="Elegancko zastawiony stół przy świecach, przygotowany na wieczorne wydarzenie"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Layered overlay: a quiet vertical gradient for text legibility,
          not a flat dark veil — keeps the photography readable. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.35) 0%, rgba(15,15,15,0.15) 38%, rgba(15,15,15,0.68) 100%)",
        }}
      />

      <LogoLockup
        variant="on-dark"
        className="pointer-events-none absolute right-6 top-24 hidden w-64 opacity-[0.14] md:block lg:w-80"
      />

      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pb-24 pt-44 md:px-10 md:pb-32">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-gold-light"
        >
          EVENT DESIGN & PRODUCTION
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.15}
          variants={fadeUp}
          className="font-display mt-6 max-w-3xl text-4xl italic leading-[1.14] text-ivory sm:text-5xl md:text-6xl lg:text-[4.75rem]"
        >
          Tworzymy wyjątkowe doświadczenia dla marek, firm i ich gości.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.32}
          variants={fadeUp}
          className="mt-9 max-w-xl text-base font-normal leading-relaxed text-ivory/80 md:text-lg"
        >
        <span className="block">
  Od kameralnych przyjęć po duże wydarzenia - projektujemy i realizujemy wydarzenia dopasowane do ich charakteru, celu i odbiorców. Łączymy kreatywność, estetykę i perfekcyjną organizację, dbając o każdy element - od pierwszej koncepcji po finalną realizację.
</span>

<span className="mt-5 block">
  Organizujemy eventy firmowe, gale, konferencje, bankiety i targi, a także urodziny, jubileusze i wyjątkowe przyjęcia prywatne.
</span>

<strong className="mt-5 block font-semibold text-ivory">
  Ty masz powód do świętowania. My tworzymy oprawę.
</strong>

        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.5}
          variants={fadeUp}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="btn-solid-ivory px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
          >
            Umów konsultację
          </a>
          <a
            href="#services"
            className="btn-outline px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
          >
            Poznaj ofertę
          </a>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        custom={0.72}
        variants={fadeUp}
        className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/50">Przewiń</span>
        <div className="scroll-cue" />
      </motion.div>
    </header>
  );
}

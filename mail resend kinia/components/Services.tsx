"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-32 text-ivory md:px-10 md:py-40">
      <div className="mx-auto max-w-8xl">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-light">Oferta</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-5 text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
              Oferta dopasowana do Twojego wydarzenia
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-px overflow-hidden bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative bg-ink px-9 py-14 transition-colors duration-500 hover:bg-[#161513]"
              >
                <Icon
                  className="h-6 w-6 text-gold transition-transform duration-500 ease-editorial group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
                <h3 className="font-display mt-9 text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{service.description}</p>
                <div className="mt-9 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

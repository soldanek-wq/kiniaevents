"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";

const eventTypes = [
  "Event firmowy",
  "Bankiet lub gala",
  "Targi i wydarzenie branżowe",
  "Przyjęcie prywatne",
  "Inne",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: eventTypes[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Front-end only: wire this up to an API route (app/api/inquiry/route.ts)
    // or a form backend (Resend, Formspree) before taking this live.
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", eventDate: "", eventType: eventTypes[0], message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-ink px-6 py-32 text-ivory md:px-10 md:py-40">
      <div className="mx-auto max-w-8xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Logo variant="gold" size={96} className="h-12 w-12" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-9 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-light">
                Kontakt
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <h2 className="font-display mt-5 max-w-sm text-3xl leading-tight sm:text-4xl">
                Porozmawiajmy o Twoim wydarzeniu.
              </h2>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
                Bez względu na to, czy planujesz prestiżowy event firmowy, galę, targi czy
                wyjątkowe przyjęcie chętnie poznamy Twój pomysł i przygotujemy rozwiązanie
                dopasowane do Twoich potrzeb.
              </p>
            </Reveal>

            {/* Placeholder contact details — replace with the studio's
                real phone, email, and Instagram handle before launch. */}
            <Reveal delay={0.3} className="mt-12 space-y-6">
              <a
                href="tel:+48220000000"
                className="flex items-center gap-4 text-sm text-ivory/80 transition-colors hover:text-gold-light"
              >
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.25} />
                +48 889 085 820
              </a>
              <a
                href="mailto:kontakt@kinganagiewicz.pl"
                className="flex items-center gap-4 text-sm text-ivory/80 transition-colors hover:text-gold-light"
              >
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.25} />
                kontakt@kinganagiewicz.pl
              </a>
              <a
                href="https://www.instagram.com/kinganagiewicz.ateliers"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm text-ivory/80 transition-colors hover:text-gold-light"
              >
                <Instagram className="h-4 w-4 text-gold" strokeWidth={1.25} />
                @kinganagiewicz.ateliers
              </a>
            </Reveal>

            <Reveal delay={0.38} className="mt-10 overflow-hidden">
              <iframe
                title="Lokalizacja studia — Warszawa"
                src="https://www.google.com/maps?q=Warszawa,Polska&output=embed"
                className="h-56 w-full grayscale contrast-125 opacity-80"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="field-dark mt-2 w-full py-3 text-base"
                    placeholder="Jan Kowalski"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                    Adres e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="field-dark mt-2 w-full py-3 text-base"
                    placeholder="jan.kowalski@email.pl"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <label htmlFor="phone" className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="field-dark mt-2 w-full py-3 text-base"
                    placeholder="+48 600 000 000"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                    Data wydarzenia
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="field-dark mt-2 w-full py-3 text-base [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                    Rodzaj wydarzenia
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className="field-dark mt-2 w-full bg-transparent py-3 text-base"
                  >
                    {eventTypes.map((t) => (
                      <option key={t} className="text-ink">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                  Opowiedz nam o swoim wydarzeniu
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="field-dark mt-2 w-full resize-none py-3 text-base"
                  placeholder="Liczba gości, lokalizacja i wszystko, co pomoże nam zrozumieć charakter wydarzenia..."
                />
              </div>

              <button
                type="submit"
                className="btn-solid-ivory px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
              >
                Umów konsultację
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-gold-light"
                >
                  Dziękujemy, odezwiemy się w ciągu jednego dnia roboczego.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

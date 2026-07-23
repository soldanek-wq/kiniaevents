import { Instagram } from "lucide-react";
import Logo from "./Logo";
import { navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink px-6 pb-10 pt-16 text-ivory/60 md:px-10">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col gap-10 pb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="gold" size={72} className="h-9 w-9" />
            <div className="leading-none">
              <p className="font-display text-base text-ivory">Kinga Nagiewicz</p>
              <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-ivory/40">
                Events Atelier
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navItems.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ivory">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://www.instagram.com/kinganagiewicz.ateliers"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil na Instagramie"
            className="flex h-10 w-10 items-center justify-center border border-ivory/15 transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.25} />
          </a>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/35 md:flex-row">
          <p>© {new Date().getFullYear()} Kinga Nagiewicz Events Atelier. Wszelkie prawa zastrzeżone.</p>
          <p>Warszawa, Polska</p>
        </div>
      </div>
    </footer>
  );
}

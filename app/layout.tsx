import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kinganagiewicz.pl"),
  title: {
    default: "Kinga Nagiewicz Events Atelier | Eventy firmowe i wyjątkowe wydarzenia w całej Polsce",
    template: "%s — Kinga Nagiewicz Events Atelier",
  },
  description:
    "Kinga Nagiewicz Events Atelier organizuje eventy firmowe, gale, bankiety, konferencje, targi i przyjęcia prywatne na terenie całej Polski. Kompleksowa organizacja i dbałość o każdy detal.",
  keywords: [
    "organizacja eventów firmowych",
    "agencja eventowa premium",
    "organizacja gali i bankietów",
    "obsługa targów branżowych",
    "przyjęcia prywatne",
    "Kinga Nagiewicz",
    "Events Atelier",
  ],
  authors: [{ name: "Kinga Nagiewicz" }],
  alternates: {
    // Update once the production domain is finalized.
    canonical: "https://www.kinganagiewicz.pl",
  },
  openGraph: {
    title: "Kinga Nagiewicz Events Atelier",
    description:
      "Tworzymy wydarzenia, które robią wrażenie. Eventy firmowe, gale, bankiety, targi i przyjęcia prywatne — na terenie całej Polski.",
    url: "https://www.kinganagiewicz.pl",
    siteName: "Kinga Nagiewicz Events Atelier",
    images: [{ url: "/images/hero.jpg", width: 2600, height: 1500, alt: "Kinga Nagiewicz Events Atelier" }],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinga Nagiewicz Events Atelier",
    description: "Eventy firmowe, gale, bankiety, targi i przyjęcia prywatne — na terenie całej Polski.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${bodoni.variable} ${inter.variable}`}>
      <body className="bg-ivory font-body text-ink antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

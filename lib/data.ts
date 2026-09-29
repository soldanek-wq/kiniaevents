import { Briefcase, Sparkles, Presentation, Users, MapPin, Layers, Wand2, Gem } from "lucide-react";
import type { Service, PortfolioItem, ProcessStep, TrustPoint, NavItem } from "./types";

export const navItems: NavItem[] = [
  { href: "#top", label: "Start" },
  { href: "#about", label: "O Firmie" },
  { href: "#services", label: "Oferta" },
  { href: "#portfolio", label: "Realizacje" },
  { href: "#process", label: "Współpraca" },
  { href: "#trust", label: "Dlaczego my" },
  { href: "#contact", label: "Kontakt" },
];

export const services: Service[] = [
  {
    icon: Briefcase,
    title: "Eventy firmowe",
    description:
      "Organizujemy konferencje, jubileusze, integracje oraz wydarzenia biznesowe, które wzmacniają wizerunek marki i pozostają w pamięci uczestników.",
  },
  {
    icon: Sparkles,
    title: "Bankiety i gale",
    description:
      "Tworzymy eleganckie wydarzenia z dbałością o każdy detal — od scenografii i oprawy wizualnej po koordynację całego wydarzenia.",
  },
  {
    icon: Presentation,
    title: "Targi i wydarzenia branżowe",
    description:
      "Kompleksowo przygotowujemy obecność firm podczas wydarzeń branżowych, dbając o profesjonalny przebieg i najwyższy standard organizacji.",
  },
  {
    icon: Users,
    title: "Przyjęcia prywatne",
    description: "Projektujemy wyjątkowe uroczystości dopasowane do charakteru i oczekiwań naszych klientów.",
  },
];

// Grid spans compose a magazine-style, asymmetric layout on desktop
// (12-column grid) and stack cleanly on mobile. Portfolio reflects the
// studio's actual specialization — nationwide, not destination events.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "Urodziny",
    title: "50-te urodziny w stylu Ojca Chrzestnego",
    category: "50-te urodziny",
    location: "Sierpc",
    image: "/images/REALIZACJA-SIERPC.JPG.jpeg",
    span: "lg:col-span-7",
    aspect: "aspect-[4/5]",
  },
  {
    id: "konferencja-branzowa",
    title: "Konferencja branżowa dla 500 uczestników",
    category: "Konferencja",
    location: "Wrocław",
    image: "/images/portfolio-2.jpg",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: "przyjecie-prywatne",
    title: "Jubileusz sześćdziesięciolecia",
    category: "Przyjęcie prywatne",
    location: "Kraków",
    image: "/images/portfolio-3.jpg",
    span: "lg:col-span-4",
    aspect: "aspect-square",
  },
  {
    id: "bankiet-swiateczny",
    title: "Bankiet świąteczny dla partnerów biznesowych",
    category: "Bankiet",
    location: "Poznań",
    image: "/images/portfolio-4.jpg",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    id: "stoisko-targowe",
    title: "Obsługa stoiska podczas targów branżowych",
    category: "Targi",
    location: "Katowice",
    image: "/images/portfolio-5.jpg",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: "event-integracyjny",
    title: "Event integracyjny dla zespołu",
    category: "Event firmowy",
    location: "Gdańsk",
    image: "/images/portfolio-6.jpg",
    span: "lg:col-span-7",
    aspect: "aspect-[4/5]",
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Rozmowa",
    description: "Poznajemy Twoje potrzeby i cele wydarzenia.",
  },
  {
    index: "02",
    title: "Koncepcja",
    description: "Tworzymy indywidualny plan wydarzenia.",
  },
  {
    index: "03",
    title: "Organizacja",
    description: "Koordynujemy wszystkie elementy projektu.",
  },
  {
    index: "04",
    title: "Realizacja",
    description: "Czuwamy nad przebiegiem wydarzenia.",
  },
  {
    index: "05",
    title: "Sukces",
    description: "Ty cieszysz się wydarzeniem. My dbamy o całą resztę.",
  },
];

// Deliberately not testimonials — this section states how the studio
// works, not invented client quotes or numbers.
export const trustPoints: TrustPoint[] = [
  {
    icon: MapPin,
    title: "Cała Polska",
    description: "Realizujemy wydarzenia na terenie całego kraju.",
  },
  {
    icon: Layers,
    title: "Kompleksowa organizacja",
    description: "Od pierwszej rozmowy aż po realizację.",
  },
  {
    icon: Wand2,
    title: "Indywidualne podejście",
    description: "Każde wydarzenie tworzymy od podstaw.",
  },
  {
    icon: Gem,
    title: "Perfekcja w detalach",
    description: "To właśnie szczegóły tworzą wyjątkowe doświadczenia.",
  },
];

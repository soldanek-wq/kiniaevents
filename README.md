# Kinga Nagiewicz Events Atelier

Premium agencja eventowa działająca na terenie całej Polski. Next.js 14 (App Router), React 18,
TypeScript, Tailwind CSS i Framer Motion — w całości po polsku.

## Stos technologiczny

- **Next.js 14.2.18** (App Router, `next/image`, `next/font`)
- **React 18.3.1** + **TypeScript**
- **Tailwind CSS** — tokeny marki w `tailwind.config.ts`
- **Framer Motion 11** — każda animacja korzysta z `lib/motion.ts` przez wspólny wrapper
  `<Reveal>`, więc timing jest spójny i nigdzie nie jest powielany ręcznie
- **lucide-react** — ikony

## System projektowy

| Token | Wartość | Zastosowanie |
|---|---|---|
| `ink` | `#0F0F0F` | tekst, ciemne sekcje, przyciski |
| `ivory` | `#F7F5F2` | tło, jasne sekcje |
| `beige` | `#EFE7D8` | subtelna odmiana tła (sekcja Proces) — dla rytmu wizualnego |
| `gold` | `#C6A56B` (+ `gold-light` / `gold-dark`) | wyłącznie akcenty, nigdy jako kolor wypełnienia |
| `white` | `#FFFFFF` | powierzchnie kart na tle ivory |

- **Nagłówki:** Bodoni Moda — hero, tytuły sekcji, cytaty, wielka dekoracyjna typografia w tle.
- **Treść / menu / przyciski:** Inter — Regular w tekstach, Medium w nawigacji, SemiBold w CTA.
- **Sygnatura marki:** `components/Logo.tsx` — prawdziwy monogram „KN" dostarczony przez klienta,
  przetworzony na warianty kolorystyczne (patrz sekcja „Logo" niżej).
- **Motyw drugorzędny:** `components/AtelierLabel.tsx` — mała, obrócona metka w stylu couture,
  pojawiająca się przy hover na zdjęciach w portfolio, z nazwą kategorii wydarzenia.

## Struktura projektu

```
kinga-nagiewicz-events-atelier/
├── app/
│   ├── layout.tsx        # fonty, metadata SEO po polsku, JSON-LD
│   ├── page.tsx           # kolejność sekcji: Hero → About → Services → Portfolio →
│   │                       # Process → Trust → Contact
│   └── globals.css        # Tailwind + prymitywy przycisków/pól/animacji
├── components/
│   ├── Navbar.tsx           # nawigacja ze scroll-blur, powiększony monogram
│   ├── Hero.tsx              # pełnoekranowe zdjęcie, animacja wejścia
│   ├── About.tsx              # „Poznaj założycielkę Events Atelier” + portret
│   ├── Services.tsx            # 4 usługi, ciemna sekcja dla rytmu
│   ├── Portfolio.tsx            # asymetryczna siatka „magazynowa” + lightbox
│   ├── Process.tsx               # 01–05, realna sekwencja współpracy
│   ├── Trust.tsx                  # „Dlaczego klienci nam ufają” — bez opinii/statystyk
│   ├── Contact.tsx                 # formularz + telefon/e-mail/Instagram/mapa
│   ├── Footer.tsx
│   ├── Logo.tsx                     # komponent logo (warianty on-dark/on-light/gold)
│   ├── AtelierLabel.tsx              # drugorzędny motyw hover
│   ├── StructuredData.tsx            # JSON-LD (schema.org ProfessionalService)
│   └── Reveal.tsx                     # wspólny wrapper scroll-reveal
├── lib/
│   ├── data.ts     # usługi, portfolio, etapy współpracy, punkty zaufania, nawigacja
│   ├── motion.ts   # wspólne warianty Framer Motion (fadeUp, fadeIn, scaleIn, stagger)
│   └── types.ts
└── public/
    ├── logo/       # prawdziwe logo klienta, warianty kolorystyczne
    ├── images/     # zdjęcia (patrz sekcja „Zdjęcia” niżej)
    └── robots.txt
```

## Logo

`public/logo/` zawiera prawdziwy monogram „KN” dostarczony przez klienta, przetworzony na
warianty potrzebne w różnych miejscach strony (plik rastrowy nie może zmieniać koloru przez CSS
tak jak wcześniejszy placeholder SVG):

| Plik | Kolor | Gdzie |
|---|---|---|
| `mark-on-dark.png` | ivory | ciemne tła (Navbar nad zdjęciem hero) |
| `mark-on-light.png` | ink | jasne tła (Navbar po przewinięciu) |
| `mark-gold.png` | złoty | akcenty (Footer, Contact) |
| `lockup-on-dark.png` | ivory + złoto | pełny lockup — watermark w Hero |
| `lockup-on-light.png` | ink + złoto | ten sam lockup, do jasnych teł |

`components/Logo.tsx` opakowuje to wszystko — `<Logo variant="on-dark" />`, `<Logo variant="gold" />`
lub `<LogoLockup variant="on-dark" />`. W Navbarze logo jest powiększone o ok. 55% względem
wcześniejszej wersji i płynnie przenika między wariantem jasnym/ciemnym przy scrollu.

## Zdjęcia

| Plik | Użycie | Status |
|---|---|---|
| `about-kinga.png` | Portret Kingi w sekcji „O założycielce” | **prawdziwe zdjęcie**, tło usunięte |
| `hero.jpg` | Hero, pełny ekran | placeholder — abstrakcyjny gradient w palecie marki |
| `portfolio-1.jpg` … `portfolio-6.jpg` | Siatka portfolio | placeholder — jw. |

### Portret Kingi — jak został przygotowany

`about-kinga.png` to prawdziwe zdjęcie z usuniętym tłem (przezroczyste PNG, 1156×1972 px).
Tło zostało zdjęte programowo: zdjęcie było na jednolitym białym tle studyjnym, więc wycięcie
opiera się na progowaniu jasności pikseli (z uwzględnieniem faktu, że blazer i spodnie są w
zbliżonym do bieli odcieniu écru — próg został dobrany tak, by nie naruszyć tych partii ubrania),
z domknięciem otworów, wygładzeniem krawędzi i automatycznym kadrowaniem do sylwetki.

W `components/About.tsx` portret renderuje się w naturalnych proporcjach (`object-contain`, bez
sztywnego przycinania), bez ramki, karty czy koła — zgodnie z założeniami tej sekcji. Za sylwetką
znajduje się wielka dekoracyjna typografia „ATELIER” o kryciu ok. 6%, a delikatny `drop-shadow`
podąża za realnym kształtem sylwetki (nie za prostokątem).

Jeśli w przyszłości pojawi się nowa, wyżej rozdzielczościowa lub inaczej ukadrowana wersja
portretu — wystarczy podmienić plik pod tą samą ścieżką (`public/images/about-kinga.png`,
najlepiej jako PNG z przezroczystością); reszta kompozycji zadziała bez zmian w kodzie.

**Pozostałe placeholdery** (`hero.jpg`, `portfolio-*.jpg`) można podmienić w ten sam sposób —
podmiana pliku pod tą samą nazwą, bez zmian w komponentach. Przy zmianie nazw plików trzeba
zaktualizować pole `image` przy odpowiednim wpisie w `lib/data.ts`.

## Uruchomienie lokalne

Wymaga Node.js 18.18+.

```bash
npm install
npm run dev
```

Strona dostępna pod `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Wdrożenie na Vercel

1. Wypchnij projekt do repozytorium GitHub/GitLab/Bitbucket.
2. W [vercel.com](https://vercel.com) wybierz **Add New Project** → zaimportuj repozytorium.
   Vercel automatycznie wykryje Next.js — konfiguracja nie jest wymagana.
3. Kliknij **Deploy**.

Zależności są przypięte do dokładnych, wzajemnie kompatybilnych wersji (Next 14.2.18 / React
18.3.1) z blokiem `overrides` i zabezpieczeniem `.npmrc` (`legacy-peer-deps=true`), więc
`npm install` na Vercel przechodzi bez błędów `ERESOLVE`.

## Formularz kontaktowy

`components/Contact.tsx` to kontrolowany formularz z demonstracyjną wysyłką tylko po stronie
frontendu. Przed uruchomieniem produkcyjnym podłącz `handleSubmit` do:

- Route Handlera w Next.js (`app/api/inquiry/route.ts`) wysyłającego e-mail przez np. Resend, lub
- zewnętrznego serwisu formularzy (Formspree, Getform) przez `fetch`.

### Dane kontaktowe — do podmiany

Telefon, e-mail i adres w `components/Contact.tsx`, `components/Footer.tsx` oraz
`components/StructuredData.tsx` to **bezpieczne placeholdery** (`+48 22 000 00 00`,
`kontakt@kinganagiewicz.pl`, adres w Warszawie, link do Instagrama). Żadne z tych danych nie
zostało zmyślone jako fakt — to miejsca do uzupełnienia prawdziwymi danymi studia. Znajdziesz je
w trzech plikach:

1. `components/Contact.tsx` — telefon, e-mail, Instagram, osadzona mapa
2. `components/Footer.tsx` — link do Instagrama
3. `components/StructuredData.tsx` — telefon, e-mail, adres, Instagram (dane strukturalne dla
   wyszukiwarek)

## SEO

- `app/layout.tsx` eksportuje pełne `Metadata` po polsku — tytuł, opis, słowa kluczowe, Open
  Graph, Twitter card oraz placeholder adresu kanonicznego (do uzupełnienia docelową domeną).
- `components/StructuredData.tsx` wstawia dane strukturalne JSON-LD
  `schema.org/ProfessionalService` (nazwa, adres, telefon, oferowane usługi, Instagram) — bez
  żadnych zmyślonych ocen, liczby klientów czy opinii.
- `public/robots.txt` zezwala na pełne indeksowanie.
- Jeden nagłówek `<h1>` na stronie (w Hero); wszystkie pozostałe tytuły sekcji to `<h2>`.

## Dostępność

- Widoczny fokus klawiatury (`:focus-visible`) na każdym elemencie interaktywnym.
- `prefers-reduced-motion` respektowane globalnie (CSS) oraz na poziomie Framer Motion
  (`components/Reveal.tsx` używa `useReducedMotion()`) — przy tym ustawieniu treść pojawia się
  od razu, bez animacji.
- Semantyczne landmarki (`header`, `nav`, `main`, `footer`), `aria-label` po polsku na
  przyciskach ikonowych, prawdziwy `<form>` z powiązanymi `<label>` i `autoComplete` w Contact.
- Fonty ładowane przez `next/font` (self-hosted) — zero zapytań do zewnętrznych serwerów w
  runtime, zero przesunięć layoutu (CLS).

## Historia zmian w tej wersji

Ostatnia iteracja to dopracowanie istniejącej strony (nie przebudowa) według briefu „luksusowa
agencja kreatywna, w całości po polsku”:

- Powrót do **Bodoni Moda** jako fontu nagłówkowego (wcześniej Playfair Display).
- Pełne tłumaczenie całej strony na polski — nawigacja, przyciski, formularz, stopka, SEO.
- Nowe teksty we wszystkich sekcjach zgodnie z briefem (Hero, About, Services, Process, Contact).
- Usunięcie sekcji opinii klientów (`Reviews.tsx`) i zastąpienie jej sekcją „Dlaczego klienci
  powierzają nam swoje wydarzenia?” (`Trust.tsx`) — wartości pracy studia, bez zmyślonych cytatów.
- Portfolio przeorganizowane pod pozycjonowanie krajowe (bez wydarzeń „destination” za granicą).
- Logo w Navbarze powiększone o ~55%, poprawione odstępy.
- Sekcja About przeprojektowana: prawdziwy portret Kingi z usuniętym tłem, bez ramki/karty/koła,
  naturalne proporcje, wielka dekoracyjna typografia w tle, miękki cień podążający za sylwetką.
- Dodany subtelny ton `beige` dla lepszego rytmu wizualnego między sekcjami.
- Spowolniony, bardziej „luksusowy” timing wszystkich animacji Framer Motion + realna obsługa
  `prefers-reduced-motion` w `<Reveal>`.
- Wszystkie dane strukturalne i metadata SEO przetłumaczone, bez żadnych zmyślonych faktów.

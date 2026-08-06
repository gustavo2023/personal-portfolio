---
name: Gustavo Gutierrez — Portfolio
description: Single-page developer portfolio on a warm dark canvas with light ink type, one signal-orange accent, and hairline structure; evidence over ornament.
colors:
  paper: "#1f1b17"
  surface: "#2a2622"
  ink: "#f7f6f4"
  body: "#d8d5d0"
  mute: "#9e9a94"
  hairline: "rgba(247, 246, 244, 0.12)"
  signal: "#ff4d00"
  signal-deep: "#d63f00"
  signal-text: "#ff7a33"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "5.5rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0px"
rounded:
  full: "9999px"
  focus: "2px"
spacing:
  gutter: "24px"
  gutter-md: "40px"
  section-y: "80px"
  section-y-md: "112px"
  section-y-lg: "128px"
  row-y: "40px"
  heading-gap: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  chip-featured:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  link-inline:
    textColor: "{colors.ink}"
  link-inline-hover:
    textColor: "{colors.signal}"
  link-accent:
    textColor: "{colors.signal-text}"
  body-text:
    textColor: "{colors.body}"
    typography: "{typography.body}"
  data-text:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
  marker-square:
    backgroundColor: "{colors.signal}"
    size: "4px"
  divider:
    backgroundColor: "{colors.hairline}"
    height: "1px"
    width: "100%"
---

# Design System: Gustavo Gutierrez — Portfolio

## Overview

**Creative North Star: "The Warm Night Proof"**

The modern developer portfolio played straight at full craft under a warm night: the person leads, production proof persuades, and nothing performs. The canvas is a deliberate warm dark (#1f1b17) rather than a generic black, so the light ink type feels like reading by lamplight and the signal-orange accent lands as a controlled glow rather than a warning. The first viewport already holds face, name, role, proof, and contact; every scroll stop after is another row of evidence. There are no metric heroes, no icon-card grids, no scroll tricks — the content is the persuasion.

The material character is quiet and flat: one dark ground, one slightly lighter surface for the rare elevated moment, and 1px translucent hairlines as the only structure. Signal orange exists in the system as a budget — fills for primary pills and hover states, tiny proof markers, text selection, focus rings, and the one readable accent line per screen. Type does the expressive work: expanded, extra-bold Archivo (never above 6rem) declares, plain Archivo explains, and JetBrains Mono is admitted only to read data — dates, stack, locations, URLs, availability — like a caption track for facts.

Iconography is intentionally narrow: one icon library, `react-icons`, mapped through a single `DevIcon` component. Technology names render with Simple Icons in the hero metadata row, the featured core-stack chips, the full stack list, and project stacks; email, GitHub, LinkedIn, and download links use Font Awesome brand/action glyphs. Motion is one grammar and one ease: elements fade and rise 18–24px on an expo curve, exactly once, staggered by tens of milliseconds; the hero adds a single clip-path opening on the portrait. Under `prefers-reduced-motion` every entrance disappears, scroll snapping becomes auto, and the page simply is. Confirmed rejections: shadows, gradients, blurs, tonal cards, decorative mono, large raw-orange text on dark, and any template tell that would make a recruiter's scan about the site instead of the person.

**Key Characteristics:**
- Person-led split hero: name at display scale left, real portrait filling the right column with a gradient `.hero-mask`, key metadata (location, core stack, availability) living directly in the text column.
- Warm dark canvas with structure declared once by 1px translucent hairlines; zero shadows or gradients; the only luminous exception is the portrait's subtle drop-shadow edge.
- One signal-orange accent with a dedicated bright text variant for dark; restraint is the brand.
- Two type voices: expanded Archivo for declaration, JetBrains Mono strictly for data.
- One icon system: `react-icons` (Simple Icons for technology, Font Awesome for email / GitHub / LinkedIn / download) mapped through `DevIcon`; no authored directional glyph.
- Rows, not cards: experience and projects persuade as hairline-divided editorial entries; About uses surface-background chips only for the featured core stack.
- One motion ease (expo), one reveal pattern, fired once; reduced motion is fully honored.

## Colors

A warm near-neutral dark field — canvas, surface, light ink, two grays, one translucent hairline — with a single hot orange and its readable small-text variant. Frontmatter keys track the `@theme` tokens in `src/index.css`.

### Primary
- **Signal Orange** (#ff4d00, `--color-signal`): the system's one accent. Fills primary pill buttons (text flips to ink), the 4px square markers on experience proof lines, the text-selection background, the global focus ring, and the hover color/underline on links. Never a large background field, never small reading text on dark.
- **Signal Deep** (#d63f00, `--color-signal-deep`): the pressed/hover depth step of the accent. Used when a signal-filled element is hovered or active — primary buttons deepen from signal to signal-deep.
- **Signal Text** (#ff7a33, `--color-signal-text`): the readable small-signal variant on dark. Sets the availability line in the hero's fold strip and the contact section's email address. Replaces the previous light-theme `signal-ink` role.

### Neutral
- **Warm Dark Canvas** (#1f1b17, `--color-paper`): the ground under every section; also the dark value behind light-ink text. Deliberately not pure black — it carries a warm brown undertone.
- **Elevated Surface** (#2a2622, `--color-surface`): the one reserved step up from the canvas. Used in the About section for the featured core-stack chips (`Python`, `FastAPI`, `PostgreSQL`) so they read as discrete tokens without leaving the dark world. Available for future panels, cards, or detail pages.
- **Light Ink** (#f7f6f4, `--color-ink`): headings, titles, wordmark, key link text, and the text that sits on signal fills.
- **Warm Body** (#d8d5d0, `--color-body`): all long-form copy — bio, tagline, proof lines, project overviews, and the résumé request link.
- **Warm Mute** (#9e9a94, `--color-mute`): the data color — mono dates, companies, stack lists, locations, footer.
- **Translucent Hairline** (`rgba(247, 246, 244, 0.12)`, `--color-hairline`): every border and divider at 1px; also the resting underline on inline links and the ghost-pill stroke. Derived from ink so the boundary stays subtle on dark.

### Named Rules
**The One Voice Rule.** Signal orange is the only hue beyond the warm neutrals, and it spends like a budget: hover states, tiny markers, selection, focus, and at most one accent text element per screen (the availability line; the email address). Its rarity is the point.

**The Readable Signal Rule.** Raw signal (#ff4d00) never sets small reading text on dark — it blooms against the canvas. Text that must be orange on dark uses signal-text (#ff7a33); raw signal is for fills, markers, rings, and hover moments.

## Typography

**Display Font:** Archivo Variable (Helvetica Neue, Arial fallback), width axis expanded to 125%
**Body Font:** Archivo Variable, normal width
**Label/Mono Font:** JetBrains Mono Variable (ui-monospace, SFMono-Regular, Menlo fallback)

**Character:** One grotesque family does all the talking — expanded and extra-bold when it declares, plain when it explains — while a mono is admitted only to read out data. The pairing reads as a well-set engineering dossier lit for late-night review: confident headline, quiet evidence.

### Hierarchy
- **Display** (800, clamp(2.9rem, 7.2vw, 5.5rem), line-height 0.98, -0.02em, wdth 125, `text-wrap: balance`): the hero name, broken over two lines; the largest type on the page and the only voice at this scale.
- **Headline** (800, clamp(2rem, 4vw, 3rem), same display rules): section headings — About, Experience, Projects. The contact pitch stretches the same voice to clamp(2.4rem, 5.5vw, 4.5rem) on a 16ch measure.
- **Title** (600, 1.25rem, line-height 1.4, -0.025em, normal width): job roles and project names.
- **Role line** (500, 1.125rem, ink): "Software Developer — Backend systems", directly under the name.
- **Body** (400, 1rem, line-height 1.625, warm body): all prose, with the measure capped per context — 52ch hero tagline, 68ch about bio, 70ch proof lines and project text.
- **Label / Data** (400, 0.8125rem, JetBrains Mono, letter-spacing 0): the `.data` rule — dates, stack, locations, URLs, availability, footer. UI chrome (nav links, buttons) is 0.875rem Archivo medium, not mono.

### Named Rules
**The Data-Only Mono Rule.** JetBrains Mono exists to set data: dates, stack, locations, URLs, availability. It never sets prose, headings, buttons, or decoration. Mono is evidence, never costume.

**The Six-Rem Ceiling.** The display voice never exceeds 6rem; the shipped maximum is 5.5rem. Past that the expanded grotesque stops declaring and starts shouting.

## Layout

One centered measure, hairline-divided sections, and a single split-screen moment.

- **Container:** centered `max-w-6xl` (72rem) with 24px gutters stepping to 40px at `md`. Everything hangs on this one column; the only full-bleed elements are the 1px section rules that cross it.
- **Section rhythm:** 80px vertical padding stepping to 112px at `md` (128px for the contact closer). Sections separate with a single bottom hairline; rows inside them separate with a single top hairline. Headings sit 48px above their content.
- **Hero (the one split):** at `lg`, a two-column grid — 1.05fr text / 0.95fr portrait — with the text column vertically centered at min-height 82vh. The portrait has no dividing border; instead it uses `.hero-mask` to blend its left shoulder into the dark canvas. Below `lg` the portrait stacks under the text at min-height 54vh behind a top hairline. The portrait image fills its column absolutely, `object-cover` anchored `object-top`.
- **Hero mask:** `.hero-mask` applies a vertical `mask-image` gradient (transparent → black 5%) at `lg` and a bottom fade at smaller viewports, plus a soft `drop-shadow(0 0 32px rgba(247,246,244,0.06))` to lift the shoulder edge without adding a real shadow elsewhere.
- **Hero metadata row:** location, core stack with inline Simple Icons, and availability in signal-text, set in the data voice inside the hero text column below the contact buttons. No separate fold strip.
- **About:** display heading left, bio plus featured core-stack chips and mono stack list right, in a 0.9fr/1.1fr grid at `lg` with a 40px gap. The three featured chips (`Python`, `FastAPI`, `PostgreSQL`) sit on the surface background; the rest of the stack is rendered as inline icon + name pairs in the data voice. Icons render at 22px in featured chips and 18px elsewhere.
- **Experience rows:** at `md`, a fixed 16rem mono meta column (period over company) beside the proof column; 40px vertical padding, 48px column gap.
- **Project rows:** content left, date and repo link in an auto column right-aligned at `lg`; below `lg` the meta row spreads date and link to opposite ends. Stack lists use inline Simple Icons at 18px.
- **Responsive:** Tailwind default breakpoints — `sm` 640px, `md` 768px, `lg` 1024px. Below `sm` the nav anchors collapse away, leaving the wordmark and the Email pill; below `lg` every grid stacks single-column.
- `html` scrolls smooth (forced to `auto` under reduced motion); sections are anchor-linked (`#about`, `#experience`, `#projects`, `#contact`), and a skip link appears on focus as a signal pill.
- **Scrollbar:** hidden on all viewports (`scrollbar-width: none` for Firefox, `::-webkit-scrollbar { display: none; }` for WebKit) while scroll functionality remains intact.

## Elevation & Depth

The system is flat, full stop. No shadows, no gradients, no blur. Depth is declared by two things: a single 1px translucent hairline (`rgba(247, 246, 244, 0.12)`) at every boundary, and the one reserved elevated surface (`#2a2622`) used sparingly for featured chips and held for future panels. The only luminous exception is the hero portrait's `.hero-mask` drop-shadow (`0 0 32px rgba(247,246,244,0.06)`), which exists only to soften the shoulder edge against the canvas — it is not a general elevation token.

The only luminous moments are state, not elevation: text selection paints signal orange with light-ink text, and keyboard focus draws a 2px signal ring offset 3px with the system's only other radius (2px).

### Named Rules
**The Declared-Once Rule.** Every separation is one 1px hairline, declared once. If two elements need more distinction, adjust space or type — never add a second border, a shadow, or a fill.

## Shapes

Two silhouettes and nothing between: interactive controls are pills (fully rounded, 9999px) and everything else is square (0px) — sections, rows, data. The focus ring carries the system's only other radius (2px). The hero portrait is the one softened form: `.hero-mask` clips it with a linear gradient so the left shoulder dissolves into the canvas rather than presenting a hard rectangle. The recurring geometry is small and exact: a 4px signal square marking each proof line at 0.65em, and 18–22px icons from `react-icons` paired with their labels.

### Named Rules
**The Pill-or-Square Rule.** Radius exists on interactive pills and the 2px focus outline, nowhere else. Images, rows, and containers never round; if it isn't a button, it's a rectangle.

## Components

### DevIcon (icon system)
A single component in `src/components/DevIcon.jsx` imports `react-icons` and maps technology names and link keys to their SVG icons. `kind="tech"` resolves stack items like `Python`, `FastAPI`, `PostgreSQL`, `Docker`, etc. from Simple Icons; `kind="link"` resolves `github`, `linkedin`, `email`, and `download` from Font Awesome. Icons are rendered at 18–22px, `currentColor`, inline next to their label. Direct exports `GithubIcon`, `LinkedinIcon`, `EmailIcon`, and `DownloadIcon` are used for pills that don't go through the name map.

### Navigation
A quiet bar over a bottom hairline. Wordmark left ("Gustavo Gutierrez", 14px semibold, tight tracking, ink); right, anchor links — About, Experience, Projects, Contact — (14px warm body, ink on hover, 200ms color transition) beside a signal "Email me" pill with the `FaEnvelope` icon and the label. The anchors hide below `sm` (640px); the pill always stays. No logo mark, no hamburger.

### Buttons
- **Shape:** fully rounded pills (9999px), 200ms color-only transitions.
- **Primary (signal pill):** signal fill (#ff4d00), ink text, 14px medium; padding 10px 20px in the hero, 8px 16px in the nav. Hover deepens to signal-deep (#d63f00) with ink text — the accent's loudest sanctioned moment. The hero email and nav "Email me" pills lead with the `FaEnvelope` icon.
- **Secondary (ghost pill):** transparent on the dark canvas with a 1px hairline stroke and ink text; hover firms the stroke to ink. The hero GitHub pill uses the `FaGithub` icon; the hero LinkedIn pill uses the `FaLinkedin` icon; the hero Download CV pill uses the `FaDownload` icon and links to `/assets/cv.pdf`.
- **Focus:** the global 2px signal outline, offset 3px.

### Links
- **Inline link:** ink, 14px medium, hairline underline offset 4px, leading brand icon; hover turns both text and underline signal. Repo links lead with the `FaGithub` icon; LinkedIn leads with the `FaLinkedin` icon.
- **Email display link (signature):** the contact section's single oversized action — signal-text (#ff7a33) text (20px stepping to 24px at `md`, 500 weight), an underline in 40% signal offset 8px, and a 28px `FaEnvelope` icon. Hover inverts to ink text with a full-signal underline. The one place orange leads at reading size on dark.

### Featured Core-Stack Chip
A surface-background pill (6px 12px padding, 14px medium ink text, 9999px radius) holding a 22px Simple Icon and a technology name. Used only in About for `Python`, `FastAPI`, and `PostgreSQL` to mark the featured core stack. Non-featured stack items use the same icon + name pairing but without the surface background, in the data voice.

### Experience Row
The persuasion unit. Top hairline, 40px vertical rhythm. Left: mono mute meta (period over company) in a 16rem column at `md`. Right: role title (20px semibold, tight tracking, ink) over proof lines (16px/1.625 warm body, 70ch cap), each marked by a 4px signal square at 0.65em. Rows reveal once on scroll, staggered 60ms.

### Project Row
An editorial entry, not a card. Project name (20px semibold, ink) with its mono kind descriptor sharing the baseline; two prose paragraphs at a 70ch measure; a mono stack list with inline Simple Icons at 18px; and a meta zone holding the mono date plus an underlined "View on GitHub" link led by the `FaGithub` icon — right-aligned column at `lg`, spread row below it. No thumbnails, no cards, no tag chips.

### Contact
The closer: a display headline up to 4.5rem on a 16ch measure ("Have a backend worth building? Let's talk."), then the email display link with a `FaEnvelope` icon, then GitHub (`FaGithub` icon) and LinkedIn (`FaLinkedin` icon) inline links, and finally a Download CV ghost pill (`FaDownload` icon) linking to `/assets/cv.pdf`.

### Footer
One top hairline, one mono mute row: copyright and name left, location right; stacks on small screens.

### Reveal (motion primitive)
The one scroll animation: fade plus rise (18px default, 24px for project rows) over 0.7s on the shared expo ease `cubic-bezier(0.16, 1, 0.3, 1)`, triggered `whileInView` exactly once with a -64px viewport margin, staggered 60–80ms per sibling. Under `prefers-reduced-motion` it renders a plain div. The hero adds two load-time moves on the same ease: staggered rises (0.9s, 80ms apart across name, role, tagline, contact row, metadata row) and the portrait's clip-path opening (inset 6% → 0 with scale 1.04 → 1, over 1.1s).

### Cursor (custom pointer)
A `motion/react` driven custom cursor rendered in `App.jsx`. On fine-pointer devices it hides the default cursor, tracks the pointer with `useSpring` (`damping: 25`, `stiffness: 400`), and scales from 14 px to 48 px on interactive elements (`a`, `button`, `[role='button']`, inputs, `[data-cursor-hover]`). The default state is an ink dot with `mix-blend-difference`; the hover state is a larger signal-orange ring with `mix-blend-difference`. It is hidden under `prefers-reduced-motion` and on coarse-pointer devices so touch users keep the native cursor.

### MagicPill (hover glow)
Wraps the About tech-stack chips. Uses `useMotionValue`, `useSpring`, and `useMotionTemplate` to render a radial signal-orange glow that follows the pointer inside the pill on hover, plus a subtle `-translate-y-0.5` lift. Inspired by Magic UI's `MagicCard` gradient mode, but constrained to the existing warm-dark palette and pill shape. The glow is `pointer-events-none` and clipped by `overflow-hidden`.

## Do's and Don'ts

### Do:
- **Do** set display type in expanded Archivo (wdth 125, 800 weight, -0.02em tracking, 0.98 line-height) and keep it under 6rem.
- **Do** reserve JetBrains Mono (`.data`, 13px) for data: dates, stack lists, locations, URLs, availability, footer lines.
- **Do** set small signal text on dark in signal-text (#ff7a33); keep raw signal (#ff4d00) for fills, markers, selection, focus rings, and hover states.
- **Do** keep the ground warm dark canvas (#1f1b17) and use surface (#2a2622) as the only elevated surface for featured chips or future panels.
- **Do** separate with single 1px translucent hairlines (`rgba(247, 246, 244, 0.12)`) and let whitespace do the rest: 80→112px section rhythm, 40px row rhythm, 48px under headings.
- **Do** keep buttons as signal or ghost pills with 200ms color transitions.
- **Do** use `react-icons` (Simple Icons for technology, Font Awesome for email / GitHub / LinkedIn / download) mapped through `DevIcon`; render them inline at 18–22px in their label color, never as standalone decoration.
- **Do** animate on the one expo ease (0.16, 1, 0.3, 1), rising 18–24px, once per element, and honor `prefers-reduced-motion`.
- **Do** show the real portrait large with `.hero-mask` — the person leads the page.
- **Do** link the Download CV button to `/assets/cv.pdf`; add the PDF at that path so the download works.

### Don't:
- **Don't** add shadows, gradients, blurs, or tonal cards — separation is one hairline, declared once. (The portrait's `.hero-mask` drop-shadow is the lone image-edge exception, not a general elevation token.)
- **Don't** introduce arbitrary icon sets, emoji, client logos, or decorative glyphs; the only admitted icons are `react-icons` (Simple Icons + Font Awesome) mapped through `DevIcon`.
- **Don't** set prose, headings, or decoration in mono; mono is data, not costume.
- **Don't** fill backgrounds with raw signal or set small text in raw signal on dark; the accent stays rare and readable.
- **Don't** build icon-card grids, metric heroes, tag chips, or gimmick scroll effects — the template tells this system refuses.
- **Don't** round containers, images, or rows; radius belongs to pills (9999px) and the 2px focus ring only.
- **Don't** invent a second accent, a light section, or a third typeface; one canvas, one ink, one orange, two voices.

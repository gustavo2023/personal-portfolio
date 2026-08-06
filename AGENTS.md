# AGENTS.md

Gustavo Gutierrez's portfolio website — a creative, recruiter-facing personal site (About / Experience / Projects). User-provided inspiration: codedgar.com, majd-portfolio.framer.website, heynesh.com.

## Commands

- Package manager is **pnpm** (`pnpm-lock.yaml`). Never use npm/yarn.
- `pnpm dev` — Vite dev server. `pnpm build` — production build. `pnpm preview` — serve build.
- **`pnpm lint` fails out of the box**: `eslint .` scans the vendored skill scripts under `.agents/skills/` (~86 pre-existing errors in third-party code). To verify app code, run `pnpm exec eslint src` — that passes.
- No tests, no CI. Verification = `pnpm exec eslint src` + `pnpm build`.

## Stack & quirks

- React 19, plain JSX — **no TypeScript** (the `@types/*` devDeps are unused leftovers).
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin: there is no `tailwind.config.js`. Customize the theme in CSS (`@theme` in `src/index.css`), not in a JS config — this differs from Tailwind v3 muscle memory.
- Animation library is `motion` v13: import from `motion/react`, **never** `framer-motion`. Motion MCP servers are configured in `opencode.json` and a local skill lives at `.opencode/skills/motion` — search Motion docs before writing animation code.
- Structure: `src/App.jsx` composes section components from `src/components/`; all copy lives in `src/data/content.js` (mirrors SECTIONS.md; project `slug`s are reserved for future detail pages). Fonts are self-hosted via `@fontsource-variable/archivo` (import `wdth.css`, not `full.css`) and `@fontsource-variable/jetbrains-mono`; tokens live in `@theme` in `src/index.css`.
- Icons are from **`react-icons`** (Simple Icons for tech brands, Font Awesome for email / GitHub / LinkedIn / download). The mapping lives in `src/components/DevIcon.jsx`. Gmail is rendered as a regular envelope; LinkedIn and GitHub use their brand icons.
- `public/assets/hero-image.png` is the real portrait; crop it with `object-top` (the crown crops otherwise). The hero image uses `.hero-mask` (`mask-image` gradient with a 5% left-side fade on desktop + subtle `drop-shadow`) to blend into the dark canvas with no vertical dividing border.
- Hero metadata (location, core stack, availability) lives inside the hero text column, not in a separate fold strip.
- `cv` in `src/data/content.js` points to `/assets/cv.pdf` for the Download CV buttons — drop the PDF at that path for the link to work.
- Scrollbars are hidden while scrolling still works (`html { scrollbar-width: none; } ::-webkit-scrollbar { display: none; }`).
- A custom `Cursor` component rendered in `App.jsx` follows the pointer with `motion/react` springs, scales on interactive elements, and hides the default cursor on fine-pointer devices.
- About tech-stack chips are wrapped in `MagicPill`, which adds a Magic UI-style radial glow that follows the cursor on hover.

## Content & design sources of truth

- **`SECTIONS.md`** — the real portfolio copy (bio, experience entries, projects, tech stack, contact links). Use it; do not invent content, dates, or links.
- **`DESIGN.md`** — the design-system spec (YAML tokens + prose), with a component sidecar at `.impeccable/design.json`. Warm dark canvas `#1f1b17`, elevated surface `#2a2622`, light ink `#f7f6f4`, body `#d8d5d0`, muted `#9e9a94`, 1px hairlines `rgba(247,246,244,0.12)`, one signal-orange accent `#ff4d00` (small-text variant `#ff7a33` for dark ground, depth shade `#d63f00`). Archivo Expanded display (wdth 125, 800, ≤6rem), Archivo body, JetBrains Mono for data only. Pill controls (9999px) on otherwise square surfaces, no shadows/gradients, icons from `react-icons` mapped through `DevIcon`, 80→112px section rhythm. Follow its Do's/Don'ts for any UI work; reference tokens directly. After editing DESIGN.md itself, run `npx @google/design.md lint DESIGN.md` (per its Iteration Guide).

## Repo-local tooling (treat as read-only)

- `.agents/skills/` — vendored design skills (impeccable, design-taste-frontend, high-end-visual-design, industrial-brutalist-ui, gpt-taste, brandkit, imagegen-frontend-web, full-output-enforcement), versions pinned in `skills-lock.json`. Do not "fix" their lint errors or refactor them.
- `.codex/hooks.json` — Codex-only hooks that run impeccable's design check after edits. OpenCode ignores this file; do an explicit design pass with the impeccable skill instead when polishing UI.

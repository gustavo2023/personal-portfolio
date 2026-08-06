# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

International recruiters and hiring managers evaluating candidates for remote backend or full-stack software roles. They scan many portfolios quickly; their job on this site is to decide within a short visit whether Gustavo merits an interview.

## Product Purpose

Gustavo Gutierrez's personal portfolio. It presents who he is, what he has shipped, and how to reach him. Success means interview requests for remote backend/full-stack positions.

## Positioning

An early-career backend engineer whose portfolio evidence is real production infrastructure — a faculty evaluation platform and an admissions system built and deployed for Colegio Guayamuri (200+ teachers, JWT auth, rate limiting, Railway/AWS) — plus from-scratch engineering projects (a Python ETL pipeline, an OOP Markdown static site generator). Neighboring junior portfolios typically show tutorial projects; this one shows systems with real institutional users.

## Operating Context

Evaluated alongside the linked GitHub profile and LinkedIn; contact happens off-site via GitHub, LinkedIn, or email. Site copy is in English, targeting international remote opportunities. The site ships as a single page now; the owner explicitly wants room to add project detail pages or a blog later.

## Capabilities and Constraints

- Single-page portfolio: About, Experience, Projects (per SECTIONS.md).
- Contact is link-based: GitHub, LinkedIn, email. No contact form.
- Résumé/CV download: the real PDF does not exist yet — use a placeholder until the user adds the file. Do not fake the file or its contents.
- Information architecture and code structure must allow adding project detail pages or a blog later without rework.
- Content truth: SECTIONS.md is authoritative; do not invent employers, dates, metrics, or claims beyond it.

## Brand Commitments

- Name: Gustavo Gutierrez. Title: Software Developer. Location: Margarita, Venezuela.
- Links: github.com/gustavo2023 · linkedin.com/in/gustavo-gutierrez-dev · gustavoegutierrezg23@gmail.com
- User-volunteered design references (binding as inspiration, not spec): codedgar.com, majd-portfolio.framer.website, heynesh.com.
- Visual direction (chosen 2026-08-06, shape workshop): the category standard — the modern developer portfolio — executed at full fidelity, without irony or smuggled quirk. The three references above are the craft bar the build is held to.

## Evidence on Hand

- `SECTIONS.md` — real copy: bio, tech stack, two Colegio Guayamuri roles (Backend Software Engineer, contract, May 2026 – Aug 2026; Software Engineering Intern, Jan 2026 – Apr 2026), two projects with GitHub links.
- `public/assets/hero-image.png` — real photo of Gustavo, confirmed by the owner for the hero/About area.
- Absent and must not be fabricated: CV PDF (pending — placeholder required), project screenshots/demos, testimonials, client logos, and any metrics beyond what SECTIONS.md states.

## Product Principles

1. Evidence over ornament: every claim on the page traces to SECTIONS.md or a real asset.
2. Recruiter-speed comprehension: name, role, proof, and contact must land fast.
3. Backend depth is the identity: lead with production systems and data work, not generic "web developer" framing.
4. Real materials only: placeholder what is pending; never fabricate.
5. Build to grow: today's single page must not become tomorrow's rewrite.

# Portfolio v2 — Architecture & Repository State

This document provides a fast, comprehensive overview of the `portfolio_v2` repository, its dual-mode theming architecture, structural organization, and data flows.

---

## 1. Core Tech Stack & Build System

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19, Turbopack dev server).
- **Package Manager**: [Bun](https://bun.sh/) (`bun dev` for local development, `bun lint` for code checking).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) mapped natively to CSS variables (`@theme inline` in `app/globals.css`).
- **Theming**: [`next-themes`](https://github.com/pacocoursey/next-themes) managing class-based (`.dark`) mode switching.

---

## 2. Theming Architecture & Color System

### Default Theme
The application is configured to default to **Dark Mode (`defaultTheme="dark"`)** in `app/layout.tsx` via `ThemeProvider` (`components/theme-provider.tsx`). System preferences are disabled (`enableSystem={false}`) so every user lands on the curated **Dark Editorial** presentation by default.

### Semantic Color Tokens (`app/globals.css`)
To ensure high contrast and zero visual washout when toggling between **Dark Editorial** and **Light Editorial**, all components strictly use semantic Tailwind classes mapped to CSS variables instead of static color utilities:

| Semantic Class | CSS Variable (`:root` / Light) | CSS Variable (`.dark` / Dark) | Purpose |
| :--- | :--- | :--- | :--- |
| `bg-bg-primary` | `#FAFAFA` (Crisp off-white paper) | `#0A0D14` (Deep obsidian) | Main page & modal background |
| `bg-bg-card` | `#FFFFFF` (Pure white surface) | `rgba(255,255,255,0.015)` | Card, input, & button surfaces |
| `border-border-card` | `#E5E7EB` (Subtle light gray) | `rgba(255,255,255,0.06)` | Structural dividers & card borders |
| `text-text-primary` | `#111827` (Deep charcoal) | `#F8FAFC` (High-contrast white) | Primary headings & card titles |
| `text-text-secondary` | `#4B5563` (Readable slate gray) | `#CBD5E1` (Soft slate) | Body copy, descriptions, & labels |
| `text-text-muted` | `#9CA3AF` (Light gray) | `#64748B` (Muted slate) | Dates, metadata, & index tags |
| `text-accent` / `bg-accent` | `#059669` (Editorial emerald) | `#34D399` (Vibrant emerald) | Highlights, badges, & primary CTAs |
| `bg-accent-subtle` | `rgba(16,185,129,0.08)` | `rgba(16,185,129,0.08)` | Hover states & status tags |

---

## 3. Section & Component Structure

All major landing page sections are imported and composed in `app/page.tsx`:

```
portfolio_v2/
├── app/
│   ├── layout.tsx                # Root layout, fonts (Libre Baskerville, Inter, JetBrains Mono), ThemeProvider, FilmGrain
│   ├── page.tsx                  # Landing page assembling all sections below
│   ├── globals.css               # Semantic variables & Tailwind v4 theme mapping
│   └── actions/contact.ts        # Server action processing contact form submissions
├── components/
│   ├── SideNav.tsx               # Floating section index (00 to 04) with integrated ThemeToggle
│   ├── theme-toggle.tsx          # Pill button switching light/dark modes
│   ├── SkillBadge.tsx            # Marquee pill item (logos sized to 1.5× / 24px)
│   ├── SkillsMarquee.tsx         # Multi-speed infinite scroll galleries grouped by category
│   ├── sections/
│   │   ├── HeroSection.tsx       # Editorial intro, portrait frame + 3 concentric wireframe rings, CTAs
│   │   ├── AboutSection.tsx      # Philosophy/motivation narrative & SkillsMarquee integration
│   │   ├── ExperienceSection.tsx # Timeline section header wrapper
│   │   ├── ProjectsSection.tsx   # Engineering articles & system deep-dives cards
│   │   ├── ContactSection.tsx    # Direct channels (Email, GitHub, LinkedIn) & ContactForm
│   │   └── ContactForm.tsx       # Client form with validation & submit status
│   ├── experience/
│   │   ├── ExperienceTrackers.tsx# Tabs/headers separating Industry vs Academic tracks
│   │   ├── ExperienceCard.tsx    # Industry role card (triggers ExperienceModal)
│   │   ├── AcademicCard.tsx      # Academic/research card (triggers AcademicModal)
│   │   ├── ExperienceModal.tsx   # Detailed popup view for industry achievements
│   │   └── AcademicModal.tsx     # Detailed popup view for curriculum & research
│   └── markdown/
│       ├── MarkdownRenderer.tsx  # Rich GFM renderer for blog posts & technical articles
│       └── Mermaid.tsx           # Client-side dynamic Mermaid diagram renderer
```

### Key Visual Highlights
1. **Hero Portrait Rings (`HeroSection.tsx`)**:
   The portrait (`/hero_square_v2.jpg`) is wrapped in a `relative z-0 aspect-square` container with 3 concentric wireframe circles behind (`-z-10`, `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`, `pointer-events-none`) with cascading opacities (`0.04/0.06`, `0.03/0.04`, `0.02/0.02`).
2. **1.5× Skill Marquee Logos (`SkillBadge.tsx`)**:
   Marquee skill items display icons at `24px` (`w-6 h-6` / `sizes="24px"`) inside balanced `px-3.5 py-2` pills with `text-xs sm:text-sm font-medium` typography.

---

## 4. Single Source of Truth (`lib/data.ts`)

All content, links, skill items, project cards, and experience entries are centralized in `lib/data.ts` (`lib/types.ts` defines TypeScript interfaces). When deleting or modifying data:

- **`SKILLS_DATA`**: Array of `{ name, category, logo, url }`. To delete technologies from the marquee, remove them from this array.
- **`INDUSTRY_EXPERIENCE`**: Array of industry roles (`Arkham Technologies`, `MXAI`, `Entropía AI`, `Kuona`).
- **`ACADEMIC_EXPERIENCE`**: Array of academic entries (`UNAM`).
- **`HERO_DATA`**: Badge title, primary/secondary CTA copy, and hero statistics.
- **`SOCIAL_LINKS`**: Email, GitHub, and LinkedIn handles/URLs used across `ContactSection` and `Footer`.

---

## 5. Quick Commands

```bash
# Start local development server (Turbopack) on http://localhost:3000
bun dev

# Run ESLint across all components and pages
bun lint

# Build production bundle
bun run build
```

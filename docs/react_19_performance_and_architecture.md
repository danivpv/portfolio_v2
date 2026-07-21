# React 19 Performance & Architectural Patterns (`portfolio_v2`)

This document details how `portfolio_v2` leverages **React 19** and **Next.js 16 (Turbopack + App Router)** architectural capabilities to minimize client-side JavaScript overhead, optimize hydration, and deliver maximum execution speed.

---

## 1. Strict Server Component / Client Component Boundary Isolation

A fundamental performance pattern in React 19 and Next.js App Router is pushing interactive client-side logic down to the lowest possible branch of the component tree. This ensures static editorial content, headings, and data pipelines are rendered exclusively on the server (`0 kB` client bundle size).

### A. Contact Section Separation (`ContactSection.tsx` vs `ContactForm.tsx`)
Instead of marking the entire contact section as `"use client"`:
- **`ContactSection.tsx` (Server Component)**: Renders static headings, description typography, and social outreach links (`Email`, `GitHub`, `LinkedIn`) on the server during build time (`SSG/RSC`).
- **`ContactForm.tsx` (Client Component)**: Encapsulates *only* the `<form>` element and interactive inputs.

### B. Progressive Disclosure & Code Splitting (`ExperienceSection.tsx` vs Modals)
- **`ExperienceSection.tsx` & `SkillsMarquee.tsx`**: Renders section wrappers and static track loops natively on the server.
- **`ExperienceTrackers.tsx`**: Manages tab state (`Industry` vs. `Academic`) on the client.
- **Dynamic Imports (`next/dynamic`)**: Heavy modal components and their associated images (`ExperienceModal.tsx`, `AcademicModal.tsx`) are lazy-loaded via `next/dynamic({ ssr: false })`. Their code chunks are **only downloaded** when a user clicks a specific experience or research card.

---

## 2. React 19 Form Actions & Async State Management

Form handling across `portfolio_v2` embraces native React 19 primitives, eliminating manual `useState` loading flags, event `e.preventDefault()` handlers, and client-side network fetch boilerplate:

### A. `useActionState` (`ContactForm.tsx`)
```tsx
const [state, formAction] = useActionState(submitContactMessage, initialFormState);
```
- **Server Action (`app/actions/contact.ts`)**: Form submissions dispatch directly to an async server action (`submitContactMessage`) that validates payloads with Zod (`contactFormSchema`) and executes SendGrid API calls securely on the backend.
- **Progressive Enhancement**: Because `formAction` binds directly to `<form action={formAction}>`, form submission operates reliably while managing validation errors and success states without external state management libraries.

### B. `useFormStatus` (`SubmitButton` inside `ContactForm.tsx`)
```tsx
function SubmitButton({ status }: { status: ContactFormState["status"] }) {
  const { pending } = useFormStatus();
  // Automatically disables button and displays "Sending..." while server action runs
}
```
- `<SubmitButton />` reads its parent `<form>` submission lifecycle natively via `useFormStatus()`, preventing double-submissions and rendering instantaneous feedback during async server processing.

---

## 3. React 19 Compiler & Automatic Memoization

With React 19 and Next.js 16, the **React Compiler** automatically memoizes values and component render outputs at build time (`auto-memoization`).

- **Elimination of `useMemo` / `useCallback` Boilerplate**: Components such as `TableOfContents.tsx`, `ExperienceCard.tsx`, and `HeroSection.tsx` rely on the compiler to optimize re-renders automatically during scroll spy updates and theme toggling.
- **Pre-computed Server Data Loops**: Complex array transformations (such as grouping categories with `SKILLS_DATA.filter` or looping marquee items) are computed on the server (`AboutSection.tsx` / `SkillsMarquee.tsx`) during Static Site Generation (`SSG`). The client merely hydrates the finalized DOM structure without runtime computation cost (`O(1)` client execution).

---

## 4. Hydration Optimization & External Store Syncing

### `useSyncExternalStore` for Theme & Client-Only Hydration
When rendering client-specific elements (such as `theme-toggle.tsx`, `ContactForm.tsx`, or `TableOfContents.tsx`) inside SSR/SSG environments, `React.useSyncExternalStore` is used to prevent hydration mismatches cleanly without causing cascading re-render cycles:

```tsx
const mounted = React.useSyncExternalStore(
  () => () => {},
  () => true,
  () => false
);
```
- During Server-Side Rendering (`ssr`), `mounted` evaluates to `false`, rendering an exact-height skeleton placeholder (`bg-bg-card border-border-card`).
- Upon client hydration, `mounted` switches to `true`, instantly mounting interactive icons (`LuSun`, `LuMoon`, `<form>`) without layout shift (`CLS = 0`).

---

## 5. Client-Side Diagram Isolation (`Mermaid.tsx` & `MarkdownRenderer.tsx`)

To present complex architectural flows inside technical blog posts without bloating the global JavaScript bundle or slowing down page navigation:
- **Rich GFM Markdown (`react-markdown`)**: Server-rendered articles stream directly through `MarkdownRenderer.tsx`.
- **Dynamic Mermaid Engine**: When a code block specifies `language-mermaid`, `MermaidClient` is loaded asynchronously (`dynamic(() => import("./Mermaid"), { ssr: false })`).
- The heavy `mermaid.js` charting library remains completely isolated from the main SPA bundle, downloading and initializing *only* when a blog article containing an architecture diagram is actively viewed.

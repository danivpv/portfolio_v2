import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration supporting the Modular Typography System.
 * Note: In Tailwind CSS v4, these custom variables and theme tokens are also
 * natively exported via `@theme inline` inside `app/globals.css`.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", "Newsreader", "serif"],
        secondary: ["var(--font-secondary)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        background: "var(--bg-primary)",
        card: "var(--bg-card)",
        borderCard: "var(--border-card)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textMuted: "var(--text-muted)",
        accent: "var(--accent)",
        accentSubtle: "var(--accent-subtle)",
      },
    },
  },
  plugins: [],
};

export default config;

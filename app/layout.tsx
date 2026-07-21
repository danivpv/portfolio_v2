import type { Metadata } from "next";
import { Libre_Baskerville, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import FilmGrain from "@/components/FilmGrain";
/* import BackgroundOrbs from "@/components/BackgroundOrbs"; */
import "./globals.css";

const primaryFont = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const secondaryFont = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danivpv.com"),
  title: "Daniel Iván Parra Verde — Behind the MLOps, are the subsystems.",
  description:
    "Production machine learning systems, and AI agents.",
  openGraph: {
    title: "Daniel Iván Parra Verde - AI & ML Engineering",
    description:
      "Production machine learning systems, and AI agents.",
    url: "https://danivpv.com",
    siteName: "Daniel Iván Parra Verde",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://danivpv.com/opengraph-image.jpg",
        width: 1536,
        height: 807,
        alt: "Daniel Iván Parra Verde — AI & ML Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Iván Parra Verde - AI & ML Engineering",
    description:
      "Production machine learning systems, and AI agents.",
    images: ["https://danivpv.com/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${primaryFont.variable} ${secondaryFont.variable} ${monoFont.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="bg-bg-primary text-text-secondary font-secondary relative antialiased selection:bg-accent/30 min-h-screen overflow-visible"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Main App Content container with overflow-visible to allow 3D image pop-out */}
          <main className="relative z-10 overflow-visible">{children}</main>

          {/* CRITICAL FIX 1: The Film Grain Overlay mounted last so it covers all routes and stacking contexts */}
          <FilmGrain />
          {/* <BackgroundOrbs /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

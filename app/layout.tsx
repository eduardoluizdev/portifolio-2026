import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const title = "Eduardo Porciuncula | Desenvolvedor Full Stack Sênior";
const description =
  "Portfólio de Eduardo Porciuncula, desenvolvedor full stack sênior com 15+ anos de experiência em React, Next.js e Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Eduardo Porciuncula",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Front-end",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "Clean Code",
    "Design System",
  ],
  authors: [{ name: "Eduardo Porciuncula", url: SITE_URL }],
  creator: "Eduardo Porciuncula",
  publisher: "Eduardo Porciuncula",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} dark bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
      <GoogleAnalytics gaId="G-NHNWBER06J" />
    </html>
  );
}

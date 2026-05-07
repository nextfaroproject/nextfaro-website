import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextFaro Audiolibros",
  description:
    "Biblioteca de libros físicos recomendados para aprender, crecer y descubrir nuevas ideas.",
  icons: {
    icon: "/images/nextfaro-logo-transparent.png",
    shortcut: "/images/nextfaro-logo-transparent.png",
    apple: "/images/nextfaro-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full">{children}</body>
      <GoogleAnalytics gaId="G-45CZ07HLCH" />
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextfaroaudiolibros.com"),
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
      <body className="min-h-full">
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9244003532654006"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4SCZ07HLCH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4SCZ07HLCH');
          `}
        </Script>
      </body>
    </html>
  );
}

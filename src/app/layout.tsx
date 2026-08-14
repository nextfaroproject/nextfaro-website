import type { Metadata } from "next";
import Script from "next/script";
import { CookieConsent } from "@/components/cookie-consent";
import { JsonLd } from "@/components/json-ld";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Biblioteca de libros físicos recomendados para aprender, crecer y descubrir nuevas ideas.",
  icons: {
    icon: "/images/nextfaro-logo-transparent.png",
    shortcut: "/images/nextfaro-logo-transparent.png",
    apple: "/images/nextfaro-logo-transparent.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName,
    title: siteName,
    description:
      "Biblioteca editorial de libros físicos y audiolibros para aprender con criterio.",
    url: "/",
    images: ["/brand/nextfaro-hero-clean.png"],
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
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9244003532654006"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: siteName,
                url: siteUrl,
                logo: `${siteUrl}/images/nextfaro-logo-transparent.png`,
                sameAs: ["https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow"],
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: siteName,
                url: siteUrl,
                publisher: { "@id": `${siteUrl}/#organization` },
                inLanguage: "es",
              },
            ],
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

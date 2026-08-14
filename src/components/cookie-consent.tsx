"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const storageKey = "nextfaro-cookie-consent";
const consentEvent = "nextfaro-consent-change";

type Consent = "accepted" | "rejected" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function getConsent(): Consent {
  const value = window.localStorage.getItem(storageKey);
  return value === "accepted" || value === "rejected" ? value : null;
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(consentEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(consentEvent, onChange);
  };
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => null);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(storageKey, value);
    window.gtag?.("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied",
      ad_storage: value === "accepted" ? "granted" : "denied",
      ad_user_data: value === "accepted" ? "granted" : "denied",
      ad_personalization: value === "accepted" ? "granted" : "denied",
    });
    window.dispatchEvent(new Event(consentEvent));
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-4SCZ07HLCH"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4SCZ07HLCH', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <aside
          aria-label="Preferencias de cookies"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-lg border border-[#d6b15f]/35 bg-[#11100d] p-4 text-[#fff7e8] shadow-2xl sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[#fff7e8]/78">
              Usamos cookies de medición solo con tu permiso para conocer qué contenidos resultan útiles. Puedes aceptar o rechazar sin perder funciones del sitio. Consulta la{" "}
              <Link className="font-semibold text-[#e9c46a] underline" href="/privacidad">
                política de privacidad
              </Link>.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="rounded-md border border-[#fff7e8]/30 px-4 py-2 text-sm font-semibold transition hover:border-[#fff7e8]/60"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-md bg-[#d6b15f] px-4 py-2 text-sm font-bold text-[#11100d] transition hover:bg-[#e9c46a]"
              >
                Aceptar
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}

"use client";

export function CookiePreferences() {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem("nextfaro-cookie-consent");
        window.dispatchEvent(new Event("nextfaro-consent-change"));
      }}
      className="text-left transition hover:text-[#e9c46a]"
    >
      Preferencias de cookies
    </button>
  );
}

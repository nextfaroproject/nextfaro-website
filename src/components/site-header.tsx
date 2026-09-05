"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { youtubeUrl } from "@/lib/site";

const navLinks = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/blog", label: "Blog" },
  { href: "/audiolibros", label: "Audiolibros" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

type SiteHeaderProps = {
  theme?: "dark" | "light";
  overlay?: boolean;
  maxWidth?: "5xl" | "6xl" | "7xl";
  showCatalogCta?: boolean;
};

const maxWidthClasses = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export function SiteHeader({
  theme = "light",
  overlay = false,
  maxWidth = "7xl",
  showCatalogCta = false,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";
  const foreground = dark ? "text-[#fff7e8]" : "text-[#17130d]";
  const muted = dark ? "text-[#fff7e8]/76" : "text-[#4b4030]";

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
      className={`${overlay ? "relative z-20" : "border-b border-[#b88a2d]/16 bg-[#fffaf1]/96"} px-5 py-4 sm:px-8 lg:px-10`}
    >
      <div className={`relative mx-auto flex w-full ${maxWidthClasses[maxWidth]} items-center justify-between gap-4`}>
        <Link
          href="/"
          className={`flex min-w-0 items-center gap-3 ${foreground}`}
          aria-label="Ir al inicio de NextFaro Audiolibros"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/nextfaro-logo-transparent.png"
            alt=""
            width={42}
            height={42}
            priority
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="truncate text-sm font-semibold sm:text-base">
            NextFaro Audiolibros
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label="Navegación principal" className={`flex items-center gap-6 text-sm ${muted}`}>
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b py-2 transition-colors ${
                    active
                      ? "border-[#b88a2d] font-semibold text-[#9a6a12]"
                      : `border-transparent ${dark ? "hover:text-[#e9c46a]" : "hover:text-[#8a5d12]"}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-b border-transparent py-2 transition-colors ${dark ? "hover:text-[#e9c46a]" : "hover:text-[#8a5d12]"}`}
            >
              YouTube
            </a>
          </nav>

          {showCatalogCta ? (
            <a
              href="#catalogo"
              className="rounded-md border border-[#e9c46a]/65 px-4 py-2.5 text-sm font-semibold text-[#fff7e8] transition-colors hover:border-[#fff7e8] hover:bg-[#fff7e8] hover:text-[#080807]"
            >
              Ver libros
            </a>
          ) : null}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border lg:hidden ${
            dark
              ? "border-[#fff7e8]/22 bg-[#070706]/30 text-[#fff7e8]"
              : "border-[#b88a2d]/24 bg-[#fffaf1] text-[#17130d]"
          }`}
        >
          {open ? (
            <span className="text-2xl font-light leading-none" aria-hidden="true">
              ×
            </span>
          ) : (
            <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-5 bg-current" />
            </span>
          )}
        </button>

        {open ? (
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            className={`absolute inset-x-0 top-[calc(100%+0.75rem)] z-30 overflow-hidden rounded-md border p-2 shadow-[0_18px_44px_rgba(0,0,0,0.22)] lg:hidden ${
              dark
                ? "border-[#fff7e8]/14 bg-[#11100d]/98 text-[#fff7e8]"
                : "border-[#b88a2d]/18 bg-[#fffaf1] text-[#17130d]"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between border-b border-current/10 px-3 text-sm font-semibold last:border-0"
              >
                {link.label}
                {pathname === link.href || pathname.startsWith(`${link.href}/`) ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b88a2d]" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center px-3 text-sm font-semibold"
            >
              YouTube
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

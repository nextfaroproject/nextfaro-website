import Image from "next/image";
import Link from "next/link";
import { CookiePreferences } from "@/components/cookie-preferences";

const footerLinks = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/blog", label: "Blog" },
  { href: "/audiolibros", label: "Audiolibros" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/politica-editorial", label: "Política editorial" },
  { href: "/contacto", label: "Contacto" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/divulgacion-afiliados", label: "Afiliados" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e9c46a]/14 bg-[#070706] px-5 py-7 text-[#fff7e8] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-[#fff7e8]/10 pb-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex w-fit items-center gap-3 transition hover:text-[#e9c46a]">
            <Image
              src="/images/nextfaro-logo-transparent.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="text-sm font-semibold">NextFaro Audiolibros</span>
          </Link>
          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#fff7e8]/58"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-9 items-center transition hover:text-[#e9c46a]"
              >
                {link.label}
              </Link>
            ))}
            <CookiePreferences />
          </nav>
        </div>
        <p className="pt-5 text-xs leading-5 text-[#fff7e8]/42">
          © 2026 NextFaro Audiolibros. Selección editorial para leer,
          escuchar y aprender con criterio.
        </p>
      </div>
    </footer>
  );
}

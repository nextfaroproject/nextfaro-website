import Link from "next/link";
import { CookiePreferences } from "@/components/cookie-preferences";

const legalLinks = [
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
    <footer className="border-t border-[#e9c46a]/14 bg-[#070706] px-5 py-6 text-[#fff7e8] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#fff7e8]/54 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="transition hover:text-[#e9c46a]">
          NextFaro Audiolibros
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#e9c46a]"
            >
              {link.label}
            </Link>
          ))}
          <CookiePreferences />
        </nav>
      </div>
    </footer>
  );
}

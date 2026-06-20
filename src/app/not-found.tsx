import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex flex-1 items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b15f]">
            Página no encontrada
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold">
            Esta página no existe
          </h1>
          <p className="mt-4 text-base leading-7 text-[#fff7e8]/70">
            Puede que el enlace haya cambiado o que la dirección esté escrita
            con algún error. Puedes volver al inicio, visitar el blog o revisar
            el catálogo recomendado.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-md bg-[#d6b15f] px-5 py-3 text-sm font-bold text-[#11100d] transition hover:bg-[#f0d27a]"
            >
              Volver al inicio
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-[#fff7e8]/24 px-5 py-3 text-sm font-semibold text-[#fff7e8] transition hover:border-[#fff7e8] hover:bg-[#fff7e8]/10"
            >
              Ir al blog
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

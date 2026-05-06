import { LegalPageHeader } from "@/components/legal-page-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex flex-1 items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <LegalPageHeader />

          <div className="mt-8 rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="font-serif text-4xl font-semibold text-[#fff7e8]">
              Contacto
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#fff7e8]/72">
              Para consultas, colaboraciones o información sobre NextFaro
              Audiolibros, puedes escribir a:
            </p>
            <a
              href="mailto:contacto@nextfaro.com"
              className="mt-5 inline-block text-lg font-semibold text-[#d6b15f] transition hover:text-[#fff7e8]"
            >
              contacto@nextfaro.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

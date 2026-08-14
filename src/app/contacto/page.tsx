import type { Metadata } from "next";

import { LegalPageHeader } from "@/components/legal-page-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con NextFaro Audiolibros para consultas, sugerencias, colaboraciones o información editorial.",
  alternates: { canonical: "/contacto" },
};

const contactReasons = [
  "Consultas generales sobre el proyecto NextFaro Audiolibros.",
  "Sugerencias de libros, temas o artículos relacionados con lectura y aprendizaje.",
  "Colaboraciones editoriales o propuestas alineadas con el enfoque del sitio.",
  "Avisos sobre enlaces, información que deba actualizarse o mejoras de contenido.",
];

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex flex-1 items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <LegalPageHeader />

          <div className="mt-8 rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b15f]">
              Comunicación directa
            </p>
            <h1 className="font-serif text-4xl font-semibold text-[#fff7e8]">
              Contacto
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#fff7e8]/72">
              NextFaro Audiolibros es un proyecto editorial independiente sobre
              lectura, libros físicos, audiolibros y aprendizaje continuo. Si
              quieres comunicarte con el proyecto, puedes hacerlo de forma clara
              y sencilla por correo.
            </p>

            <div className="mt-7 rounded-lg border border-[#e9c46a]/12 bg-[#070706]/35 p-5">
              <h2 className="font-serif text-2xl font-semibold">
                Puedes escribir para:
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-[#fff7e8]/72">
                {contactReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

            <p className="mt-7 text-base leading-7 text-[#fff7e8]/72">
              Email de contacto:
            </p>
            <a
              href="mailto:nextfaroproject@gmail.com"
              className="mt-2 inline-block text-lg font-semibold text-[#d6b15f] transition hover:text-[#fff7e8]"
            >
              nextfaroproject@gmail.com
            </a>

            <p className="mt-6 text-sm leading-6 text-[#fff7e8]/58">
              El correo se revisa con intención de responder mensajes
              relevantes para el proyecto. No se solicita información sensible
              ni datos de pago a través de esta página.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

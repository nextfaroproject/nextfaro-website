import type { Metadata } from "next";

import { LegalPageHeader } from "@/components/legal-page-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Términos y condiciones | NextFaro Audiolibros",
  description:
    "Condiciones de uso, enlaces externos, afiliados y limitación de responsabilidad de NextFaro Audiolibros.",
};

const sections = [
  {
    title: "Uso informativo del sitio",
    body: [
      "NextFaro Audiolibros publica contenido informativo y editorial sobre libros, audiolibros, lectura, aprendizaje, hábitos, finanzas personales, filosofía, productividad y desarrollo personal.",
      "El contenido se ofrece para orientar, inspirar y ayudar al lector a descubrir ideas y recursos. No garantiza resultados específicos.",
    ],
  },
  {
    title: "No es asesoramiento profesional",
    body: [
      "La información publicada en este sitio no debe interpretarse como asesoramiento financiero, legal, médico, psicológico, fiscal ni profesional.",
      "Cada lector es responsable de evaluar si una idea, libro o recurso se ajusta a sus circunstancias. Para decisiones importantes, se recomienda consultar con un profesional cualificado.",
    ],
  },
  {
    title: "Enlaces externos",
    body: [
      "El sitio puede incluir enlaces hacia plataformas, tiendas, canales, servicios o recursos externos. Al hacer clic en ellos, estarás navegando fuera de NextFaro Audiolibros.",
      "No controlamos el contenido, disponibilidad, precios, políticas, condiciones de compra, envíos, devoluciones o cambios realizados por sitios externos.",
    ],
  },
  {
    title: "Enlaces de afiliado",
    body: [
      "Algunos enlaces pueden ser enlaces de afiliado. Si realizas una compra a través de ellos, NextFaro Audiolibros puede recibir una comisión sin costo adicional para ti.",
      "Los enlaces de afiliado ayudan a sostener el proyecto, pero no deben entenderse como una obligación de compra. El usuario decide libremente si visita un sitio externo o adquiere un producto.",
    ],
  },
  {
    title: "Limitación de responsabilidad",
    body: [
      "NextFaro Audiolibros procura publicar contenido claro y útil, pero no garantiza que toda la información sea completa, permanente o aplicable a todos los casos.",
      "No somos responsables por decisiones tomadas exclusivamente a partir del contenido del sitio ni por problemas derivados de compras, servicios o información ofrecida por terceros.",
    ],
  },
  {
    title: "Disponibilidad y cambios del contenido",
    body: [
      "El sitio puede actualizar, modificar o retirar contenidos, enlaces, artículos, recomendaciones o secciones sin aviso previo.",
      "También pueden producirse interrupciones técnicas temporales por mantenimiento, actualizaciones o problemas externos.",
    ],
  },
  {
    title: "Propiedad del contenido",
    body: [
      "Los textos, estructura editorial, diseño y contenidos propios de NextFaro Audiolibros pertenecen al proyecto, salvo materiales de terceros usados conforme a sus condiciones.",
      "No se permite copiar o republicar contenidos completos sin autorización. Sí puedes compartir enlaces hacia las páginas del sitio.",
    ],
  },
  {
    title: "Contacto",
    body: [
      "Para preguntas sobre estos términos, puedes escribir a nextfaroproject@gmail.com.",
    ],
  },
];

export default function TerminosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex-1 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <LegalPageHeader />

          <div className="mt-8 rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="font-serif text-4xl font-semibold text-[#fff7e8]">
              Términos y condiciones
            </h1>
            <p className="mt-5 text-base leading-7 text-[#fff7e8]/72">
              Estos términos regulan el uso informativo de NextFaro Audiolibros
              y explican la relación del sitio con enlaces externos y de
              afiliado.
            </p>

            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-serif text-2xl font-semibold text-[#fff7e8]">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-4 text-base leading-7 text-[#fff7e8]/72">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}

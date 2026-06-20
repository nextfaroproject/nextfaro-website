import type { Metadata } from "next";

import { LegalPageHeader } from "@/components/legal-page-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Política de privacidad | NextFaro Audiolibros",
  description:
    "Información sobre privacidad, cookies, enlaces de afiliado y analítica en NextFaro Audiolibros.",
};

const sections = [
  {
    title: "Quiénes somos",
    body: [
      "NextFaro Audiolibros es un sitio editorial sobre libros físicos, audiolibros, lectura, aprendizaje continuo, desarrollo personal, finanzas personales, hábitos, filosofía y productividad.",
      "El objetivo del sitio es compartir recomendaciones, artículos y recursos informativos para ayudar a los lectores a descubrir ideas útiles y elegir mejor sus próximas lecturas.",
    ],
  },
  {
    title: "Qué información puede recopilarse",
    body: [
      "NextFaro no solicita cuentas de usuario, contraseñas ni datos personales sensibles para navegar por el contenido público del sitio.",
      "Como ocurre en muchos sitios web, pueden recopilarse datos técnicos básicos, como páginas visitadas, tipo de dispositivo, navegador, país aproximado, fecha de visita o interacciones generales. Esta información se usa para entender el funcionamiento del sitio y mejorar la experiencia.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "El sitio puede utilizar cookies u otras tecnologías similares para recordar preferencias, medir el uso del sitio, mejorar la navegación y mantener funciones técnicas necesarias.",
      "Puedes bloquear, eliminar o configurar cookies desde las opciones de privacidad de tu navegador. Ten en cuenta que algunas funciones podrían comportarse de forma limitada si bloqueas todas las cookies.",
    ],
  },
  {
    title: "Servicios externos de terceros",
    body: [
      "El sitio puede integrar herramientas externas para medición técnica, rendimiento, seguridad o comprensión general del uso de la web.",
      "Estas herramientas pueden utilizar cookies o tecnologías similares según sus propias condiciones y la configuración de privacidad del navegador, del dispositivo o de la cuenta del usuario.",
    ],
  },
  {
    title: "Enlaces de afiliado",
    body: [
      "Algunos enlaces del sitio pueden ser enlaces de afiliado. Si compras un libro o producto a través de esos enlaces, NextFaro Audiolibros puede recibir una comisión sin costo adicional para ti.",
      "La existencia de enlaces de afiliado no cambia el enfoque editorial del sitio: buscamos recomendar libros y contenidos que puedan aportar valor real al lector.",
    ],
  },
  {
    title: "Enlaces externos",
    body: [
      "El sitio puede incluir enlaces hacia plataformas, tiendas, canales, herramientas o recursos externos. Al hacer clic en esos enlaces, estarás visitando sitios que tienen sus propias políticas de privacidad, cookies y condiciones de uso.",
      "NextFaro Audiolibros no controla las prácticas de privacidad de sitios externos.",
    ],
  },
  {
    title: "Analítica y medición de tráfico",
    body: [
      "NextFaro puede utilizar herramientas de medición como Google Analytics para entender qué contenidos resultan más útiles, cómo navegan los usuarios y qué áreas del sitio pueden mejorar.",
      "Estos datos se analizan de forma agregada y no se usan para solicitar información personal sensible al visitante.",
    ],
  },
  {
    title: "Contacto",
    body: [
      "Si tienes preguntas sobre esta política de privacidad o sobre el uso del sitio, puedes escribir a nextfaroproject@gmail.com.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex-1 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <LegalPageHeader />

          <div className="mt-8 rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d6b15f]">
              Última actualización: 18 de junio de 2026
            </p>
            <h1 className="font-serif text-4xl font-semibold text-[#fff7e8]">
              Política de privacidad
            </h1>
            <p className="mt-5 text-base leading-7 text-[#fff7e8]/72">
              Esta política explica de forma clara cómo puede tratarse la
              información relacionada con el uso de NextFaro Audiolibros.
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

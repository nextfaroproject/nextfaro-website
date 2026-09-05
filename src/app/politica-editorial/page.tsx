import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Política editorial",
  description:
    "Conoce cómo NextFaro Audiolibros selecciona libros, redacta contenidos y maneja enlaces de afiliado con independencia editorial.",
  alternates: { canonical: "/politica-editorial" },
};

const sections = [
  {
    title: "Cómo seleccionamos los libros",
    text: "Los libros recomendados en NextFaro se eligen por su relevancia, utilidad, reconocimiento, impacto cultural o capacidad para aportar ideas prácticas. Prestamos atención a temas como desarrollo personal, hábitos, finanzas, emprendimiento, filosofía, comunicación, productividad y aprendizaje.",
  },
  {
    title: "Criterios de recomendación",
    text: "Al seleccionar un libro consideramos si puede ayudar al lector a pensar mejor, aprender algo nuevo, mejorar un hábito, entender mejor el dinero, fortalecer su criterio o ampliar su perspectiva personal y profesional.",
  },
  {
    title: "Contenido original",
    text: "Los artículos publicados en el blog de NextFaro son redactados con intención informativa y educativa. Buscamos que cada texto aporte contexto, ideas útiles y orientación clara para quienes desean leer más, aprender mejor o elegir su próximo libro.",
  },
  {
    title: "Cómo escribimos los artículos",
    text: "Cada artículo intenta responder una necesidad concreta del lector: crear hábito, elegir mejor, concentrarse, recordar ideas o aplicar conocimiento. Evitamos publicar textos vacíos y preferimos incluir ejemplos, errores comunes, recomendaciones editoriales y rutas de lectura.",
  },
  {
    title: "Revisión y actualización",
    text: "El contenido puede revisarse para corregir errores, mejorar claridad, actualizar enlaces, ampliar explicaciones o mantener la información alineada con el enfoque editorial del proyecto.",
  },
  {
    title: "Enlaces de afiliado",
    text: "Algunos enlaces del sitio pueden ser enlaces de afiliado. Esto significa que, si realizas una compra a través de esos enlaces, NextFaro Audiolibros puede recibir una comisión sin costo adicional para ti. La presencia de enlaces de afiliado no cambia nuestro objetivo editorial: recomendar libros y contenidos que consideramos útiles.",
  },
  {
    title: "Independencia editorial",
    text: "Las recomendaciones no deben entenderse como asesoramiento financiero, legal, médico o profesional. Cada lector debe evaluar si un libro o recurso se ajusta a sus intereses y necesidades.",
  },
  {
    title: "Actualización del contenido",
    text: "Podemos actualizar artículos, descripciones o recomendaciones para mejorar la claridad, corregir información o mantener el sitio relevante.",
  },
  {
    title: "Qué publicamos",
    text: "Publicamos recomendaciones de libros, guías de lectura, artículos sobre aprendizaje, hábitos, finanzas personales, emprendimiento, comunicación, filosofía, productividad y audiolibros. El contenido busca ayudar a leer mejor y pensar con más profundidad.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f0e4] text-[#17130d]">
      <SiteHeader maxWidth="6xl" />

      <section className="mx-auto w-full max-w-4xl px-6 py-14 sm:py-18">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#a77a22]">
            Transparencia editorial
          </p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#17130d] sm:text-5xl">
            Política editorial
          </h1>
        </div>

        <article className="border-t border-[#b88a2d]/25 pt-8">
          <p className="text-base leading-8 text-[#40382d] sm:text-lg">
            En NextFaro Audiolibros queremos ofrecer recomendaciones y artículos
            que aporten valor real al lector. Esta política editorial explica
            cómo seleccionamos los libros, cómo redactamos nuestros contenidos y
            cómo manejamos los enlaces de afiliado.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="border-t border-[#b88a2d]/18 pt-7"
              >
                <h2 className="mb-3 font-serif text-2xl font-semibold text-[#17130d]">
                  {section.title}
                </h2>
                <p className="text-base leading-8 text-[#40382d]">
                  {section.text}
                </p>
              </section>
            ))}

            <section className="border-t border-[#b88a2d]/18 pt-7">
              <h2 className="mb-3 font-serif text-2xl font-semibold text-[#17130d]">
                Contacto editorial
              </h2>
              <p className="text-base leading-8 text-[#40382d]">
                Si tienes preguntas, sugerencias o deseas comunicarte con
                NextFaro Audiolibros, puedes escribir a:{" "}
                <a
                  href="mailto:nextfaroproject@gmail.com"
                  className="font-semibold text-[#9a6d18] underline-offset-4 transition-colors hover:text-[#6f4b0f] hover:underline"
                >
                  nextfaroproject@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}

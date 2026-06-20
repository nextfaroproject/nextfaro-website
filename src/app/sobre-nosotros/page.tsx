import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";

const youtubeUrl = "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";

export const metadata: Metadata = {
  title: "Sobre NextFaro Audiolibros",
  description:
    "Conoce la misión de NextFaro Audiolibros y el enfoque detrás de sus recomendaciones de libros, audiolibros y aprendizaje continuo.",
};

const navLinks = [
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

const sections = [
  {
    title: "Quién está detrás del proyecto",
    text: "NextFaro es impulsado por una persona interesada en la lectura, los audiolibros y el aprendizaje continuo. No buscamos convertir el sitio en una tienda de enlaces, sino en un espacio editorial donde cada recomendación tenga contexto y propósito.",
  },
  {
    title: "Nuestra misión",
    text: "Ayudar a más personas a acercarse al conocimiento mediante libros, audiolibros y contenidos prácticos que puedan aplicar en su vida diaria.",
  },
  {
    title: "Criterios de selección",
    text: "Seleccionamos libros por su utilidad, claridad, relevancia cultural, capacidad de abrir preguntas o potencial para ayudar al lector a tomar mejores decisiones. No todos los libros sirven para todas las etapas, por eso intentamos orientar con categorías y artículos complementarios.",
  },
  {
    title: "Por qué existen los audiolibros",
    text: "Los audiolibros permiten aprender mientras caminamos, manejamos, trabajamos o descansamos. Para muchas personas, escuchar también es una forma poderosa de leer, reflexionar y mantenerse en contacto con ideas valiosas.",
  },
  {
    title: "Qué tipo de contenido compartimos",
    text: "En NextFaro encontrarás recomendaciones de libros, artículos sobre hábitos de lectura, aprendizaje continuo, desarrollo personal, finanzas personales, emprendimiento y temas que ayudan a pensar con más profundidad.",
  },
  {
    title: "Nuestro compromiso",
    text: "Queremos que el sitio sea claro, útil y honesto. Algunos enlaces pueden ser de afiliado, lo que significa que podemos recibir una comisión si una persona compra a través de ellos, sin costo adicional para el usuario. Esto ayuda a sostener el proyecto.",
  },
  {
    title: "Libros físicos, audio y aprendizaje continuo",
    text: "Defendemos una relación flexible con el conocimiento: leer en papel cuando se necesita profundidad, escuchar audiolibros cuando se busca continuidad y volver a las ideas importantes cuando llega el momento de aplicarlas.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f0e4] text-[#17130d]">
      <header className="border-b border-[#b88a2d]/20 bg-[#fffaf1]/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-wide text-[#17130d]"
          >
            NextFaro Audiolibros
          </Link>

          <nav className="flex flex-wrap gap-4 text-sm font-medium text-[#4f4535]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#a77a22]"
              >
                {link.label}
              </Link>
            ))}
            <a
              className="transition-colors hover:text-[#a77a22]"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-4xl px-6 py-14 sm:py-18">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#a77a22]">
            Conoce el proyecto
          </p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#17130d] sm:text-5xl">
            Sobre NextFaro Audiolibros
          </h1>
        </div>

        <article className="rounded-lg border border-[#b88a2d]/20 bg-[#fffaf1] p-6 shadow-[0_18px_45px_rgba(45,32,12,0.08)] sm:p-9">
          <div className="space-y-5 text-base leading-8 text-[#40382d] sm:text-lg">
            <p>
              NextFaro Audiolibros nace de una idea sencilla: el conocimiento
              puede acompañarnos todos los días.
            </p>
            <p>
              Detrás de este proyecto hay una persona apasionada por la lectura,
              los audiolibros y el aprendizaje continuo. La intención de
              NextFaro es reunir libros, ideas y recomendaciones que ayuden a
              crecer, pensar mejor y mantenerse actualizado en un mundo que
              cambia constantemente.
            </p>
            <p>
              Creemos que la mente funciona como un software: si no se
              actualiza, se queda atrás. Leer, escuchar audiolibros y exponerse
              a nuevas ideas nos ayuda a ampliar la perspectiva, mejorar nuestro
              criterio y evolucionar como personas.
            </p>
            <p>
              En NextFaro compartimos contenidos relacionados con desarrollo
              personal, finanzas, tecnología, productividad, filosofía,
              comunicación, hábitos y aprendizaje. No buscamos recomendar libros
              al azar, sino destacar obras que puedan aportar algo útil al lector
              o al oyente.
            </p>
            <p>
              Este sitio combina una biblioteca recomendada con artículos
              originales sobre lectura, aprendizaje y crecimiento personal. El
              objetivo es que cada visitante pueda descubrir un libro, una idea o
              una reflexión que le ayude a avanzar con más claridad.
            </p>
          </div>

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
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}

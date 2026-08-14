import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogExplorer } from "@/components/blog-explorer";
import { SiteFooter } from "@/components/site-footer";
import { blogArticles } from "@/data/blog";

const youtubeUrl = "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";

export const metadata: Metadata = {
  title: "Blog de lectura, libros y aprendizaje",
  description:
    "Guías originales sobre lectura, libros físicos, aprendizaje, finanzas personales y desarrollo personal.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <header className="border-b border-[#b88a2d]/18 bg-[#fffaf1]/95 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Volver a NextFaro Audiolibros"
          >
            <Image
              src="/images/nextfaro-logo-transparent.png"
              alt="NextFaro Audiolibros"
              width={42}
              height={42}
              priority
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="truncate text-sm font-semibold text-[#17130d] sm:text-base">
              NextFaro Audiolibros
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#4b4030]">
            <Link className="transition hover:text-[#a77518]" href="/catalogo">
              Catálogo
            </Link>
            <Link className="font-semibold text-[#9a6a12]" href="/blog">
              Blog
            </Link>
            <Link
              className="transition hover:text-[#a77518]"
              href="/sobre-nosotros"
            >
              Sobre nosotros
            </Link>
            <Link className="transition hover:text-[#a77518]" href="/audiolibros">
              Audiolibros
            </Link>
            <a
              className="transition hover:text-[#a77518]"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-[#b88a2d]/18 bg-[#fffaf1] px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 w-fit border-l-2 border-[#b88a2d] bg-[#f0dfbd]/55 px-4 py-2 text-sm font-medium text-[#7a5313]">
            Lectura, aprendizaje y libros recomendados
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#17130d] sm:text-5xl">
            Blog de NextFaro
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#514636] sm:text-lg">
            Guías y artículos originales para leer mejor, elegir libros con más
            criterio, crear hábitos de lectura y aplicar ideas útiles en la vida
            diaria. El blog complementa la biblioteca recomendada con contexto,
            consejos prácticos y reflexión editorial.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[#b88a2d]/18 bg-[#f7ecd9] p-4">
              <h2 className="font-serif text-lg font-semibold">
                Lectura práctica
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5b5142]">
                Métodos sencillos para leer con constancia, recordar mejor y
                usar cada libro como herramienta de aprendizaje.
              </p>
            </div>
            <div className="rounded-lg border border-[#b88a2d]/18 bg-[#f7ecd9] p-4">
              <h2 className="font-serif text-lg font-semibold">
                Recomendaciones con criterio
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5b5142]">
                Ideas para elegir libros según tu momento: hábitos, finanzas,
                comunicación, filosofía, emprendimiento o propósito.
              </p>
            </div>
            <div className="rounded-lg border border-[#b88a2d]/18 bg-[#f7ecd9] p-4">
              <h2 className="font-serif text-lg font-semibold">
                Aprendizaje continuo
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5b5142]">
                Reflexiones sobre cómo combinar lectura física, audiolibros y
                contenido educativo sin caer en consumo automático.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl"><BlogExplorer articles={blogArticles} /></div>
      </section>

      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { blogArticles } from "@/data/blog";

const youtubeUrl = "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";

export const metadata: Metadata = {
  title: "Blog | NextFaro Audiolibros",
  description:
    "Guías originales sobre lectura, libros físicos, aprendizaje, finanzas personales y desarrollo personal.",
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
            <Link className="transition hover:text-[#a77518]" href="/#catalogo">
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#c9a95b]/24 bg-[#fffaf1] shadow-[0_14px_36px_rgba(55,39,18,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b88a2d]/48 hover:shadow-[0_20px_50px_rgba(55,39,18,0.14)]"
            >
              <Link
                href={`/blog/${article.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-[#e9dcc6]"
                aria-label={`Leer artículo: ${article.title}`}
              >
                <Image
                  src={article.image}
                  alt={`Imagen destacada de ${article.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#17130d]/24 to-transparent" />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a6a12]">
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="mt-3 font-serif text-xl leading-tight text-[#17130d]">
                  {article.title}
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[#5b5142]">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 w-fit rounded-full border border-[#b88a2d]/70 bg-[#b88a2d] px-4 py-2 text-xs font-bold text-[#fffaf1] transition-all duration-300 hover:bg-transparent hover:text-[#8a5d12]"
                >
                  Leer artículo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

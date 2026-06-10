import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { blogArticles } from "@/data/blog";

const youtubeUrl = "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";

export const metadata: Metadata = {
  title: "Blog | NextFaro Audiolibros",
  description:
    "Articulos sobre lectura, libros fisicos, aprendizaje, finanzas personales y desarrollo personal.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#070706] text-[#fff7e8]">
      <header className="border-b border-[#e9c46a]/14 bg-[#070706]/95 px-5 py-5 sm:px-8 lg:px-10">
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
            <span className="truncate text-sm font-semibold text-[#fff7e8] sm:text-base">
              NextFaro Audiolibros
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#fff7e8]/76">
            <Link className="transition hover:text-[#e9c46a]" href="/">
              Inicio
            </Link>
            <Link className="transition hover:text-[#e9c46a]" href="/#catalogo">
              Catalogo
            </Link>
            <Link className="text-[#e9c46a]" href="/blog">
              Blog
            </Link>
            <a
              className="transition hover:text-[#e9c46a]"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-[#e9c46a]/14 bg-[#0c0c0a] px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 w-fit border-l-2 border-[#e9c46a] bg-[#fff7e8]/[0.035] px-4 py-2 text-sm font-medium text-[#f2d991]">
            Lectura, aprendizaje y libros recomendados
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#fff7e8] sm:text-5xl">
            Blog de NextFaro
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#fff7e8]/68 sm:text-lg">
            Guias y articulos originales para leer mejor, elegir buenos libros
            y convertir el conocimiento en una practica diaria.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#d6b15f]/12 bg-[#fff7e8]/[0.025] shadow-[0_12px_36px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b15f]/42 hover:bg-[#fff7e8]/[0.045] hover:shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
            >
              <Link
                href={`/blog/${article.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-[#11100d]"
                aria-label={`Leer artículo: ${article.title}`}
              >
                <Image
                  src={article.image}
                  alt={`Imagen destacada de ${article.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#070706]/50 to-transparent" />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d6b15f]/78">
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="mt-3 font-serif text-xl leading-tight text-[#fff7e8]">
                  {article.title}
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[#fff7e8]/62">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 w-fit rounded-full border border-[#d6b15f]/70 bg-[#d6b15f] px-4 py-2 text-xs font-bold text-[#11100d] transition-all duration-300 hover:bg-transparent hover:text-[#f0d27a]"
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { SiteFooter } from "@/components/site-footer";
import { bookCategories } from "@/data/categories";
import { books } from "@/data/books";
import { bookGuides } from "@/data/book-guides";
import { youtubeUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo editorial de libros",
  description: "Explora libros por categoría, autor u objetivo y accede a guías críticas con contexto, límites y propuestas de lectura.",
  alternates: { canonical: "/catalogo" },
  openGraph: { title: "Catálogo editorial de NextFaro", description: "Libros y guías para elegir con criterio.", url: "/catalogo" },
};

export default function CatalogPage() {
  const catalogBooks = books.map((book) => ({
    ...book,
    slug: bookGuides.find((guide) => guide.title === book.title)?.slug,
  }));

  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <header className="border-b border-[#b88a2d]/18 bg-[#fffaf1] px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3"><Image src="/images/nextfaro-logo-transparent.png" alt="NextFaro Audiolibros" width={42} height={42} className="h-10 w-10 object-contain" /><span className="font-semibold">NextFaro Audiolibros</span></Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#4b4030]"><Link className="font-semibold text-[#8a5d12]" href="/catalogo">Catálogo</Link><Link href="/blog">Blog</Link><Link href="/audiolibros">Audiolibros</Link><Link href="/sobre-nosotros">Sobre nosotros</Link><a href={youtubeUrl} target="_blank" rel="noopener noreferrer">YouTube</a></nav>
        </div>
      </header>

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Catálogo", href: "/catalogo" }]} />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">Biblioteca comentada</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Elige tu próxima lectura con más contexto y menos impulso.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#514636]">Cada ficha explica qué propone el libro, qué límites conviene considerar y con qué otra obra puede compararse. El buscador permite explorar la biblioteca sin depender de una lista de compra.</p>

          <nav aria-label="Categorías del catálogo" className="mt-7 flex flex-wrap gap-2">
            {bookCategories.map((category) => <Link key={category.slug} href={`/categoria/${category.slug}`} className="rounded-full border border-[#9a6a12]/30 bg-[#fffaf1] px-3 py-2 text-sm font-semibold text-[#6f4a0b] transition hover:border-[#9a6a12]">{category.name}</Link>)}
          </nav>

          <CatalogExplorer books={catalogBooks} />
          <p className="mt-8 max-w-3xl text-xs leading-6 text-[#6b5d49]">Algunos enlaces de las fichas pueden ser de afiliado. La presencia de un enlace no determina nuestra selección ni sustituye la evaluación editorial. Consulta la <Link className="font-semibold underline" href="/divulgacion-afiliados">divulgación de afiliados</Link>.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

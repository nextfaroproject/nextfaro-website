import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { SiteFooter } from "@/components/site-footer";
import { bookCategories, getBookCategory } from "@/data/categories";
import { books } from "@/data/books";
import { bookGuides } from "@/data/book-guides";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return bookCategories.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getBookCategory((await params).slug);
  if (!category) return { title: "Categoría no encontrada" };
  return {
    title: category.title,
    description: category.description[0],
    alternates: { canonical: `/categoria/${category.slug}` },
    openGraph: { title: category.title, description: category.description[0], url: `/categoria/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = getBookCategory((await params).slug);
  if (!category) notFound();
  const categoryBooks = books.filter((book) => book.category === category.name).map((book) => ({ ...book, slug: bookGuides.find((guide) => guide.title === book.title)?.slug }));

  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Catálogo", href: "/catalogo" }, { label: category.name, href: `/categoria/${category.slug}` }]} />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">Categoría editorial</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">{category.title}</h1>
          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-[#514636]">{category.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <CatalogExplorer books={categoryBooks} />
          <Link href="/catalogo" className="mt-10 inline-flex rounded-md border border-[#9a6a12]/40 px-4 py-2 text-sm font-semibold text-[#6f4a0b]">Ver todo el catálogo</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

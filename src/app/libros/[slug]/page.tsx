import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialAuthor } from "@/components/editorial-author";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getBlogArticle } from "@/data/blog";
import { getBookEditorial } from "@/data/book-editorials";
import { bookGuides, getBookGuide } from "@/data/book-guides";
import { books } from "@/data/books";
import { absoluteUrl, editorialAuthor, siteName } from "@/lib/site";

type BookPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return bookGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBookGuide(slug);
  const book = guide ? books.find((item) => item.title === guide.title) : undefined;

  if (!guide || !book) return { title: "Libro no encontrado" };

  return {
    title: `${book.title}, de ${book.author}: guía crítica de lectura`,
    description: guide.deck,
    alternates: { canonical: `/libros/${guide.slug}` },
    openGraph: {
      title: `${book.title}, de ${book.author}`,
      description: guide.deck,
      images: [{ url: book.image, alt: `Imagen editorial de ${book.title}` }],
      type: "article",
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const guide = getBookGuide(slug);
  const editorial = getBookEditorial(slug);
  const book = guide ? books.find((item) => item.title === guide.title) : undefined;

  if (!guide || !book || !editorial) notFound();

  const relatedBook = getBookGuide(editorial.relatedBookSlug);
  const relatedArticles = guide.relatedArticles
    .map((articleSlug) => getBlogArticle(articleSlug))
    .filter((article) => article !== undefined);
  const canonical = absoluteUrl(`/libros/${guide.slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": `${canonical}#book`,
        name: book.title,
        author: { "@type": "Person", name: book.author },
        image: absoluteUrl(book.image),
        description: guide.deck,
        inLanguage: "es",
        datePublished: editorial.originalYear?.toString(),
      },
      {
        "@type": "Article",
        headline: `${book.title}, de ${book.author}: guía crítica de lectura`,
        description: guide.deck,
        image: absoluteUrl(book.image),
        datePublished: editorial.publishedAt,
        dateModified: editorial.updatedAt,
        inLanguage: "es",
        mainEntityOfPage: canonical,
        about: { "@id": `${canonical}#book` },
        author: { "@type": "Organization", name: editorialAuthor.name },
        publisher: { "@type": "Organization", name: siteName },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <JsonLd data={structuredData} />
      <SiteHeader maxWidth="6xl" />

      <article>
        <section className="border-b border-[#b88a2d]/16 bg-[#fffaf1] px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Catálogo", href: "/catalogo" }, { label: book.title, href: `/libros/${slug}` }]} />
            <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr] md:items-center lg:gap-12">
              <div className="relative mx-auto aspect-[2/3] w-44 overflow-hidden rounded-lg border border-[#b88a2d]/28 bg-[#17130d] shadow-[0_22px_50px_rgba(48,34,14,0.18)] sm:w-52 md:w-full">
                <Image src={book.image} alt={`Imagen editorial de ${book.title}, de ${book.author}`} fill priority sizes="(max-width: 767px) 208px, 220px" className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">{book.category} · Guía crítica de lectura</p>
                <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">{book.title}</h1>
                <p className="mt-2 text-lg font-medium text-[#6a5738]">{book.author}</p>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3d3427]">{guide.deck}</p>
                <dl className="mt-5 grid max-w-2xl gap-3 text-sm text-[#574a37] sm:grid-cols-2">
                  {editorial.originalYear ? <div><dt className="font-semibold text-[#2e271d]">Publicación original</dt><dd>{editorial.originalYear}</dd></div> : null}
                  <div><dt className="font-semibold text-[#2e271d]">Ediciones</dt><dd>{editorial.editionNote}</dd></div>
                </dl>
                <p className="mt-5 max-w-2xl rounded-md border border-[#b88a2d]/22 bg-[#f1e4cc] px-4 py-3 text-xs leading-5 text-[#62533e]">
                  Divulgación: el siguiente enlace puede ser de afiliado. Si realizas una compra, NextFaro puede recibir una comisión sin costo adicional para ti. La selección editorial no depende de esa comisión.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={book.link} target="_blank" rel="noopener noreferrer sponsored" className="rounded-md bg-[#17130d] px-5 py-3 text-sm font-bold text-[#fff7e8] transition hover:bg-[#3a3022]">Comprar libro</a>
                  <Link href="/divulgacion-afiliados" className="rounded-md border border-[#9a6a12]/45 px-5 py-3 text-sm font-semibold text-[#6f4a0b] transition hover:border-[#9a6a12] hover:bg-[#f1dfbb]">Cómo financiamos el sitio</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <ContentSection eyebrow="Contexto" heading={editorial.headings.context} paragraphs={[...editorial.context, ...guide.overview]} />
            <ContentSection heading={editorial.headings.argument} paragraphs={editorial.argument} />
            <section className="mt-12">
              <h2 className="font-serif text-3xl font-semibold">{book.title} en tres ideas que merece la pena examinar</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {guide.takeaways.map((takeaway) => (
                  <div key={takeaway.heading} className="rounded-lg border border-[#b88a2d]/18 bg-[#fffaf1] p-5 shadow-[0_12px_30px_rgba(55,39,18,0.05)]">
                    <h3 className="font-serif text-xl font-semibold text-[#6f4a0b]">{takeaway.heading}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4b4030]">{takeaway.text}</p>
                  </div>
                ))}
              </div>
            </section>
            <ContentSection heading={editorial.headings.critique} paragraphs={editorial.critique} tone="critical" />
            <ContentSection heading={editorial.headings.application} paragraphs={editorial.application} />
            <ContentSection heading={editorial.headings.comparison} paragraphs={editorial.comparison} />

            <section className="mt-12 grid gap-8 border-y border-[#b88a2d]/20 py-10 md:grid-cols-2">
              <div>
                <h2 className="font-serif text-2xl font-semibold">Lectores que pueden aprovechar {book.title}</h2>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[#3d3427]">
                  {guide.recommendedFor.map((item) => <li key={item} className="border-l-2 border-[#b88a2d]/55 pl-4">{item}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold">{editorial.headings.audience}</h2>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[#3d3427]">
                  {editorial.notRecommendedFor.map((item) => <li key={item} className="border-l-2 border-[#a45c32]/55 pl-4">{item}</li>)}
                </ul>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-3xl font-semibold">Cómo acercarse a {book.title} con criterio</h2>
              <ol className="mt-5 space-y-3 text-base leading-7 text-[#3d3427]">
                {guide.readingTips.map((tip, index) => <li key={tip} className="flex gap-3 rounded-md bg-[#fffaf1] px-5 py-4"><span className="font-semibold text-[#9a6a12]">{index + 1}.</span><span>{tip}</span></li>)}
              </ol>
            </section>

            <section className="mt-12 rounded-lg border border-[#b88a2d]/22 bg-[#efe0c3] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5d12]">Formato de audio</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold">Escuchar {book.title}: qué comprobar</h2>
              <p className="mt-4 text-base leading-8 text-[#3d3427]">{editorial.audioNote}</p>
              <Link href="/audiolibros" className="mt-4 inline-flex text-sm font-semibold text-[#704908] underline decoration-[#9a6a12]/40 underline-offset-4">Consulta nuestra guía de plataformas y formatos</Link>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-3xl font-semibold">{editorial.headings.questions}</h2>
              <div className="mt-5 space-y-3">
                {guide.questions.map((question) => <p key={question} className="rounded-md border border-[#b88a2d]/16 bg-[#fffaf1] px-5 py-4 text-base leading-7 text-[#3d3427]">{question}</p>)}
              </div>
            </section>

            <section className="mt-12 rounded-lg border border-[#b88a2d]/18 bg-[#fffaf1] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">Veredicto editorial</p>
              <p className="mt-3 text-base leading-8 text-[#3d3427]">{guide.editorialNote}</p>
            </section>

            {relatedBook ? <section className="mt-12"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">Lectura para contrastar</p><Link href={`/libros/${relatedBook.slug}`} className="mt-3 block rounded-lg border border-[#b88a2d]/22 bg-[#fffaf1] p-5 transition hover:border-[#b88a2d]/60"><h2 className="font-serif text-2xl font-semibold">{relatedBook.title}</h2><p className="mt-2 leading-7 text-[#514636]">{relatedBook.deck}</p></Link></section> : null}

            {relatedArticles.length > 0 ? (
              <section className="mt-12 border-t border-[#b88a2d]/20 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">Sigue aprendiendo</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold">Artículos relacionados</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {relatedArticles.map((article) => <Link key={article.slug} href={`/blog/${article.slug}`} className="group rounded-lg border border-[#b88a2d]/18 bg-[#fffaf1] p-5 transition hover:-translate-y-0.5 hover:border-[#b88a2d]/55"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a6a12]">{article.category}</p><h3 className="mt-2 font-serif text-xl font-semibold leading-snug group-hover:text-[#7a500a]">{article.title}</h3><p className="mt-3 text-sm leading-6 text-[#5b5142]">{article.description}</p></Link>)}
                </div>
              </section>
            ) : null}

            <EditorialAuthor publishedAt={editorial.publishedAt} updatedAt={editorial.updatedAt} />
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

function ContentSection({ eyebrow, heading, paragraphs, tone = "default" }: { eyebrow?: string; heading: string; paragraphs: string[]; tone?: "default" | "critical" }) {
  return (
    <section className={`mt-12 ${tone === "critical" ? "rounded-lg border border-[#a45c32]/24 bg-[#fff8ee] p-6 sm:p-8" : ""}`}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">{eyebrow}</p> : null}
      <h2 className={`${eyebrow ? "mt-2 " : ""}font-serif text-3xl font-semibold leading-tight sm:text-4xl`}>{heading}</h2>
      <div className="mt-5 space-y-5 text-lg leading-9 text-[#2d281f]">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>
  );
}

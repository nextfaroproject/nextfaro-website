import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { getBlogArticle } from "@/data/blog";
import { bookGuides, getBookGuide } from "@/data/book-guides";
import { books } from "@/data/books";

const siteUrl = "https://nextfaroaudiolibros.com";
const youtubeUrl = "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return bookGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBookGuide(slug);
  const book = guide ? books.find((item) => item.title === guide.title) : undefined;

  if (!guide || !book) {
    return { title: "Libro no encontrado | NextFaro Audiolibros" };
  }

  return {
    title: `${book.title}, de ${book.author} | Guía de lectura NextFaro`,
    description: guide.deck,
    alternates: { canonical: `/libros/${guide.slug}` },
    openGraph: {
      title: `${book.title}, de ${book.author}`,
      description: guide.deck,
      images: [book.image],
      type: "article",
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const guide = getBookGuide(slug);
  const book = guide ? books.find((item) => item.title === guide.title) : undefined;

  if (!guide || !book) {
    notFound();
  }

  const relatedArticles = guide.relatedArticles
    .map((articleSlug) => getBlogArticle(articleSlug))
    .filter((article) => article !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: book.author },
    image: `${siteUrl}${book.image}`,
    description: guide.deck,
    url: `${siteUrl}/libros/${guide.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-[#b88a2d]/18 bg-[#fffaf1]/95 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
            <span className="truncate text-sm font-semibold sm:text-base">
              NextFaro Audiolibros
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#4b4030]">
            <Link className="transition hover:text-[#a77518]" href="/#catalogo">
              Catálogo
            </Link>
            <Link className="transition hover:text-[#a77518]" href="/blog">
              Blog
            </Link>
            <Link className="transition hover:text-[#a77518]" href="/sobre-nosotros">
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

      <article>
        <section className="border-b border-[#b88a2d]/16 bg-[#fffaf1] px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[220px_1fr] md:items-center lg:gap-12">
            <div className="relative mx-auto aspect-[2/3] w-44 overflow-hidden rounded-lg border border-[#b88a2d]/28 bg-[#17130d] shadow-[0_22px_50px_rgba(48,34,14,0.18)] sm:w-52 md:w-full">
              <Image
                src={book.image}
                alt={`Portada de ${book.title}`}
                fill
                priority
                sizes="(max-width: 767px) 208px, 220px"
                className="object-cover"
              />
            </div>

            <div>
              <Link
                href="/#catalogo"
                className="text-sm font-semibold text-[#91620f] transition hover:text-[#604006]"
              >
                Volver al catálogo
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">
                {book.category} · Guía editorial
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                {book.title}
              </h1>
              <p className="mt-2 text-lg font-medium text-[#6a5738]">{book.author}</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3d3427]">
                {guide.deck}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-md bg-[#17130d] px-5 py-3 text-sm font-bold text-[#fff7e8] transition hover:bg-[#3a3022]"
                >
                  Comprar libro
                </a>
                <Link
                  href="/blog"
                  className="rounded-md border border-[#9a6a12]/45 px-5 py-3 text-sm font-semibold text-[#6f4a0b] transition hover:border-[#9a6a12] hover:bg-[#f1dfbb]"
                >
                  Explorar el blog
                </Link>
              </div>
              <p className="mt-4 max-w-xl text-xs leading-5 text-[#75664e]">
                El enlace de compra puede ser de afiliado. Si compras a través de él,
                NextFaro puede recibir una comisión sin costo adicional para ti.
              </p>
            </div>
          </div>
        </section>

        <div className="px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">
                Contexto de lectura
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                Por qué leer {book.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-9 text-[#2d281f]">
                {guide.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-3xl font-semibold">Ideas para llevarte</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {guide.takeaways.map((takeaway) => (
                  <div
                    key={takeaway.heading}
                    className="rounded-lg border border-[#b88a2d]/18 bg-[#fffaf1] p-5 shadow-[0_12px_30px_rgba(55,39,18,0.05)]"
                  >
                    <h3 className="font-serif text-xl font-semibold text-[#6f4a0b]">
                      {takeaway.heading}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#4b4030]">{takeaway.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 grid gap-8 border-y border-[#b88a2d]/20 py-10 md:grid-cols-2">
              <div>
                <h2 className="font-serif text-2xl font-semibold">Para quién puede ser útil</h2>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[#3d3427]">
                  {guide.recommendedFor.map((item) => (
                    <li key={item} className="border-l-2 border-[#b88a2d]/55 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold">Cómo aprovechar la lectura</h2>
                <ol className="mt-4 space-y-3 text-base leading-7 text-[#3d3427]">
                  {guide.readingTips.map((tip, index) => (
                    <li key={tip} className="flex gap-3">
                      <span className="font-semibold text-[#9a6a12]">{index + 1}.</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="mt-12 rounded-lg border border-[#b88a2d]/22 bg-[#efe0c3] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5d12]">
                Criterio NextFaro
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold">Perspectiva editorial</h2>
              <p className="mt-4 text-base leading-8 text-[#3d3427]">{guide.editorialNote}</p>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-3xl font-semibold">Preguntas para reflexionar</h2>
              <div className="mt-5 space-y-3">
                {guide.questions.map((question) => (
                  <p
                    key={question}
                    className="rounded-md border border-[#b88a2d]/16 bg-[#fffaf1] px-5 py-4 text-base leading-7 text-[#3d3427]"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </section>

            {relatedArticles.length > 0 ? (
              <section className="mt-12 border-t border-[#b88a2d]/20 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">
                  Sigue aprendiendo
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold">Artículos relacionados</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group rounded-lg border border-[#b88a2d]/18 bg-[#fffaf1] p-5 transition hover:-translate-y-0.5 hover:border-[#b88a2d]/55 hover:shadow-[0_12px_30px_rgba(55,39,18,0.08)]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a6a12]">
                        {article.category}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-semibold leading-snug group-hover:text-[#7a500a]">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#5b5142]">{article.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

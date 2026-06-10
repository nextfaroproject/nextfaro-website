import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import {
  blogArticleApplications,
  blogArticles,
  getBlogArticle,
} from "@/data/blog";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Artículo no encontrado | NextFaro Audiolibros",
    };
  }

  return {
    title: `${article.title} | NextFaro Audiolibros`,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  const application = blogArticleApplications[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070706] text-[#fff7e8]">
      <header className="border-b border-[#e9c46a]/14 bg-[#070706]/95 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
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

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#fff7e8]/66">
            <Link className="transition hover:text-[#e9c46a]" href="/blog">
              Blog
            </Link>
            <Link className="transition hover:text-[#e9c46a]" href="/#catalogo">
              Ver catálogo
            </Link>
          </nav>
        </div>
      </header>

      <article className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#d6b15f] transition hover:text-[#f0d27a]"
          >
            Volver al blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#d6b15f]/76">
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#d6b15f]/60" />
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span className="h-1 w-1 rounded-full bg-[#d6b15f]/60" />
            <span>{article.readingTime}</span>
          </div>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#fff7e8] sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#fff7e8]/72">
            {article.description}
          </p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-[#d6b15f]/18 bg-[#11100d] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <Image
              src={article.image}
              alt={`Imagen destacada de ${article.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#070706]/42 to-transparent" />
          </div>

          <div className="mt-9 space-y-6 text-base leading-8 text-[#fff7e8]/76">
            {article.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-[#fff7e8]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-5 text-base leading-8 text-[#fff7e8]/74">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#f0d27a]">
                  {section.subheading}
                </h3>
                <div className="mt-3 space-y-5 text-base leading-8 text-[#fff7e8]/70">
                  {section.subparagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {application ? (
            <section className="mt-11 rounded-lg border border-[#d6b15f]/14 bg-[#fff7e8]/[0.025] p-5">
              <h2 className="font-serif text-2xl font-semibold leading-tight text-[#fff7e8]">
                {application.heading}
              </h2>
              <div className="mt-4 space-y-5 text-base leading-8 text-[#fff7e8]/72">
                {application.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-11 rounded-lg border border-[#d6b15f]/14 bg-[#fff7e8]/[0.025] p-5">
            <h2 className="font-serif text-2xl font-semibold text-[#fff7e8]">
              Libros relacionados
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#fff7e8]/64">
              Para profundizar, puedes visitar el catalogo de NextFaro y buscar:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.relatedBooks.map((book) => (
                <Link
                  key={book}
                  href="/#catalogo"
                  className="rounded-full border border-[#d6b15f]/22 px-3 py-2 text-xs font-semibold text-[#f0d27a] transition hover:border-[#d6b15f]/60 hover:bg-[#d6b15f]/10"
                >
                  {book}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-11 border-t border-[#d6b15f]/14 pt-8">
            <h2 className="font-serif text-3xl font-semibold text-[#fff7e8]">
              Conclusión
            </h2>
            <div className="mt-4 space-y-5 text-base leading-8 text-[#fff7e8]/74">
              {article.conclusion.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

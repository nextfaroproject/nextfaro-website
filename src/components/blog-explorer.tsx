"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogArticle } from "@/data/blog";

const pageSize = 9;

export function BlogExplorer({ articles }: { articles: BlogArticle[] }) {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(articles.map((article) => article.category))).sort()],
    [articles],
  );
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    return articles.filter((article) => {
      const categoryMatches = category === "Todos" || article.category === category;
      const textMatches = !normalized || `${article.title} ${article.description} ${article.category}`.toLocaleLowerCase("es").includes(normalized);
      return categoryMatches && textMatches;
    });
  }, [articles, category, query]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function changeCategory(value: string) {
    setCategory(value);
    setPage(1);
  }

  return (
    <div>
      <div className="mb-8 grid gap-4 border-b border-[#b88a2d]/20 pb-7 md:grid-cols-[1fr_auto] md:items-end">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#4d402e]">Buscar una guía</span>
          <input
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setPage(1); }}
            placeholder="Ejemplo: concentración, finanzas, audiolibros"
            className="min-h-11 w-full rounded-md border border-[#b88a2d]/30 bg-[#fffaf1] px-4 text-base text-[#17130d] outline-none transition placeholder:text-[#6b5d49]/65 focus:border-[#9a6a12] focus:ring-2 focus:ring-[#b88a2d]/20 md:min-w-96"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#4d402e]">Tema</span>
          <select value={category} onChange={(event) => changeCategory(event.target.value)} className="min-h-11 w-full rounded-md border border-[#b88a2d]/30 bg-[#fffaf1] px-4 text-base text-[#17130d] outline-none focus:border-[#9a6a12] md:w-56">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <p className="mb-5 text-sm text-[#675944]" aria-live="polite">{filtered.length} {filtered.length === 1 ? "artículo encontrado" : "artículos encontrados"}</p>
      {visible.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((article) => (
            <article key={article.slug} className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#c9a95b]/24 bg-[#fffaf1] shadow-[0_14px_36px_rgba(55,39,18,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b88a2d]/48 hover:shadow-[0_20px_50px_rgba(55,39,18,0.14)]">
              <Link href={`/blog/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#e9dcc6]" aria-label={`Leer artículo: ${article.title}`}>
                <Image src={article.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a6a12]"><span>{article.category}</span><span>{article.readingTime}</span></div>
                <h2 className="mt-3 font-serif text-xl leading-tight text-[#17130d]">{article.title}</h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[#5b5142]">{article.description}</p>
                <Link href={`/blog/${article.slug}`} className="mt-5 w-fit rounded-full border border-[#b88a2d]/70 bg-[#b88a2d] px-4 py-2 text-xs font-bold text-[#fffaf1] transition-all duration-300 hover:bg-transparent hover:text-[#8a5d12]">Leer artículo</Link>
              </div>
            </article>
          ))}
        </div>
      ) : <p className="rounded-md border border-[#b88a2d]/20 bg-[#fffaf1] p-6 text-[#5b5142]">No encontramos artículos con esos criterios. Prueba otra palabra o selecciona “Todos”.</p>}

      {totalPages > 1 ? (
        <nav aria-label="Paginación del blog" className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button type="button" disabled={currentPage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))} className="min-h-11 rounded-md border border-[#b88a2d]/35 px-4 text-sm font-semibold text-[#65450d] disabled:cursor-not-allowed disabled:opacity-40">Anterior</button>
          <span className="text-sm text-[#675944]">Página {currentPage} de {totalPages}</span>
          <button type="button" disabled={currentPage === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))} className="min-h-11 rounded-md border border-[#b88a2d]/35 px-4 text-sm font-semibold text-[#65450d] disabled:cursor-not-allowed disabled:opacity-40">Siguiente</button>
        </nav>
      ) : null}
    </div>
  );
}

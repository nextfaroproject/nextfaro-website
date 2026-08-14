"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Book } from "@/data/books";

type CatalogBook = Book & { slug?: string };

export function CatalogExplorer({ books }: { books: CatalogBook[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...Array.from(new Set(books.map((book) => book.category)))];
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("es");
    return books.filter((book) => {
      const matchesCategory = category === "Todas" || book.category === category;
      const matchesQuery = !term || `${book.title} ${book.author} ${book.description}`.toLocaleLowerCase("es").includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [books, category, query]);

  return (
    <>
      <div className="mt-8 grid gap-3 rounded-lg border border-[#b88a2d]/20 bg-[#fffaf1] p-4 sm:grid-cols-[1fr_220px]">
        <label className="text-sm font-semibold text-[#4b4030]">
          Buscar por título o autor
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Ejemplo: hábitos"
            className="mt-2 min-h-11 w-full rounded-md border border-[#9a6a12]/30 bg-white px-3 text-base font-normal outline-none transition focus:border-[#9a6a12] focus:ring-2 focus:ring-[#b88a2d]/20"
          />
        </label>
        <label className="text-sm font-semibold text-[#4b4030]">
          Categoría
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-md border border-[#9a6a12]/30 bg-white px-3 text-base font-normal outline-none transition focus:border-[#9a6a12] focus:ring-2 focus:ring-[#b88a2d]/20"
          >
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <p className="mt-5 text-sm text-[#6b5d49]" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "libro encontrado" : "libros encontrados"}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((book) => (
          <article key={`${book.title}-${book.author}`} className="group flex flex-col rounded-lg border border-[#b88a2d]/18 bg-[#fffaf1] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#b88a2d]/55 hover:shadow-xl">
            <div className="relative mx-auto aspect-[2/3] w-32 overflow-hidden rounded-lg border border-[#b88a2d]/24 bg-[#17130d] shadow-lg">
              <Image src={book.image} alt={`Cubierta editorial de ${book.title}, de ${book.author}`} fill sizes="128px" className="object-cover" />
            </div>
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#9a6a12]">{book.category}</p>
            <h2 className="mt-1 text-center font-serif text-xl font-semibold leading-tight">{book.title}</h2>
            <p className="mt-1 text-center text-sm text-[#6b5d49]">{book.author}</p>
            <p className="mt-3 line-clamp-3 flex-1 text-center text-sm leading-6 text-[#514636]">{book.description}</p>
            <Link href={book.slug ? `/libros/${book.slug}` : "/catalogo"} className="mx-auto mt-4 rounded-md bg-[#17130d] px-4 py-2 text-sm font-semibold text-[#fff7e8] transition hover:bg-[#8a5d12]">
              Leer la guía
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

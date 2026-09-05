import type { Metadata } from "next";
import { BlogExplorer } from "@/components/blog-explorer";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { blogArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog de lectura, libros y aprendizaje",
  description:
    "Guías originales sobre lectura, libros físicos, aprendizaje, finanzas personales y desarrollo personal.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <SiteHeader />

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

          <div className="mt-8 grid gap-6 border-y border-[#b88a2d]/20 py-6 sm:grid-cols-3 sm:divide-x sm:divide-[#b88a2d]/18">
            <div className="sm:pr-6">
              <h2 className="font-serif text-lg font-semibold">
                Lectura práctica
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5b5142]">
                Métodos sencillos para leer con constancia, recordar mejor y
                usar cada libro como herramienta de aprendizaje.
              </p>
            </div>
            <div className="sm:px-6">
              <h2 className="font-serif text-lg font-semibold">
                Recomendaciones con criterio
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5b5142]">
                Ideas para elegir libros según tu momento: hábitos, finanzas,
                comunicación, filosofía, emprendimiento o propósito.
              </p>
            </div>
            <div className="sm:pl-6">
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

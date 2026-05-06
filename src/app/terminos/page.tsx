import { LegalPageHeader } from "@/components/legal-page-header";
import { SiteFooter } from "@/components/site-footer";

export default function TerminosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex-1 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <LegalPageHeader />

          <div className="mt-8 rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="font-serif text-4xl font-semibold text-[#fff7e8]">
              Términos y condiciones
            </h1>

            <div className="mt-6 space-y-5 text-base leading-7 text-[#fff7e8]/72">
              <p>
                NextFaro Audiolibros ofrece contenido informativo y una selección
                de libros físicos recomendados. La información publicada no
                sustituye asesoramiento profesional, financiero, legal o médico.
              </p>
              <p>
                El sitio puede incluir enlaces externos hacia plataformas,
                tiendas u otros sitios web de terceros. Al hacer clic en esos
                enlaces, estarás navegando fuera de NextFaro Audiolibros.
              </p>
              <p>
                Algunos enlaces pueden ser de afiliado. Si realizas una compra a
                través de ellos, NextFaro Audiolibros puede recibir una comisión
                sin costo adicional para ti.
              </p>
              <p>
                NextFaro Audiolibros no controla los sitios externos ni es
                responsable por sus contenidos, precios, disponibilidad,
                políticas, tiempos de envío o condiciones de compra.
              </p>
              <p>
                Cualquier compra, devolución, garantía o consulta comercial se
                rige por las condiciones del sitio externo donde se realice la
                transacción.
              </p>
            </div>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}

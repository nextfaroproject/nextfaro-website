import { LegalPageHeader } from "@/components/legal-page-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacidadPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070706] text-[#fff7e8]">
      <section className="flex-1 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <LegalPageHeader />

          <div className="mt-8 rounded-lg border border-[#e9c46a]/16 bg-[#fff7e8]/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="font-serif text-4xl font-semibold text-[#fff7e8]">
              Política de privacidad
            </h1>

            <div className="mt-6 space-y-5 text-base leading-7 text-[#fff7e8]/72">
              <p>
                NextFaro Audiolibros funciona como un catálogo de libros físicos
                recomendados para aprender, crecer y descubrir nuevas ideas. El
                contenido del sitio tiene fines informativos.
              </p>
              <p>
                Algunos enlaces publicados pueden ser enlaces de afiliado. Si
                compras a través de ellos, NextFaro Audiolibros puede recibir una
                comisión sin costo adicional para ti.
              </p>
              <p>
                Este sitio puede usar cookies para mejorar la experiencia de
                navegación, analizar el uso del sitio y recordar preferencias
                básicas del usuario.
              </p>
              <p>
                En el futuro, el sitio podría mostrar publicidad mediante
                servicios como Google AdSense. En ese caso, terceros podrían usar
                cookies para mostrar anuncios personalizados o medir el
                rendimiento publicitario.
              </p>
              <p>
                Puedes configurar, bloquear o eliminar cookies desde las opciones
                de privacidad de tu navegador. Al continuar usando el sitio,
                aceptas el uso de estas tecnologías según la configuración de tu
                navegador.
              </p>
            </div>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}

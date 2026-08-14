import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Guía de audiolibros en español",
  description: "Cómo comparar plataformas, elegir una narración y tomar notas mientras escuchas audiolibros en español.",
  alternates: { canonical: "/audiolibros" },
};

const platforms = [
  { name: "Audible", catalog: "Catálogo internacional amplio y producciones exclusivas.", model: "Suscripción con créditos; condiciones y precio cambian según el país.", best: "Lectores que buscan novedades, narraciones comerciales y una aplicación madura." },
  { name: "Storytel", catalog: "Oferta de audio y libros electrónicos con presencia en varios mercados hispanohablantes.", model: "Acceso por suscripción; el catálogo disponible depende de la región.", best: "Quienes escuchan varios títulos al mes y valoran explorar sin comprar cada obra." },
  { name: "Kobo Audiobooks", catalog: "Audiolibros integrados en el ecosistema de lectura de Kobo.", model: "Compra individual y planes que pueden variar por mercado.", best: "Usuarios que ya utilizan lectores o aplicaciones de Kobo." },
  { name: "Google Play Libros y Apple Books", catalog: "Tiendas digitales con compra individual y disponibilidad variable.", model: "Pago por título, sin necesidad de mantener una suscripción general.", best: "Lectores ocasionales que prefieren conservar cada compra en su biblioteca digital." },
  { name: "Bibliotecas públicas", catalog: "Préstamo digital gratuito cuando la biblioteca participa en plataformas compatibles.", model: "Acceso mediante credencial de biblioteca; puede haber listas de espera.", best: "Personas que desean probar el formato antes de pagar o reducir el costo de lectura." },
];

export default function AudiobooksPage() {
  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17130d]">
      <article className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10"><div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Audiolibros", href: "/audiolibros" }]} />
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a12]">Escuchar con criterio</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Audiolibros en español: formatos, narración y aprendizaje.</h1>
        <p className="mt-6 text-lg leading-8 text-[#514636]">NextFaro nació alrededor del deseo de llevar buenas ideas al audio. Esta guía no vende una plataforma concreta: explica qué revisar antes de suscribirte, por qué la voz cambia una obra y cómo evitar que escuchar se convierta en ruido de fondo.</p>

        <section className="mt-12"><h2 className="font-serif text-3xl font-semibold">Comparar plataformas sin quedarse solo con el precio</h2><p className="mt-4 text-lg leading-8 text-[#3d3427]">El catálogo, las licencias y los planes cambian por país y fecha. Comprueba siempre la oferta local antes de pagar. Más que buscar una ganadora universal, conviene identificar si escuchas uno o varios títulos al mes, si deseas comprar cada obra, si necesitas modo sin conexión y si una biblioteca pública de tu zona ya ofrece préstamo digital.</p><div className="mt-6 overflow-x-auto"><table className="w-full min-w-160 border-collapse text-left text-sm"><thead><tr className="border-b border-[#9a6a12]/30"><th className="p-3">Opción</th><th className="p-3">Catálogo</th><th className="p-3">Modelo</th><th className="p-3">Puede encajar con</th></tr></thead><tbody>{platforms.map((item) => <tr key={item.name} className="border-b border-[#9a6a12]/15 align-top"><th className="p-3 font-semibold">{item.name}</th><td className="p-3 leading-6">{item.catalog}</td><td className="p-3 leading-6">{item.model}</td><td className="p-3 leading-6">{item.best}</td></tr>)}</tbody></table></div></section>

        <section className="mt-12"><h2 className="font-serif text-3xl font-semibold">La voz también interpreta</h2><div className="mt-4 space-y-5 text-lg leading-8 text-[#3d3427]"><p>Un narrador decide ritmo, pausas, énfasis y distancia emocional. En ficción, además diferencia personajes; en ensayo, debe hacer comprensible una argumentación larga sin convertirla en discurso teatral. Escucha la muestra antes de comprar. Una voz prestigiosa puede no ser adecuada para tu atención, acento habitual o velocidad preferida.</p><p>La mejor prueba es sencilla: después de cinco minutos, intenta explicar qué acabas de escuchar. Si solo recuerdas la voz y no la idea, quizá la interpretación compite con el texto. Si pierdes el hilo por un ritmo uniforme, prueba otra edición o reduce la velocidad. Elegir narrador no es un detalle cosmético; forma parte de elegir el libro.</p></div></section>

        <section className="mt-12"><h2 className="font-serif text-3xl font-semibold">Qué géneros suelen funcionar mejor en audio</h2><div className="mt-4 space-y-5 text-lg leading-8 text-[#3d3427]"><p>Memorias, biografías, narrativa lineal y divulgación accesible suelen adaptarse bien porque la voz sostiene continuidad. Los libros con fórmulas, tablas, referencias frecuentes o ejercicios detallados pueden exigir apoyo visual. No es una regla absoluta: depende de la edición, del narrador y de cuánto conocimiento previo tenga el oyente.</p><p>Una combinación eficaz consiste en escuchar para obtener el mapa general y volver al papel o al libro electrónico en las secciones densas. Esta estrategia evita enfrentar formatos como rivales. El audio aporta continuidad; el texto facilita detenerse, comparar y citar con precisión.</p></div></section>

        <section className="mt-12 rounded-lg border border-[#b88a2d]/20 bg-[#fffaf1] p-6"><h2 className="font-serif text-3xl font-semibold">Tomar notas sin dejar de escuchar</h2><ol className="mt-5 space-y-4 text-lg leading-8 text-[#3d3427]"><li><strong>1. Marca, no interrumpas cada minuto.</strong> Usa el marcador de la aplicación y continúa hasta completar la idea.</li><li><strong>2. Resume al terminar el capítulo.</strong> Graba una nota de voz de treinta segundos con la idea central y una duda.</li><li><strong>3. Vuelve solo a lo importante.</strong> Reproduce los fragmentos marcados cuando puedas escribir con calma.</li><li><strong>4. Define una aplicación.</strong> Una acción concreta vale más que una lista extensa de frases.</li></ol></section>

        <p className="mt-10 text-sm leading-7 text-[#6b5d49]">NextFaro no aloja copias de audiolibros protegidos ni ofrece descargas no autorizadas. Recomendamos utilizar tiendas, bibliotecas y servicios con licencia. Explora también nuestra comparación sobre <Link className="font-semibold text-[#8a5d12] underline" href="/blog/lectura-fisica-vs-audiolibros">lectura física y audiolibros</Link>.</p>
      </div></article>
      <SiteFooter />
    </main>
  );
}

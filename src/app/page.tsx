import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import { SiteFooter } from "@/components/site-footer";

const youtubeUrl = "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";
const fallbackBookImage = "/brand/nextfaro-logo.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070706] text-[#fff7e8]">
      <section className="relative overflow-hidden bg-[#070706]">
        <Image
          src="/brand/nextfaro-hero-clean.png"
          alt="Biblioteca elegante de NextFaro Audiolibros"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#070706]/20" />
        <div className="absolute inset-0 bg-linear-to-r from-[#070706]/94 via-[#070706]/60 to-[#070706]/8" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#070706] to-transparent" />

        <header className="relative z-10 mx-auto w-full max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              className="flex min-w-0 items-center gap-3"
              aria-label="NextFaro inicio"
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
            </a>

            <nav className="hidden items-center gap-7 text-sm text-[#fff7e8]/78 md:flex">
              <a className="transition hover:text-[#e9c46a]" href="#catalogo">
                Catálogo
              </a>
              <Link className="transition hover:text-[#e9c46a]" href="/blog">
                Blog
              </Link>
              <Link
                className="transition hover:text-[#e9c46a]"
                href="/sobre-nosotros"
              >
                Sobre nosotros
              </Link>
              <a
                className="transition hover:text-[#e9c46a]"
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </nav>

            <a
              href="#catalogo"
              className="shrink-0 rounded-md border border-[#e9c46a]/70 px-4 py-2 text-sm font-semibold text-[#fff7e8] transition hover:border-[#fff7e8] hover:bg-[#fff7e8] hover:text-[#080807]"
            >
              Ver libros
            </a>
          </div>

          <nav className="mt-4 flex items-center justify-between gap-2 rounded-md border border-[#fff7e8]/12 bg-[#070706]/42 p-1 text-xs font-semibold text-[#fff7e8]/82 backdrop-blur md:hidden">
            <a
              className="flex-1 rounded px-3 py-3 text-center transition hover:bg-[#fff7e8]/10"
              href="#catalogo"
            >
              Catálogo
            </a>
            <Link
              className="flex-1 rounded px-3 py-3 text-center transition hover:bg-[#fff7e8]/10"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="flex-1 rounded px-3 py-3 text-center transition hover:bg-[#fff7e8]/10"
              href="/sobre-nosotros"
            >
              Sobre nosotros
            </Link>
            <a
              className="flex-1 rounded px-3 py-3 text-center transition hover:bg-[#fff7e8]/10"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-7xl items-start px-5 pb-16 pt-10 sm:min-h-[420px] sm:px-8 sm:pt-14 lg:min-h-[460px] lg:px-10 lg:pt-16">
          <div className="max-w-xl">
            <p className="mb-5 w-fit border-l-2 border-[#e9c46a] bg-[#070706]/38 px-4 py-2 text-sm font-medium text-[#f2d991] backdrop-blur">
              Libros seleccionados para aprender mejor
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.04] text-[#fff7e8] drop-shadow-[0_2px_18px_rgba(0,0,0,0.38)] sm:text-5xl lg:text-6xl">
              Conocimiento que te acompaña.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#fff7e8]/84 sm:text-lg">
              Una selección de libros físicos para crecer, aprender y descubrir
              nuevas ideas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#catalogo"
                className="rounded-md bg-[#e9c46a] px-6 py-3 text-center text-sm font-bold text-[#11100d] transition hover:bg-[#f5d982]"
              >
                Ver libros
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[#fff7e8]/32 px-6 py-3 text-center text-sm font-semibold text-[#fff7e8] transition hover:border-[#fff7e8] hover:bg-[#fff7e8]/10"
              >
                Visitar YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="bg-[#fff7e8] px-5 py-12 text-[#11100d] sm:px-8 sm:py-14 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6a12]">
              Proyecto editorial
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Más que una lista de libros: una guía para aprender mejor.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#594a32]">
              NextFaro reúne recomendaciones, artículos y criterios de lectura
              para que cada libro tenga contexto. La idea no es comprar por
              impulso, sino elegir lecturas que ayuden a pensar, crear hábitos y
              aplicar conocimiento en la vida diaria.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Cómo elegimos los libros",
                text: "Priorizamos obras con ideas útiles, claridad práctica, impacto cultural o valor formativo para lectores que quieren crecer con criterio.",
              },
              {
                title: "Guías para leer mejor",
                text: "El blog complementa el catálogo con artículos sobre hábitos de lectura, memoria, concentración, finanzas personales y aprendizaje continuo.",
              },
              {
                title: "Libros según tu objetivo",
                text: "Puedes empezar por hábitos, comunicación, finanzas, filosofía o desarrollo personal según la etapa que quieras trabajar.",
              },
              {
                title: "Audiolibros y aprendizaje",
                text: "También valoramos el audio como una forma de mantener contacto con buenas ideas mientras caminas, viajas o haces tareas simples.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#b88a2d]/18 bg-white/55 p-5 shadow-[0_14px_34px_rgba(55,39,18,0.07)]"
              >
                <h3 className="font-serif text-xl font-semibold text-[#17130d]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5b4d37]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="catalogo"
        className="bg-[#0c0c0a] px-5 py-9 sm:px-8 sm:py-10 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#fff7e8] sm:text-4xl">
              Biblioteca recomendada
            </h2>
            <p className="mt-2 text-base leading-7 text-[#fff7e8]/66">
              Libros seleccionados para crecer, aprender y pensar mejor.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <article
                key={`${book.title}-${book.author}`}
                className="group flex h-full flex-col rounded-lg border border-[#d6b15f]/10 bg-[#fff7e8]/[0.025] p-3 shadow-[0_10px_34px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b15f]/45 hover:bg-[#fff7e8]/[0.045] hover:shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
              >
                <div className="relative mx-auto aspect-[2/3] w-30 overflow-hidden rounded-lg border border-[#d6b15f]/28 bg-[#0b0906] shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition duration-300 group-hover:border-[#d6b15f]/60 group-hover:shadow-[0_18px_42px_rgba(0,0,0,0.38)]">
                  <div className="absolute inset-y-0 left-0 z-10 w-2 bg-linear-to-r from-black/22 to-transparent" />
                  <Image
                    src={book.image || fallbackBookImage}
                    alt={`Portada de ${book.title}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d6b15f]/78">
                  {book.category}
                </p>
                <h3 className="mt-1.5 text-center font-serif text-lg leading-tight text-[#fff7e8]">
                  {book.title}
                </h3>
                <p className="mt-1 text-center text-xs font-semibold text-[#fff7e8]/52">
                  {book.author}
                </p>

                <p className="mt-2 line-clamp-2 flex-1 text-center text-sm leading-5 text-[#fff7e8]/62">
                  {book.description}
                </p>

                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-3 rounded-full border border-[#d6b15f]/70 bg-[#d6b15f] px-4 py-2 text-center text-xs font-bold text-[#11100d] transition-all duration-300 hover:bg-transparent hover:text-[#f0d27a]"
                >
                  Comprar libro
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl rounded-md border border-[#e9c46a]/14 bg-[#070706]/40 p-3 text-xs leading-5 text-[#fff7e8]/58">
            Algunos enlaces pueden ser de afiliado. Si compras a través de
            ellos, puedo recibir una comisión sin costo adicional para ti.
          </p>

          <div className="mt-8 grid gap-4 rounded-lg border border-[#e9c46a]/14 bg-[#fff7e8]/[0.035] p-5 sm:grid-cols-3">
            <div>
              <h3 className="font-serif text-xl text-[#fff7e8]">
                Para empezar
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#fff7e8]/62">
                Si quieres crear rutina, empieza por hábitos, productividad o
                concentración antes de saltar a lecturas más densas.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#fff7e8]">
                Para pensar mejor
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#fff7e8]/62">
                Filosofía, novelas con ideas fuertes y libros sobre sentido
                ayudan a ampliar perspectiva y criterio personal.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#fff7e8]">
                Para aplicar
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#fff7e8]/62">
                Finanzas, comunicación y estrategia son mejores cuando cierras
                cada capítulo con una acción concreta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="suscripcion"
        className="bg-[#fff7e8] px-5 py-5 text-[#11100d] sm:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold leading-tight">
              Suscríbete al canal
            </h2>
            <p className="mt-1 text-sm text-[#5c4a25]">
              Nuevos libros y recomendaciones cada semana.
            </p>
          </div>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md bg-[#11100d] px-5 py-2.5 text-center text-sm font-bold text-[#fff7e8] transition hover:bg-[#2b2820] md:w-auto"
          >
            Suscribirme
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

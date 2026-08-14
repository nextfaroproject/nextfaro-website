export const siteUrl = "https://www.nextfaroaudiolibros.com";
export const siteName = "NextFaro Audiolibros";
export const youtubeUrl =
  "https://www.youtube.com/channel/UCYBIcqF0suvhuw0UZEbhLow";

export const editorialAuthor = {
  name: "Equipo editorial de NextFaro",
  image: "/images/nextfaro-logo-transparent.png",
  description:
    "Seleccionamos y contextualizamos libros sobre hábitos, finanzas, filosofía, estrategia y desarrollo personal. Nuestro trabajo consiste en separar las ideas útiles de las promesas exageradas, comparar enfoques y proponer formas concretas de leer con criterio.",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

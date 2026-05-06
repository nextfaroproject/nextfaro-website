export type Book = {
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  category: string;
};

/*
  Catalogo editable de NextFaro

  Para agregar un libro nuevo:
  1. Copia una ficha completa desde { title: ... } hasta category.
  2. Pegala dentro del arreglo books, separada por una coma.
  3. Cambia los textos por los datos del libro real.
  4. Guarda la portada en public/books/.
  5. En image usa la ruta publica: "/books/nombre-del-libro.jpg".

  Cada libro debe mantener siempre estos campos:
  title, author, description, image, link y category.
*/
export const books: Book[] = [
  {
    title: "Hábitos Atómicos",
    author: "James Clear",
    description:
      "Una guía práctica para crear pequeños hábitos que producen grandes resultados.",
    image: "/books/habitos-atomicos-nextfaro.jpg",
    link: "https://amzn.to/4cSHDYk",
    category: "Hábitos",
  },
  {
    title: "Padre Rico, Padre Pobre",
    author: "Robert Kiyosaki",
    description:
      "Un clásico sobre educación financiera y mentalidad para construir riqueza.",
    image: "/books/padre-rico-padre-pobre-nextfaro.jpg",
    link: "https://amzn.to/4eqkqz5",
    category: "Finanzas",
  },
  {
    title: "Piense y hágase rico",
    author: "Napoleon Hill",
    description:
      "Principios de éxito, deseo y mentalidad para alcanzar metas financieras.",
    image: "/books/piense-y-hagase-rico-nextfaro.jpg",
    link: "https://amzn.to/4tjn9Oy",
    category: "Mentalidad",
  },
  {
    title: "El poder del ahora",
    author: "Eckhart Tolle",
    description:
      "Un libro sobre vivir en el presente y transformar la conciencia.",
    image: "/books/el-poder-del-ahora-nextfaro.jpg",
    link: "https://amzn.to/3Pk4fcm",
    category: "Espiritualidad",
  },
  {
    title: "El inversor inteligente",
    author: "Benjamin Graham",
    description:
      "Una guía clásica sobre inversión racional, valor y protección del capital.",
    image: "/books/el-inversor-inteligente-nextfaro.jpg",
    link: "https://amzn.to/4espHX0",
    category: "Finanzas",
  },
  {
    title: "Cómo ganar amigos e influir sobre las personas",
    author: "Dale Carnegie",
    description:
      "Lecciones prácticas para mejorar relaciones, comunicación e influencia.",
    image: "/books/como-ganar-amigos-nextfaro.jpg",
    link: "https://amzn.to/4cOPAPv",
    category: "Comunicación",
  },
  {
    title: "Los 7 hábitos de la gente altamente efectiva",
    author: "Stephen R. Covey",
    description:
      "Principios para mejorar tu productividad, liderazgo y vida personal.",
    image: "/books/los-7-habitos-nextfaro.jpg",
    link: "https://amzn.to/4weTuJe",
    category: "Desarrollo personal",
  },
  {
    title: "El Alquimista",
    author: "Paulo Coelho",
    description:
      "Una historia sobre propósito, sueños y destino personal.",
    image: "/books/el-alquimista-nextfaro.jpg",
    link: "https://amzn.to/49nFJ0I",
    category: "Desarrollo personal",
  },
  {
    title: "Las 48 leyes del poder",
    author: "Robert Greene",
    description:
      "Estrategias sobre poder, influencia y comportamiento humano.",
    image: "/books/las-48-leyes-del-poder-nextfaro.jpg",
    link: "https://amzn.to/42bJjaw",
    category: "Estrategia",
  },
  {
    title: "Naciste rico",
    author: "Bob Proctor",
    description:
      "Enseña principios mentales y financieros para desarrollar prosperidad.",
    image: "/books/naciste-rico-nextfaro.jpg",
    link: "https://amzn.to/4tvRdH3",
    category: "Mentalidad",
  },
  {
    title: "Poder sin límites",
    author: "Tony Robbins",
    description:
      "Técnicas para mejorar tu vida a través del control mental y emocional.",
    image: "/books/poder-sin-limites-nextfaro.jpg",
    link: "https://amzn.to/4ngJL0L",
    category: "Desarrollo personal",
  },
  {
    title: "Las enseñanzas secretas de todos los tiempos",
    author: "Manly P. Hall",
    description:
      "Un recorrido profundo por conocimiento esotérico, símbolos y filosofía antigua.",
    image: "/books/las-ensenanzas-secretas-nextfaro.jpg",
    link: "https://amzn.to/4n7gt4I",
    category: "Filosofía",
  },
  {
    title: "El príncipe",
    author: "Nicolás Maquiavelo",
    description:
      "Un clásico sobre poder, liderazgo y estrategia política.",
    image: "/books/el-principe-nextfaro.jpg",
    link: "https://amzn.to/4n5LLsB",
    category: "Estrategia",
  },
  {
    title: "Los secretos de la mente millonaria",
    author: "T. Harv Eker",
    description:
      "Cómo tus creencias influyen en tu éxito financiero.",
    image: "/books/mente-millonaria-nextfaro.jpg",
    link: "https://amzn.to/42T2mq9",
    category: "Finanzas",
  },
  {
    title: "12 reglas para vivir",
    author: "Jordan Peterson",
    description:
      "Principios prácticos para ordenar tu vida y encontrar sentido.",
    image: "/books/12-reglas-para-vivir-nextfaro.jpg",
    link: "https://amzn.to/4neBLNN",
    category: "Filosofía",
  },
  {
    title: "Jacobo Grinberg y la Manifestación Cuántica",
    author: "Jacobo Grinberg",
    description:
      "Explora la relación entre mente, percepción y realidad.",
    image: "/books/teoria-sintergica-nextfaro.jpg",
    link: "https://amzn.to/4uqtt7Z",
    category: "Ciencia",
  },
  {
    title: "1984",
    author: "George Orwell",
    description:
      "Una novela sobre control, poder y vigilancia totalitaria.",
    image: "/books/1984-nextfaro.jpg",
    link: "https://amzn.to/48y6FL6",
    category: "Novela",
  },
  {
    title: "El hombre en busca de sentido",
    author: "Viktor E. Frankl",
    description:
      "Reflexiones sobre propósito y resiliencia en circunstancias extremas.",
    image: "/books/hombre-en-busca-de-sentido-nextfaro.jpg",
    link: "https://amzn.to/3PdY3mg",
    category: "Filosofía",
  },
  {
    title: "El tercer ojo",
    author: "Lobsang Rampa",
    description:
      "Una visión espiritual sobre conciencia, percepción y despertar interior.",
    image: "/books/el-tercer-ojo-nextfaro.jpg",
    link: "https://amzn.to/4tca0Xw",
    category: "Espiritualidad",
  },
];

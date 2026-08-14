export type BookCategory = {
  slug: string;
  name: string;
  title: string;
  description: string[];
};

export const bookCategories: BookCategory[] = [
  {
    slug: "habitos",
    name: "Hábitos",
    title: "Libros sobre hábitos y cambio cotidiano",
    description: [
      "Los hábitos no son atajos mágicos: son conductas que se repiten dentro de un entorno, una agenda y unas circunstancias concretas. Esta selección reúne libros que ayudan a observar señales, reducir fricción, organizar prioridades y convertir una intención amplia en una práctica que pueda sostenerse. Las guías de NextFaro distinguen entre herramientas útiles y promesas exageradas para que el lector pueda experimentar sin culparse cuando necesita ajustar el sistema.",
      "Conviene leer esta categoría con un objetivo pequeño. En lugar de intentar transformar toda la rutina a la vez, elige una conducta, registra qué ocurre durante dos semanas y revisa el resultado. También es útil comparar los enfoques: algunos autores se concentran en el diseño del entorno; otros hablan de principios, identidad o disciplina. Ningún método sustituye atención médica, apoyo profesional o cambios estructurales cuando son necesarios.",
    ],
  },
  {
    slug: "finanzas",
    name: "Finanzas",
    title: "Finanzas personales e inversión con perspectiva crítica",
    description: [
      "Leer sobre dinero puede mejorar el vocabulario con el que analizamos ingresos, gastos, deuda, ahorro e inversión. También puede crear una falsa sensación de seguridad si una historia inspiradora se confunde con asesoramiento profesional. Esta categoría reúne obras populares y clásicas para explicar qué aportan, dónde simplifican y qué preguntas conviene hacer antes de aplicar una recomendación a la vida real.",
      "NextFaro no ofrece asesoramiento financiero personalizado. Las fichas se centran en educación general, comparación de ideas y lectura crítica. Antes de invertir, considera tu horizonte, liquidez, obligaciones, tolerancia al riesgo y las reglas del país donde resides. Una buena ruta empieza por ordenar el flujo de dinero, continúa con conceptos básicos y solo después aborda productos o estrategias que puedan implicar pérdidas.",
    ],
  },
  {
    slug: "filosofia",
    name: "Filosofía",
    title: "Filosofía para formular preguntas más precisas",
    description: [
      "La filosofía no entrega una respuesta única para vivir; ofrece vocabulario, argumentos y desacuerdos que permiten examinar lo que damos por sentado. En esta biblioteca aparecen obras sobre sentido, responsabilidad, sufrimiento, símbolos y formación del carácter. Algunas pertenecen a tradiciones muy distintas, por lo que leerlas juntas ayuda a reconocer cuándo un autor argumenta, cuándo interpreta y cuándo propone una visión personal.",
      "Recomendamos avanzar despacio, anotar conceptos y contrastar afirmaciones con fuentes históricas o académicas cuando corresponda. Una lectura filosófica gana valor cuando no se limita a buscar frases memorables: conviene reconstruir la pregunta del autor, identificar sus supuestos y pensar qué objeción podría formular otra tradición. Las guías incluyen límites y alternativas para evitar que una obra compleja se convierta en consigna.",
    ],
  },
  {
    slug: "desarrollo-personal",
    name: "Desarrollo personal",
    title: "Desarrollo personal sin fórmulas universales",
    description: [
      "Los libros de desarrollo personal pueden ofrecer lenguaje para reconocer patrones, ordenar metas y ensayar conductas diferentes. También suelen convertir experiencias particulares en reglas demasiado generales. Esta categoría propone una lectura sobria: rescatar herramientas comprobables, separar motivación de evidencia y recordar que salud, recursos, responsabilidades y contexto influyen en lo que cada persona puede aplicar.",
      "Para aprovechar estas obras, elige una idea, define una acción observable y revisa qué pasó antes de sumar otra técnica. Si el libro aborda ansiedad, trauma, depresión o problemas de salud, debe leerse como acompañamiento cultural y no como sustituto de profesionales cualificados. NextFaro compara enfoques y señala contradicciones para que el lector construya criterio, no dependencia de un autor.",
    ],
  },
  {
    slug: "estrategia",
    name: "Estrategia",
    title: "Estrategia, poder y decisiones con consecuencias",
    description: [
      "Las obras sobre estrategia describen incentivos, conflictos, reputación, negociación y poder. Comprender esas dinámicas puede ayudar a detectar manipulaciones o anticipar consecuencias, pero no convierte cada táctica en una conducta recomendable. Esta categoría incluye clásicos políticos y análisis contemporáneos que deben leerse junto con una pregunta ética: qué se gana, quién asume el costo y qué relación queda después de la decisión.",
      "Las guías de NextFaro separan observación de prescripción. Sugerimos comparar casos históricos, reconocer el contexto del autor y evitar trasladar de forma automática reglas de guerra o corte política a amistades, equipos o familias. La estrategia más sólida no siempre es la maniobra más agresiva; con frecuencia depende de información fiable, límites claros, cooperación y capacidad de corregir a tiempo.",
    ],
  },
  {
    slug: "comunicacion",
    name: "Comunicación",
    title: "Comunicación, escucha e influencia responsable",
    description: [
      "Comunicar bien no consiste en encontrar una frase capaz de controlar a otra persona. Implica escuchar, explicar intereses, hacer preguntas, poner límites y reconocer cuándo existe desacuerdo. Los libros de esta categoría ofrecen principios clásicos para conversaciones, liderazgo y relaciones profesionales, pero sus consejos necesitan autenticidad y atención al contexto para no convertirse en técnicas manipuladoras.",
      "Una forma útil de leer es practicar una habilidad por semana: resumir lo que entendiste antes de responder, formular una petición concreta o reconocer una contribución específica. Después observa la reacción y ajusta. Las fichas señalan dónde los ejemplos han envejecido y por qué la empatía no obliga a aceptar abuso, ocultar conflictos o renunciar a un no claro.",
    ],
  },
  {
    slug: "espiritualidad",
    name: "Espiritualidad",
    title: "Espiritualidad leída con apertura y discernimiento",
    description: [
      "La literatura espiritual puede ofrecer símbolos, prácticas contemplativas y preguntas sobre identidad, presencia o trascendencia. Sus afirmaciones no siempre pertenecen al terreno científico, y esa distinción importa. Esta categoría presenta cada obra según el tipo de lectura que propone: experiencia interior, relato cultural, tradición religiosa o afirmación verificable. Evitamos convertir metáforas en hechos demostrados.",
      "El lector puede acercarse con apertura sin suspender el criterio. Pregunta qué efecto produce una práctica, qué parte depende de la fe y qué afirmación necesitaría evidencia externa. Si una obra habla de curación, conciencia o salud mental, no reemplaza diagnóstico ni tratamiento profesional. La comparación entre títulos ayuda a elegir según el interés real: contemplación, historia de ideas, ficción espiritual o exploración simbólica.",
    ],
  },
  {
    slug: "novela",
    name: "Novela",
    title: "Novelas para pensar el mundo desde otra perspectiva",
    description: [
      "La ficción no necesita convertirse en manual para aportar conocimiento. Una novela permite habitar decisiones, temores y sistemas sociales desde dentro; obliga a sostener ambigüedades que un resumen suele borrar. La selección de NextFaro destaca obras cuyo valor no depende solo de la trama, sino de las preguntas políticas, morales o personales que mantienen abiertas después de la última página.",
      "Nuestras guías evitan revelar giros innecesarios y ofrecen contexto para leer con mayor profundidad. Proponemos observar la voz narrativa, los símbolos, el momento histórico y las tensiones entre personajes antes de reducir la obra a una moraleja. Cuando una novela se compara con un ensayo del catálogo, explicamos qué formato conviene según el objetivo: comprender una idea de forma conceptual o experimentarla mediante una historia.",
    ],
  },
  {
    slug: "ciencia",
    name: "Ciencia",
    title: "Ciencia, conciencia y límites de la evidencia",
    description: [
      "Esta categoría exige una distinción especialmente cuidadosa entre ciencia publicada, hipótesis, interpretación filosófica y lenguaje comercial. Que un libro utilice términos como energía, cuántico o conciencia no demuestra que sus conclusiones estén respaldadas por la física o la neurociencia. NextFaro identifica el tipo de afirmación y señala cuándo falta evidencia para que el lector no confunda interés cultural con consenso científico.",
      "Recomendamos consultar fuentes académicas, instituciones de investigación y revisiones especializadas cuando una afirmación afecte salud o decisiones importantes. Las obras especulativas pueden leerse como historia de ideas o exploración personal, siempre que sus límites sean explícitos. El objetivo de esta sección es fomentar curiosidad con método: preguntar qué se observó, cómo se midió, si el resultado puede repetirse y qué explicación alternativa existe.",
    ],
  },
  {
    slug: "infantil",
    name: "Infantil",
    title: "Lecturas infantiles para conversar sin respuestas prefabricadas",
    description: [
      "Un libro infantil puede reunir imagen, ritmo y silencio para hablar de asuntos complejos con un lenguaje accesible. Esta categoría valora obras que respetan la curiosidad de niños y adultos, invitan a observar detalles y permiten más de una interpretación. La lectura compartida importa tanto como la historia: detenerse, preguntar y escuchar puede convertir pocas páginas en una conversación memorable.",
      "Las recomendaciones indican temas sensibles y proponen preguntas abiertas sin imponer una lección única. Cada familia, docente o mediador conoce mejor la edad, experiencia y necesidades de sus lectores. Las fichas no sustituyen ese criterio; ofrecen contexto para anticipar el tono y decidir si el libro encaja con el momento. También explican qué puede encontrar un adulto en una obra ilustrada más allá de su aparente sencillez.",
    ],
  },
];

export function getBookCategory(slug: string) {
  return bookCategories.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string) {
  return bookCategories.find((category) => category.name.toLocaleLowerCase("es") === name.toLocaleLowerCase("es"));
}

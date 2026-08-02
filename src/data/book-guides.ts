export type BookGuide = {
  slug: string;
  title: string;
  deck: string;
  overview: string[];
  takeaways: Array<{ heading: string; text: string }>;
  recommendedFor: string[];
  readingTips: string[];
  questions: string[];
  editorialNote: string;
  relatedArticles: string[];
};

export const bookGuides: BookGuide[] = [
  {
    slug: "habitos-atomicos",
    title: "Hábitos Atómicos",
    deck: "Una guía práctica para convertir cambios pequeños en sistemas que puedan sostenerse.",
    overview: [
      "James Clear propone observar el cambio personal desde una escala manejable. En lugar de depender de grandes impulsos de motivación, el libro dirige la atención hacia las acciones pequeñas que repetimos y hacia el entorno que facilita o dificulta esas acciones. Su valor está en presentar el hábito como parte de un sistema y no como una prueba aislada de fuerza de voluntad.",
      "La lectura resulta especialmente útil cuando se acompaña con experimentos concretos. Elegir una conducta, reducir su dificultad y registrar la repetición permite comprobar qué ideas funcionan en la vida real. El objetivo no es perseguir perfección, sino construir evidencia diaria de la persona en la que queremos convertirnos.",
    ],
    takeaways: [
      { heading: "Sistemas antes que deseos", text: "Una meta indica dirección, pero el sistema cotidiano determina si avanzamos incluso cuando la motivación cambia." },
      { heading: "El entorno también decide", text: "Hacer visibles las señales correctas y reducir la fricción puede ser más efectivo que exigir disciplina constante." },
      { heading: "Identidad y repetición", text: "Cada repetición funciona como un voto por una identidad: leer unas páginas refuerza la idea de que somos lectores." },
    ],
    recommendedFor: ["Personas que empiezan rutinas y las abandonan pronto.", "Lectores que buscan un método sencillo para medir progreso.", "Quienes prefieren herramientas prácticas a discursos motivacionales."],
    readingTips: ["Elige un solo hábito para aplicar mientras lees.", "Anota qué señal, acción y recompensa forman tu rutina actual.", "Revisa el sistema cada semana sin convertir un tropiezo en abandono."],
    questions: ["¿Qué conducta pequeña tendría un efecto acumulativo importante?", "¿Qué parte de tu entorno vuelve difícil el hábito que deseas?", "¿Qué identidad quieres reforzar con tus acciones diarias?"],
    editorialNote: "No todas las conductas dependen únicamente de decisiones individuales: salud, tiempo, recursos y contexto también importan. Conviene usar el método como herramienta flexible, no como motivo para culparse cuando una situación exige apoyo adicional.",
    relatedArticles: ["como-crear-el-habito-de-leer-todos-los-dias", "beneficios-de-la-lectura-diaria"],
  },
  {
    slug: "padre-rico-padre-pobre",
    title: "Padre Rico, Padre Pobre",
    deck: "Una introducción provocadora a la educación financiera, los activos y la relación personal con el dinero.",
    overview: [
      "Robert Kiyosaki organiza el libro alrededor de dos maneras contrapuestas de pensar sobre trabajo, riesgo y dinero. El recurso narrativo de las dos figuras paternas convierte conceptos financieros básicos en preguntas memorables: qué compramos con nuestros ingresos, qué entendemos por activo y cuánto depende nuestra seguridad de una sola fuente de dinero.",
      "Su principal aporte no es ofrecer un plan de inversión completo, sino despertar curiosidad financiera. Puede impulsar al lector a revisar gastos, aprender contabilidad básica y distinguir entre consumo, ahorro e inversión. Esa apertura debe continuar con fuentes técnicas y actualizadas antes de tomar decisiones que impliquen patrimonio o deuda.",
    ],
    takeaways: [
      { heading: "Aprender el lenguaje del dinero", text: "Comprender ingresos, gastos, activos, pasivos y flujo de efectivo mejora la calidad de las decisiones cotidianas." },
      { heading: "Construir opciones", text: "Diversificar habilidades y fuentes de ingreso puede reducir la dependencia de una única vía profesional." },
      { heading: "Pensar en el largo plazo", text: "Una compra no debería evaluarse solo por su precio, sino también por los costos y beneficios que genera después." },
    ],
    recommendedFor: ["Principiantes que nunca han estudiado finanzas personales.", "Personas que desean revisar creencias familiares sobre el dinero.", "Lectores que buscan motivación para aprender conceptos financieros básicos."],
    readingTips: ["Separa las ideas generales de las recomendaciones concretas.", "Contrasta cada propuesta con fuentes financieras reguladas y actuales.", "Haz un inventario realista de ingresos, gastos, deudas y ahorro."],
    questions: ["¿Qué aprendiste sobre dinero en tu familia?", "¿Qué gasto recurrente limita hoy tus opciones futuras?", "¿Qué conocimiento financiero necesitas estudiar con mayor rigor?"],
    editorialNote: "Esta obra no sustituye asesoramiento financiero y algunas de sus afirmaciones son deliberadamente simplificadas. NextFaro la presenta como una puerta de entrada a la educación financiera, no como una garantía de riqueza ni una estrategia de inversión personalizada.",
    relatedArticles: ["mejores-libros-para-mejorar-finanzas-personales", "importancia-de-aprender-continuamente"],
  },
  {
    slug: "piense-y-hagase-rico",
    title: "Piense y hágase rico",
    deck: "Un clásico sobre propósito definido, persistencia y disciplina mental leído con perspectiva contemporánea.",
    overview: [
      "Napoleon Hill relaciona el logro con la claridad de propósito, la planificación y la persistencia. Aunque el título enfatiza la riqueza, muchas de sus ideas pueden leerse como una exploración del compromiso con objetivos de largo plazo. La obra pertenece a otra época y combina observaciones útiles con afirmaciones que requieren distancia crítica.",
      "La mejor manera de aprovecharla es convertir la inspiración en decisiones verificables. Definir una meta concreta, establecer un plazo, buscar conocimiento especializado y revisar resultados aporta más que repetir afirmaciones sin acción. La lectura puede servir como detonante de enfoque, siempre que no confunda pensamiento positivo con evidencia o causalidad.",
    ],
    takeaways: [
      { heading: "Propósito específico", text: "Una intención vaga se vuelve más útil cuando define resultado, plazo, recursos y siguiente paso." },
      { heading: "Persistir con aprendizaje", text: "La constancia no consiste en repetir lo mismo, sino en ajustar el plan después de recibir información." },
      { heading: "Redes de colaboración", text: "Los objetivos complejos suelen requerir conocimiento y perspectivas que una sola persona no posee." },
    ],
    recommendedFor: ["Lectores interesados en la historia de la literatura de éxito.", "Personas que necesitan traducir una aspiración en un plan.", "Emprendedores dispuestos a contrastar motivación con datos."],
    readingTips: ["Escribe una meta que pueda observarse y medirse.", "Marca por separado las ideas inspiradoras y las afirmaciones comprobables.", "Revisa semanalmente qué aprendiste, no solo cuánto insististe."],
    questions: ["¿Tu objetivo está definido con suficiente precisión?", "¿Qué dato podría demostrar que tu estrategia necesita cambiar?", "¿A quién puedes pedir una perspectiva que todavía no tienes?"],
    editorialNote: "El éxito económico depende de múltiples factores personales y estructurales. Visualizar y perseverar pueden apoyar la acción, pero no garantizan resultados. Esta guía invita a leer el libro como documento influyente de desarrollo personal, no como fórmula científica.",
    relatedArticles: ["libros-recomendados-para-emprendedores", "lectura-y-desarrollo-personal"],
  },
  {
    slug: "el-poder-del-ahora",
    title: "El poder del ahora",
    deck: "Una invitación espiritual a observar el pensamiento y recuperar atención sobre la experiencia presente.",
    overview: [
      "Eckhart Tolle explora la diferencia entre experimentar el presente y quedar absorbidos por el relato constante de la mente. Su propuesta no consiste en eliminar el pensamiento, sino en reconocer cuándo la preocupación por el pasado o el futuro ocupa toda la atención. El formato reflexivo invita a leer con pausa y a observar la propia experiencia.",
      "Para algunos lectores, su lenguaje espiritual ofrece calma y una forma nueva de relacionarse con pensamientos difíciles. Para otros puede resultar abstracto. Su mayor utilidad aparece al traducir una idea en una práctica sencilla: detenerse, percibir la respiración, notar el cuerpo y distinguir entre lo que ocurre ahora y la interpretación que estamos construyendo.",
    ],
    takeaways: [
      { heading: "Observar sin identificarse", text: "Un pensamiento puede reconocerse como actividad mental sin asumir automáticamente que describe toda la realidad." },
      { heading: "Volver a lo inmediato", text: "Atender sensaciones, respiración y entorno ofrece un punto de apoyo cuando la mente se dispersa." },
      { heading: "Aceptar antes de actuar", text: "Reconocer una situación tal como es no significa resignarse; permite responder desde mayor claridad." },
    ],
    recommendedFor: ["Personas interesadas en presencia y contemplación.", "Lectores que disfrutan textos espirituales y reflexivos.", "Quienes desean explorar una relación menos automática con sus pensamientos."],
    readingTips: ["Lee pocas páginas y deja tiempo para observar la idea.", "Prueba prácticas breves sin forzarte a alcanzar un estado especial.", "Distingue entre reflexión espiritual y atención clínica de salud mental."],
    questions: ["¿Qué parte de tu experiencia pertenece al presente y cuál a una anticipación?", "¿Puedes notar un pensamiento sin seguirlo de inmediato?", "¿Qué decisión se vuelve más clara cuando reduces el ruido mental?"],
    editorialNote: "El libro ofrece una perspectiva espiritual, no un tratamiento médico o psicológico. Si existe sufrimiento persistente, ansiedad intensa o depresión, la lectura puede acompañar, pero no reemplazar, la atención de profesionales cualificados.",
    relatedArticles: ["lectura-concentracion", "lectura-y-desarrollo-personal"],
  },
  {
    slug: "el-inversor-inteligente",
    title: "El inversor inteligente",
    deck: "Principios clásicos para pensar en valor, margen de seguridad y disciplina frente a la volatilidad.",
    overview: [
      "Benjamin Graham diferencia la inversión basada en análisis y protección del capital de la especulación guiada por expectativas de precio. Su marco de inversión en valor sigue siendo influyente porque dirige la atención hacia el precio pagado, la calidad del activo y la capacidad emocional para sostener una estrategia durante ciclos de mercado.",
      "Es una lectura más exigente que una introducción habitual a finanzas. Algunas referencias y cifras pertenecen a otro contexto histórico, pero conceptos como margen de seguridad, diversificación y separación entre precio y valor conservan utilidad educativa. Conviene acompañarlo con material actualizado sobre impuestos, productos financieros y regulación del país del lector.",
    ],
    takeaways: [
      { heading: "Precio no es valor", text: "La cotización muestra lo que el mercado pide hoy; el valor exige analizar negocio, riesgos y capacidad de generar resultados." },
      { heading: "Margen de seguridad", text: "Dejar espacio para errores de cálculo reduce la dependencia de que todas las previsiones sean correctas." },
      { heading: "Temperamento del inversor", text: "La disciplina y el horizonte temporal importan tanto como la habilidad para interpretar información financiera." },
    ],
    recommendedFor: ["Lectores con conocimientos financieros básicos.", "Personas interesadas en inversión de largo plazo.", "Quienes desean entender la diferencia entre invertir y especular."],
    readingTips: ["No intentes terminarlo rápidamente; trabaja un capítulo por vez.", "Actualiza ejemplos históricos con fuentes financieras recientes.", "Anota qué conceptos comprendes y cuáles requieren estudio adicional."],
    questions: ["¿Qué riesgo estás asumiendo sin comprenderlo completamente?", "¿Tu horizonte coincide con la volatilidad de la inversión?", "¿Qué margen tienes si tu estimación resulta equivocada?"],
    editorialNote: "Esta ficha tiene propósito educativo y no constituye asesoramiento de inversión. La selección de activos depende de situación financiera, objetivos, regulación y tolerancia al riesgo; consulta profesionales autorizados cuando corresponda.",
    relatedArticles: ["mejores-libros-para-mejorar-finanzas-personales", "como-recordar-mejor-lo-que-lees"],
  },
  {
    slug: "como-ganar-amigos-e-influir-sobre-las-personas",
    title: "Cómo ganar amigos e influir sobre las personas",
    deck: "Principios clásicos de escucha, empatía y comunicación interpersonal aplicados con autenticidad.",
    overview: [
      "Dale Carnegie parte de una observación sencilla: las relaciones mejoran cuando las personas se sienten escuchadas, respetadas y valoradas. Sus ejemplos pertenecen a un contexto histórico distinto, pero la atención genuina, la escucha activa y la capacidad de reconocer errores continúan siendo habilidades relevantes en conversaciones personales y profesionales.",
      "El riesgo de una lectura superficial es convertir sus principios en técnicas de manipulación. El enfoque más fértil es el contrario: interesarse de verdad por la perspectiva ajena, reducir la necesidad de tener siempre razón y expresar reconocimiento específico. La influencia sostenible nace de la confianza, no de una colección de trucos sociales.",
    ],
    takeaways: [
      { heading: "Escuchar antes de responder", text: "Comprender necesidades e intereses permite conversar sobre lo que realmente importa a la otra persona." },
      { heading: "Corregir sin humillar", text: "Admitir errores propios y formular preguntas puede abrir más cooperación que una orden o acusación." },
      { heading: "Reconocimiento específico", text: "El aprecio sincero describe una conducta concreta; la adulación busca una reacción y suele percibirse." },
    ],
    recommendedFor: ["Personas que desean mejorar conversaciones difíciles.", "Líderes, vendedores y profesionales de servicio.", "Lectores interesados en comunicación y relaciones humanas."],
    readingTips: ["Practica un principio durante una semana antes de añadir otro.", "Observa si tu interés por los demás es genuino o instrumental.", "Adapta los ejemplos antiguos a relaciones actuales y diversas."],
    questions: ["¿Escuchas para comprender o para preparar tu respuesta?", "¿Cómo puedes discrepar sin reducir a la otra persona?", "¿Qué reconocimiento sincero has dejado de expresar?"],
    editorialNote: "La empatía no exige renunciar a límites ni evitar todos los conflictos. Una comunicación respetuosa puede incluir desacuerdo, negociación y un no claro cuando la situación lo requiere.",
    relatedArticles: ["lectura-y-desarrollo-personal", "libros-recomendados-para-emprendedores"],
  },
  {
    slug: "los-7-habitos-de-la-gente-altamente-efectiva",
    title: "Los 7 hábitos de la gente altamente efectiva",
    deck: "Un marco basado en principios para conectar responsabilidad, prioridades, cooperación y renovación personal.",
    overview: [
      "Stephen R. Covey organiza el desarrollo personal como un proceso que avanza desde la dependencia hacia la independencia y la colaboración. El libro no trata únicamente de productividad: propone examinar carácter, responsabilidad, propósito, relaciones y cuidado personal como partes de un mismo sistema.",
      "Su estructura permite trabajar cada hábito por separado, pero gana sentido cuando se observa la relación entre ellos. Definir dirección ayuda a priorizar; escuchar facilita acuerdos; renovar energía hace posible sostener el esfuerzo. Es una lectura apropiada para volver periódicamente, porque las preguntas cambian con cada etapa personal y profesional.",
    ],
    takeaways: [
      { heading: "Elegir la respuesta", text: "Ser proactivo significa reconocer el espacio de decisión disponible, incluso cuando no controlamos la situación completa." },
      { heading: "Prioridades con propósito", text: "Lo importante suele necesitar espacio deliberado antes de convertirse en urgente." },
      { heading: "Interdependencia", text: "Cooperar bien requiere autonomía, escucha y acuerdos que consideren a todas las partes." },
    ],
    recommendedFor: ["Lectores que buscan un marco integral de desarrollo.", "Personas con responsabilidades de liderazgo o coordinación.", "Quienes desean ordenar prioridades sin reducir la vida a tareas."],
    readingTips: ["Trabaja un hábito durante varias semanas.", "Escribe una versión breve de tus principios y prioridades.", "Evalúa resultados personales y también el efecto en tus relaciones."],
    questions: ["¿Qué pertenece hoy a tu círculo real de influencia?", "¿Tu agenda refleja lo que dices que importa?", "¿Qué conversación necesita más escucha antes de buscar una solución?"],
    editorialNote: "Los marcos de efectividad son orientaciones, no medidas universales de valor personal. Circunstancias, salud y responsabilidades cambian la manera en que cada persona puede aplicar los principios.",
    relatedArticles: ["como-crear-el-habito-de-leer-todos-los-dias", "importancia-de-aprender-continuamente"],
  },
  {
    slug: "el-alquimista",
    title: "El Alquimista",
    deck: "Una fábula sobre búsqueda, propósito y la tensión entre seguridad y deseo de explorar.",
    overview: [
      "Paulo Coelho sigue el viaje de Santiago, un joven pastor que abandona lo conocido para perseguir un tesoro. La narración utiliza símbolos, encuentros y pruebas para hablar de vocación, miedo, intuición y aprendizaje. Su lenguaje directo permite leer la historia como aventura y, al mismo tiempo, como reflexión sobre las decisiones que dan forma a una vida.",
      "La fuerza del libro no está en ofrecer instrucciones literales, sino en provocar preguntas. ¿Cuándo una aspiración expresa un propósito profundo y cuándo es una fantasía? ¿Qué aprendemos durante un camino aunque el resultado sea distinto al esperado? La respuesta más útil surge al conectar la fábula con circunstancias concretas y aceptar que ningún sueño elimina la necesidad de preparación.",
    ],
    takeaways: [
      { heading: "El viaje también transforma", text: "La búsqueda cambia al protagonista mediante experiencias que no podía anticipar desde el punto de partida." },
      { heading: "Atender señales con criterio", text: "La intuición puede orientar preguntas, pero las decisiones también necesitan información y responsabilidad." },
      { heading: "Miedo y posibilidad", text: "La seguridad protege, aunque a veces también puede convertirse en excusa para no explorar una dirección valiosa." },
    ],
    recommendedFor: ["Lectores que disfrutan fábulas breves y simbólicas.", "Personas atravesando una decisión o transición.", "Jóvenes y adultos que quieren conversar sobre propósito."],
    readingTips: ["Lee primero la historia sin intentar descifrar cada símbolo.", "Después anota qué escenas conectan con tu propia experiencia.", "Distingue inspiración narrativa de consejo aplicable literalmente."],
    questions: ["¿Qué deseo persiste incluso cuando intentas ignorarlo?", "¿Qué preparación necesita ese deseo para convertirse en proyecto?", "¿Qué has aprendido de un camino que no terminó como esperabas?"],
    editorialNote: "La novela celebra la búsqueda personal, pero la vida real incluye obligaciones y desigualdades que una fábula no puede representar por completo. Su valor está en abrir conversación, no en prometer que desear algo garantiza obtenerlo.",
    relatedArticles: ["como-elegir-tu-proximo-libro", "lectura-y-desarrollo-personal"],
  },
  {
    slug: "las-48-leyes-del-poder",
    title: "Las 48 leyes del poder",
    deck: "Un recorrido histórico por estrategias de poder que conviene leer como observación y no como mandato moral.",
    overview: [
      "Robert Greene reúne episodios históricos para identificar patrones de ambición, reputación, dependencia y conflicto. El libro adopta deliberadamente un tono estratégico y amoral. Por eso puede interesar tanto a quien busca comprender dinámicas de poder como a quien quiere reconocer comportamientos manipuladores y protegerse de ellos.",
      "Una lectura crítica evita asumir que toda relación es una competencia. Algunas estrategias describen entornos hostiles, pero aplicarlas sin contexto puede destruir confianza y cooperación. Contrastar cada ley con ética, consecuencias y relaciones de largo plazo convierte una lectura provocadora en una herramienta de análisis más responsable.",
    ],
    takeaways: [
      { heading: "El poder también es percepción", text: "Reputación, información y expectativas influyen en la capacidad de una persona para actuar dentro de un grupo." },
      { heading: "Leer las dependencias", text: "Comprender quién necesita qué ayuda a identificar incentivos, vulnerabilidades y posibles conflictos." },
      { heading: "La estrategia tiene costos", text: "Una victoria inmediata puede deteriorar credibilidad, relaciones y oportunidades futuras." },
    ],
    recommendedFor: ["Lectores de historia, estrategia y comportamiento humano.", "Personas interesadas en reconocer manipulación.", "Quienes disfrutan contrastar ideas provocadoras con criterios éticos."],
    readingTips: ["No leas las leyes como reglas universales.", "Pregunta quién paga el costo de cada estrategia.", "Contrasta los ejemplos con modelos de cooperación y liderazgo responsable."],
    questions: ["¿Qué dinámica de poder estás normalizando sin examinarla?", "¿Qué estrategia sería eficaz pero incompatible con tus valores?", "¿Cómo cambia una relación cuando existe transparencia?"],
    editorialNote: "NextFaro no presenta esta obra como código de conducta. Su utilidad editorial está en analizar el poder, detectar tácticas y discutir sus consecuencias. Comprender una estrategia no obliga a practicarla.",
    relatedArticles: ["como-recordar-mejor-lo-que-lees", "importancia-de-aprender-continuamente"],
  },
  {
    slug: "naciste-rico",
    title: "Naciste rico",
    deck: "Una propuesta motivacional sobre potencial, metas y la relación entre pensamiento y acción.",
    overview: [
      "Bob Proctor parte de la idea de que muchas limitaciones se sostienen mediante hábitos mentales y expectativas aprendidas. La obra invita a revisar la imagen personal, definir objetivos y asumir un papel activo en el propio desarrollo. Su lenguaje pertenece a la tradición motivacional y debe leerse distinguiendo metáfora, experiencia y evidencia.",
      "El valor práctico aparece cuando el optimismo se traduce en aprendizaje, planificación y conducta observable. Reconocer capacidades puede impulsar una decisión, pero desarrollar esas capacidades exige práctica, retroalimentación y tiempo. La lectura funciona mejor como estímulo para iniciar un proceso que como explicación completa de por qué algunas personas prosperan y otras enfrentan dificultades.",
    ],
    takeaways: [
      { heading: "Revisar el autoconcepto", text: "Las expectativas sobre lo que creemos posible influyen en qué oportunidades intentamos explorar." },
      { heading: "Convertir deseo en dirección", text: "Una meta clara ayuda a seleccionar conocimientos, hábitos y relaciones que apoyan el avance." },
      { heading: "Actuar con continuidad", text: "La confianza se fortalece con evidencia creada por acciones pequeñas y repetidas." },
    ],
    recommendedFor: ["Lectores que disfrutan desarrollo personal motivacional.", "Personas que desean revisar objetivos postergados.", "Quienes están dispuestos a convertir inspiración en práctica medible."],
    readingTips: ["Escribe una meta y el primer comportamiento asociado.", "Contrasta afirmaciones extraordinarias con evidencia fiable.", "Registra acciones realizadas, no solo estados de ánimo."],
    questions: ["¿Qué posibilidad descartaste antes de investigarla?", "¿Qué habilidad concreta acercaría tu meta?", "¿Cómo medirás avance sin depender únicamente de motivación?"],
    editorialNote: "La prosperidad no depende solo de la mentalidad; también intervienen educación, salud, entorno, oportunidades y condiciones económicas. La obra puede inspirar acción, pero no debe utilizarse para responsabilizar a las personas de obstáculos estructurales.",
    relatedArticles: ["lectura-y-desarrollo-personal", "libros-recomendados-para-emprendedores"],
  },
  {
    slug: "poder-sin-limites",
    title: "Poder sin límites",
    deck: "Herramientas de desarrollo personal sobre creencias, comunicación, estado emocional y acción dirigida.",
    overview: [
      "Tony Robbins presenta un enfoque intensivo para observar cómo interpretamos experiencias y cómo esas interpretaciones influyen en conducta. El libro recorre objetivos, lenguaje, creencias, comunicación y estrategias asociadas con la programación neurolingüística, un marco popular en desarrollo personal cuya evidencia científica es discutida.",
      "La lectura puede ser útil como inventario de preguntas y ejercicios, especialmente cuando obliga a definir qué queremos cambiar y qué acción estamos evitando. Conviene probar cada herramienta de manera concreta, conservar lo que resulte útil y descartar afirmaciones que pretendan explicar procesos psicológicos complejos con una fórmula demasiado simple.",
    ],
    takeaways: [
      { heading: "El significado guía la respuesta", text: "Dos personas pueden interpretar un mismo evento de forma distinta y, por ello, elegir conductas diferentes." },
      { heading: "Cambiar mediante práctica", text: "Una idea se vuelve valiosa cuando modifica una decisión repetible y puede revisarse con resultados." },
      { heading: "Comunicación con intención", text: "Observar lenguaje, tono y necesidades mejora la posibilidad de entender y ser entendido." },
    ],
    recommendedFor: ["Lectores que disfrutan ejercicios de desarrollo personal.", "Personas que buscan energía para iniciar un cambio.", "Comunicadores y líderes que quieren revisar su impacto."],
    readingTips: ["Prueba un ejercicio a la vez y registra el resultado.", "No aceptes una afirmación psicológica solo porque suena convincente.", "Busca apoyo profesional cuando el problema exceda el autoaprendizaje."],
    questions: ["¿Qué interpretación habitual limita tus opciones?", "¿Qué acción pequeña pondría a prueba una nueva creencia?", "¿Tu forma de comunicar coincide con el efecto que deseas producir?"],
    editorialNote: "La programación neurolingüística no cuenta con el mismo respaldo empírico que tratamientos psicológicos validados. Esta obra se recomienda como material de reflexión y motivación, no como sustituto de atención médica o psicológica.",
    relatedArticles: ["lectura-y-desarrollo-personal", "como-recordar-mejor-lo-que-lees"],
  },
  {
    slug: "las-ensenanzas-secretas-de-todos-los-tiempos",
    title: "Las enseñanzas secretas de todos los tiempos",
    deck: "Un extenso compendio de simbolismo, mitología, religiones y tradiciones esotéricas occidentales.",
    overview: [
      "Manly P. Hall reúne materiales sobre escuelas de misterio, alquimia, cábala, hermetismo, sociedades iniciáticas, filosofía antigua y lectura simbólica. Más que una narración lineal, la obra funciona como un mapa enciclopédico de temas que han influido en corrientes espirituales y esotéricas.",
      "Su amplitud es a la vez atractivo y dificultad. Hall conecta tradiciones diversas desde una perspectiva propia de principios del siglo XX, por lo que conviene distinguir documentación histórica, interpretación comparativa y especulación. El libro puede despertar preguntas fértiles si se acompaña con estudios académicos actuales sobre historia de las religiones, arte y filosofía.",
    ],
    takeaways: [
      { heading: "Los símbolos viajan", text: "Imágenes semejantes adquieren significados distintos cuando cambian la época, la comunidad y el contexto ritual." },
      { heading: "Comparar exige cuidado", text: "Encontrar paralelos entre tradiciones no demuestra que compartan un origen o una doctrina idéntica." },
      { heading: "Una puerta a nuevas disciplinas", text: "Cada capítulo puede convertirse en punto de partida para estudiar historia, filosofía, mitología o arte." },
    ],
    recommendedFor: ["Lectores de simbolismo, mitología e historia de ideas.", "Personas dispuestas a consultar fuentes complementarias.", "Quienes disfrutan obras extensas de referencia."],
    readingTips: ["No es necesario seguirlo de principio a fin.", "Elige un tema y contrástalo con investigación contemporánea.", "Separa afirmaciones históricas de interpretaciones esotéricas."],
    questions: ["¿Qué símbolo cambia de significado según su contexto?", "¿Qué afirmación necesita una fuente histórica adicional?", "¿Qué tradición te interesa estudiar desde más de una perspectiva?"],
    editorialNote: "El libro refleja la interpretación de su autor y no representa consenso académico sobre todas las tradiciones descritas. NextFaro recomienda leerlo con curiosidad y contraste crítico, especialmente ante afirmaciones históricas o universales.",
    relatedArticles: ["importancia-de-aprender-continuamente", "como-elegir-tu-proximo-libro"],
  },
  {
    slug: "el-principe",
    title: "El príncipe",
    deck: "Un clásico del pensamiento político sobre adquisición, conservación y fragilidad del poder.",
    overview: [
      "Nicolás Maquiavelo escribió este tratado en el contexto inestable de la Italia renacentista. Analiza decisiones de gobernantes, alianzas, fuerza, reputación, fortuna y capacidad política con un realismo que rompió con buena parte de la tradición moralizante anterior. Leerlo ayuda a comprender por qué su nombre sigue asociado con debates sobre poder y medios.",
      "La obra no debe reducirse a la frase popular sobre fines y medios, que simplifica su pensamiento. Su interés está en observar la tensión entre lo deseable y lo posible, entre legitimidad y eficacia, y entre circunstancias que un líder controla y aquellas que lo sorprenden. Las introducciones históricas de buenas ediciones enriquecen mucho la lectura.",
    ],
    takeaways: [
      { heading: "Contexto antes que receta", text: "Una estrategia eficaz en una ciudad, época o conflicto puede fracasar cuando cambian instituciones y expectativas." },
      { heading: "Fortuna y capacidad", text: "La política combina condiciones inesperadas con preparación, lectura del momento y habilidad para actuar." },
      { heading: "Poder y percepción pública", text: "La estabilidad depende tanto de recursos reales como de alianzas, reputación y aceptación." },
    ],
    recommendedFor: ["Lectores de historia y filosofía política.", "Personas interesadas en liderazgo y estrategia.", "Quienes desean comprender referencias frecuentes de la cultura política."],
    readingTips: ["Lee una introducción sobre Florencia y el Renacimiento.", "Evita trasladar literalmente consejos de un principado a cualquier relación.", "Contrasta eficacia política con legitimidad y ética."],
    questions: ["¿Qué parte de una estrategia depende de su contexto histórico?", "¿Puede una decisión eficaz debilitar la legitimidad futura?", "¿Cómo equilibran los líderes prudencia, adaptación y principios?"],
    editorialNote: "Comprender el análisis de Maquiavelo no equivale a justificar autoritarismo o manipulación. La obra cobra valor cuando se discute junto a historia, ética e instituciones democráticas.",
    relatedArticles: ["importancia-de-aprender-continuamente", "como-recordar-mejor-lo-que-lees"],
  },
  {
    slug: "los-secretos-de-la-mente-millonaria",
    title: "Los secretos de la mente millonaria",
    deck: "Una exploración popular de las creencias y patrones de conducta que rodean nuestra relación con el dinero.",
    overview: [
      "T. Harv Eker propone que cada persona desarrolla un patrón financiero influido por mensajes familiares, experiencias y asociaciones emocionales. El libro invita a observar cómo esas creencias aparecen al ahorrar, gastar, negociar, asumir riesgos o hablar de riqueza. Esa autoobservación puede revelar contradicciones entre objetivos declarados y hábitos cotidianos.",
      "Su lenguaje es motivacional y algunas comparaciones entre personas ricas y pobres resultan demasiado generales. La aplicación más sensata consiste en identificar un comportamiento específico, examinar sus causas y adquirir conocimiento financiero verificable. Cambiar una creencia puede apoyar mejores decisiones, pero no reemplaza ingresos, protección social, regulación ni planificación.",
    ],
    takeaways: [
      { heading: "El dinero tiene una historia personal", text: "Frases escuchadas durante años pueden influir en decisiones sin que seamos plenamente conscientes." },
      { heading: "Creencia y conducta", text: "Una idea cambia resultados solo cuando conduce a acciones sostenibles como presupuestar, ahorrar o aprender." },
      { heading: "Responsabilidad sin simplificar", text: "Asumir agencia personal es útil siempre que no ignore barreras económicas y sociales reales." },
    ],
    recommendedFor: ["Personas que desean examinar hábitos financieros.", "Lectores de psicología popular del dinero.", "Principiantes que continuarán con fuentes técnicas."],
    readingTips: ["Anota las frases sobre dinero que aprendiste en casa.", "Convierte cada reflexión en una conducta medible.", "Contrasta consejos con fuentes financieras independientes."],
    questions: ["¿Qué emoción aparece cuando revisas tus finanzas?", "¿Qué creencia sostiene un hábito que deseas cambiar?", "¿Qué decisión necesita datos y no solo una nueva actitud?"],
    editorialNote: "La mentalidad influye, pero no explica por sí sola la situación económica. Esta guía no ofrece asesoramiento financiero ni promete riqueza; recomienda complementar la lectura con presupuesto, ahorro, gestión de riesgos y fuentes reguladas.",
    relatedArticles: ["mejores-libros-para-mejorar-finanzas-personales", "lectura-y-desarrollo-personal"],
  },
  {
    slug: "12-reglas-para-vivir",
    title: "12 reglas para vivir",
    deck: "Ensayos sobre responsabilidad, orden, verdad, sufrimiento y construcción de sentido en medio del caos.",
    overview: [
      "Jordan Peterson desarrolla doce reglas mediante una mezcla de psicología, relatos personales, mitología, religión y cultura. El libro pregunta cómo una persona puede asumir responsabilidad sin negar la dificultad de la vida. Algunas reglas son directas; sus explicaciones, en cambio, se expanden en ensayos densos y asociaciones amplias.",
      "La obra ha generado adhesión y controversia, por lo que merece una lectura activa. Es posible encontrar ideas útiles sobre honestidad, cuidado, comparación y orden personal sin aceptar cada interpretación histórica o social del autor. Tomar notas y contrastar perspectivas permite separar la pregunta valiosa de una respuesta con la que quizá no coincidamos.",
    ],
    takeaways: [
      { heading: "Responsabilidad gradual", text: "Atender lo cercano y posible puede recuperar capacidad de acción cuando un problema parece demasiado grande." },
      { heading: "Compararse con cuidado", text: "Medir el avance frente a nuestro punto de partida suele ser más constructivo que competir con una imagen parcial de otros." },
      { heading: "Verdad y coherencia", text: "Hablar con precisión obliga a revisar qué sabemos, qué suponemos y qué estamos evitando." },
    ],
    recommendedFor: ["Lectores de psicología popular y filosofía práctica.", "Personas que disfrutan ensayos largos y argumentativos.", "Quienes están dispuestos a dialogar críticamente con el autor."],
    readingTips: ["Resume cada regla con tus propias palabras.", "Distingue evidencia psicológica, interpretación y opinión.", "Busca perspectivas adicionales sobre los temas polémicos."],
    questions: ["¿Qué responsabilidad pequeña has estado posponiendo?", "¿Qué comparación te impide reconocer progreso real?", "¿En qué tema necesitas hablar con más precisión?"],
    editorialNote: "Peterson es una figura pública controvertida y algunas de sus posiciones sociales reciben críticas importantes. Recomendar el libro no implica respaldar todas sus conclusiones; NextFaro promueve lectura crítica, contraste y conversación respetuosa.",
    relatedArticles: ["lectura-y-desarrollo-personal", "como-recordar-mejor-lo-que-lees"],
  },
  {
    slug: "jacobo-grinberg-y-la-manifestacion-cuantica",
    title: "Jacobo Grinberg y la Manifestación Cuántica",
    deck: "Una entrada a preguntas sobre percepción y conciencia que exige distinguir hipótesis, metáfora y ciencia establecida.",
    overview: [
      "Jacobo Grinberg investigó percepción, psicofisiología y prácticas chamánicas, y formuló la teoría sintérgica como intento de explicar la relación entre experiencia consciente y realidad. Su figura también está rodeada por el misterio de su desaparición. Esa combinación ha despertado interés, pero puede mezclar con facilidad trabajo académico, especulación y narrativas posteriores.",
      "La expresión manifestación cuántica suele utilizar vocabulario de la física fuera de su significado técnico. Por eso esta selección debe abordarse como exploración cultural de ideas sobre mente y percepción, no como demostración de que el pensamiento altera directamente la realidad física. Una lectura responsable compara las propuestas con neurociencia y física publicadas en fuentes académicas.",
    ],
    takeaways: [
      { heading: "La percepción construye experiencia", text: "El cerebro organiza señales y expectativas para producir una experiencia coherente del entorno." },
      { heading: "Una hipótesis no es un hecho", text: "Una propuesta científica necesita definiciones claras, predicciones comprobables y evidencia reproducible." },
      { heading: "El vocabulario importa", text: "Usar términos como energía o cuántico no convierte automáticamente una explicación en física." },
    ],
    recommendedFor: ["Lectores interesados en historia de ideas sobre conciencia.", "Personas dispuestas a contrastar afirmaciones extraordinarias.", "Quienes quieren explorar el legado cultural de Grinberg."],
    readingTips: ["Distingue textos originales de interpretaciones posteriores.", "Busca evidencia independiente y revisada por especialistas.", "Trata las metáforas como metáforas, no como mecanismos demostrados."],
    questions: ["¿Qué afirmación podría ponerse a prueba de forma objetiva?", "¿Dónde termina la descripción de una experiencia y empieza una explicación física?", "¿Qué fuente independiente permitiría contrastar la propuesta?"],
    editorialNote: "La teoría sintérgica no forma parte del consenso científico y las afirmaciones de manifestación cuántica no deben presentarse como hechos establecidos. NextFaro incluye esta obra por su interés cultural y reflexivo, acompañada de esta advertencia crítica.",
    relatedArticles: ["importancia-de-aprender-continuamente", "como-recordar-mejor-lo-que-lees"],
  },
  {
    slug: "1984",
    title: "1984",
    deck: "Una distopía sobre vigilancia, lenguaje, memoria y el poder de imponer una versión de la realidad.",
    overview: [
      "George Orwell imagina una sociedad en la que el poder político busca dominar no solo la conducta, sino también el lenguaje, la memoria y la posibilidad de formular una verdad independiente. A través de Winston Smith, la novela muestra cómo la vigilancia y la reescritura del pasado reducen el espacio interior desde el que una persona puede resistir.",
      "Su vigencia no depende de identificar un gobierno contemporáneo con la ficción de manera automática. La lectura más rica observa mecanismos: empobrecimiento del lenguaje, repetición de contradicciones, control de registros y aislamiento social. Es una novela que ayuda a preguntar qué instituciones, hábitos y relaciones protegen la conversación pública y la memoria compartida.",
    ],
    takeaways: [
      { heading: "El lenguaje delimita posibilidades", text: "Reducir palabras y matices puede dificultar la formulación de desacuerdo y pensamiento complejo." },
      { heading: "Controlar el pasado", text: "Cuando no existen registros confiables, el poder puede presentar cada nueva versión como si siempre hubiera sido cierta." },
      { heading: "La intimidad también es política", text: "La confianza entre personas crea espacios de memoria y resistencia frente al aislamiento." },
    ],
    recommendedFor: ["Lectores de novelas políticas y distopías.", "Personas interesadas en medios, lenguaje y poder.", "Clubes de lectura que buscan debate histórico y actual."],
    readingTips: ["Observa cómo cambia el significado de las palabras.", "Distingue la advertencia literaria de una comparación política apresurada.", "Conecta la novela con preguntas sobre archivos, prensa y privacidad."],
    questions: ["¿Qué ocurre cuando una sociedad pierde referencias compartidas?", "¿Cómo protege el lenguaje preciso la capacidad de disentir?", "¿Qué instituciones ayudan a verificar la memoria pública?"],
    editorialNote: "1984 es una obra de ficción, no una plantilla exacta para etiquetar cualquier desacuerdo político. Su potencia está en ofrecer conceptos para examinar vigilancia, propaganda y verdad con mayor cuidado.",
    relatedArticles: ["lectura-concentracion", "importancia-de-aprender-continuamente"],
  },
  {
    slug: "el-hombre-en-busca-de-sentido",
    title: "El hombre en busca de sentido",
    deck: "Testimonio y reflexión psicológica sobre dignidad, responsabilidad y sentido bajo condiciones extremas.",
    overview: [
      "Viktor E. Frankl relata su experiencia como prisionero en campos de concentración nazis y desarrolla ideas vinculadas con la logoterapia, enfoque centrado en la búsqueda de sentido. Es una obra breve, pero emocionalmente exigente: su contexto histórico requiere respeto y no debería reducirse a una colección de frases motivacionales.",
      "Frankl no afirma que el sufrimiento sea deseable ni que una actitud positiva elimine la violencia. Su reflexión se concentra en la respuesta interior que puede quedar disponible incluso cuando casi todo ha sido arrebatado. Para el lector actual, la obra abre preguntas sobre propósito, amor, trabajo, responsabilidad y la forma de acompañar el dolor sin trivializarlo.",
    ],
    takeaways: [
      { heading: "El sentido es concreto", text: "No existe una respuesta idéntica para todos; el sentido cambia según la persona, la tarea y el momento." },
      { heading: "Dignidad bajo presión", text: "La capacidad de elegir una actitud puede persistir, aunque las condiciones externas limiten radicalmente otras opciones." },
      { heading: "Responsabilidad ante la vida", text: "La pregunta no es solo qué esperamos de la vida, sino qué situación nos está pidiendo responder." },
    ],
    recommendedFor: ["Lectores de psicología, memoria y filosofía existencial.", "Personas que buscan una reflexión seria sobre propósito.", "Quienes pueden abordar testimonios del Holocausto con cuidado."],
    readingTips: ["Lee sin prisa y deja espacio para procesar el testimonio.", "Evita comparar de forma ligera el sufrimiento descrito con dificultades cotidianas.", "Busca contexto histórico y material sobre logoterapia."],
    questions: ["¿Qué responsabilidad concreta da dirección a tu presente?", "¿Cómo acompañar el sufrimiento sin imponer una explicación?", "¿Qué valor deseas conservar incluso bajo presión?"],
    editorialNote: "Esta lectura aborda trauma, muerte y el Holocausto. El sentido no debe utilizarse para culpar a quien sufre ni para negar atención psicológica. La obra invita a la responsabilidad y la dignidad, no a romantizar el dolor.",
    relatedArticles: ["lectura-y-desarrollo-personal", "como-recordar-mejor-lo-que-lees"],
  },
  {
    slug: "el-tercer-ojo",
    title: "El tercer ojo",
    deck: "Un relato espiritual influyente cuya historia editorial y afirmaciones deben leerse con contexto crítico.",
    overview: [
      "El libro se presenta como la formación de un lama tibetano y describe prácticas espirituales, vida monástica y fenómenos psíquicos. Durante décadas atrajo a lectores occidentales interesados en Tibet y esoterismo. Sin embargo, investigaciones posteriores identificaron al autor como Cyril Henry Hoskin, un británico que escribió bajo el nombre Lobsang Rampa, y la obra es ampliamente considerada una ficción o engaño literario.",
      "Conocer ese contexto cambia la lectura. Puede estudiarse como fenómeno cultural sobre la imaginación occidental de Tibet, pero no como testimonio histórico fiable de la tradición tibetana. Quien se interese por budismo, medicina tibetana o historia regional debería continuar con autores, investigadores y comunidades vinculados directamente con esas tradiciones.",
    ],
    takeaways: [
      { heading: "La procedencia importa", text: "Una narración en primera persona no garantiza que identidad, lugares y experiencias sean auténticos." },
      { heading: "Fascinación y representación", text: "Una obra popular puede moldear la imagen de una cultura aunque describa esa cultura de forma inexacta." },
      { heading: "Leer más allá del relato", text: "El interés despertado por un libro puede conducir a fuentes históricas y voces más confiables." },
    ],
    recommendedFor: ["Lectores de historia del esoterismo popular.", "Personas interesadas en analizar autenticidad literaria.", "Quienes aceptan leer la obra con advertencias claras."],
    readingTips: ["No la tomes como autobiografía comprobada.", "Contrasta sus descripciones con fuentes tibetanas y académicas.", "Observa qué expectativas culturales hicieron convincente el relato."],
    questions: ["¿Qué señales utilizas para evaluar la credibilidad de un narrador?", "¿Cómo afecta una falsa identidad a la interpretación de una obra?", "¿Qué voces faltan cuando una cultura es explicada desde fuera?"],
    editorialNote: "NextFaro señala expresamente la controversia de autoría y autenticidad. La presencia del título en el catálogo no valida afirmaciones paranormales ni lo convierte en fuente fiable sobre Tibet o budismo.",
    relatedArticles: ["como-elegir-tu-proximo-libro", "importancia-de-aprender-continuamente"],
  },
  {
    slug: "el-nino-estrella",
    title: "El niño estrella",
    deck: "Un álbum ilustrado que contempla la vida humana desde la distancia del cosmos y la curiosidad de la infancia.",
    overview: [
      "Claire A. Nivola imagina a un pequeño ser estelar atraído por la Tierra. Para visitarla debe aceptar nacer como un niño y recorrer una existencia humana, con sus descubrimientos, vínculos, cambios y límites. El recurso fantástico convierte lo cotidiano en algo que merece volver a observarse.",
      "Aunque está dirigido a lectores infantiles, el libro permite una lectura compartida entre edades. Las ilustraciones y el texto breve abren conversaciones sobre nacimiento, tiempo, pertenencia, muerte y asombro sin convertirlas en una explicación cerrada. Su valor está en la pregunta y en la posibilidad de mirar la vida como un viaje extraordinario precisamente porque es limitado.",
    ],
    takeaways: [
      { heading: "Mirar lo cotidiano de nuevo", text: "Cambiar el punto de vista devuelve extrañeza y belleza a experiencias que solemos dar por sentadas." },
      { heading: "La vida como recorrido", text: "Crecer implica transformaciones, vínculos y despedidas que pueden conversarse con lenguaje sensible." },
      { heading: "Lectura entre generaciones", text: "Un álbum ilustrado puede ofrecer preguntas distintas a niños y adultos sin exigir una única respuesta." },
    ],
    recommendedFor: ["Familias que disfrutan lectura compartida.", "Docentes y mediadores de lectura infantil.", "Adultos interesados en álbumes ilustrados contemplativos."],
    readingTips: ["Deja tiempo para observar cada ilustración.", "Pregunta qué detalles descubre el niño antes de explicar tu interpretación.", "Permite que las preguntas difíciles permanezcan abiertas."],
    questions: ["¿Qué aspecto de la Tierra sorprendería a alguien que llega por primera vez?", "¿Qué hace valioso un momento aunque termine?", "¿Cómo cambia una historia cuando la miran un niño y un adulto?"],
    editorialNote: "La obra utiliza fantasía y lenguaje poético para conversar sobre la experiencia humana. No necesita convertirse en lección literal: su riqueza está en el diálogo que aparece entre imagen, texto y lector.",
    relatedArticles: ["beneficios-de-la-lectura-diaria", "como-elegir-tu-proximo-libro"],
  },
];

export function getBookGuide(slug: string) {
  return bookGuides.find((guide) => guide.slug === slug);
}

export function getBookGuideByTitle(title: string) {
  return bookGuides.find((guide) => guide.title === title);
}

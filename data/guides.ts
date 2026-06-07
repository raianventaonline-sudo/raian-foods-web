import type { FaqItem } from "@/data/products";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  heroImage?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  };
  sections: GuideSection[];
  faqs: FaqItem[];
  relatedProductSlugs: string[];
  primaryProductSlug: string;
};

export const guides: Guide[] = [
  {
    slug: "harina-de-almendra",
    title: "Harina de almendra: qué es, usos y cómo usarla en repostería",
    metaTitle: "Harina de almendra: usos y cómo usarla",
    description:
      "Qué es la harina de almendra, para qué sirve, cómo sustituir la harina de trigo, ideas de repostería y cómo conservarla correctamente.",
    intro:
      "La harina de almendra es almendra molida muy fina que aporta sabor, jugosidad y una textura delicada a la repostería. Al no contener gluten de forma natural, se ha vuelto un ingrediente habitual en bizcochos, galletas y bases de tarta. En esta guía te explicamos qué es, cómo usarla y cómo conservarla.",
    heroImage: {
      src: "/images/products/harina-almendra-main.png",
      alt: "Harina de almendra RAIAN 100% molida en formato 1 kg",
      fit: "contain"
    },
    sections: [
      {
        heading: "Qué es la harina de almendra",
        paragraphs: [
          "La harina de almendra se obtiene moliendo almendra hasta conseguir una textura fina y homogénea. Aporta sabor a fruto seco, grasa natural y humedad, lo que da como resultado elaboraciones más jugosas y tiernas que con harinas refinadas.",
          "Al proceder solo de la almendra, no contiene gluten de forma natural. Aun así, si necesitas una garantía estricta para personas celíacas, conviene revisar siempre el etiquetado final por posibles trazas."
        ]
      },
      {
        heading: "Cómo usarla en repostería",
        paragraphs: [
          "Tamizar la harina de almendra antes de mezclarla ayuda a evitar grumos y a integrarla mejor con el resto de ingredientes secos. Funciona muy bien en bizcochos, galletas, financiers, bases de tarta y rebozados finos.",
          "No siempre se puede sustituir la harina de trigo al 100%, porque la almendra no aporta gluten (la estructura elástica de muchas masas) y suma más humedad y densidad. Para un resultado fiable, usa recetas pensadas para harina de almendra o combínala con otras harinas."
        ]
      },
      {
        heading: "Conservación y trucos",
        paragraphs: [
          "Guárdala en un lugar fresco, seco y protegido de la luz, con el envase bien cerrado. Como todos los frutos secos molidos, contiene grasa que con el tiempo puede enranciarse: refrigerarla una vez abierta ayuda a prolongar su frescura.",
          "Si buscas una textura aún más fina para preparaciones delicadas, puedes pasarla por un colador fino antes de usarla."
        ]
      }
    ],
    faqs: [
      {
        question: "¿La harina de almendra tiene gluten?",
        answer:
          "La almendra no contiene gluten de forma natural. Aun así, revisa el etiquetado final por posibles trazas si necesitas una garantía estricta para personas celíacas."
      },
      {
        question: "¿Puedo sustituir la harina de trigo por harina de almendra?",
        answer:
          "No siempre al 100%, porque la almendra no aporta gluten y da más humedad y densidad. Funciona mejor en recetas pensadas para ella o combinada con otras harinas."
      },
      {
        question: "¿Cómo se conserva la harina de almendra?",
        answer:
          "En un lugar fresco, seco y protegido de la luz, con el envase bien cerrado. Refrigerarla una vez abierta ayuda a evitar que se enrancie."
      }
    ],
    primaryProductSlug: "harina-de-almendra",
    relatedProductSlugs: ["harina-de-almendra", "pistacho-puro-en-grano", "cacao-en-polvo-alcalino"]
  },
  {
    slug: "cacao-alcalinizado",
    title: "Cacao alcalinizado: qué es y en qué se diferencia del natural",
    metaTitle: "Cacao alcalinizado: qué es y cómo usarlo",
    description:
      "Qué es el cacao alcalinizado (proceso holandés), en qué se diferencia del cacao natural y cómo usarlo en repostería y bebidas.",
    intro:
      "El cacao alcalinizado, también conocido como cacao tipo holandés, es cacao en polvo tratado para suavizar su sabor, oscurecer su color y mejorar su solubilidad. Es la opción preferida en muchas elaboraciones de repostería por su intensidad. Aquí te explicamos qué es, en qué se diferencia del natural y cómo aprovecharlo.",
    heroImage: {
      src: "/images/products/cacao-en-polvo-alcalino-main.png",
      alt: "Cacao puro natural alcalinizado RAIAN 100% cacao en formato 1 kg",
      fit: "contain"
    },
    sections: [
      {
        heading: "Qué es el cacao alcalinizado",
        paragraphs: [
          "Es cacao en polvo sometido a un proceso de alcalinización (conocido como proceso holandés) en el que se trata con un regulador de acidez. El resultado es un cacao de sabor más suave y redondo, color más oscuro e intenso y mejor capacidad para disolverse.",
          "El cacao puro alcalinizado de RAIAN es 100% cacao, sin azúcar añadido y apto para dietas veganas. Su único regulador de acidez es el carbonato potásico, responsable de la alcalinización."
        ]
      },
      {
        heading: "Diferencias con el cacao natural",
        paragraphs: [
          "El cacao natural es más ácido, de color más claro y sabor más afrutado. El alcalinizado rebaja esa acidez, gana profundidad de color y ofrece un sabor a chocolate más intenso y menos amargo.",
          "Esa diferencia también afecta al color final de tus elaboraciones: el cacao alcalinizado da brownies, bizcochos y coberturas con un tono mucho más oscuro y apetecible."
        ]
      },
      {
        heading: "Cómo usarlo en repostería y bebidas",
        paragraphs: [
          "Para repostería, una referencia habitual es sustituir entre el 20% y el 25% del peso de la harina por cacao, tamizándolo antes para evitar grumos. Es ideal en brownies, coulants, bizcochos, cremas y glasas oscuras.",
          "Para bebidas, disuelve unos 10-15 g por cada 200 ml de leche y ajusta la cantidad según la intensidad que busques."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué es el cacao alcalinizado?",
        answer:
          "Es cacao en polvo tratado mediante el proceso holandés (alcalinización), que suaviza el sabor, intensifica el color oscuro y mejora la solubilidad."
      },
      {
        question: "¿En qué se diferencia del cacao natural?",
        answer:
          "El natural es más ácido, claro y afrutado; el alcalinizado es más oscuro, intenso y menos amargo, con mejor disolución."
      },
      {
        question: "¿Lleva azúcar y es vegano?",
        answer:
          "Es 100% cacao, sin azúcar añadido y apto para dietas veganas. Su único regulador de acidez es el carbonato potásico."
      }
    ],
    primaryProductSlug: "cacao-en-polvo-alcalino",
    relatedProductSlugs: ["cacao-en-polvo-alcalino", "chocolate-a-la-taza", "lecitina-de-soja"]
  },
  {
    slug: "maltodextrina",
    title: "Maltodextrina: qué es, para qué sirve y cómo tomarla",
    metaTitle: "Maltodextrina: qué es y cómo tomarla",
    description:
      "Qué es la maltodextrina, para qué se usa en el deporte, cómo tomarla y otros usos como agente de textura en la cocina.",
    intro:
      "La maltodextrina es un carbohidrato en polvo de absorción rápida muy utilizado en el ámbito deportivo para aportar energía, y también como agente de textura en la cocina. En esta guía te explicamos qué es, cómo se usa y cómo se toma.",
    sections: [
      {
        heading: "Qué es la maltodextrina",
        paragraphs: [
          "Es un carbohidrato (un polisacárido) obtenido a partir de almidón, de fácil disolución y absorción rápida. Apenas tiene sabor dulce, por lo que se aprecia sobre todo por su aporte energético y por cómo se integra en líquidos.",
          "Por su comportamiento, es habitual en bebidas y geles de uso deportivo, pero también se emplea como agente de textura en algunas preparaciones."
        ]
      },
      {
        heading: "Para qué sirve en el deporte",
        paragraphs: [
          "Se usa para aportar energía rápida antes, durante o después del ejercicio: bebidas de recuperación, geles energéticos caseros y bebidas isotónicas son sus aplicaciones más comunes.",
          "Como referencia general de uso, suelen tomarse entre 30 y 60 g por hora de ejercicio intenso, disueltos en agua o bebida. Ajusta la cantidad a tu actividad y a tus necesidades."
        ]
      },
      {
        heading: "Cómo prepararla y otros usos",
        paragraphs: [
          "Se disuelve con facilidad: basta con mezclarla bien en agua o en la bebida elegida hasta su completa disolución. Puedes combinarla con sales minerales para preparar isotónicas caseras.",
          "Fuera del deporte, también se utiliza como agente de textura en algunas elaboraciones de repostería y cocina."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué es la maltodextrina?",
        answer:
          "Un carbohidrato (polisacárido) de fácil disolución y absorción rápida, usado para aportar energía en el deporte y como agente de textura."
      },
      {
        question: "¿Cómo se toma para el deporte?",
        answer:
          "Una pauta habitual es 30-60 g por hora de ejercicio intenso, disuelta en agua o bebida. Ajusta la cantidad a tu actividad."
      },
      {
        question: "¿La maltodextrina es dulce?",
        answer:
          "Apenas. Tiene un sabor muy poco dulce; se utiliza sobre todo por su aporte energético y por su efecto sobre la textura."
      }
    ],
    primaryProductSlug: "maltodextrina",
    relatedProductSlugs: ["maltodextrina", "dextrosa", "caseina-pura-neutra"]
  },
  {
    slug: "caseina-micelar",
    title: "Caseína micelar: qué es y cuándo tomarla",
    metaTitle: "Caseína micelar: qué es y cuándo tomarla",
    description:
      "Qué es la caseína micelar, en qué se diferencia de las proteínas de absorción rápida, cuándo se suele tomar y cómo usarla en recetas.",
    intro:
      "La caseína micelar es una proteína de la leche de digestión lenta, valorada por liberar aminoácidos de forma gradual durante horas. En su versión neutra, sin aromas ni edulcorantes, es muy versátil. Aquí te explicamos qué es, cuándo se toma y cómo usarla.",
    sections: [
      {
        heading: "Qué es la caseína micelar",
        paragraphs: [
          "Es la fracción proteica mayoritaria de la leche, obtenida en forma de polvo. Su característica principal es la digestión lenta: libera aminoácidos de manera progresiva durante varias horas.",
          "La versión neutra no lleva aromas ni edulcorantes añadidos, lo que la hace más flexible para mezclar tanto en batidos como en recetas dulces o saladas."
        ]
      },
      {
        heading: "Digestión lenta frente a proteínas rápidas",
        paragraphs: [
          "A diferencia de las proteínas de absorción rápida, la caseína se asimila de forma gradual. Por eso suele asociarse a momentos en los que interesa una liberación prolongada de aminoácidos.",
          "No es mejor ni peor que otras proteínas: simplemente cumple un papel distinto dentro de la dieta según el objetivo de cada persona."
        ]
      },
      {
        heading: "Cuándo tomarla y cómo usarla",
        paragraphs: [
          "Habitualmente se toma antes de dormir o en periodos largos sin ingesta, aprovechando su liberación lenta. Una toma de referencia es 25-30 g mezclados con 200-250 ml de leche o bebida vegetal.",
          "Su textura espesa la hace ideal para puddings proteicos, mousses, pancakes y batidos de saciedad. Para puddings, usa menos líquido (80-100 ml) y refrigera unos 30 minutos."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué es la caseína micelar?",
        answer:
          "Una proteína de la leche de digestión lenta que libera aminoácidos de forma gradual, a diferencia de las proteínas de absorción rápida."
      },
      {
        question: "¿Cuándo se suele tomar?",
        answer:
          "Habitualmente antes de dormir o en periodos largos sin ingesta, por su liberación prolongada. Ajusta su uso a tus objetivos y a tu dieta."
      },
      {
        question: "¿Contiene alérgenos?",
        answer:
          "Contiene leche y puede contener trazas de soja. Revisa siempre el etiquetado final para confirmarlo."
      }
    ],
    primaryProductSlug: "caseina-pura-neutra",
    relatedProductSlugs: ["caseina-pura-neutra", "maltodextrina", "inulina-de-agave"]
  },
  {
    slug: "pistacho-natural",
    title: "Pistacho natural: usos en repostería y cómo hacer crema de pistacho",
    metaTitle: "Pistacho natural: usos y crema de pistacho",
    description:
      "Cómo usar el pistacho natural pelado en repostería, cómo tostarlo y cómo preparar crema de pistacho casera paso a paso.",
    intro:
      "El pistacho puro pelado en grano, natural y sin sal, es un ingrediente premium para repostería, cremas y snacks. Al no estar tostado ni salado, controlas tú el resultado final. En esta guía te contamos sus usos y cómo preparar crema de pistacho.",
    sections: [
      {
        heading: "Qué es el pistacho natural en grano",
        paragraphs: [
          "Es pistacho pelado en grano, sin sal añadida ni tueste previo. Eso permite usarlo tal cual o tostarlo en casa al punto que prefieras, conservando todo su sabor.",
          "Es ideal cuando el pistacho debe ser el protagonista: repostería premium, cremas artesanales, granolas o como snack natural."
        ]
      },
      {
        heading: "Cómo tostarlo",
        paragraphs: [
          "Para realzar su sabor, extiéndelo en una bandeja y hornéalo a unos 170 °C durante unos 8 minutos, vigilándolo para que no se pase.",
          "El tostado ligero intensifica el aroma y mejora la textura, especialmente si luego vas a triturarlo para una crema."
        ]
      },
      {
        heading: "Cómo hacer crema de pistacho",
        paragraphs: [
          "Tritura el pistacho en una batidora o procesador potente hasta obtener una textura suave. La grasa natural del fruto seco hará que poco a poco se forme una pasta cremosa.",
          "Si lo tuestas ligeramente antes, conseguirás una crema más aromática. Puedes ajustar el dulzor y la textura según el uso que le vayas a dar."
        ]
      }
    ],
    faqs: [
      {
        question: "¿El pistacho lleva sal o está tostado?",
        answer:
          "No. Es pistacho natural pelado en grano, sin sal añadida ni tueste previo, para que controles tú el resultado final."
      },
      {
        question: "¿Cómo se tuesta el pistacho en casa?",
        answer:
          "Extiéndelo en una bandeja y hornéalo a unos 170 °C durante unos 8 minutos, vigilándolo para que no se pase."
      },
      {
        question: "¿Cómo se hace crema de pistacho?",
        answer:
          "Triturándolo en una batidora potente hasta obtener una textura suave. Tostarlo ligeramente antes intensifica el sabor."
      }
    ],
    primaryProductSlug: "pistacho-puro-en-grano",
    relatedProductSlugs: ["pistacho-puro-en-grano", "harina-de-almendra", "cacao-en-polvo-alcalino"]
  },
  {
    slug: "lecitina-de-soja",
    title: "Lecitina de soja: qué es y para qué sirve como emulsionante",
    metaTitle: "Lecitina de soja: qué es y para qué sirve",
    description:
      "Qué es la lecitina de soja, cómo funciona como emulsionante, sus usos en cocina (mayonesa vegana, chocolate, espumas) y cuánta usar.",
    intro:
      "La lecitina de soja es un emulsionante natural que permite unir ingredientes acuosos y grasos que, por sí solos, no se mezclarían. Es muy útil en cocina y repostería. En esta guía te explicamos qué es, cómo funciona y para qué sirve.",
    sections: [
      {
        heading: "Qué es la lecitina de soja",
        paragraphs: [
          "Es un emulsionante natural obtenido de la soja, en forma de polvo fino. Su función es lograr que ingredientes de base acuosa y de base grasa se integren en una mezcla estable y homogénea.",
          "Se utiliza en pequeñas cantidades y resulta muy versátil tanto en preparaciones saladas como dulces."
        ]
      },
      {
        heading: "Para qué sirve en la cocina",
        paragraphs: [
          "Es imprescindible para mayonesas veganas sin huevo y muy útil en salsas y vinagretas emulsionadas, espumas culinarias y chocolates con una textura más fluida.",
          "También se emplea para mejorar la textura de algunas masas y panes."
        ]
      },
      {
        heading: "Cuánta usar y cómo integrarla",
        paragraphs: [
          "Como referencia, suele emplearse entre el 0,5% y el 1% del peso total de la preparación. Para una mayonesa vegana, unos 5-10 g por cada 250 ml de mezcla.",
          "Añádela al líquido y bate antes de incorporar el aceite. Disolverla en un líquido tibio ayuda a integrarla mejor. Si se solidifica con el frío, es normal y no afecta a su uso."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Para qué sirve la lecitina de soja?",
        answer:
          "Es un emulsionante natural que une ingredientes acuosos y grasos: mayonesas veganas, salsas, chocolates y espumas culinarias."
      },
      {
        question: "¿Cuánta lecitina de soja se usa?",
        answer:
          "Como referencia, en torno al 0,5-1% del peso total. Para una mayonesa vegana, unos 5-10 g por cada 250 ml de mezcla."
      },
      {
        question: "¿Por qué se solidifica con el frío?",
        answer:
          "Es normal por su composición y no afecta a su uso. Disuélvela en un líquido tibio para integrarla mejor."
      }
    ],
    primaryProductSlug: "lecitina-de-soja",
    relatedProductSlugs: ["lecitina-de-soja", "cacao-en-polvo-alcalino", "chocolate-a-la-taza"]
  },
  {
    slug: "inulina-de-agave",
    title: "Inulina de agave: qué es y cómo tomarla",
    metaTitle: "Inulina de agave: qué es y cómo tomarla",
    description:
      "Qué es la inulina de agave, por qué es una fibra prebiótica, cómo empezar a tomarla y cómo usarla en batidos, yogures y recetas.",
    intro:
      "La inulina de agave es una fibra prebiótica soluble, ligeramente dulce, que se mezcla con facilidad y apenas altera el sabor de las preparaciones. En esta guía te explicamos qué es, cómo introducirla poco a poco y cómo usarla en el día a día.",
    sections: [
      {
        heading: "Qué es la inulina de agave",
        paragraphs: [
          "Es una fibra soluble del tipo fructooligosacárido extraída del agave. Se considera un prebiótico porque sirve de alimento a las bacterias beneficiosas de la flora intestinal.",
          "Aporta una dulzura muy ligera y se disuelve bien en frío o templado, por lo que es cómoda de incorporar a bebidas y recetas."
        ]
      },
      {
        heading: "Cómo empezar a tomarla",
        paragraphs: [
          "Al ser una fibra, conviene introducirla de forma progresiva para que el organismo se adapte. Una pauta habitual es empezar con unos 5 g al día e ir aumentando poco a poco hasta unos 10 g.",
          "Disuélvela en líquido frío o a temperatura ambiente. Es preferible no superar los 130 °C para mantener sus propiedades."
        ]
      },
      {
        heading: "Usos en la cocina",
        paragraphs: [
          "Es ideal para enriquecer batidos y smoothies con fibra, mezclarla en yogur o kéfir y preparar bebidas funcionales.",
          "También puede actuar como sustituto parcial de azúcar en algunas recetas, gracias a su ligero dulzor."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué es la inulina de agave?",
        answer:
          "Una fibra prebiótica soluble extraída del agave que sirve de alimento para la flora intestinal y aporta una dulzura muy ligera."
      },
      {
        question: "¿Cómo se empieza a tomar?",
        answer:
          "Conviene empezar con unos 5 g al día e ir aumentando poco a poco hasta unos 10 g, para que el organismo se adapte."
      },
      {
        question: "¿Se puede calentar?",
        answer:
          "Se disuelve mejor en frío o templado. Es preferible no superar los 130 °C para mantener sus propiedades."
      }
    ],
    primaryProductSlug: "inulina-de-agave",
    relatedProductSlugs: ["inulina-de-agave", "caseina-pura-neutra", "cacao-en-polvo-alcalino"]
  },
  {
    slug: "dextrosa",
    title: "Dextrosa: qué es, para qué sirve y diferencias con el azúcar",
    metaTitle: "Dextrosa: qué es y para qué sirve",
    description:
      "Qué es la dextrosa, para qué se usa en el deporte y la cocina y en qué se diferencia del azúcar común (sacarosa).",
    intro:
      "La dextrosa es glucosa en forma de azúcar simple, de rápida asimilación, con usos que van del deporte a la heladería y la repostería. En esta guía te explicamos qué es, para qué sirve y cómo se diferencia del azúcar de mesa.",
    heroImage: {
      src: "/images/products/dextrosa-main.png",
      alt: "Dextrosa RAIAN en polvo, formato 1 kg",
      fit: "contain"
    },
    sections: [
      {
        heading: "Qué es la dextrosa",
        paragraphs: [
          "La dextrosa es glucosa pura presentada en polvo. Es un azúcar simple que el organismo asimila con rapidez, por eso es popular en contextos donde se busca energía rápida.",
          "Apenas necesita preparación: se pesa con precisión y se incorpora a la mezcla según la receta o la formulación."
        ]
      },
      {
        heading: "Para qué sirve",
        paragraphs: [
          "En el deporte se usa para bebidas isotónicas y geles energéticos caseros. En heladería ayuda a controlar la cristalización y mejora la textura, y en repostería interviene en distintas elaboraciones dulces.",
          "Cada receta indicará la cantidad adecuada, ya que su comportamiento difiere del azúcar común."
        ]
      },
      {
        heading: "Diferencias con el azúcar común",
        paragraphs: [
          "El azúcar de mesa es sacarosa, mientras que la dextrosa es glucosa pura. En la práctica, la dextrosa endulza algo menos y se absorbe con más rapidez.",
          "Esa diferencia es justo lo que la hace interesante en heladería y en preparaciones deportivas, donde no solo importa el dulzor sino también la textura y la asimilación."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué es la dextrosa?",
        answer:
          "Es glucosa en forma de azúcar simple, de rápida asimilación, muy usada en preparaciones deportivas, heladería y repostería."
      },
      {
        question: "¿En qué se diferencia del azúcar común?",
        answer:
          "El azúcar de mesa es sacarosa; la dextrosa es glucosa pura. Endulza algo menos y se absorbe con más rapidez."
      },
      {
        question: "¿Para qué se usa la dextrosa?",
        answer:
          "Para bebidas isotónicas y geles energéticos, para controlar la cristalización en helados y para distintas elaboraciones dulces."
      }
    ],
    primaryProductSlug: "dextrosa",
    relatedProductSlugs: ["dextrosa", "glucosa", "maltodextrina"]
  },
  {
    slug: "glucosa",
    title: "Glucosa en repostería: para qué sirve y cómo usarla",
    metaTitle: "Glucosa en repostería: para qué sirve",
    description:
      "Para qué sirve la glucosa en repostería, su efecto anticristalizante y cómo usarla en caramelos, helados, ganaches y turrones.",
    intro:
      "La glucosa es un ingrediente clave en repostería y confitería: aporta suavidad y evita la cristalización del azúcar en muchas elaboraciones. En esta guía te explicamos para qué sirve y cómo aprovecharla.",
    heroImage: {
      src: "/images/products/glucosa-main.png",
      alt: "Glucosa RAIAN en formato 1 kg",
      fit: "contain"
    },
    sections: [
      {
        heading: "Para qué sirve la glucosa",
        paragraphs: [
          "En repostería, la glucosa se valora sobre todo por su efecto anticristalizante: ayuda a que el azúcar no forme cristales, lo que se traduce en caramelos más suaves, ganaches más satinadas y helados más cremosos.",
          "También aporta textura y brillo a coberturas y rellenos, y mejora la conservación de algunas elaboraciones."
        ]
      },
      {
        heading: "Usos habituales",
        paragraphs: [
          "Es muy común en caramelos blandos, ganaches de chocolate, helados cremosos sin heladera, turrón blando y lemon curd, entre otras preparaciones.",
          "En cada caso, la receta indicará la proporción adecuada respecto al azúcar y al resto de ingredientes."
        ]
      },
      {
        heading: "Cómo usarla",
        paragraphs: [
          "Se integra en la mezcla durante la elaboración, según el orden que indique la receta. Conviene pesarla con precisión, ya que pequeñas variaciones afectan a la textura final.",
          "Cierra bien el envase tras cada uso para mantener su calidad."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Para qué sirve la glucosa en repostería?",
        answer:
          "Aporta suavidad y ayuda a evitar la cristalización del azúcar en caramelos, ganaches, helados, turrones y otras elaboraciones dulces."
      },
      {
        question: "¿Es lo mismo la glucosa que la dextrosa?",
        answer:
          "Están relacionadas, pero no se usan igual. En repostería la glucosa se aprecia sobre todo por su efecto anticristalizante y por la textura que aporta."
      },
      {
        question: "¿Cómo se usa la glucosa?",
        answer:
          "Según indique la receta: se integra en la mezcla durante la elaboración. Conviene cerrar bien el envase tras cada uso."
      }
    ],
    primaryProductSlug: "glucosa",
    relatedProductSlugs: ["glucosa", "dextrosa", "gelatina-neutra-bovina"]
  },
  {
    slug: "chocolate-a-la-taza",
    title: "Chocolate a la taza: cómo prepararlo y usarlo en repostería",
    metaTitle: "Chocolate a la taza: cómo prepararlo",
    description:
      "Cómo preparar el chocolate a la taza perfecto, en qué proporción mezclarlo con la leche y cómo usarlo también en repostería.",
    intro:
      "El chocolate a la taza es un clásico reconfortante que va mucho más allá de la bebida caliente: también es un gran aliado en repostería. En esta guía te explicamos cómo prepararlo y cómo sacarle partido.",
    sections: [
      {
        heading: "Cómo preparar la bebida",
        paragraphs: [
          "La proporción de referencia es mezclar unos 30-40 g de chocolate a la taza por cada 200 ml de leche caliente, removiendo hasta que se disuelva por completo.",
          "A partir de ahí, ajusta la cantidad para conseguir la textura que más te guste, desde una bebida ligera hasta un chocolate espeso para mojar."
        ]
      },
      {
        heading: "Usos en repostería",
        paragraphs: [
          "Incorporado como polvo seco junto al resto de ingredientes secos, sirve para mousses, bizcochos, cremas y porridge de avena con sabor a chocolate.",
          "También funciona muy bien en batidos fríos y en fondue de chocolate para acompañar con frutas y galletas."
        ]
      },
      {
        heading: "Trucos y conservación",
        paragraphs: [
          "Para evitar grumos, añade el polvo poco a poco sobre la leche caliente removiendo de forma constante. Si lo prefieres más intenso, sube la proporción de chocolate.",
          "Consérvalo en un lugar fresco, seco y protegido de la luz, y cierra bien el envase tras cada uso."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cómo se prepara el chocolate a la taza?",
        answer:
          "Mezcla unos 30-40 g por cada 200 ml de leche caliente y remueve hasta que se disuelva por completo. Ajusta la cantidad a tu gusto."
      },
      {
        question: "¿Se puede usar en repostería?",
        answer:
          "Sí. Incorporado como polvo seco junto al resto de ingredientes secos sirve para mousses, bizcochos, cremas y fondue de chocolate."
      },
      {
        question: "¿Contiene alérgenos?",
        answer:
          "Puede contener trazas de leche. Confirma siempre los alérgenos con el etiquetado final del producto."
      }
    ],
    primaryProductSlug: "chocolate-a-la-taza",
    relatedProductSlugs: ["chocolate-a-la-taza", "cacao-en-polvo-alcalino", "harina-de-almendra"]
  }
];

export const getGuideBySlug = (slug: string) => guides.find((guide) => guide.slug === slug);

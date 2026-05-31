export type ImageAsset = {
  src: string;
  alt: string;
  label: string;
  available: boolean;
  fit?: "cover" | "contain";
};

export type TechnicalRow = {
  label: string;
  value: string;
};

export type NutritionRow = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  tags: string[];
  mainImage: ImageAsset;
  gallery: ImageAsset[];
  uses: string[];
  howToUse: string[];
  technicalSheet: TechnicalRow[];
  nutrition: NutritionRow[];
  allergens: string;
  conservation: string;
  amazonUrl: string | null;
  amazonAsin: string;
  relatedSlugs: string[];
  recipeSlugs: string[];
  amazonReviewUrl?: string;
};

const pending = "Pendiente de completar";

const nutritionPlaceholder: NutritionRow[] = [
  { label: "Valor energético", value: pending },
  { label: "Grasas", value: pending },
  { label: "De las cuales saturadas", value: pending },
  { label: "Hidratos de carbono", value: pending },
  { label: "De los cuales azúcares", value: pending },
  { label: "Proteínas", value: pending },
  { label: "Sal", value: pending }
];

const galleryFor = (productName: string): ImageAsset[] =>
  Array.from({ length: 5 }, (_, index) => ({
    src: "/images/placeholders/product-placeholder.svg",
    alt: `${productName} - imagen ${index + 1} pendiente`,
    label: `Imagen ${index + 1} pendiente`,
    available: false
  }));

const technicalSheetFor = (productName: string, type: string, ingredients: string): TechnicalRow[] => [
  { label: "Nombre del producto", value: productName },
  { label: "Origen / tipo", value: type },
  { label: "Ingredientes", value: ingredients },
  { label: "Formato", value: pending },
  { label: "Peso neto", value: pending },
  { label: "Lote", value: pending },
  { label: "Fecha de consumo preferente", value: pending },
  { label: "Condiciones de conservación", value: pending },
  { label: "País de origen", value: pending },
  { label: "Alérgenos", value: pending },
  { label: "Uso previsto", value: "Uso alimentario" },
  { label: "EAN", value: pending },
  { label: "ASIN de Amazon", value: pending },
  { label: "Enlace Amazon", value: pending }
];

const bovineGelatinTechnicalSheet: TechnicalRow[] = [
  { label: "Nombre del producto", value: "Gelatina neutra bovina 260 Bloom 18 Mesh" },
  { label: "Origen / tipo", value: "Gelatina bovina 260 Bloom 18 Mesh" },
  { label: "Denominación interna", value: "GELATINA BOVINA 260BLOOM 18MESH* 1K" },
  { label: "Ingredientes", value: "Gelatina bovina" },
  { label: "Certificación / atributo", value: "Halal" },
  { label: "Formato", value: "1 kg" },
  { label: "Peso neto", value: "1 kg" },
  { label: "País de origen", value: "España" },
  { label: "Alérgenos", value: "No contiene" },
  { label: "Uso previsto", value: "Uso alimentario" },
  { label: "EAN", value: pending },
  { label: "ASIN de Amazon", value: "B0H2QMJHPD" },
  { label: "Enlace Amazon", value: "https://www.amazon.es/dp/B0H2QMJHPD" }
];

const bovineGelatinNutrition: NutritionRow[] = [
  { label: "Valor energético", value: "1402 kJ / 335 kcal" },
  { label: "Grasas", value: "0,1 g" },
  { label: "De las cuales saturadas", value: "0,07 g" },
  { label: "Hidratos de carbono", value: "0 g" },
  { label: "De los cuales azúcares", value: "0 g" },
  { label: "Proteínas", value: "85,6 g" },
  { label: "Sal", value: "0,49 g" }
];

const porcineGelatinTechnicalSheet: TechnicalRow[] = [
  { label: "Nombre del producto", value: "Gelatina neutra porcina 260 Bloom" },
  { label: "Origen / tipo", value: "Gelatina porcina 260 Bloom" },
  { label: "Ingredientes", value: "Gelatina porcina" },
  { label: "Formato", value: "1 kg" },
  { label: "Peso neto", value: "1 kg" },
  { label: "País de origen", value: "Pendiente de confirmar en etiquetado final" },
  { label: "Alérgenos", value: "No contiene alérgenos de declaración obligatoria" },
  { label: "Uso previsto", value: "Uso alimentario" },
  { label: "EAN", value: pending },
  { label: "ASIN de Amazon", value: pending },
  { label: "Enlace Amazon", value: pending }
];

const porcineGelatinNutrition: NutritionRow[] = [
  { label: "Valor energético", value: "1402 kJ / 335 kcal" },
  { label: "Grasas", value: "0,1 g" },
  { label: "De las cuales saturadas", value: "0,07 g" },
  { label: "Hidratos de carbono", value: "0 g" },
  { label: "De los cuales azúcares", value: "0 g" },
  { label: "Proteínas", value: "85,6 g" },
  { label: "Sal", value: "0,49 g" }
];

const almondFlourTechnicalSheet: TechnicalRow[] = [
  { label: "Nombre del producto", value: "Harina de almendra" },
  { label: "Origen / tipo", value: "Almendra molida" },
  { label: "Ingredientes", value: "100% almendra molida" },
  { label: "Formato", value: "1 kg" },
  { label: "Peso neto", value: "1 kg" },
  { label: "País de origen", value: pending },
  { label: "Alérgenos", value: "Contiene almendra (fruto de cáscara)" },
  { label: "Uso previsto", value: "Uso alimentario y repostería" },
  { label: "EAN", value: pending },
  { label: "ASIN de Amazon", value: pending },
  { label: "Enlace Amazon", value: pending }
];

const almondFlourNutrition: NutritionRow[] = [
  { label: "Valor energético", value: "2470 kJ / 590 kcal" },
  { label: "Grasas", value: "52,5 g" },
  { label: "De las cuales saturadas", value: "4,0 g" },
  { label: "Hidratos de carbono", value: "18,7 g" },
  { label: "De los cuales azúcares", value: "4,6 g" },
  { label: "Fibra alimentaria", value: "9,9 g" },
  { label: "Proteínas", value: "21,4 g" },
  { label: "Sal", value: "0,01 g" }
];

// Ficha técnica del cacao puro natural alcalinizado.
// Especificaciones físico-químicas tomadas de la ficha técnica del proveedor (Olam Cocoa, ref. D-23-A).
// Los datos nutricionales quedan pendientes: la ficha técnica del proveedor no incluye tabla nutricional.
const cacaoAlkalineTechnicalSheet: TechnicalRow[] = [
  { label: "Nombre del producto", value: "Cacao puro natural alcalinizado" },
  {
    label: "Origen / tipo",
    value: "Cacao en polvo alcalinizado (proceso holandés). Denominación según Directiva 2000/36/CE: cacao en polvo."
  },
  { label: "Ingredientes", value: "Cacao en polvo alcalinizado, regulador de acidez: carbonato potásico." },
  { label: "Aptitud", value: "100% cacao · Sin azúcar · Vegano" },
  { label: "Contenido en materia grasa", value: "22 - 24%" },
  { label: "pH (disolución al 10%)", value: "7,2 - 7,6" },
  { label: "Finura (tamiz de 75 µm)", value: "99,5% mín." },
  { label: "Humedad", value: "5% máx." },
  { label: "Formato", value: "1 kg" },
  { label: "Peso neto", value: "1 kg" },
  { label: "Fabricado por", value: "OLAM COCOA BV" },
  {
    label: "Envasado por",
    value: "Heladería Artesanal Valenciana GLASOL, S.L. (B96926480) para RAIAN AMZ SL (B26704098)"
  },
  { label: "Núm. RGSEAA", value: "20.047319/V" },
  { label: "País de origen", value: "España · La Pobla de Vallbona" },
  { label: "Certificaciones", value: "Kosher y Halal (según ficha técnica del proveedor)" },
  { label: "Alérgenos", value: pending },
  { label: "Uso previsto", value: "Uso alimentario y repostería" },
  { label: "EAN", value: pending },
  { label: "ASIN de Amazon", value: pending },
  { label: "Enlace Amazon", value: pending }
];

export const products: Product[] = [
  {
    slug: "gelatina-neutra-bovina",
    name: "Gelatina neutra bovina",
    shortDescription:
      "Gelatina neutra de origen bovino para recetas, postres, preparaciones culinarias y usos alimentarios generales.",
    description:
      "Gelatina neutra de origen bovino en formato 1 kg, con especificación 260 Bloom y 18 Mesh. Producto Halal pensado para preparaciones alimentarias que requieren textura, consistencia o una presentación cuidada.",
    category: "Gelatinas",
    tags: ["Neutra", "Origen bovino", "260 Bloom", "18 Mesh", "Halal", "1 kg"],
    mainImage: {
      src: "/images/products/gelatina-bovina-main.png",
      alt: "Bote de gelatina neutra bovina RAIAN 260 Bloom 1 kg",
      label: "Gelatina bovina 260 Bloom",
      available: true,
      fit: "contain"
    },
    gallery: [
      {
        src: "/images/products/gelatina%20bovina/2.jpg",
        alt: "¿Qué significa 260 Bloom? Escala y poder de gelificación de la gelatina RAIAN",
        label: "260 Bloom explicado",
        available: true,
        fit: "cover"
      },
      {
        src: "/images/products/gelatina%20bovina/3.jpg",
        alt: "Gelatina Neutra RAIAN versátil en cada receta: repostería, wellness y cocina salada",
        label: "Versátil en cada receta",
        available: true,
        fit: "cover"
      },
      {
        src: "/images/products/gelatina%20bovina/4.jpg",
        alt: "Calidad que se nota: máxima calidad 260 Bloom, 100% bovino, neutra e insípida",
        label: "Calidad que se nota",
        available: true,
        fit: "cover"
      },
      {
        src: "/images/products/gelatina%20bovina/5.jpg",
        alt: "Eleva tus recetas a otro nivel con Gelatina Neutra RAIAN 260 Bloom",
        label: "Eleva tus recetas",
        available: true,
        fit: "cover"
      },
      {
        src: "/images/products/gelatina%20bovina/6.jpg",
        alt: "Gelatina neutra bovina RAIAN 260 Bloom — detalle de producto",
        label: "Detalle de producto",
        available: true,
        fit: "cover"
      },
      {
        src: "/images/products/gelatina%20bovina/7.jpg",
        alt: "Gelatina neutra bovina RAIAN 260 Bloom — presentación completa",
        label: "Presentación completa",
        available: true,
        fit: "cover"
      }
    ],
    uses: [
      "Postres fríos.",
      "Tartas.",
      "Mousses.",
      "Gelatinas caseras.",
      "Preparaciones que requieren textura."
    ],
    howToUse: [
      "Preparar la cantidad indicada en la receta.",
      "Hidratar o mezclar según el tipo de preparación.",
      "Incorporar a la elaboración.",
      "Dejar reposar o enfriar si la receta lo requiere."
    ],
    technicalSheet: bovineGelatinTechnicalSheet,
    nutrition: bovineGelatinNutrition,
    allergens: "No contiene alérgenos declarables.",
    conservation: "Conservar en lugar seco, sin humedad y sin exposición directa al sol. Temperatura máxima de conservación: 30 °C. Mantener el envase bien cerrado tras cada uso.",
    amazonUrl: "https://www.amazon.es/dp/B0H2QMJHPD",
    amazonAsin: "B0H2QMJHPD",
    amazonReviewUrl: "https://www.amazon.es/review/create-review/?asin=B0H2QMJHPD",
    relatedSlugs: ["gelatina-neutra-porcina", "harina-de-almendra", "glucosa"],
    recipeSlugs: [
      "vasitos-fitness-de-yogur-griego-frutos-rojos-y-gelatina-bovina",
      "mousse-fitness-de-mango-y-skyr-con-gelatina-bovina",
      "panna-cotta-premium-de-vainilla-y-coulis-de-frambuesa"
    ]
  },
  {
    slug: "gelatina-neutra-porcina",
    name: "Gelatina neutra porcina",
    shortDescription:
      "Gelatina neutra de origen porcino para preparaciones culinarias, postres y recetas que requieren textura y consistencia.",
    description:
      "Gelatina neutra de origen porcino en formato 1 kg, con indicación 260 Bloom. Pensada para recetas dulces y preparaciones alimentarias donde la textura final forma parte de la elaboración.",
    category: "Gelatinas",
    tags: ["Neutra", "Origen porcino", "260 Bloom", "Postres", "Cocina", "1 kg"],
    mainImage: {
      src: "/images/products/gelatina-porcina-main.png",
      alt: "Bote de gelatina neutra porcina RAIAN 260 Bloom 1 kg",
      label: "Gelatina porcina 260 Bloom",
      available: true,
      fit: "contain"
    },
    gallery: [
      {
        src: "/images/products/gelatina-porcina-main.png",
        alt: "Bote de gelatina neutra porcina RAIAN 260 Bloom 1 kg",
        label: "Gelatina porcina 1 kg",
        available: true,
        fit: "contain"
      },
      ...galleryFor("Gelatina neutra porcina").slice(0, 4)
    ],
    uses: [
      "Postres fríos.",
      "Tartas.",
      "Mousses.",
      "Gelatinas caseras.",
      "Preparaciones que requieren textura."
    ],
    howToUse: [
      "Preparar la cantidad indicada en la receta.",
      "Hidratar o mezclar según el tipo de preparación.",
      "Incorporar a la elaboración.",
      "Dejar reposar o enfriar si la receta lo requiere."
    ],
    technicalSheet: porcineGelatinTechnicalSheet,
    nutrition: porcineGelatinNutrition,
    allergens: "No contiene alérgenos de declaración obligatoria.",
    conservation: "Conservar en un lugar fresco, seco y protegido de la luz.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["gelatina-neutra-bovina", "harina-de-almendra", "dextrosa"],
    recipeSlugs: [
      "gelatina-de-naranja-casera-con-trozos-de-fruta",
      "flan-de-vainilla-con-caramelo-casero",
      "panna-cotta-de-coco-y-mango",
      "gelatina-de-te-verde-y-menta-con-limon",
      "vasitos-de-proteina-con-gelatina-porcina-y-frutos-rojos",
      "bavarois-de-cafe-y-cardamomo-con-base-de-bizcocho"
    ]
  },
  {
    slug: "harina-de-almendra",
    name: "Harina de almendra",
    shortDescription:
      "Harina de almendra pensada para repostería, elaboraciones caseras y recetas donde se busca una textura fina y versátil.",
    description:
      "Harina de almendra elaborada con 100% almendra molida, orientada a elaboraciones de repostería y cocina casera donde se busca una textura fina y versátil.",
    category: "Harinas",
    tags: ["Almendra", "100% almendra molida", "Repostería", "Recetas", "Cocina", "1 kg"],
    mainImage: {
      src: "/images/products/harina-almendra-main.png",
      alt: "Bote de harina de almendra RAIAN 1 kg",
      label: "Harina de almendra 1 kg",
      available: true,
      fit: "contain"
    },
    gallery: [
      {
        src: "/images/products/harina-almendra-main.png",
        alt: "Bote de harina de almendra RAIAN 1 kg",
        label: "Harina de almendra 1 kg",
        available: true,
        fit: "contain"
      },
      ...galleryFor("Harina de almendra").slice(0, 4)
    ],
    uses: [
      "Bizcochos.",
      "Galletas.",
      "Bases de tarta.",
      "Rebozados finos.",
      "Elaboraciones caseras de repostería."
    ],
    howToUse: [
      "Preparar la cantidad indicada en la receta.",
      "Tamizar si la elaboración necesita una textura más fina.",
      "Mezclar con el resto de ingredientes secos.",
      "Continuar la receta según el tiempo y temperatura indicados."
    ],
    technicalSheet: almondFlourTechnicalSheet,
    nutrition: almondFlourNutrition,
    allergens: "Contiene almendra (fruto de cáscara). Trazas pendientes de confirmar en el etiquetado final.",
    conservation: "Conservar en un lugar fresco, seco y protegido de la luz.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["gelatina-neutra-bovina", "glucosa", "dextrosa"],
    recipeSlugs: [
      "tortitas-de-harina-de-almendra-con-platano-y-arandanos",
      "galletas-de-harina-de-almendra-y-mantequilla-de-cacahuete",
      "bizcocho-de-harina-de-almendra-limon-y-aceite-de-oliva",
      "base-de-tarta-crujiente-de-harina-de-almendra-y-datiles",
      "financiers-de-harina-de-almendra-mantequilla-y-frambuesa",
      "rebozado-crujiente-de-harina-de-almendra-para-pollo-al-horno"
    ]
  },
  {
    slug: "dextrosa",
    name: "Dextrosa",
    shortDescription:
      "Ingrediente alimentario utilizado en distintas preparaciones, recetas y aplicaciones culinarias.",
    description:
      "Dextrosa orientada a usos alimentarios generales y aplicaciones culinarias específicas. La ficha reúne la información disponible y debe completarse con datos técnicos validados antes de publicar valores definitivos.",
    category: "Ingredientes alimentarios",
    tags: ["Ingrediente", "Uso alimentario", "Preparaciones", "1 kg"],
    mainImage: {
      src: "/images/products/dextrosa-main.png",
      alt: "Bote de dextrosa RAIAN 1 kg",
      label: "Dextrosa 1 kg",
      available: true,
      fit: "contain"
    },
    gallery: [
      {
        src: "/images/products/dextrosa-main.png",
        alt: "Bote de dextrosa RAIAN 1 kg",
        label: "Dextrosa 1 kg",
        available: true,
        fit: "contain"
      },
      ...galleryFor("Dextrosa").slice(0, 4)
    ],
    uses: [
      "Preparaciones culinarias.",
      "Elaboraciones dulces.",
      "Recetas que indiquen dextrosa.",
      "Aplicaciones alimentarias específicas."
    ],
    howToUse: [
      "Revisar la cantidad indicada en la receta o formulación.",
      "Pesar el ingrediente con precisión.",
      "Incorporar a la mezcla según el orden de preparación.",
      "Conservar el envase cerrado tras su uso."
    ],
    technicalSheet: technicalSheetFor("Dextrosa", "Ingrediente alimentario", pending),
    nutrition: nutritionPlaceholder,
    allergens: "Información de alérgenos pendiente de confirmar con el etiquetado final.",
    conservation: "Condiciones de conservación pendientes de confirmar con el etiquetado final.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["glucosa", "harina-de-almendra", "gelatina-neutra-porcina"],
    recipeSlugs: [
      "bebida-isotonica-casera-de-limon-y-sal-con-dextrosa",
      "gel-energetico-casero-de-platano-y-dextrosa",
      "helado-artesanal-de-fresa-con-dextrosa",
      "mermelada-de-albaricoque-casera-con-dextrosa",
      "bizcocho-de-deportista-de-avena-y-dextrosa"
    ]
  },
  {
    slug: "glucosa",
    name: "Glucosa",
    shortDescription:
      "Ingrediente alimentario para recetas, elaboraciones dulces y aplicaciones culinarias específicas.",
    description:
      "Glucosa orientada a recetas, elaboraciones dulces y usos culinarios donde la receta indique este ingrediente. La información técnica y nutricional debe validarse con el etiquetado final antes de publicarse como definitiva.",
    category: "Ingredientes alimentarios",
    tags: ["Ingrediente", "Dulces", "Uso culinario", "1 kg"],
    mainImage: {
      src: "/images/products/glucosa-main.png",
      alt: "Bote de glucosa RAIAN 1 kg",
      label: "Glucosa 1 kg",
      available: true,
      fit: "contain"
    },
    gallery: [
      {
        src: "/images/products/glucosa-main.png",
        alt: "Bote de glucosa RAIAN 1 kg",
        label: "Glucosa 1 kg",
        available: true,
        fit: "contain"
      },
      ...galleryFor("Glucosa").slice(0, 4)
    ],
    uses: [
      "Elaboraciones dulces.",
      "Recetas de repostería.",
      "Preparaciones culinarias específicas.",
      "Aplicaciones alimentarias indicadas por receta."
    ],
    howToUse: [
      "Preparar la cantidad indicada en la receta.",
      "Incorporar según el tipo de preparación.",
      "Mezclar hasta integrar correctamente.",
      "Cerrar bien el envase después de cada uso."
    ],
    technicalSheet: technicalSheetFor("Glucosa", "Ingrediente alimentario", pending),
    nutrition: nutritionPlaceholder,
    allergens: "Información de alérgenos pendiente de confirmar con el etiquetado final.",
    conservation: "Condiciones de conservación pendientes de confirmar con el etiquetado final.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["dextrosa", "harina-de-almendra", "gelatina-neutra-bovina"],
    recipeSlugs: [
      "caramelo-suave-y-cremoso-con-glucosa",
      "ganache-de-chocolate-negro-satinada-con-glucosa",
      "helado-cremoso-de-vainilla-con-glucosa-sin-heladera",
      "turron-blando-de-almendra-con-glucosa",
      "lemon-curd-sedoso-con-glucosa"
    ]
  },
  {
    slug: "chocolate-a-la-taza",
    name: "Chocolate a la taza",
    shortDescription:
      "Preparado de chocolate para taza, ideal para bebidas calientes, batidos y elaboraciones de repostería con sabor intenso.",
    description:
      "Preparado de cacao en polvo para chocolate a la taza, pensado tanto para bebidas calientes tradicionales como para usarse en repostería. Formato 1 kg orientado a uso frecuente en casa o negocio.",
    category: "Cacao y chocolate",
    tags: ["Chocolate", "Bebida caliente", "Repostería", "Cacao", "1 kg"],
    mainImage: {
      src: "/images/products/chocolate-a-la-taza-main.png",
      alt: "Bote de chocolate a la taza RAIAN 1 kg",
      label: "Chocolate a la taza 1 kg",
      available: false,
      fit: "contain"
    },
    gallery: galleryFor("Chocolate a la taza"),
    uses: [
      "Bebida caliente de chocolate.",
      "Batidos fríos de chocolate.",
      "Base para mousse y postres.",
      "Aromatizar bizcochos y cremas.",
      "Fondue de chocolate."
    ],
    howToUse: [
      "Mezclar 30-40 g por 200 ml de leche caliente.",
      "Remover hasta disolver completamente.",
      "Ajustar cantidad al gusto.",
      "Para repostería, incorporar como polvo seco junto a los ingredientes secos."
    ],
    technicalSheet: technicalSheetFor("Chocolate a la taza", "Preparado de cacao en polvo", "Cacao en polvo, azúcar (pendiente de validar)"),
    nutrition: [
      { label: "Valor energético", value: "1599 kJ / 382 kcal" },
      { label: "Grasas", value: "11 g" },
      { label: "De las cuales saturadas", value: "6,5 g" },
      { label: "Hidratos de carbono", value: "62 g" },
      { label: "De los cuales azúcares", value: "52 g" },
      { label: "Fibra alimentaria", value: "4 g" },
      { label: "Proteínas", value: "5 g" },
      { label: "Sal", value: "0,3 g" }
    ],
    allergens: "Puede contener trazas de leche. Alérgenos pendientes de confirmar con el etiquetado final.",
    conservation: "Conservar en lugar fresco, seco y protegido de la luz. Cerrar bien tras cada uso.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["cacao-en-polvo-alcalino", "maltodextrina", "harina-de-almendra"],
    recipeSlugs: [
      "chocolate-caliente-clasico-a-la-taza",
      "batido-frio-de-chocolate-a-la-taza-con-hielo",
      "mousse-de-chocolate-a-la-taza-sin-huevo",
      "porridge-de-avena-con-chocolate-a-la-taza",
      "fondue-de-chocolate-a-la-taza-con-frutas-y-galletas",
      "smoothie-de-cacao-y-platano-con-proteina"
    ]
  },
  {
    slug: "maltodextrina",
    name: "Maltodextrina",
    shortDescription:
      "Carbohidrato de absorción rápida para bebidas deportivas, geles energéticos y preparaciones de alto rendimiento.",
    description:
      "Maltodextrina en polvo de fácil disolución, orientada a deportistas y personas activas que necesitan aportar energía rápidamente antes, durante o después del ejercicio. También usada como agente de textura en preparaciones alimentarias.",
    category: "Deportes y energía",
    tags: ["Carbohidrato", "Deportes", "Energía", "Pre-entreno", "Post-entreno", "1 kg"],
    mainImage: {
      src: "/images/products/maltodextrina-main.png",
      alt: "Bote de maltodextrina RAIAN 1 kg",
      label: "Maltodextrina 1 kg",
      available: false,
      fit: "contain"
    },
    gallery: galleryFor("Maltodextrina"),
    uses: [
      "Bebidas de recuperación post-entreno.",
      "Geles energéticos caseros.",
      "Bebidas isotónicas.",
      "Preparaciones energéticas pre-ejercicio.",
      "Agente de textura en repostería."
    ],
    howToUse: [
      "Disolver la cantidad indicada en agua o bebida.",
      "Para uso deportivo: 30-60 g por hora de ejercicio intenso.",
      "Mezclar bien hasta disolución completa.",
      "Consumir según necesidades energéticas y actividad."
    ],
    technicalSheet: technicalSheetFor("Maltodextrina", "Carbohidrato en polvo (polisacárido)", "Maltodextrina"),
    nutrition: [
      { label: "Valor energético", value: "1590 kJ / 380 kcal" },
      { label: "Grasas", value: "0 g" },
      { label: "De las cuales saturadas", value: "0 g" },
      { label: "Hidratos de carbono", value: "95 g" },
      { label: "De los cuales azúcares", value: "2 g" },
      { label: "Fibra alimentaria", value: "0 g" },
      { label: "Proteínas", value: "0,1 g" },
      { label: "Sal", value: "0,05 g" }
    ],
    allergens: "Sin alérgenos de declaración obligatoria. Pendiente de confirmar con etiquetado final.",
    conservation: "Conservar en lugar fresco y seco. Cerrar herméticamente tras cada uso.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["dextrosa", "glucosa", "caseina-pura-neutra"],
    recipeSlugs: [
      "bebida-de-recuperacion-post-entreno-con-maltodextrina",
      "gel-energetico-casero-de-citricos-con-maltodextrina",
      "batido-pre-entreno-de-avena-y-maltodextrina",
      "barritas-energeticas-de-avena-miel-y-maltodextrina",
      "bebida-isotonica-con-sales-minerales-y-maltodextrina"
    ]
  },
  {
    slug: "cacao-en-polvo-alcalino",
    name: "Cacao puro natural alcalinizado",
    shortDescription:
      "Cacao puro natural alcalinizado, 100% cacao, sin azúcar y apto para veganos. Color intenso y sabor profundo para repostería y bebidas. Formato 1 kg envasado en España.",
    description:
      "Cacao en polvo 100% puro sometido a un proceso de alcalinización (proceso holandés) que suaviza el sabor, intensifica el color oscuro y mejora la solubilidad. Sin azúcar añadido y apto para dietas veganas. Su único regulador de acidez es el carbonato potásico, responsable de la alcalinización. Pensado para repostería casera y profesional, así como para bebidas de cacao con cuerpo. Formato de 1 kg, envasado en España.",
    category: "Cacao y chocolate",
    tags: ["100% cacao", "Alcalinizado", "Sin azúcar", "Vegano", "Origen español", "1 kg"],
    mainImage: {
      src: "/images/products/cacao-en-polvo-alcalino-main.png",
      alt: "Bote de cacao puro natural alcalinizado RAIAN 100% cacao 1 kg",
      label: "Cacao puro natural alcalinizado — 1 kg",
      available: true,
      fit: "contain"
    },
    gallery: galleryFor("Cacao puro natural alcalinizado"),
    uses: [
      "Brownies y bizcochos con color y sabor intenso.",
      "Bebidas calientes de cacao.",
      "Rellenos y cremas de chocolate.",
      "Coulants y fondants.",
      "Glasas y coberturas oscuras."
    ],
    howToUse: [
      "Para bebidas: 10-15 g por 200 ml de leche.",
      "Para repostería: sustituir 20-25% del peso de harina.",
      "Tamizar antes de mezclar para evitar grumos.",
      "Ajustar cantidad según la intensidad deseada."
    ],
    technicalSheet: cacaoAlkalineTechnicalSheet,
    nutrition: nutritionPlaceholder,
    allergens:
      "Sin alérgenos de declaración obligatoria. Puede contener trazas de frutos de cáscara, leche y gluten. Pendiente de confirmar con la ficha técnica final.",
    conservation:
      "Conservar en lugar limpio, seco y bien ventilado, protegido de la luz y de olores fuertes. Condiciones óptimas: 15-20 °C y humedad relativa inferior al 50%. Mantener el envase bien cerrado tras cada uso.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["chocolate-a-la-taza", "harina-de-almendra", "lecitina-de-soja"],
    recipeSlugs: [
      "brownie-humedo-de-cacao-alcalino-raian",
      "coulant-de-chocolate-con-cacao-alcalino",
      "bizcocho-de-cacao-sin-horno",
      "galletas-de-avena-y-cacao-alcalino",
      "crema-de-cacao-casera-tipo-avellana",
      "smoothie-de-cacao-alcalino-y-frutos-rojos"
    ]
  },
  {
    slug: "caseina-pura-neutra",
    name: "Caseína pura neutra",
    shortDescription:
      "Proteína de caseína micelar neutra de digestión lenta, ideal para tomas nocturnas y batidos de saciedad prolongada.",
    description:
      "Caseína micelar pura en formato neutro sin aromas ni edulcorantes añadidos. Proteína de digestión lenta que libera aminoácidos de forma gradual durante horas, pensada para tomas antes de dormir o períodos prolongados sin ingesta.",
    category: "Proteínas",
    tags: ["Proteína", "Caseína", "Digestión lenta", "Nocturna", "Sin aroma", "1 kg"],
    mainImage: {
      src: "/images/products/caseina-pura-neutra-main.png",
      alt: "Bote de caseína pura neutra RAIAN 1 kg",
      label: "Caseína pura neutra 1 kg",
      available: false,
      fit: "contain"
    },
    gallery: galleryFor("Caseína pura neutra"),
    uses: [
      "Batido proteico antes de dormir.",
      "Puddings proteicos de textura espesa.",
      "Mousse de proteína.",
      "Pancakes con alto contenido proteico.",
      "Aporte proteico entre comidas."
    ],
    howToUse: [
      "Medir 25-30 g (aproximadamente 1 cazo).",
      "Mezclar con 200-250 ml de leche o bebida vegetal.",
      "Agitar o batir hasta obtener textura homogénea.",
      "Para puddings: mezclar con menos líquido (80-100 ml) y refrigerar 30 min."
    ],
    technicalSheet: technicalSheetFor("Caseína pura neutra", "Caseína micelar en polvo", "Caseína micelar (leche)"),
    nutrition: [
      { label: "Valor energético", value: "1548 kJ / 370 kcal" },
      { label: "Grasas", value: "1,5 g" },
      { label: "De las cuales saturadas", value: "0,9 g" },
      { label: "Hidratos de carbono", value: "5 g" },
      { label: "De los cuales azúcares", value: "2 g" },
      { label: "Fibra alimentaria", value: "0 g" },
      { label: "Proteínas", value: "82 g" },
      { label: "Sal", value: "1,2 g" }
    ],
    allergens: "Contiene leche. Puede contener trazas de soja. Pendiente de confirmar con etiquetado final.",
    conservation: "Conservar en lugar fresco y seco. Cerrar herméticamente tras cada uso.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["maltodextrina", "inulina-de-agave", "harina-de-almendra"],
    recipeSlugs: [
      "pudding-nocturno-de-caseina-con-cacao-y-platano",
      "mousse-espesa-de-caseina-con-vainilla-y-frutos-rojos",
      "pancakes-de-caseina-con-arandanos-y-miel",
      "batido-espeso-de-caseina-con-fresa-y-leche",
      "helado-proteico-de-caseina-con-vainilla-y-canela"
    ]
  },
  {
    slug: "inulina-de-agave",
    name: "Inulina de agave",
    shortDescription:
      "Fibra prebiótica natural extraída del agave, levemente dulce, para enriquecer batidos, yogures y preparaciones sin alterar el sabor.",
    description:
      "Inulina extraída del agave en polvo fino de fácil disolución. Fibra prebiótica soluble que alimenta la flora intestinal beneficiosa. Aporta una dulzura muy ligera sin calorías significativas. Se mezcla con facilidad en frío o templado.",
    category: "Fibra y prebióticos",
    tags: ["Fibra", "Prebiótico", "Inulina", "Agave", "Sin azúcar", "1 kg"],
    mainImage: {
      src: "/images/products/inulina-de-agave-main.png",
      alt: "Bote de inulina de agave RAIAN 1 kg",
      label: "Inulina de agave 1 kg",
      available: false,
      fit: "contain"
    },
    gallery: galleryFor("Inulina de agave"),
    uses: [
      "Enriquecer batidos y smoothies con fibra.",
      "Mezclar en yogur o kéfir.",
      "Sustituto parcial de azúcar en recetas.",
      "Preparaciones prebióticas.",
      "Bebidas funcionales."
    ],
    howToUse: [
      "Empezar con 5 g/día para que el organismo se adapte.",
      "Aumentar progresivamente hasta 10 g/día.",
      "Disolver en líquido frío o a temperatura ambiente.",
      "No calentar por encima de 130°C para mantener propiedades."
    ],
    technicalSheet: technicalSheetFor("Inulina de agave", "Fructooligosacárido (FOS) extraído de agave", "Inulina de agave"),
    nutrition: [
      { label: "Valor energético", value: "628 kJ / 150 kcal" },
      { label: "Grasas", value: "0 g" },
      { label: "De las cuales saturadas", value: "0 g" },
      { label: "Hidratos de carbono", value: "90 g" },
      { label: "De los cuales azúcares", value: "5 g" },
      { label: "Fibra alimentaria", value: "85 g" },
      { label: "Proteínas", value: "0 g" },
      { label: "Sal", value: "0,05 g" }
    ],
    allergens: "Sin alérgenos de declaración obligatoria. Pendiente de confirmar con etiquetado final.",
    conservation: "Conservar en lugar fresco y seco, alejado de la humedad.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["caseina-pura-neutra", "maltodextrina", "cacao-en-polvo-alcalino"],
    recipeSlugs: [
      "yogur-casero-enriquecido-con-inulina-de-agave-y-frutas-del-bosque",
      "batido-verde-con-inulina-de-agave-espinacas-y-manzana",
      "porridge-de-avena-con-inulina-de-agave-y-platano-caramelizado",
      "compota-de-manzana-y-pera-con-inulina-de-agave"
    ]
  },
  {
    slug: "pistacho-puro-en-grano",
    name: "Pistacho puro en grano",
    shortDescription:
      "Pistacho natural pelado en grano, sin sal ni tostado, para repostería, cremas, granolas y snacks de calidad.",
    description:
      "Pistacho puro pelado en grano, sin sal añadida ni proceso de tueste previo. Ideal para repostería premium, cremas artesanales, granolas y preparaciones donde el sabor del pistacho debe ser el protagonista.",
    category: "Frutos secos",
    tags: ["Pistacho", "Natural", "Sin sal", "Repostería", "Premium", "1 kg"],
    mainImage: {
      src: "/images/products/pistacho-puro-en-grano-main.png",
      alt: "Bote de pistacho puro en grano RAIAN 1 kg",
      label: "Pistacho puro en grano 1 kg",
      available: false,
      fit: "contain"
    },
    gallery: galleryFor("Pistacho puro en grano"),
    uses: [
      "Crema de pistacho artesanal.",
      "Decoración de postres y tartas.",
      "Granola y muesli premium.",
      "Pesto de pistacho.",
      "Snack natural sin sal."
    ],
    howToUse: [
      "Para tostar: extender en bandeja y hornear a 170°C durante 8 minutos.",
      "Para crema: triturar en batidora potente hasta obtener textura suave.",
      "Para decorar: picar o dejar entero según la elaboración.",
      "Conservar en recipiente hermético una vez abierto el envase."
    ],
    technicalSheet: technicalSheetFor("Pistacho puro en grano", "Fruto seco (pistacho pelado natural)", "Pistacho"),
    nutrition: [
      { label: "Valor energético", value: "2352 kJ / 562 kcal" },
      { label: "Grasas", value: "45,3 g" },
      { label: "De las cuales saturadas", value: "5,6 g" },
      { label: "Hidratos de carbono", value: "27,5 g" },
      { label: "De los cuales azúcares", value: "7,7 g" },
      { label: "Fibra alimentaria", value: "10,3 g" },
      { label: "Proteínas", value: "20,2 g" },
      { label: "Sal", value: "0,01 g" }
    ],
    allergens: "Contiene pistacho (frutos de cáscara). Puede contener trazas de otros frutos de cáscara.",
    conservation: "Conservar en lugar fresco, seco y protegido de la luz. Refrigerar una vez abierto.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["harina-de-almendra", "cacao-en-polvo-alcalino", "chocolate-a-la-taza"],
    recipeSlugs: [
      "helado-de-pistacho-puro-casero",
      "crema-de-pistacho-artesanal-para-untar",
      "ensalada-de-quinoa-con-pistacho-naranja-y-rucula",
      "bizcocho-humedo-de-pistacho-con-glaseado-de-limon",
      "pesto-de-pistacho-con-pasta-fresca"
    ]
  },
  {
    slug: "lecitina-de-soja",
    name: "Lecitina de soja",
    shortDescription:
      "Emulsionante natural de soja para mayonesas veganas, salsas, chocolates y preparaciones que requieren unir agua y grasa.",
    description:
      "Lecitina de soja en polvo fino, emulsionante natural que permite integrar ingredientes de base acuosa con ingredientes grasos. Imprescindible para mayonesas veganas, aderezos emulsionados, chocolates con mejor textura y espumas culinarias.",
    category: "Ingredientes funcionales",
    tags: ["Lecitina", "Soja", "Emulsionante", "Vegano", "Funcional", "1 kg"],
    mainImage: {
      src: "/images/products/lecitina-de-soja-main.png",
      alt: "Bote de lecitina de soja RAIAN 1 kg",
      label: "Lecitina de soja 1 kg",
      available: false,
      fit: "contain"
    },
    gallery: galleryFor("Lecitina de soja"),
    uses: [
      "Mayonesa vegana sin huevo.",
      "Chocolates con textura más fluida.",
      "Salsas y vinagretas emulsionadas.",
      "Espumas culinarias.",
      "Mejorar la textura de masas y panes."
    ],
    howToUse: [
      "Como emulsionante: usar el 0,5-1% del peso total de la preparación.",
      "Para mayonesa vegana: 5-10 g por 250 ml de mezcla.",
      "Añadir al líquido y batir antes de incorporar el aceite.",
      "Disolver en líquido tibio para mejor integración."
    ],
    technicalSheet: technicalSheetFor("Lecitina de soja", "Emulsionante natural (fosfolípidos de soja)", "Lecitina de soja"),
    nutrition: [
      { label: "Valor energético", value: "3180 kJ / 760 kcal" },
      { label: "Grasas", value: "97 g" },
      { label: "De las cuales saturadas", value: "14 g" },
      { label: "Hidratos de carbono", value: "0 g" },
      { label: "De los cuales azúcares", value: "0 g" },
      { label: "Fibra alimentaria", value: "0 g" },
      { label: "Proteínas", value: "1 g" },
      { label: "Sal", value: "0,1 g" }
    ],
    allergens: "Contiene soja. Pendiente de confirmar trazas con etiquetado final.",
    conservation: "Conservar en lugar fresco y seco. Puede solidificarse con el frío — es normal.",
    amazonUrl: null,
    amazonAsin: pending,
    relatedSlugs: ["cacao-en-polvo-alcalino", "chocolate-a-la-taza", "harina-de-almendra"],
    recipeSlugs: [
      "espuma-de-tomate-con-lecitina-de-soja-para-entrante",
      "vinagreta-emulsionada-con-lecitina-de-soja-y-mostaza",
      "batido-de-cacao-y-cacahuete-con-lecitina-de-soja",
      "pan-esponjoso-enriquecido-con-lecitina-de-soja"
    ]
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product) =>
  product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((relatedProduct): relatedProduct is Product => Boolean(relatedProduct));

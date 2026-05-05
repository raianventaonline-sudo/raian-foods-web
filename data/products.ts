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
  { label: "ASIN de Amazon", value: pending },
  { label: "Enlace Amazon", value: pending }
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
        src: "/images/products/gelatina-bovina-main.png",
        alt: "Bote de gelatina neutra bovina RAIAN 260 Bloom 1 kg",
        label: "Gelatina bovina 1 kg",
        available: true,
        fit: "contain"
      },
      ...galleryFor("Gelatina neutra bovina").slice(0, 4)
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
    conservation: "Condiciones de conservación pendientes de confirmar con el etiquetado final.",
    amazonUrl: null,
    amazonAsin: pending,
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
    recipeSlugs: []
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
    recipeSlugs: []
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
    recipeSlugs: []
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
    recipeSlugs: []
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product) =>
  product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((relatedProduct): relatedProduct is Product => Boolean(relatedProduct));

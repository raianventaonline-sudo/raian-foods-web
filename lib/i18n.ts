export type Locale = "es" | "va" | "ca" | "en" | "fr" | "de";

export type LanguageOption = {
  code: Locale;
  shortLabel: string;
  label: string;
  flagClassName: string;
};

export const defaultLocale: Locale = "es";

export const languages: LanguageOption[] = [
  { code: "es", shortLabel: "ES", label: "Castellano", flagClassName: "bg-[linear-gradient(#aa151b_0_25%,#f1bf00_25%_75%,#aa151b_75%)]" },
  { code: "va", shortLabel: "VA", label: "Valenciano", flagClassName: "bg-[linear-gradient(90deg,#2b5fab_0_20%,#f4d34f_20%_31%,#c9332b_31%_42%,#f4d34f_42%_53%,#c9332b_53%_64%,#f4d34f_64%_75%,#c9332b_75%_86%,#f4d34f_86%)]" },
  { code: "ca", shortLabel: "CA", label: "Catalán", flagClassName: "bg-[linear-gradient(#f4d34f_0_14%,#c9332b_14%_28%,#f4d34f_28%_42%,#c9332b_42%_56%,#f4d34f_56%_70%,#c9332b_70%_84%,#f4d34f_84%)]" },
  { code: "en", shortLabel: "EN", label: "English", flagClassName: "bg-[linear-gradient(135deg,#1f3c88_0_36%,#fff_36%_42%,#c8102e_42%_58%,#fff_58%_64%,#1f3c88_64%)]" },
  { code: "fr", shortLabel: "FR", label: "Français", flagClassName: "bg-[linear-gradient(90deg,#1f4aa8_0_33%,#fff_33%_66%,#d72828_66%)]" },
  { code: "de", shortLabel: "DE", label: "Deutsch", flagClassName: "bg-[linear-gradient(#111_0_33%,#dd0000_33%_66%,#ffce00_66%)]" }
];

const uiTranslations = {
  va: {
    "Saltar al contenido": "Saltar al contingut",
    "Inicio": "Inici",
    "Productos": "Productes",
    "Usos y recetas": "Usos i receptes",
    "Sobre RAIAN": "Sobre RAIAN",
    "Contacto": "Contacte",
    "Ver catálogo": "Veure catàleg",
    "Menú": "Menú",
    "Catálogo RAIAN": "Catàleg RAIAN",
    "Productos alimenticios seleccionados desde Valencia.": "Productes alimentaris seleccionats des de València.",
    "Productos y recetas organizados para consultar rápido y comprar con confianza.": "Productes i receptes organitzats per a consultar ràpid i comprar amb confiança.",
    "Explorar catálogo": "Explorar catàleg",
    "Conocer la marca": "Conéixer la marca",
    "Qué ofrece RAIAN": "Què ofereix RAIAN",
    "Una marca alimentaria clara, cuidada y fácil de entender.": "Una marca alimentària clara, cuidada i fàcil d'entendre.",
    "Productos seleccionados": "Productes seleccionats",
    "Referencias alimentarias elegidas por utilidad, claridad y encaje con el consumo diario.": "Referències alimentàries triades per la seua utilitat, claredat i encaix en el consum diari.",
    "Presentación cuidada": "Presentació cuidada",
    "Envase, etiqueta e imagen trabajan juntos para que el producto se perciba claro y fiable.": "Envàs, etiqueta i imatge treballen junts perquè el producte es perceba clar i fiable.",
    "Fichas comprensibles": "Fitxes comprensibles",
    "Información organizada para entender usos, formato, conservación y datos relevantes antes de comprar.": "Informació organitzada per a entendre usos, format, conservació i dades rellevants abans de comprar.",
    "Uso en el día a día": "Ús en el dia a dia",
    "Contenido práctico para acompañar cada referencia con ideas sencillas y criterios de uso.": "Contingut pràctic per a acompanyar cada referència amb idees senzilles i criteris d'ús.",
    "Catálogo": "Catàleg",
    "Productos destacados": "Productes destacats",
    "Ver todos los productos": "Veure tots els productes",
    "Método RAIAN": "Mètode RAIAN",
    "Del envase a la experiencia.": "De l'envàs a l'experiència.",
    "Seleccionamos": "Seleccionem",
    "Presentamos": "Presentem",
    "Explicamos": "Expliquem",
    "Compra externa": "Compra externa",
    "Amazon como canal, RAIAN como marca.": "Amazon com a canal, RAIAN com a marca.",
    "Consultar disponibilidad": "Consultar disponibilitat",
    "Descubre el catálogo RAIAN": "Descobreix el catàleg RAIAN",
    "Navegación": "Navegació",
    "Información": "Informació",
    "Aviso legal": "Avís legal",
    "Privacidad": "Privacitat",
    "Cookies": "Galetes",
    "Catálogo alimentario.": "Catàleg alimentari.",
    "Contenido útil": "Contingut útil",
    "Recetas con gelatina bovina neutra RAIAN 260 Bloom.": "Receptes amb gelatina bovina neutra RAIAN 260 Bloom.",
    "Tipo": "Tipus",
    "Todos": "Tots",
    "Todos los tipos": "Tots els tipus",
    "Apta para": "Apta per a",
    "Todas": "Totes",
    "Sin lactosa": "Sense lactosa",
    "Sin gluten": "Sense gluten",
    "Recetas": "Receptes",
    "Ver receta completa": "Veure recepta completa",
    "Tiempo total": "Temps total",
    "Producto": "Producte",
    "Valora esta receta": "Valora esta recepta",
    "Sin valoraciones": "Sense valoracions",
    "Sin votos": "Sense vots",
    "Aun no has valorado esta receta.": "Encara no has valorat esta recepta.",
    "Preferencias de cookies": "Preferències de galetes",
    "Configurar": "Configurar",
    "Rechazar": "Rebutjar",
    "Aceptar": "Acceptar"
  },
  ca: {
    "Saltar al contenido": "Saltar al contingut",
    "Inicio": "Inici",
    "Productos": "Productes",
    "Usos y recetas": "Usos i receptes",
    "Sobre RAIAN": "Sobre RAIAN",
    "Contacto": "Contacte",
    "Ver catálogo": "Veure catàleg",
    "Menú": "Menú",
    "Catálogo RAIAN": "Catàleg RAIAN",
    "Productos alimenticios seleccionados desde Valencia.": "Productes alimentaris seleccionats des de València.",
    "Productos y recetas organizados para consultar rápido y comprar con confianza.": "Productes i receptes organitzats per consultar ràpidament i comprar amb confiança.",
    "Explorar catálogo": "Explorar el catàleg",
    "Conocer la marca": "Conèixer la marca",
    "Qué ofrece RAIAN": "Què ofereix RAIAN",
    "Una marca alimentaria clara, cuidada y fácil de entender.": "Una marca alimentària clara, cuidada i fàcil d'entendre.",
    "Productos seleccionados": "Productes seleccionats",
    "Referencias alimentarias elegidas por utilidad, claridad y encaje con el consumo diario.": "Referències alimentàries triades per la seva utilitat, claredat i encaix en el consum diari.",
    "Presentación cuidada": "Presentació cuidada",
    "Envase, etiqueta e imagen trabajan juntos para que el producto se perciba claro y fiable.": "Envàs, etiqueta i imatge treballen plegats perquè el producte es percebi clar i fiable.",
    "Fichas comprensibles": "Fitxes entenedores",
    "Información organizada para entender usos, formato, conservación y datos relevantes antes de comprar.": "Informació organitzada per entendre usos, format, conservació i dades rellevants abans de comprar.",
    "Uso en el día a día": "Ús en el dia a dia",
    "Contenido práctico para acompañar cada referencia con ideas sencillas y criterios de uso.": "Contingut pràctic per acompanyar cada referència amb idees senzilles i criteris d'ús.",
    "Catálogo": "Catàleg",
    "Productos destacados": "Productes destacats",
    "Ver todos los productos": "Veure tots els productes",
    "Método RAIAN": "Mètode RAIAN",
    "Del envase a la experiencia.": "De l'envàs a l'experiència.",
    "Seleccionamos": "Seleccionem",
    "Presentamos": "Presentem",
    "Explicamos": "Expliquem",
    "Compra externa": "Compra externa",
    "Amazon como canal, RAIAN como marca.": "Amazon com a canal, RAIAN com a marca.",
    "Consultar disponibilidad": "Consultar disponibilitat",
    "Descubre el catálogo RAIAN": "Descobreix el catàleg RAIAN",
    "Navegación": "Navegació",
    "Información": "Informació",
    "Aviso legal": "Avís legal",
    "Privacidad": "Privacitat",
    "Cookies": "Galetes",
    "Catálogo alimentario.": "Catàleg alimentari.",
    "Contenido útil": "Contingut útil",
    "Recetas con gelatina bovina neutra RAIAN 260 Bloom.": "Receptes amb gelatina bovina neutra RAIAN 260 Bloom.",
    "Tipo": "Tipus",
    "Todos": "Tots",
    "Todos los tipos": "Tots els tipus",
    "Apta para": "Apta per a",
    "Todas": "Totes",
    "Sin lactosa": "Sense lactosa",
    "Sin gluten": "Sense gluten",
    "Recetas": "Receptes",
    "Ver receta completa": "Veure recepta completa",
    "Tiempo total": "Temps total",
    "Producto": "Producte",
    "Valora esta receta": "Valora aquesta recepta",
    "Sin valoraciones": "Sense valoracions",
    "Sin votos": "Sense vots",
    "Aun no has valorado esta receta.": "Encara no has valorat aquesta recepta.",
    "Preferencias de cookies": "Preferències de galetes",
    "Configurar": "Configurar",
    "Rechazar": "Rebutjar",
    "Aceptar": "Acceptar"
  },
  en: {
    "Saltar al contenido": "Skip to content",
    "Inicio": "Home",
    "Productos": "Products",
    "Usos y recetas": "Uses & recipes",
    "Sobre RAIAN": "About RAIAN",
    "Contacto": "Contact",
    "Ver catálogo": "View catalogue",
    "Menú": "Menu",
    "Catálogo RAIAN": "RAIAN catalogue",
    "Productos alimenticios seleccionados desde Valencia.": "Selected food products from Valencia.",
    "Productos y recetas organizados para consultar rápido y comprar con confianza.": "Products and recipes organised so you can check details quickly and buy with confidence.",
    "Explorar catálogo": "Explore catalogue",
    "Conocer la marca": "About the brand",
    "Qué ofrece RAIAN": "What RAIAN offers",
    "Una marca alimentaria clara, cuidada y fácil de entender.": "A clear, carefully presented food brand that is easy to understand.",
    "Productos seleccionados": "Selected products",
    "Referencias alimentarias elegidas por utilidad, claridad y encaje con el consumo diario.": "Food references chosen for usefulness, clarity and everyday use.",
    "Presentación cuidada": "Careful presentation",
    "Envase, etiqueta e imagen trabajan juntos para que el producto se perciba claro y fiable.": "Packaging, labelling and imagery work together so the product feels clear and reliable.",
    "Fichas comprensibles": "Easy-to-read product pages",
    "Información organizada para entender usos, formato, conservación y datos relevantes antes de comprar.": "Information arranged to explain uses, format, storage and key details before buying.",
    "Uso en el día a día": "Everyday use",
    "Contenido práctico para acompañar cada referencia con ideas sencillas y criterios de uso.": "Practical content that supports each product with simple ideas and usage guidance.",
    "Catálogo": "Catalogue",
    "Productos destacados": "Featured products",
    "Ver todos los productos": "View all products",
    "Método RAIAN": "The RAIAN approach",
    "Del envase a la experiencia.": "From packaging to experience.",
    "Seleccionamos": "We select",
    "Presentamos": "We present",
    "Explicamos": "We explain",
    "Compra externa": "External purchase",
    "Amazon como canal, RAIAN como marca.": "Amazon as a channel, RAIAN as the brand.",
    "Consultar disponibilidad": "Check availability",
    "Descubre el catálogo RAIAN": "Discover the RAIAN catalogue",
    "Navegación": "Navigation",
    "Información": "Information",
    "Aviso legal": "Legal notice",
    "Privacidad": "Privacy",
    "Cookies": "Cookies",
    "Catálogo alimentario.": "Food catalogue.",
    "Contenido útil": "Useful content",
    "Recetas con gelatina bovina neutra RAIAN 260 Bloom.": "Recipes using RAIAN neutral bovine gelatine 260 Bloom.",
    "Tipo": "Type",
    "Todos": "All",
    "Todos los tipos": "All types",
    "Apta para": "Suitable for",
    "Todas": "All",
    "Sin lactosa": "Lactose-free",
    "Sin gluten": "Gluten-free",
    "Recetas": "Recipes",
    "Ver receta completa": "View full recipe",
    "Tiempo total": "Total time",
    "Producto": "Product",
    "Valora esta receta": "Rate this recipe",
    "Sin valoraciones": "No ratings yet",
    "Sin votos": "No votes",
    "Aun no has valorado esta receta.": "You have not rated this recipe yet.",
    "Preferencias de cookies": "Cookie preferences",
    "Configurar": "Configure",
    "Rechazar": "Reject",
    "Aceptar": "Accept"
  },
  fr: {
    "Saltar al contenido": "Aller au contenu",
    "Inicio": "Accueil",
    "Productos": "Produits",
    "Usos y recetas": "Usages et recettes",
    "Sobre RAIAN": "À propos de RAIAN",
    "Contacto": "Contact",
    "Ver catálogo": "Voir le catalogue",
    "Menú": "Menu",
    "Catálogo RAIAN": "Catalogue RAIAN",
    "Productos alimenticios seleccionados desde Valencia.": "Produits alimentaires sélectionnés à Valence.",
    "Productos y recetas organizados para consultar rápido y comprar con confianza.": "Des produits et des recettes organisés pour consulter rapidement les informations et acheter en confiance.",
    "Explorar catálogo": "Explorer le catalogue",
    "Conocer la marca": "Découvrir la marque",
    "Qué ofrece RAIAN": "Ce que propose RAIAN",
    "Una marca alimentaria clara, cuidada y fácil de entender.": "Une marque alimentaire claire, soignée et facile à comprendre.",
    "Productos seleccionados": "Produits sélectionnés",
    "Referencias alimentarias elegidas por utilidad, claridad y encaje con el consumo diario.": "Des références alimentaires choisies pour leur utilité, leur clarté et leur place dans la consommation quotidienne.",
    "Presentación cuidada": "Présentation soignée",
    "Envase, etiqueta e imagen trabajan juntos para que el producto se perciba claro y fiable.": "Conditionnement, étiquette et image travaillent ensemble pour rendre le produit clair et fiable.",
    "Fichas comprensibles": "Fiches faciles à comprendre",
    "Información organizada para entender usos, formato, conservación y datos relevantes antes de comprar.": "Des informations structurées pour comprendre les usages, le format, la conservation et les données utiles avant l'achat.",
    "Uso en el día a día": "Usage au quotidien",
    "Contenido práctico para acompañar cada referencia con ideas sencillas y criterios de uso.": "Du contenu pratique pour accompagner chaque référence avec des idées simples et des conseils d'utilisation.",
    "Catálogo": "Catalogue",
    "Productos destacados": "Produits mis en avant",
    "Ver todos los productos": "Voir tous les produits",
    "Método RAIAN": "Méthode RAIAN",
    "Del envase a la experiencia.": "De l'emballage à l'expérience.",
    "Seleccionamos": "Nous sélectionnons",
    "Presentamos": "Nous présentons",
    "Explicamos": "Nous expliquons",
    "Compra externa": "Achat externe",
    "Amazon como canal, RAIAN como marca.": "Amazon comme canal, RAIAN comme marque.",
    "Consultar disponibilidad": "Vérifier la disponibilité",
    "Descubre el catálogo RAIAN": "Découvrez le catalogue RAIAN",
    "Navegación": "Navigation",
    "Información": "Informations",
    "Aviso legal": "Mentions légales",
    "Privacidad": "Confidentialité",
    "Cookies": "Cookies",
    "Catálogo alimentario.": "Catalogue alimentaire.",
    "Contenido útil": "Contenu utile",
    "Recetas con gelatina bovina neutra RAIAN 260 Bloom.": "Recettes avec gélatine bovine neutre RAIAN 260 Bloom.",
    "Tipo": "Type",
    "Todos": "Tous",
    "Todos los tipos": "Tous les types",
    "Apta para": "Adaptée à",
    "Todas": "Toutes",
    "Sin lactosa": "Sans lactose",
    "Sin gluten": "Sans gluten",
    "Recetas": "Recettes",
    "Ver receta completa": "Voir la recette complète",
    "Tiempo total": "Temps total",
    "Producto": "Produit",
    "Valora esta receta": "Notez cette recette",
    "Sin valoraciones": "Aucun avis",
    "Sin votos": "Aucun vote",
    "Aun no has valorado esta receta.": "Vous n'avez pas encore noté cette recette.",
    "Preferencias de cookies": "Préférences de cookies",
    "Configurar": "Configurer",
    "Rechazar": "Refuser",
    "Aceptar": "Accepter"
  },
  de: {
    "Saltar al contenido": "Zum Inhalt springen",
    "Inicio": "Startseite",
    "Productos": "Produkte",
    "Usos y recetas": "Anwendungen & Rezepte",
    "Sobre RAIAN": "Über RAIAN",
    "Contacto": "Kontakt",
    "Ver catálogo": "Katalog ansehen",
    "Menú": "Menü",
    "Catálogo RAIAN": "RAIAN-Katalog",
    "Productos alimenticios seleccionados desde Valencia.": "Ausgewählte Lebensmittelprodukte aus Valencia.",
    "Productos y recetas organizados para consultar rápido y comprar con confianza.": "Produkte und Rezepte, übersichtlich organisiert, damit Sie schnell nachsehen und sicher kaufen können.",
    "Explorar catálogo": "Katalog entdecken",
    "Conocer la marca": "Marke kennenlernen",
    "Qué ofrece RAIAN": "Was RAIAN bietet",
    "Una marca alimentaria clara, cuidada y fácil de entender.": "Eine klare, sorgfältig präsentierte Lebensmittelmarke, die leicht verständlich ist.",
    "Productos seleccionados": "Ausgewählte Produkte",
    "Referencias alimentarias elegidas por utilidad, claridad y encaje con el consumo diario.": "Lebensmittelprodukte, ausgewählt nach Nutzen, Klarheit und Alltagstauglichkeit.",
    "Presentación cuidada": "Sorgfältige Präsentation",
    "Envase, etiqueta e imagen trabajan juntos para que el producto se perciba claro y fiable.": "Verpackung, Etikett und Bildsprache wirken zusammen, damit das Produkt klar und verlässlich erscheint.",
    "Fichas comprensibles": "Verständliche Produktseiten",
    "Información organizada para entender usos, formato, conservación y datos relevantes antes de comprar.": "Informationen zu Verwendung, Format, Lagerung und wichtigen Details sind vor dem Kauf klar strukturiert.",
    "Uso en el día a día": "Alltägliche Verwendung",
    "Contenido práctico para acompañar cada referencia con ideas sencillas y criterios de uso.": "Praktische Inhalte begleiten jedes Produkt mit einfachen Ideen und Nutzungshinweisen.",
    "Catálogo": "Katalog",
    "Productos destacados": "Empfohlene Produkte",
    "Ver todos los productos": "Alle Produkte ansehen",
    "Método RAIAN": "RAIAN-Methode",
    "Del envase a la experiencia.": "Von der Verpackung zum Erlebnis.",
    "Seleccionamos": "Wir wählen aus",
    "Presentamos": "Wir präsentieren",
    "Explicamos": "Wir erklären",
    "Compra externa": "Externer Kauf",
    "Amazon como canal, RAIAN como marca.": "Amazon als Kanal, RAIAN als Marke.",
    "Consultar disponibilidad": "Verfügbarkeit prüfen",
    "Descubre el catálogo RAIAN": "Entdecken Sie den RAIAN-Katalog",
    "Navegación": "Navigation",
    "Información": "Informationen",
    "Aviso legal": "Impressum",
    "Privacidad": "Datenschutz",
    "Cookies": "Cookies",
    "Catálogo alimentario.": "Lebensmittelkatalog.",
    "Contenido útil": "Nützliche Inhalte",
    "Recetas con gelatina bovina neutra RAIAN 260 Bloom.": "Rezepte mit neutraler RAIAN-Rindergelatine 260 Bloom.",
    "Tipo": "Art",
    "Todos": "Alle",
    "Todos los tipos": "Alle Arten",
    "Apta para": "Geeignet für",
    "Todas": "Alle",
    "Sin lactosa": "Laktosefrei",
    "Sin gluten": "Glutenfrei",
    "Recetas": "Rezepte",
    "Ver receta completa": "Ganzes Rezept ansehen",
    "Tiempo total": "Gesamtzeit",
    "Producto": "Produkt",
    "Valora esta receta": "Dieses Rezept bewerten",
    "Sin valoraciones": "Noch keine Bewertungen",
    "Sin votos": "Keine Stimmen",
    "Aun no has valorado esta receta.": "Sie haben dieses Rezept noch nicht bewertet.",
    "Preferencias de cookies": "Cookie-Einstellungen",
    "Configurar": "Konfigurieren",
    "Rechazar": "Ablehnen",
    "Aceptar": "Akzeptieren"
  }
} satisfies Record<Exclude<Locale, "es">, Record<string, string>>;

type TranslatedLocale = Exclude<Locale, "es">;

const contextualTranslations = {
  "Elegir idioma": {
    va: "Triar idioma",
    ca: "Triar idioma",
    en: "Choose language",
    fr: "Choisir la langue",
    de: "Sprache auswählen"
  },
  "Valencia, España": {
    va: "València, Espanya",
    ca: "València, Espanya",
    en: "Valencia, Spain",
    fr: "Valence, Espagne",
    de: "Valencia, Spanien"
  },
  "Cuidamos la selección, el envase, la ficha de producto y los contenidos de apoyo para que cada referencia resulte fácil de entender antes de comprar.": {
    va: "Cuidem la selecció, l'envàs, la fitxa de producte i els continguts de suport perquè cada referència siga fàcil d'entendre abans de comprar.",
    ca: "Cuidem la selecció, l'envàs, la fitxa de producte i els continguts de suport perquè cada referència sigui fàcil d'entendre abans de comprar.",
    en: "We take care of selection, packaging, product pages and supporting content so every item is easy to understand before buying.",
    fr: "Nous soignons la sélection, l'emballage, la fiche produit et les contenus d'accompagnement afin que chaque référence soit facile à comprendre avant l'achat.",
    de: "Wir achten auf Auswahl, Verpackung, Produktseiten und ergänzende Inhalte, damit jeder Artikel vor dem Kauf leicht verständlich ist."
  },
  "Referencias alimentarias con fichas preparadas para explicar usos, presentación e información relevante.": {
    va: "Referències alimentàries amb fitxes preparades per a explicar usos, presentació i informació rellevant.",
    ca: "Referències alimentàries amb fitxes preparades per explicar usos, presentació i informació rellevant.",
    en: "Food products with pages designed to explain uses, presentation and relevant information.",
    fr: "Des références alimentaires avec des fiches conçues pour expliquer les usages, la présentation et les informations utiles.",
    de: "Lebensmittelprodukte mit Seiten, die Verwendung, Präsentation und relevante Informationen verständlich erklären."
  },
  "La confianza nace de un producto bien presentado, una ficha clara y contenido útil accesible en el momento de la compra.": {
    va: "La confiança naix d'un producte ben presentat, una fitxa clara i contingut útil accessible en el moment de la compra.",
    ca: "La confiança neix d'un producte ben presentat, una fitxa clara i contingut útil accessible en el moment de la compra.",
    en: "Confidence comes from a well-presented product, a clear product page and useful content available at the moment of purchase.",
    fr: "La confiance naît d'un produit bien présenté, d'une fiche claire et d'un contenu utile accessible au moment de l'achat.",
    de: "Vertrauen entsteht durch ein gut präsentiertes Produkt, eine klare Produktseite und hilfreiche Inhalte im Moment des Kaufs."
  },
  "Buscamos referencias alimentarias claras, útiles y con sentido dentro del catálogo.": {
    va: "Busquem referències alimentàries clares, útils i amb sentit dins del catàleg.",
    ca: "Busquem referències alimentàries clares, útils i amb sentit dins del catàleg.",
    en: "We look for food products that are clear, useful and coherent within the catalogue.",
    fr: "Nous recherchons des références alimentaires claires, utiles et cohérentes dans le catalogue.",
    de: "Wir wählen Lebensmittelprodukte aus, die klar, nützlich und sinnvoll im Katalog eingeordnet sind."
  },
  "Cuidamos la imagen del producto para que transmita orden, calidad y coherencia de marca.": {
    va: "Cuidem la imatge del producte perquè transmeta ordre, qualitat i coherència de marca.",
    ca: "Cuidem la imatge del producte perquè transmeti ordre, qualitat i coherència de marca.",
    en: "We refine the product image so it communicates order, quality and brand coherence.",
    fr: "Nous soignons l'image du produit afin qu'elle transmette ordre, qualité et cohérence de marque.",
    de: "Wir gestalten die Produktdarstellung so, dass sie Ordnung, Qualität und Markenstimmigkeit vermittelt."
  },
  "Organizamos la información de forma sencilla para reducir dudas antes de la compra.": {
    va: "Organitzem la informació de manera senzilla per a reduir dubtes abans de la compra.",
    ca: "Organitzem la informació de manera senzilla per reduir dubtes abans de la compra.",
    en: "We organise information simply to reduce questions before purchase.",
    fr: "Nous organisons l'information simplement afin de réduire les doutes avant l'achat.",
    de: "Wir ordnen Informationen einfach und klar, damit vor dem Kauf weniger Fragen offenbleiben."
  },
  "Catálogo de productos": {
    va: "Catàleg de productes",
    ca: "Catàleg de productes",
    en: "Product catalogue",
    fr: "Catalogue de produits",
    de: "Produktkatalog"
  },
  "Productos alimenticios seleccionados y presentados con claridad.": {
    va: "Productes alimentaris seleccionats i presentats amb claredat.",
    ca: "Productes alimentaris seleccionats i presentats amb claredat.",
    en: "Selected food products, presented clearly.",
    fr: "Des produits alimentaires sélectionnés et présentés clairement.",
    de: "Ausgewählte Lebensmittelprodukte, klar präsentiert."
  },
  "Referencias, usos habituales y datos disponibles organizados para facilitar la decisión de compra.": {
    va: "Referències, usos habituals i dades disponibles organitzats per a facilitar la decisió de compra.",
    ca: "Referències, usos habituals i dades disponibles organitzats per facilitar la decisió de compra.",
    en: "Products, everyday uses and available details organised to support the buying decision.",
    fr: "Références, usages courants et données disponibles organisés pour faciliter la décision d'achat.",
    de: "Produkte, typische Verwendungen und verfügbare Daten sind so geordnet, dass die Kaufentscheidung leichter fällt."
  },
  "Buscar en el catálogo": {
    va: "Buscar en el catàleg",
    ca: "Cercar al catàleg",
    en: "Search the catalogue",
    fr: "Rechercher dans le catalogue",
    de: "Im Katalog suchen"
  },
  "Ej. gelatina, almendra, dextrosa...": {
    va: "Ex. gelatina, ametla, dextrosa...",
    ca: "Ex. gelatina, ametlla, dextrosa...",
    en: "E.g. gelatine, almond, dextrose...",
    fr: "Ex. gélatine, amande, dextrose...",
    de: "Z. B. Gelatine, Mandel, Dextrose..."
  },
  "Limpiar búsqueda": {
    va: "Netejar cerca",
    ca: "Netejar cerca",
    en: "Clear search",
    fr: "Effacer la recherche",
    de: "Suche löschen"
  },
  "No hemos encontrado ese producto": {
    va: "No hem trobat eixe producte",
    ca: "No hem trobat aquest producte",
    en: "We could not find that product",
    fr: "Nous n'avons pas trouvé ce produit",
    de: "Dieses Produkt wurde nicht gefunden"
  },
  "Prueba con otra palabra, categoría o ingrediente. También puedes contactar con RAIAN para consultar referencias o información comercial.": {
    va: "Prova amb una altra paraula, categoria o ingredient. També pots contactar amb RAIAN per a consultar referències o informació comercial.",
    ca: "Prova amb una altra paraula, categoria o ingredient. També pots contactar amb RAIAN per consultar referències o informació comercial.",
    en: "Try another word, category or ingredient. You can also contact RAIAN to ask about products or commercial information.",
    fr: "Essayez un autre mot, une catégorie ou un ingrédient. Vous pouvez également contacter RAIAN pour demander des références ou des informations commerciales.",
    de: "Versuchen Sie ein anderes Wort, eine Kategorie oder eine Zutat. Sie können RAIAN auch zu Produkten oder kommerziellen Informationen kontaktieren."
  },
  "Ver ficha": {
    va: "Veure fitxa",
    ca: "Veure fitxa",
    en: "View details",
    fr: "Voir la fiche",
    de: "Details ansehen"
  },
  "Ver en Amazon": {
    va: "Veure en Amazon",
    ca: "Veure a Amazon",
    en: "View on Amazon",
    fr: "Voir sur Amazon",
    de: "Bei Amazon ansehen"
  },
  "Gelatinas": {
    va: "Gelatines",
    ca: "Gelatines",
    en: "Gelatines",
    fr: "Gélatines",
    de: "Gelatine"
  },
  "Harinas": {
    va: "Farines",
    ca: "Farines",
    en: "Flours",
    fr: "Farines",
    de: "Mehle"
  },
  "Ingredientes alimentarios": {
    va: "Ingredients alimentaris",
    ca: "Ingredients alimentaris",
    en: "Food ingredients",
    fr: "Ingrédients alimentaires",
    de: "Lebensmittelzutaten"
  },
  "Gelatina neutra bovina": {
    va: "Gelatina neutra bovina",
    ca: "Gelatina neutra bovina",
    en: "Neutral bovine gelatine",
    fr: "Gélatine bovine neutre",
    de: "Neutrale Rindergelatine"
  },
  "Gelatina neutra porcina": {
    va: "Gelatina neutra porcina",
    ca: "Gelatina neutra porcina",
    en: "Neutral porcine gelatine",
    fr: "Gélatine porcine neutre",
    de: "Neutrale Schweinegelatine"
  },
  "Harina de almendra": {
    va: "Farina d'ametla",
    ca: "Farina d'ametlla",
    en: "Almond flour",
    fr: "Farine d'amande",
    de: "Mandelmehl"
  },
  "Dextrosa": {
    va: "Dextrosa",
    ca: "Dextrosa",
    en: "Dextrose",
    fr: "Dextrose",
    de: "Dextrose"
  },
  "Glucosa": {
    va: "Glucosa",
    ca: "Glucosa",
    en: "Glucose",
    fr: "Glucose",
    de: "Glukose"
  },
  "Gelatina neutra de origen bovino para recetas, postres, preparaciones culinarias y usos alimentarios generales.": {
    va: "Gelatina neutra d'origen boví per a receptes, postres, preparacions culinàries i usos alimentaris generals.",
    ca: "Gelatina neutra d'origen boví per a receptes, postres, preparacions culinàries i usos alimentaris generals.",
    en: "Neutral bovine gelatine for recipes, desserts, culinary preparations and general food use.",
    fr: "Gélatine bovine neutre pour recettes, desserts, préparations culinaires et usages alimentaires généraux.",
    de: "Neutrale Rindergelatine für Rezepte, Desserts, kulinarische Zubereitungen und allgemeine Lebensmittelanwendungen."
  },
  "Gelatina neutra de origen porcino para preparaciones culinarias, postres y recetas que requieren textura y consistencia.": {
    va: "Gelatina neutra d'origen porcí per a preparacions culinàries, postres i receptes que necessiten textura i consistència.",
    ca: "Gelatina neutra d'origen porcí per a preparacions culinàries, postres i receptes que requereixen textura i consistència.",
    en: "Neutral porcine gelatine for culinary preparations, desserts and recipes that need texture and consistency.",
    fr: "Gélatine porcine neutre pour préparations culinaires, desserts et recettes nécessitant texture et tenue.",
    de: "Neutrale Schweinegelatine für kulinarische Zubereitungen, Desserts und Rezepte, die Textur und Festigkeit benötigen."
  },
  "Harina de almendra pensada para repostería, elaboraciones caseras y recetas donde se busca una textura fina y versátil.": {
    va: "Farina d'ametla pensada per a rebosteria, elaboracions casolanes i receptes on es busca una textura fina i versàtil.",
    ca: "Farina d'ametlla pensada per a rebosteria, elaboracions casolanes i receptes on es busca una textura fina i versàtil.",
    en: "Almond flour for baking, homemade preparations and recipes where a fine, versatile texture is desired.",
    fr: "Farine d'amande pensée pour la pâtisserie, les préparations maison et les recettes qui demandent une texture fine et polyvalente.",
    de: "Mandelmehl für Backwaren, hausgemachte Zubereitungen und Rezepte, bei denen eine feine, vielseitige Textur gefragt ist."
  },
  "Ingrediente alimentario utilizado en distintas preparaciones, recetas y aplicaciones culinarias.": {
    va: "Ingredient alimentari utilitzat en diferents preparacions, receptes i aplicacions culinàries.",
    ca: "Ingredient alimentari utilitzat en diferents preparacions, receptes i aplicacions culinàries.",
    en: "Food ingredient used in different preparations, recipes and culinary applications.",
    fr: "Ingrédient alimentaire utilisé dans différentes préparations, recettes et applications culinaires.",
    de: "Lebensmittelzutat für verschiedene Zubereitungen, Rezepte und kulinarische Anwendungen."
  },
  "Ingrediente alimentario para recetas, elaboraciones dulces y aplicaciones culinarias específicas.": {
    va: "Ingredient alimentari per a receptes, elaboracions dolces i aplicacions culinàries específiques.",
    ca: "Ingredient alimentari per a receptes, elaboracions dolces i aplicacions culinàries específiques.",
    en: "Food ingredient for recipes, sweet preparations and specific culinary applications.",
    fr: "Ingrédient alimentaire pour recettes, préparations sucrées et applications culinaires spécifiques.",
    de: "Lebensmittelzutat für Rezepte, süße Zubereitungen und spezielle kulinarische Anwendungen."
  },
  "Neutra": {
    va: "Neutra",
    ca: "Neutra",
    en: "Neutral",
    fr: "Neutre",
    de: "Neutral"
  },
  "Origen bovino": {
    va: "Origen boví",
    ca: "Origen boví",
    en: "Bovine origin",
    fr: "Origine bovine",
    de: "Rind"
  },
  "Origen porcino": {
    va: "Origen porcí",
    ca: "Origen porcí",
    en: "Porcine origin",
    fr: "Origine porcine",
    de: "Schwein"
  },
  "Postres": {
    va: "Postres",
    ca: "Postres",
    en: "Desserts",
    fr: "Desserts",
    de: "Desserts"
  },
  "Cocina": {
    va: "Cuina",
    ca: "Cuina",
    en: "Cooking",
    fr: "Cuisine",
    de: "Küche"
  },
  "Almendra": {
    va: "Ametla",
    ca: "Ametlla",
    en: "Almond",
    fr: "Amande",
    de: "Mandel"
  },
  "100% almendra molida": {
    va: "100% ametla molta",
    ca: "100% ametlla molta",
    en: "100% ground almond",
    fr: "100 % amande moulue",
    de: "100 % gemahlene Mandel"
  },
  "Repostería": {
    va: "Rebosteria",
    ca: "Rebosteria",
    en: "Baking",
    fr: "Pâtisserie",
    de: "Backen"
  },
  "Ingrediente": {
    va: "Ingredient",
    ca: "Ingredient",
    en: "Ingredient",
    fr: "Ingrédient",
    de: "Zutat"
  },
  "Uso alimentario": {
    va: "Ús alimentari",
    ca: "Ús alimentari",
    en: "Food use",
    fr: "Usage alimentaire",
    de: "Lebensmittelverwendung"
  },
  "Preparaciones": {
    va: "Preparacions",
    ca: "Preparacions",
    en: "Preparations",
    fr: "Préparations",
    de: "Zubereitungen"
  },
  "Dulces": {
    va: "Dolços",
    ca: "Dolços",
    en: "Sweet recipes",
    fr: "Préparations sucrées",
    de: "Süßspeisen"
  },
  "Uso culinario": {
    va: "Ús culinari",
    ca: "Ús culinari",
    en: "Culinary use",
    fr: "Usage culinaire",
    de: "Kulinarische Verwendung"
  },
  "Postres fríos.": {
    va: "Postres freds.",
    ca: "Postres freds.",
    en: "Cold desserts.",
    fr: "Desserts froids.",
    de: "Kalte Desserts."
  },
  "Tartas.": {
    va: "Pastissos.",
    ca: "Pastissos.",
    en: "Cakes and tarts.",
    fr: "Tartes et gâteaux.",
    de: "Kuchen und Torten."
  },
  "Mousses.": {
    va: "Mousses.",
    ca: "Mousses.",
    en: "Mousses.",
    fr: "Mousses.",
    de: "Mousses."
  },
  "Gelatinas caseras.": {
    va: "Gelatines casolanes.",
    ca: "Gelatines casolanes.",
    en: "Homemade jellies.",
    fr: "Gelées maison.",
    de: "Hausgemachte Gelees."
  },
  "Preparaciones que requieren textura.": {
    va: "Preparacions que necessiten textura.",
    ca: "Preparacions que requereixen textura.",
    en: "Preparations that require texture.",
    fr: "Préparations qui demandent de la texture.",
    de: "Zubereitungen, die Textur benötigen."
  },
  "Bizcochos.": {
    va: "Bescuits.",
    ca: "Bescuits.",
    en: "Sponge cakes.",
    fr: "Gâteaux moelleux.",
    de: "Rührkuchen."
  },
  "Galletas.": {
    va: "Galetes.",
    ca: "Galetes.",
    en: "Biscuits.",
    fr: "Biscuits.",
    de: "Kekse."
  },
  "Bases de tarta.": {
    va: "Bases de pastís.",
    ca: "Bases de pastís.",
    en: "Tart bases.",
    fr: "Fonds de tarte.",
    de: "Tortenböden."
  },
  "Rebozados finos.": {
    va: "Arrebossats fins.",
    ca: "Arrebossats fins.",
    en: "Fine coatings.",
    fr: "Panures fines.",
    de: "Feine Panaden."
  },
  "Elaboraciones caseras de repostería.": {
    va: "Elaboracions casolanes de rebosteria.",
    ca: "Elaboracions casolanes de rebosteria.",
    en: "Homemade baking preparations.",
    fr: "Préparations pâtissières maison.",
    de: "Hausgemachte Backzubereitungen."
  },
  "Preparaciones culinarias.": {
    va: "Preparacions culinàries.",
    ca: "Preparacions culinàries.",
    en: "Culinary preparations.",
    fr: "Préparations culinaires.",
    de: "Kulinarische Zubereitungen."
  },
  "Elaboraciones dulces.": {
    va: "Elaboracions dolces.",
    ca: "Elaboracions dolces.",
    en: "Sweet preparations.",
    fr: "Préparations sucrées.",
    de: "Süße Zubereitungen."
  },
  "Preparar la cantidad indicada en la receta.": {
    va: "Prepara la quantitat indicada en la recepta.",
    ca: "Prepara la quantitat indicada a la recepta.",
    en: "Prepare the amount stated in the recipe.",
    fr: "Préparez la quantité indiquée dans la recette.",
    de: "Die im Rezept angegebene Menge vorbereiten."
  },
  "Incorporar a la elaboración.": {
    va: "Incorporar a l'elaboració.",
    ca: "Incorporar a l'elaboració.",
    en: "Add it to the preparation.",
    fr: "Incorporez à la préparation.",
    de: "In die Zubereitung einarbeiten."
  },
  "Conservar en un lugar fresco, seco y protegido de la luz.": {
    va: "Conservar en un lloc fresc, sec i protegit de la llum.",
    ca: "Conservar en un lloc fresc, sec i protegit de la llum.",
    en: "Store in a cool, dry place protected from light.",
    fr: "Conserver dans un endroit frais, sec et à l'abri de la lumière.",
    de: "Kühl, trocken und lichtgeschützt lagern."
  },
  "Descripción": {
    va: "Descripció",
    ca: "Descripció",
    en: "Description",
    fr: "Description",
    de: "Beschreibung"
  },
  "Información clara para entender el producto.": {
    va: "Informació clara per a entendre el producte.",
    ca: "Informació clara per entendre el producte.",
    en: "Clear information to understand the product.",
    fr: "Des informations claires pour comprendre le produit.",
    de: "Klare Informationen, um das Produkt zu verstehen."
  },
  "Usos": {
    va: "Usos",
    ca: "Usos",
    en: "Uses",
    fr: "Usages",
    de: "Verwendungen"
  },
  "Aplicaciones habituales.": {
    va: "Aplicacions habituals.",
    ca: "Aplicacions habituals.",
    en: "Common applications.",
    fr: "Applications courantes.",
    de: "Typische Anwendungen."
  },
  "Uso orientativo": {
    va: "Ús orientatiu",
    ca: "Ús orientatiu",
    en: "Usage guidance",
    fr: "Conseils d'utilisation",
    de: "Anwendungshinweise"
  },
  "Pautas generales.": {
    va: "Pautes generals.",
    ca: "Pautes generals.",
    en: "General guidance.",
    fr: "Indications générales.",
    de: "Allgemeine Hinweise."
  },
  "Ficha técnica": {
    va: "Fitxa tècnica",
    ca: "Fitxa tècnica",
    en: "Technical sheet",
    fr: "Fiche technique",
    de: "Technisches Datenblatt"
  },
  "Datos disponibles.": {
    va: "Dades disponibles.",
    ca: "Dades disponibles.",
    en: "Available details.",
    fr: "Données disponibles.",
    de: "Verfügbare Angaben."
  },
  "Información nutricional": {
    va: "Informació nutricional",
    ca: "Informació nutricional",
    en: "Nutrition information",
    fr: "Informations nutritionnelles",
    de: "Nährwertangaben"
  },
  "Valores por 100 g.": {
    va: "Valors per 100 g.",
    ca: "Valors per 100 g.",
    en: "Values per 100 g.",
    fr: "Valeurs pour 100 g.",
    de: "Werte pro 100 g."
  },
  "Alérgenos": {
    va: "Al·lèrgens",
    ca: "Al·lèrgens",
    en: "Allergens",
    fr: "Allergènes",
    de: "Allergene"
  },
  "Conservación": {
    va: "Conservació",
    ca: "Conservació",
    en: "Storage",
    fr: "Conservation",
    de: "Lagerung"
  },
  "Imagen de producto": {
    va: "Imatge de producte",
    ca: "Imatge de producte",
    en: "Product image",
    fr: "Image produit",
    de: "Produktbild"
  },
  "Presentación visual de la referencia.": {
    va: "Presentació visual de la referència.",
    ca: "Presentació visual de la referència.",
    en: "Visual presentation of the product.",
    fr: "Présentation visuelle de la référence.",
    de: "Visuelle Präsentation des Produkts."
  },
  "Productos relacionados": {
    va: "Productes relacionats",
    ca: "Productes relacionats",
    en: "Related products",
    fr: "Produits associés",
    de: "Verwandte Produkte"
  },
  "Otras referencias del catálogo.": {
    va: "Altres referències del catàleg.",
    ca: "Altres referències del catàleg.",
    en: "Other products in the catalogue.",
    fr: "Autres références du catalogue.",
    de: "Weitere Produkte im Katalog."
  },
  "Disponible próximamente": {
    va: "Disponible pròximament",
    ca: "Disponible pròximament",
    en: "Available soon",
    fr: "Bientôt disponible",
    de: "Demnächst verfügbar"
  },
  "La compra, cuando esté activa, se realiza fuera de esta web a través del canal indicado. RAIAN mantiene aquí la información de marca y producto.": {
    va: "La compra, quan estiga activa, es realitza fora d'esta web a través del canal indicat. RAIAN manté ací la informació de marca i producte.",
    ca: "La compra, quan estigui activa, es realitza fora d'aquesta web a través del canal indicat. RAIAN manté aquí la informació de marca i producte.",
    en: "When purchasing is active, it takes place outside this website through the indicated channel. RAIAN keeps the brand and product information here.",
    fr: "Lorsque l'achat est actif, il s'effectue en dehors de ce site via le canal indiqué. RAIAN conserve ici les informations de marque et de produit.",
    de: "Wenn der Kauf aktiv ist, erfolgt er außerhalb dieser Website über den angegebenen Kanal. RAIAN stellt hier die Marken- und Produktinformationen bereit."
  },
  "Contenido util": {
    va: "Contingut útil",
    ca: "Contingut útil",
    en: "Useful content",
    fr: "Contenu utile",
    de: "Nützliche Inhalte"
  },
  "Recetas para hacer en casa con ingredientes claros.": {
    va: "Receptes per a fer a casa amb ingredients clars.",
    ca: "Receptes per fer a casa amb ingredients clars.",
    en: "Recipes to make at home with clear ingredients.",
    fr: "Des recettes à préparer chez soi avec des ingrédients clairs.",
    de: "Rezepte für zu Hause mit klaren Zutaten."
  },
  "Inspírate con preparaciones dulces y saladas, tiempos claros e ingredientes medidos. Filtra por tipo, por necesidades alimentarias o por los productos RAIAN que quieras utilizar.": {
    va: "Inspira't amb preparacions dolces i salades, temps clars i ingredients mesurats. Filtra per tipus, per necessitats alimentàries o pels productes RAIAN que vulgues utilitzar.",
    ca: "Inspira't amb preparacions dolces i salades, temps clars i ingredients mesurats. Filtra per tipus, per necessitats alimentàries o pels productes RAIAN que vulguis utilitzar.",
    en: "Find inspiration in sweet and savoury ideas, clear timings and measured ingredients. Filter by type, dietary needs or the RAIAN products you want to use.",
    fr: "Inspirez-vous de préparations sucrées et salées, avec des temps clairs et des ingrédients mesurés. Filtrez par type, besoins alimentaires ou produits RAIAN à utiliser.",
    de: "Lassen Sie sich von süßen und herzhaften Ideen mit klaren Zeiten und abgewogenen Zutaten inspirieren. Filtern Sie nach Art, Ernährungsbedarf oder den RAIAN-Produkten, die Sie verwenden möchten."
  },
  "Producto RAIAN": {
    va: "Producte RAIAN",
    ca: "Producte RAIAN",
    en: "RAIAN product",
    fr: "Produit RAIAN",
    de: "RAIAN-Produkt"
  },
  "Quitar productos": {
    va: "Llevar productes",
    ca: "Treure productes",
    en: "Clear products",
    fr: "Retirer les produits",
    de: "Produkte entfernen"
  },
  "Selecciona uno o varios. Si marcas varios, se mostrarán recetas que contengan todos esos productos.": {
    va: "Selecciona'n un o diversos. Si en marques diversos, es mostraran receptes que continguen tots eixos productes.",
    ca: "Selecciona'n un o diversos. Si en marques diversos, es mostraran receptes que continguin tots aquests productes.",
    en: "Select one or more. If you select several, only recipes containing all those products will be shown.",
    fr: "Sélectionnez-en un ou plusieurs. Si vous en choisissez plusieurs, seules les recettes contenant tous ces produits s'afficheront.",
    de: "Wählen Sie eines oder mehrere aus. Wenn Sie mehrere markieren, werden nur Rezepte angezeigt, die alle diese Produkte enthalten."
  },
  "Todos los productos": {
    va: "Tots els productes",
    ca: "Tots els productes",
    en: "All products",
    fr: "Tous les produits",
    de: "Alle Produkte"
  },
  "Explora recetas con ingredientes en gramos, tiempos claros, alergenos destacados y tablas nutricionales estimadas. Filtra por tipo o por necesidades como sin lactosa y sin gluten.": {
    va: "Explora receptes amb ingredients en grams, temps clars, al·lèrgens destacats i taules nutricionals estimades. Filtra per tipus o per necessitats com sense lactosa i sense gluten.",
    ca: "Explora receptes amb ingredients en grams, temps clars, al·lèrgens destacats i taules nutricionals estimades. Filtra per tipus o per necessitats com sense lactosa i sense gluten.",
    en: "Explore recipes with gram-based ingredients, clear timings, highlighted allergens and estimated nutrition tables. Filter by type or needs such as lactose-free and gluten-free.",
    fr: "Explorez des recettes avec ingrédients en grammes, temps clairs, allergènes indiqués et tableaux nutritionnels estimés. Filtrez par type ou par besoins comme sans lactose et sans gluten.",
    de: "Entdecken Sie Rezepte mit Zutaten in Gramm, klaren Zeiten, hervorgehobenen Allergenen und geschätzten Nährwerttabellen. Filtern Sie nach Art oder nach Bedürfnissen wie laktosefrei und glutenfrei."
  },
  "Filtrar recetas": {
    va: "Filtrar receptes",
    ca: "Filtrar receptes",
    en: "Filter recipes",
    fr: "Filtrer les recettes",
    de: "Rezepte filtern"
  },
  "No hay recetas con esos filtros": {
    va: "No hi ha receptes amb eixos filtres",
    ca: "No hi ha receptes amb aquests filtres",
    en: "There are no recipes with those filters",
    fr: "Aucune recette ne correspond à ces filtres",
    de: "Für diese Filter gibt es keine Rezepte"
  },
  "Prueba con otro tipo de receta o quita una restriccion para ver mas opciones.": {
    va: "Prova amb un altre tipus de recepta o lleva una restricció per a veure més opcions.",
    ca: "Prova amb un altre tipus de recepta o treu una restricció per veure més opcions.",
    en: "Try another recipe type or remove a restriction to see more options.",
    fr: "Essayez un autre type de recette ou retirez une restriction pour voir plus d'options.",
    de: "Versuchen Sie eine andere Rezeptart oder entfernen Sie eine Einschränkung, um mehr Optionen zu sehen."
  },
  "Raciones": {
    va: "Racions",
    ca: "Racions",
    en: "Servings",
    fr: "Portions",
    de: "Portionen"
  },
  "Producto relacionado": {
    va: "Producte relacionat",
    ca: "Producte relacionat",
    en: "Related product",
    fr: "Produit associé",
    de: "Zugehöriges Produkt"
  },
  "Enviar por correo": {
    va: "Enviar per correu",
    ca: "Enviar per correu",
    en: "Send by email",
    fr: "Envoyer par e-mail",
    de: "Per E-Mail senden"
  },
  "¿Te gusta esta receta?": {
    va: "T'agrada esta recepta?",
    ca: "T'agrada aquesta recepta?",
    en: "Do you like this recipe?",
    fr: "Vous aimez cette recette ?",
    de: "Gefällt Ihnen dieses Rezept?"
  },
  "Envíarsela por correo a quien tú quieras.": {
    va: "Envia-la per correu a qui vulgues.",
    ca: "Envia-la per correu a qui vulguis.",
    en: "Email it to whoever you like.",
    fr: "Envoyez-la par e-mail à la personne de votre choix.",
    de: "Senden Sie es per E-Mail an die gewünschte Person."
  },
  "Correo electrónico": {
    va: "Correu electrònic",
    ca: "Correu electrònic",
    en: "Email address",
    fr: "Adresse e-mail",
    de: "E-Mail-Adresse"
  },
  "correo@ejemplo.com": {
    va: "correu@exemple.com",
    ca: "correu@exemple.com",
    en: "email@example.com",
    fr: "adresse@exemple.fr",
    de: "name@beispiel.de"
  },
  "Escribe un correo para preparar el envío.": {
    va: "Escriu un correu per a preparar l'enviament.",
    ca: "Escriu un correu per preparar l'enviament.",
    en: "Enter an email address to prepare the message.",
    fr: "Saisissez une adresse e-mail pour préparer l'envoi.",
    de: "Geben Sie eine E-Mail-Adresse ein, um die Nachricht vorzubereiten."
  },
  "Se abrirá tu aplicación de correo con la receta preparada.": {
    va: "S'obrirà la teua aplicació de correu amb la recepta preparada.",
    ca: "S'obrirà la teva aplicació de correu amb la recepta preparada.",
    en: "Your email app will open with the recipe ready to send.",
    fr: "Votre application e-mail va s'ouvrir avec la recette prête à envoyer.",
    de: "Ihre E-Mail-App öffnet sich mit dem vorbereiteten Rezept."
  },
  "Preparación": {
    va: "Preparació",
    ca: "Preparació",
    en: "Preparation",
    fr: "Préparation",
    de: "Vorbereitung"
  },
  "Cocción": {
    va: "Cocció",
    ca: "Cocció",
    en: "Cooking",
    fr: "Cuisson",
    de: "Garzeit"
  },
  "Reposo": {
    va: "Repòs",
    ca: "Repòs",
    en: "Resting",
    fr: "Repos",
    de: "Ruhezeit"
  },
  "Total": {
    va: "Total",
    ca: "Total",
    en: "Total",
    fr: "Total",
    de: "Gesamt"
  },
  "Ingredientes": {
    va: "Ingredients",
    ca: "Ingredients",
    en: "Ingredients",
    fr: "Ingrédients",
    de: "Zutaten"
  },
  "Nutrición estimada por ración": {
    va: "Nutrició estimada per ració",
    ca: "Nutrició estimada per ració",
    en: "Estimated nutrition per serving",
    fr: "Nutrition estimée par portion",
    de: "Geschätzte Nährwerte pro Portion"
  },
  "Nutrición estimada por 100 g": {
    va: "Nutrició estimada per 100 g",
    ca: "Nutrició estimada per 100 g",
    en: "Estimated nutrition per 100 g",
    fr: "Nutrition estimée pour 100 g",
    de: "Geschätzte Nährwerte pro 100 g"
  },
  "Consejo RAIAN": {
    va: "Consell RAIAN",
    ca: "Consell RAIAN",
    en: "RAIAN tip",
    fr: "Conseil RAIAN",
    de: "RAIAN-Tipp"
  },
  "Alérgenos destacados:": {
    va: "Al·lèrgens destacats:",
    ca: "Al·lèrgens destacats:",
    en: "Highlighted allergens:",
    fr: "Allergènes indiqués :",
    de: "Hervorgehobene Allergene:"
  },
  "La gelatina es de origen bovino y no es apta para dietas vegetarianas o veganas.": {
    va: "La gelatina és d'origen boví i no és apta per a dietes vegetarianes o veganes.",
    ca: "La gelatina és d'origen boví i no és apta per a dietes vegetarianes o veganes.",
    en: "The gelatine is of bovine origin and is not suitable for vegetarian or vegan diets.",
    fr: "La gélatine est d'origine bovine et ne convient pas aux régimes végétariens ou végétaliens.",
    de: "Die Gelatine ist bovinen Ursprungs und nicht für vegetarische oder vegane Ernährungsweisen geeignet."
  },
  "Sobre RAIAN": {
    va: "Sobre RAIAN",
    ca: "Sobre RAIAN",
    en: "About RAIAN",
    fr: "À propos de RAIAN",
    de: "Über RAIAN"
  },
  "Una marca alimentaria valenciana con foco en producto, claridad y presentación.": {
    va: "Una marca alimentària valenciana centrada en producte, claredat i presentació.",
    ca: "Una marca alimentària valenciana centrada en producte, claredat i presentació.",
    en: "A Valencian food brand focused on product, clarity and presentation.",
    fr: "Une marque alimentaire valencienne axée sur le produit, la clarté et la présentation.",
    de: "Eine valencianische Lebensmittelmarke mit Fokus auf Produkt, Klarheit und Präsentation."
  },
  "Origen valenciano": {
    va: "Origen valencià",
    ca: "Origen valencià",
    en: "Valencian origin",
    fr: "Origine valencienne",
    de: "Valencianische Herkunft"
  },
  "Selección con criterio": {
    va: "Selecció amb criteri",
    ca: "Selecció amb criteri",
    en: "Thoughtful selection",
    fr: "Sélection raisonnée",
    de: "Auswahl mit System"
  },
  "Imagen coherente": {
    va: "Imatge coherent",
    ca: "Imatge coherent",
    en: "Consistent image",
    fr: "Image cohérente",
    de: "Stimmiges Erscheinungsbild"
  },
  "Información útil": {
    va: "Informació útil",
    ca: "Informació útil",
    en: "Useful information",
    fr: "Informations utiles",
    de: "Nützliche Informationen"
  },
  "Criterios de marca": {
    va: "Criteris de marca",
    ca: "Criteris de marca",
    en: "Brand criteria",
    fr: "Critères de marque",
    de: "Markenkriterien"
  },
  "La confianza se construye en los detalles.": {
    va: "La confiança es construeix en els detalls.",
    ca: "La confiança es construeix en els detalls.",
    en: "Trust is built in the details.",
    fr: "La confiance se construit dans les détails.",
    de: "Vertrauen entsteht im Detail."
  },
  "Contacto": {
    va: "Contacte",
    ca: "Contacte",
    en: "Contact",
    fr: "Contact",
    de: "Kontakt"
  },
  "Hablemos de productos, catálogo o información comercial.": {
    va: "Parlem de productes, catàleg o informació comercial.",
    ca: "Parlem de productes, catàleg o informació comercial.",
    en: "Let's talk about products, the catalogue or commercial information.",
    fr: "Parlons produits, catalogue ou informations commerciales.",
    de: "Sprechen wir über Produkte, Katalog oder kommerzielle Informationen."
  },
  "Puedes escribirnos para resolver dudas sobre una referencia, solicitar información adicional o comentar una colaboración.": {
    va: "Pots escriure'ns per a resoldre dubtes sobre una referència, sol·licitar informació addicional o comentar una col·laboració.",
    ca: "Pots escriure'ns per resoldre dubtes sobre una referència, sol·licitar informació addicional o comentar una col·laboració.",
    en: "You can write to us with questions about a product, to request more information or to discuss a collaboration.",
    fr: "Vous pouvez nous écrire pour toute question sur une référence, demander des informations complémentaires ou évoquer une collaboration.",
    de: "Sie können uns schreiben, wenn Sie Fragen zu einem Produkt haben, zusätzliche Informationen wünschen oder eine Zusammenarbeit besprechen möchten."
  },
  "Ubicación:": {
    va: "Ubicació:",
    ca: "Ubicació:",
    en: "Location:",
    fr: "Localisation :",
    de: "Standort:"
  },
  "Nombre": {
    va: "Nom",
    ca: "Nom",
    en: "Name",
    fr: "Nom",
    de: "Name"
  },
  "Asunto": {
    va: "Assumpte",
    ca: "Assumpte",
    en: "Subject",
    fr: "Objet",
    de: "Betreff"
  },
  "Mensaje": {
    va: "Missatge",
    ca: "Missatge",
    en: "Message",
    fr: "Message",
    de: "Nachricht"
  },
  "He leido y acepto la": {
    va: "He llegit i accepte la",
    ca: "He llegit i accepto la",
    en: "I have read and accept the",
    fr: "J'ai lu et j'accepte la",
    de: "Ich habe die"
  },
  "politica de privacidad": {
    va: "política de privacitat",
    ca: "política de privacitat",
    en: "privacy policy",
    fr: "politique de confidentialité",
    de: "Datenschutzerklärung gelesen und akzeptiere sie"
  },
  "Enviar mensaje": {
    va: "Enviar missatge",
    ca: "Enviar missatge",
    en: "Send message",
    fr: "Envoyer le message",
    de: "Nachricht senden"
  },
  "Descubre el catálogo RAIAN": {
    va: "Descobreix el catàleg RAIAN",
    ca: "Descobreix el catàleg RAIAN",
    en: "Discover the RAIAN catalogue",
    fr: "Découvrez le catalogue RAIAN",
    de: "Entdecken Sie den RAIAN-Katalog"
  },
  "Consulta productos seleccionados, fichas claras y vías de compra externas integradas de forma profesional.": {
    va: "Consulta productes seleccionats, fitxes clares i vies de compra externes integrades de manera professional.",
    ca: "Consulta productes seleccionats, fitxes clares i vies de compra externes integrades de manera professional.",
    en: "Explore selected products, clear product pages and external purchase options integrated professionally.",
    fr: "Consultez des produits sélectionnés, des fiches claires et des options d'achat externes intégrées de manière professionnelle.",
    de: "Entdecken Sie ausgewählte Produkte, klare Produktseiten und professionell eingebundene externe Kaufoptionen."
  },
  "RAIAN reúne productos alimenticios, recetas y contenido de apoyo para consultar antes de comprar.": {
    va: "RAIAN reuneix productes alimentaris, receptes i contingut de suport per a consultar abans de comprar.",
    ca: "RAIAN reuneix productes alimentaris, receptes i contingut de suport per consultar abans de comprar.",
    en: "RAIAN brings together food products, recipes and supporting content to review before buying.",
    fr: "RAIAN réunit des produits alimentaires, des recettes et des contenus d'accompagnement à consulter avant l'achat.",
    de: "RAIAN bündelt Lebensmittelprodukte, Rezepte und ergänzende Inhalte, die vor dem Kauf eingesehen werden können."
  },
  "Acompañamos el producto con usos, consejos y contenido práctico para que el cliente sepa cómo utilizarlo con criterio en su día a día.": {
    va: "Acompanyem el producte amb usos, consells i contingut pràctic perquè el client sàpia com utilitzar-lo amb criteri en el seu dia a dia.",
    ca: "Acompanyem el producte amb usos, consells i contingut pràctic perquè el client sàpiga com utilitzar-lo amb criteri en el seu dia a dia.",
    en: "We support each product with uses, tips and practical content so customers know how to use it thoughtfully day to day.",
    fr: "Nous accompagnons le produit avec des usages, conseils et contenus pratiques pour aider le client à l'utiliser avec discernement au quotidien.",
    de: "Wir ergänzen jedes Produkt mit Anwendungen, Tipps und praktischen Inhalten, damit Kundinnen und Kunden es im Alltag sinnvoll verwenden können."
  },
  "Cuando una referencia esté disponible en Amazon, el enlace se mostrará como una vía externa de compra clara y no intrusiva.": {
    va: "Quan una referència estiga disponible en Amazon, l'enllaç es mostrarà com una via externa de compra clara i no intrusiva.",
    ca: "Quan una referència estigui disponible a Amazon, l'enllaç es mostrarà com una via externa de compra clara i no intrusiva.",
    en: "When a product is available on Amazon, the link is shown as a clear, unobtrusive external purchase route.",
    fr: "Lorsqu'une référence est disponible sur Amazon, le lien apparaît comme une option d'achat externe claire et non intrusive.",
    de: "Wenn ein Produkt bei Amazon verfügbar ist, wird der Link als klarer, unaufdringlicher externer Kaufweg angezeigt."
  },
  "RAIAN trabaja productos alimenticios seleccionados con una idea sencilla: que el cliente entienda qué compra, perciba una marca cuidada y encuentre la información esencial sin fricción. La web acompaña esa experiencia con un catálogo claro, fichas ordenadas y contacto visible.": {
    va: "RAIAN treballa productes alimentaris seleccionats amb una idea senzilla: que el client entenga què compra, perceba una marca cuidada i trobe la informació essencial sense fricció. La web acompanya esta experiència amb un catàleg clar, fitxes ordenades i contacte visible.",
    ca: "RAIAN treballa productes alimentaris seleccionats amb una idea senzilla: que el client entengui què compra, percebi una marca cuidada i trobi la informació essencial sense fricció. La web acompanya aquesta experiència amb un catàleg clar, fitxes ordenades i contacte visible.",
    en: "RAIAN works with selected food products around a simple idea: customers should understand what they are buying, perceive a carefully presented brand and find the essential information without friction. The website supports that experience with a clear catalogue, organised product pages and visible contact routes.",
    fr: "RAIAN travaille des produits alimentaires sélectionnés autour d'une idée simple : permettre au client de comprendre ce qu'il achète, de percevoir une marque soignée et de trouver les informations essentielles sans friction. Le site accompagne cette expérience avec un catalogue clair, des fiches ordonnées et un contact visible.",
    de: "RAIAN arbeitet mit ausgewählten Lebensmittelprodukten nach einer einfachen Idee: Kundinnen und Kunden sollen verstehen, was sie kaufen, eine sorgfältig präsentierte Marke wahrnehmen und wichtige Informationen ohne Reibung finden. Die Website unterstützt dies mit einem klaren Katalog, geordneten Produktseiten und gut sichtbaren Kontaktmöglichkeiten."
  },
  "Trabajamos desde Valencia con una visión cercana al consumidor español y a sus hábitos de compra.": {
    va: "Treballem des de València amb una visió pròxima al consumidor espanyol i als seus hàbits de compra.",
    ca: "Treballem des de València amb una visió propera al consumidor espanyol i als seus hàbits de compra.",
    en: "We work from Valencia with a close understanding of Spanish consumers and their buying habits.",
    fr: "Nous travaillons depuis Valence avec une vision proche du consommateur espagnol et de ses habitudes d'achat.",
    de: "Wir arbeiten von Valencia aus mit einem nahen Verständnis für spanische Verbraucher und ihre Kaufgewohnheiten."
  },
  "El catálogo se construye con referencias alimentarias útiles, comprensibles y fáciles de presentar.": {
    va: "El catàleg es construeix amb referències alimentàries útils, comprensibles i fàcils de presentar.",
    ca: "El catàleg es construeix amb referències alimentàries útils, entenedores i fàcils de presentar.",
    en: "The catalogue is built with food products that are useful, understandable and easy to present.",
    fr: "Le catalogue se construit avec des références alimentaires utiles, compréhensibles et faciles à présenter.",
    de: "Der Katalog entsteht aus Lebensmittelprodukten, die nützlich, verständlich und gut präsentierbar sind."
  },
  "La presentación del envase y la identidad visual ayudan a que la marca resulte ordenada y reconocible.": {
    va: "La presentació de l'envàs i la identitat visual ajuden que la marca resulte ordenada i recognoscible.",
    ca: "La presentació de l'envàs i la identitat visual ajuden que la marca sigui ordenada i recognoscible.",
    en: "Packaging presentation and visual identity help the brand feel organised and recognisable.",
    fr: "La présentation de l'emballage et l'identité visuelle aident la marque à paraître ordonnée et reconnaissable.",
    de: "Verpackungspräsentation und visuelle Identität sorgen dafür, dass die Marke geordnet und wiedererkennbar wirkt."
  },
  "Cada ficha debe ayudar a entender el producto: qué es, para qué se usa y qué datos conviene revisar.": {
    va: "Cada fitxa ha d'ajudar a entendre el producte: què és, per a què s'usa i quines dades convé revisar.",
    ca: "Cada fitxa ha d'ajudar a entendre el producte: què és, per a què s'utilitza i quines dades convé revisar.",
    en: "Each page should help explain the product: what it is, what it is used for and which details should be checked.",
    fr: "Chaque fiche doit aider à comprendre le produit : ce qu'il est, à quoi il sert et quelles données il convient de vérifier.",
    de: "Jede Produktseite soll erklären, was das Produkt ist, wofür es verwendet wird und welche Angaben geprüft werden sollten."
  },
  "RAIAN debe percibirse como una marca sobria, accesible y bien organizada. Por eso cada bloque de contenido tiene una función concreta.": {
    va: "RAIAN ha de percebre's com una marca sòbria, accessible i ben organitzada. Per això cada bloc de contingut té una funció concreta.",
    ca: "RAIAN s'ha de percebre com una marca sòbria, accessible i ben organitzada. Per això cada bloc de contingut té una funció concreta.",
    en: "RAIAN should feel sober, accessible and well organised. That is why each content block has a specific role.",
    fr: "RAIAN doit être perçue comme une marque sobre, accessible et bien organisée. C'est pourquoi chaque bloc de contenu a une fonction précise.",
    de: "RAIAN soll als zurückhaltende, zugängliche und gut organisierte Marke wahrgenommen werden. Deshalb hat jeder Inhaltsblock eine klare Funktion."
  },
  "Claridad antes que exceso de información.": {
    va: "Claredat abans que excés d'informació.",
    ca: "Claredat abans que excés d'informació.",
    en: "Clarity before information overload.",
    fr: "La clarté avant l'excès d'information.",
    de: "Klarheit vor Informationsfülle."
  },
  "Presentación cuidada sin promesas exageradas.": {
    va: "Presentació cuidada sense promeses exagerades.",
    ca: "Presentació cuidada sense promeses exagerades.",
    en: "Careful presentation without exaggerated claims.",
    fr: "Une présentation soignée sans promesses exagérées.",
    de: "Sorgfältige Präsentation ohne übertriebene Versprechen."
  },
  "Compra externa integrada de forma natural.": {
    va: "Compra externa integrada de manera natural.",
    ca: "Compra externa integrada de manera natural.",
    en: "External purchase options integrated naturally.",
    fr: "Achat externe intégré naturellement.",
    de: "Externe Kaufoptionen natürlich eingebunden."
  },
  "Datos técnicos validados antes de publicarse como definitivos.": {
    va: "Dades tècniques validades abans de publicar-se com a definitives.",
    ca: "Dades tècniques validades abans de publicar-se com a definitives.",
    en: "Technical data validated before being published as final.",
    fr: "Données techniques validées avant publication définitive.",
    de: "Technische Daten werden vor der endgültigen Veröffentlichung validiert."
  },
  "Entorno RAIAN": {
    va: "Entorn RAIAN",
    ca: "Entorn RAIAN",
    en: "RAIAN environment",
    fr: "Univers RAIAN",
    de: "RAIAN-Umfeld"
  },
  "Espacios, producto y equipo con una presentación cuidada.": {
    va: "Espais, producte i equip amb una presentació cuidada.",
    ca: "Espais, producte i equip amb una presentació cuidada.",
    en: "Spaces, product and team with careful presentation.",
    fr: "Espaces, produit et équipe avec une présentation soignée.",
    de: "Räume, Produkt und Team mit sorgfältiger Präsentation."
  },
  "Instalaciones": {
    va: "Instal·lacions",
    ca: "Instal·lacions",
    en: "Facilities",
    fr: "Installations",
    de: "Einrichtungen"
  },
  "Instalaciones RAIAN preparadas para trabajo alimentario.": {
    va: "Instal·lacions RAIAN preparades per a treball alimentari.",
    ca: "Instal·lacions RAIAN preparades per a treball alimentari.",
    en: "RAIAN facilities prepared for food-related work.",
    fr: "Installations RAIAN préparées pour le travail alimentaire.",
    de: "RAIAN-Einrichtungen für die Lebensmittelarbeit."
  },
  "Packaging": {
    va: "Packaging",
    ca: "Packaging",
    en: "Packaging",
    fr: "Packaging",
    de: "Packaging"
  },
  "Equipo": {
    va: "Equip",
    ca: "Equip",
    en: "Team",
    fr: "Équipe",
    de: "Team"
  },
  "Información legal": {
    va: "Informació legal",
    ca: "Informació legal",
    en: "Legal information",
    fr: "Informations légales",
    de: "Rechtliche Informationen"
  },
  "Aviso legal": {
    va: "Avís legal",
    ca: "Avís legal",
    en: "Legal notice",
    fr: "Mentions légales",
    de: "Impressum"
  },
  "Política de privacidad": {
    va: "Política de privacitat",
    ca: "Política de privacitat",
    en: "Privacy policy",
    fr: "Politique de confidentialité",
    de: "Datenschutzerklärung"
  },
  "Política de cookies": {
    va: "Política de galetes",
    ca: "Política de galetes",
    en: "Cookie policy",
    fr: "Politique de cookies",
    de: "Cookie-Richtlinie"
  },
  "Preferencias": {
    va: "Preferències",
    ca: "Preferències",
    en: "Preferences",
    fr: "Préférences",
    de: "Einstellungen"
  },
  "Email:": {
    va: "Email:",
    ca: "Email:",
    en: "Email:",
    fr: "Email :",
    de: "E-Mail:"
  },
  "Todos (": {
    va: "Tots (",
    ca: "Tots (",
    en: "All (",
    fr: "Tous (",
    de: "Alle ("
  },
  "Todas (": {
    va: "Totes (",
    ca: "Totes (",
    en: "All (",
    fr: "Toutes (",
    de: "Alle ("
  },
  "Familiar (": {
    va: "Familiar (",
    ca: "Familiar (",
    en: "Family (",
    fr: "Familiale (",
    de: "Familienrezepte ("
  },
  "Casera (": {
    va: "Casolana (",
    ca: "Casolana (",
    en: "Homemade (",
    fr: "Maison (",
    de: "Hausgemacht ("
  },
  "Familiar": {
    va: "Familiar",
    ca: "Familiar",
    en: "Family",
    fr: "Familiale",
    de: "Familienrezepte"
  },
  "Casera": {
    va: "Casolana",
    ca: "Casolana",
    en: "Homemade",
    fr: "Maison",
    de: "Hausgemacht"
  },
  "raciones": {
    va: "racions",
    ca: "racions",
    en: "servings",
    fr: "portions",
    de: "Portionen"
  },
  "recetas encontradas con titulo, descripcion y URL propia.": {
    va: "receptes trobades amb títol, descripció i URL pròpia.",
    ca: "receptes trobades amb títol, descripció i URL pròpia.",
    en: "recipes found, each with its own title, description and URL.",
    fr: "recettes trouvées, chacune avec son titre, sa description et son URL.",
    de: "Rezepte gefunden, jeweils mit eigenem Titel, eigener Beschreibung und URL."
  },
  "Gelatina bovina neutra RAIAN 260 Bloom": {
    va: "Gelatina bovina neutra RAIAN 260 Bloom",
    ca: "Gelatina bovina neutra RAIAN 260 Bloom",
    en: "RAIAN neutral bovine gelatine 260 Bloom",
    fr: "Gélatine bovine neutre RAIAN 260 Bloom",
    de: "RAIAN neutrale Rindergelatine 260 Bloom"
  },
  "Vasitos fitness de yogur griego, frutos rojos y gelatina bovina": {
    va: "Gotets fitness de iogurt grec, fruits rojos i gelatina bovina",
    ca: "Gotets fitness de iogurt grec, fruits vermells i gelatina bovina",
    en: "Fitness cups with Greek yoghurt, red berries and bovine gelatine",
    fr: "Verrines fitness au yaourt grec, fruits rouges et gélatine bovine",
    de: "Fitness-Becher mit griechischem Joghurt, roten Beeren und Rindergelatine"
  },
  "Mousse fitness de mango y skyr con gelatina bovina": {
    va: "Mousse fitness de mango i skyr amb gelatina bovina",
    ca: "Mousse fitness de mango i skyr amb gelatina bovina",
    en: "Fitness mango and skyr mousse with bovine gelatine",
    fr: "Mousse fitness à la mangue et au skyr avec gélatine bovine",
    de: "Fitness-Mousse mit Mango, Skyr und Rindergelatine"
  },
  "Flan frío fitness de cacao y leche desnatada": {
    va: "Flam fred fitness de cacau i llet desnatada",
    ca: "Flam fred fitness de cacau i llet desnatada",
    en: "Cold fitness cocoa flan with skimmed milk",
    fr: "Flan froid fitness au cacao et lait écrémé",
    de: "Kalter Fitness-Kakaoflan mit Magermilch"
  },
  "Gelatina fitness de café con capa cremosa de skyr": {
    va: "Gelatina fitness de café amb capa cremosa de skyr",
    ca: "Gelatina fitness de cafè amb capa cremosa de skyr",
    en: "Fitness coffee jelly with a creamy skyr layer",
    fr: "Gelée fitness au café avec couche crémeuse de skyr",
    de: "Fitness-Kaffeegelee mit cremiger Skyr-Schicht"
  },
  "Tarta fría fitness de queso batido, limón y avena": {
    va: "Pastís fred fitness de formatge batut, llima i avena",
    ca: "Pastís fred fitness de formatge batut, llimona i civada",
    en: "Cold fitness cake with whipped cheese, lemon and oats",
    fr: "Gâteau froid fitness au fromage battu, citron et avoine",
    de: "Kalter Fitness-Kuchen mit Quark, Zitrone und Hafer"
  },
  "Cubos fitness de fresa y lima con gelatina bovina": {
    va: "Cubs fitness de maduixa i llima amb gelatina bovina",
    ca: "Cubs fitness de maduixa i llima amb gelatina bovina",
    en: "Fitness strawberry and lime cubes with bovine gelatine",
    fr: "Cubes fitness fraise-citron vert avec gélatine bovine",
    de: "Fitness-Würfel mit Erdbeere, Limette und Rindergelatine"
  },
  "Bavarois fitness de vainilla y queso fresco batido": {
    va: "Bavarois fitness de vainilla i formatge fresc batut",
    ca: "Bavarois fitness de vainilla i formatge fresc batut",
    en: "Fitness vanilla bavarois with whipped fresh cheese",
    fr: "Bavarois fitness à la vanille et fromage frais battu",
    de: "Fitness-Bavarois mit Vanille und cremigem Frischkäse"
  },
  "Gelatina fitness de matcha y leche de coco": {
    va: "Gelatina fitness de matcha i llet de coco",
    ca: "Gelatina fitness de matcha i llet de coco",
    en: "Fitness matcha and coconut milk jelly",
    fr: "Gelée fitness au matcha et lait de coco",
    de: "Fitness-Gelee mit Matcha und Kokosmilch"
  },
  "Pudding fitness de chía con gelatina de frutos rojos": {
    va: "Púding fitness de xia amb gelatina de fruits rojos",
    ca: "Púding fitness de chia amb gelatina de fruits vermells",
    en: "Fitness chia pudding with red berry jelly",
    fr: "Pudding fitness au chia avec gelée de fruits rouges",
    de: "Fitness-Chia-Pudding mit rotem Beerengelee"
  },
  "Barritas frías fitness de yogur, avena y cacao": {
    va: "Barretes fredes fitness de iogurt, avena i cacau",
    ca: "Barretes fredes fitness de iogurt, civada i cacau",
    en: "Cold fitness bars with yoghurt, oats and cocoa",
    fr: "Barres froides fitness au yaourt, avoine et cacao",
    de: "Kalte Fitness-Riegel mit Joghurt, Hafer und Kakao"
  },
  "Panna cotta premium de vainilla y coulis de frambuesa": {
    va: "Panna cotta premium de vainilla i coulis de gerds",
    ca: "Panna cotta premium de vainilla i coulis de gerds",
    en: "Premium vanilla panna cotta with raspberry coulis",
    fr: "Panna cotta premium à la vanille et coulis de framboise",
    de: "Premium-Panna-cotta mit Vanille und Himbeercoulis"
  },
  "Cheesecake premium de mango y maracuyá sin horno": {
    va: "Cheesecake premium de mango i maracuià sense forn",
    ca: "Cheesecake premium de mango i maracujà sense forn",
    en: "No-bake premium mango and passion fruit cheesecake",
    fr: "Cheesecake premium sans cuisson mangue et fruit de la passion",
    de: "Premium-Cheesecake ohne Backen mit Mango und Maracuja"
  },
  "Terrina premium de frutos rojos e hibisco": {
    va: "Terrina premium de fruits rojos i hibisc",
    ca: "Terrina premium de fruits vermells i hibisc",
    en: "Premium red berry and hibiscus terrine",
    fr: "Terrine premium aux fruits rouges et hibiscus",
    de: "Premium-Terrine mit roten Beeren und Hibiskus"
  },
  "Panna cotta premium de coco y chocolate blanco": {
    va: "Panna cotta premium de coco i xocolate blanc",
    ca: "Panna cotta premium de coco i xocolata blanca",
    en: "Premium coconut and white chocolate panna cotta",
    fr: "Panna cotta premium coco et chocolat blanc",
    de: "Premium-Panna-cotta mit Kokos und weißer Schokolade"
  },
  "Bavarois premium de pistacho con base de almendra": {
    va: "Bavarois premium de pistatxo amb base d'ametla",
    ca: "Bavarois premium de festuc amb base d'ametlla",
    en: "Premium pistachio bavarois with an almond base",
    fr: "Bavarois premium à la pistache sur base d'amande",
    de: "Premium-Pistazien-Bavarois auf Mandelboden"
  },
  "Tarta mousse premium de limón y merengue sin horno": {
    va: "Pastís mousse premium de llima i merenga sense forn",
    ca: "Pastís mousse premium de llimona i merenga sense forn",
    en: "No-bake premium lemon and meringue mousse cake",
    fr: "Gâteau mousse premium citron-meringue sans cuisson",
    de: "Premium-Zitronen-Baiser-Mousse-Kuchen ohne Backen"
  },
  "Gelatina premium de manzana asada, vainilla y canela": {
    va: "Gelatina premium de poma torrada, vainilla i canella",
    ca: "Gelatina premium de poma al forn, vainilla i canyella",
    en: "Premium baked apple, vanilla and cinnamon jelly",
    fr: "Gelée premium pomme rôtie, vanille et cannelle",
    de: "Premium-Gelee mit Bratapfel, Vanille und Zimt"
  },
  "Mousse premium de café y mascarpone con gelatina bovina": {
    va: "Mousse premium de café i mascarpone amb gelatina bovina",
    ca: "Mousse premium de cafè i mascarpone amb gelatina bovina",
    en: "Premium coffee and mascarpone mousse with bovine gelatine",
    fr: "Mousse premium café-mascarpone avec gélatine bovine",
    de: "Premium-Mousse mit Kaffee, Mascarpone und Rindergelatine"
  },
  "Terrina premium salada de pollo y verduras en gelatina": {
    va: "Terrina premium salada de pollastre i verdures en gelatina",
    ca: "Terrina premium salada de pollastre i verdures en gelatina",
    en: "Premium savoury chicken and vegetable terrine in jelly",
    fr: "Terrine premium salée de poulet et légumes en gelée",
    de: "Premium herzhafte Terrine mit Hähnchen und Gemüse in Gelee"
  },
  "Flan premium de queso crema y caramelo salado": {
    va: "Flam premium de formatge crema i caramel salat",
    ca: "Flam premium de formatge crema i caramel salat",
    en: "Premium cream cheese flan with salted caramel",
    fr: "Flan premium au fromage frais et caramel salé",
    de: "Premium-Flan mit Frischkäse und Salzkaramell"
  },
  "Gelatina familiar de naranja natural": {
    va: "Gelatina familiar de taronja natural",
    ca: "Gelatina familiar de taronja natural",
    en: "Family-style fresh orange jelly",
    fr: "Gelée familiale à l'orange naturelle",
    de: "Familien-Gelee mit frischer Orange"
  },
  "Gelatina mosaico familiar con crema de leche": {
    va: "Gelatina mosaic familiar amb crema de llet",
    ca: "Gelatina mosaic familiar amb crema de llet",
    en: "Family mosaic jelly with milk cream",
    fr: "Gelée mosaïque familiale à la crème de lait",
    de: "Familien-Mosaikgelee mit Milchcreme"
  },
  "Tarta familiar fría de queso y fresa": {
    va: "Pastís familiar fred de formatge i maduixa",
    ca: "Pastís familiar fred de formatge i maduixa",
    en: "Cold family-style cheese and strawberry cake",
    fr: "Gâteau familial froid au fromage et à la fraise",
    de: "Kalter Familienkuchen mit Käsecreme und Erdbeere"
  },
  "Gominolas familiares de fresa natural": {
    va: "Gominoles familiars de maduixa natural",
    ca: "Gominoles familiars de maduixa natural",
    en: "Family-style natural strawberry gummies",
    fr: "Bonbons gélifiés familiaux à la fraise naturelle",
    de: "Familien-Gummis mit natürlicher Erdbeere"
  },
  "Vasitos familiares de yogur y melocotón": {
    va: "Gotets familiars de iogurt i bresquilla",
    ca: "Gotets familiars de iogurt i préssec",
    en: "Family yoghurt and peach cups",
    fr: "Verrines familiales au yaourt et à la pêche",
    de: "Familien-Becher mit Joghurt und Pfirsich"
  },
  "Flan familiar de leche y vainilla sin horno": {
    va: "Flam familiar de llet i vainilla sense forn",
    ca: "Flam familiar de llet i vainilla sense forn",
    en: "No-bake family milk and vanilla flan",
    fr: "Flan familial lait-vanille sans cuisson",
    de: "Familien-Flan mit Milch und Vanille ohne Backen"
  },
  "Gelatina familiar de limón con frutas": {
    va: "Gelatina familiar de llima amb fruita",
    ca: "Gelatina familiar de llimona amb fruites",
    en: "Family lemon jelly with fruit",
    fr: "Gelée familiale au citron avec fruits",
    de: "Familien-Zitronengelee mit Früchten"
  },
  "Mousse familiar de chocolate suave": {
    va: "Mousse familiar de xocolate suau",
    ca: "Mousse familiar de xocolata suau",
    en: "Family-style mild chocolate mousse",
    fr: "Mousse familiale au chocolat doux",
    de: "Familien-Mousse mit mildem Schokoladengeschmack"
  },
  "Tarta familiar de galleta, nata y gelatina de cacao": {
    va: "Pastís familiar de galeta, nata i gelatina de cacau",
    ca: "Pastís familiar de galeta, nata i gelatina de cacau",
    en: "Family biscuit, cream and cocoa jelly cake",
    fr: "Gâteau familial biscuit, crème et gelée de cacao",
    de: "Familienkuchen mit Keks, Sahne und Kakaogelee"
  },
  "Terrina familiar dulce de frutas variadas": {
    va: "Terrina familiar dolça de fruites variades",
    ca: "Terrina familiar dolça de fruites variades",
    en: "Sweet family terrine with assorted fruit",
    fr: "Terrine familiale sucrée aux fruits variés",
    de: "Süße Familien-Terrine mit verschiedenen Früchten"
  },
  "Gelatina casera de leche merengada": {
    va: "Gelatina casolana de llet merengada",
    ca: "Gelatina casolana de llet merengada",
    en: "Homemade meringue milk jelly",
    fr: "Gelée maison au lait meringué",
    de: "Hausgemachtes Gelee mit Baiser-Milch"
  },
  "Panna cotta casera de canela y naranja": {
    va: "Panna cotta casolana de canella i taronja",
    ca: "Panna cotta casolana de canyella i taronja",
    en: "Homemade cinnamon and orange panna cotta",
    fr: "Panna cotta maison cannelle-orange",
    de: "Hausgemachte Panna cotta mit Zimt und Orange"
  },
  "Crema casera de arroz con leche gelificada": {
    va: "Crema casolana d'arròs amb llet gelificada",
    ca: "Crema casolana d'arròs amb llet gelificada",
    en: "Homemade set rice pudding cream",
    fr: "Crème maison de riz au lait gélifiée",
    de: "Hausgemachte gelierte Milchreiscreme"
  },
  "Postre casero de membrillo y queso fresco": {
    va: "Postre casolà de codonyat i formatge fresc",
    ca: "Postres casolanes de codonyat i formatge fresc",
    en: "Homemade quince paste and fresh cheese dessert",
    fr: "Dessert maison au coing et fromage frais",
    de: "Hausgemachtes Dessert mit Quittenpaste und Frischkäse"
  },
  "Flan casero frío de café con leche": {
    va: "Flam casolà fred de café amb llet",
    ca: "Flam casolà fred de cafè amb llet",
    en: "Cold homemade coffee-with-milk flan",
    fr: "Flan maison froid au café au lait",
    de: "Kalter hausgemachter Milchkaffee-Flan"
  },
  "Tarta casera de yogur y limón sin horno": {
    va: "Pastís casolà de iogurt i llima sense forn",
    ca: "Pastís casolà de iogurt i llimona sense forn",
    en: "No-bake homemade yoghurt and lemon cake",
    fr: "Gâteau maison yaourt-citron sans cuisson",
    de: "Hausgemachter Joghurt-Zitronen-Kuchen ohne Backen"
  },
  "Mousse casera de plátano y cacao": {
    va: "Mousse casolana de plàtan i cacau",
    ca: "Mousse casolana de plàtan i cacau",
    en: "Homemade banana and cocoa mousse",
    fr: "Mousse maison banane-cacao",
    de: "Hausgemachte Bananen-Kakao-Mousse"
  },
  "Gelatina casera de manzana asada": {
    va: "Gelatina casolana de poma torrada",
    ca: "Gelatina casolana de poma al forn",
    en: "Homemade baked apple jelly",
    fr: "Gelée maison à la pomme rôtie",
    de: "Hausgemachtes Bratapfelgelee"
  },
  "Postre casero de nata y fresas con gelatina bovina": {
    va: "Postre casolà de nata i maduixes amb gelatina bovina",
    ca: "Postres casolanes de nata i maduixes amb gelatina bovina",
    en: "Homemade cream and strawberry dessert with bovine gelatine",
    fr: "Dessert maison crème-fraises avec gélatine bovine",
    de: "Hausgemachtes Dessert mit Sahne, Erdbeeren und Rindergelatine"
  },
  "Terrina casera salada de pollo, zanahoria y guisantes": {
    va: "Terrina casolana salada de pollastre, carlota i pèsols",
    ca: "Terrina casolana salada de pollastre, pastanaga i pèsols",
    en: "Homemade savoury terrine with chicken, carrot and peas",
    fr: "Terrine maison salée poulet, carotte et petits pois",
    de: "Hausgemachte herzhafte Terrine mit Hähnchen, Karotte und Erbsen"
  }
} satisfies Record<string, Record<TranslatedLocale, string>>;

const contextualTranslationsByLocale = Object.entries(contextualTranslations).reduce(
  (accumulator, [sourceText, translations]) => {
    (Object.keys(translations) as TranslatedLocale[]).forEach((locale) => {
      accumulator[locale][sourceText] = translations[locale];
    });

    return accumulator;
  },
  {
    va: {},
    ca: {},
    en: {},
    fr: {},
    de: {}
  } as Record<TranslatedLocale, Record<string, string>>
);

export const isLocale = (value: string | null): value is Locale =>
  Boolean(value && languages.some((language) => language.code === value));

const getDictionary = (locale: Locale): Record<string, string> | undefined =>
  locale === "es" ? undefined : { ...uiTranslations[locale], ...contextualTranslationsByLocale[locale] };

const translateKnownText = (text: string, locale: Locale) => {
  if (locale === "es") {
    return text;
  }

  const baseTranslations = uiTranslations[locale] as Record<string, string>;

  return contextualTranslationsByLocale[locale][text] ?? baseTranslations[text] ?? text;
};

const countPatterns: Array<{
  pattern: RegExp;
  render: (locale: Locale, ...matches: string[]) => string;
}> = [
  {
    pattern: /^Todos los productos \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Todos los productos (${count})`,
        va: `Tots els productes (${count})`,
        ca: `Tots els productes (${count})`,
        en: `All products (${count})`,
        fr: `Tous les produits (${count})`,
        de: `Alle Produkte (${count})`
      })[locale]
  },
  {
    pattern: /^(Gelatina neutra bovina|Gelatina neutra porcina|Harina de almendra|Dextrosa|Glucosa) \((\d+)\)$/,
    render: (locale, label, count) => `${translateKnownText(label, locale)} (${count})`
  },
  {
    pattern: /^Todos \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Todos (${count})`,
        va: `Tots (${count})`,
        ca: `Tots (${count})`,
        en: `All (${count})`,
        fr: `Tous (${count})`,
        de: `Alle (${count})`
      })[locale]
  },
  {
    pattern: /^Todas \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Todas (${count})`,
        va: `Totes (${count})`,
        ca: `Totes (${count})`,
        en: `All (${count})`,
        fr: `Toutes (${count})`,
        de: `Alle (${count})`
      })[locale]
  },
  {
    pattern: /^Fitness \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Fitness (${count})`,
        va: `Fitness (${count})`,
        ca: `Fitness (${count})`,
        en: `Fitness (${count})`,
        fr: `Fitness (${count})`,
        de: `Fitness (${count})`
      })[locale]
  },
  {
    pattern: /^Premium \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Premium (${count})`,
        va: `Premium (${count})`,
        ca: `Premium (${count})`,
        en: `Premium (${count})`,
        fr: `Premium (${count})`,
        de: `Premium (${count})`
      })[locale]
  },
  {
    pattern: /^Familiar \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Familiar (${count})`,
        va: `Familiar (${count})`,
        ca: `Familiar (${count})`,
        en: `Family (${count})`,
        fr: `Familiale (${count})`,
        de: `Familienrezepte (${count})`
      })[locale]
  },
  {
    pattern: /^Casera \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Casera (${count})`,
        va: `Casolana (${count})`,
        ca: `Casolana (${count})`,
        en: `Homemade (${count})`,
        fr: `Maison (${count})`,
        de: `Hausgemacht (${count})`
      })[locale]
  },
  {
    pattern: /^Sin lactosa \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Sin lactosa (${count})`,
        va: `Sense lactosa (${count})`,
        ca: `Sense lactosa (${count})`,
        en: `Lactose-free (${count})`,
        fr: `Sans lactose (${count})`,
        de: `Laktosefrei (${count})`
      })[locale]
  },
  {
    pattern: /^Sin gluten \((\d+)\)$/,
    render: (locale, count) =>
      ({
        es: `Sin gluten (${count})`,
        va: `Sense gluten (${count})`,
        ca: `Sense gluten (${count})`,
        en: `Gluten-free (${count})`,
        fr: `Sans gluten (${count})`,
        de: `Glutenfrei (${count})`
      })[locale]
  },
  {
    pattern: /^© (\d{4}) RAIAN\. Catálogo alimentario\.$/,
    render: (locale, year) =>
      ({
        es: `© ${year} RAIAN. Catálogo alimentario.`,
        va: `© ${year} RAIAN. Catàleg alimentari.`,
        ca: `© ${year} RAIAN. Catàleg alimentari.`,
        en: `© ${year} RAIAN. Food catalogue.`,
        fr: `© ${year} RAIAN. Catalogue alimentaire.`,
        de: `© ${year} RAIAN. Lebensmittelkatalog.`
      })[locale]
  },
  {
    pattern: /^(\d+) raciones$/,
    render: (locale, count) =>
      ({
        es: `${count} raciones`,
        va: `${count} racions`,
        ca: `${count} racions`,
        en: `${count} servings`,
        fr: `${count} portions`,
        de: `${count} Portionen`
      })[locale]
  },
  {
    pattern: /^(\d+) recetas encontradas con titulo, descripcion y URL propia\.?$/,
    render: (locale, count) =>
      ({
        es: `${count} recetas encontradas con titulo, descripcion y URL propia.`,
        va: `${count} receptes trobades amb títol, descripció i URL pròpia.`,
        ca: `${count} receptes trobades amb títol, descripció i URL pròpia.`,
        en: `${count} recipes found, each with its own title, description and URL.`,
        fr: `${count} recettes trouvées, chacune avec son titre, sa description et son URL.`,
        de: `${count} Rezepte gefunden, jeweils mit eigenem Titel, eigener Beschreibung und URL.`
      })[locale]
  },
  {
    pattern: /^([\d,.]+) · 1 valoracion$/,
    render: (locale, average) =>
      ({
        es: `${average} · 1 valoracion`,
        va: `${average} · 1 valoració`,
        ca: `${average} · 1 valoració`,
        en: `${average} · 1 rating`,
        fr: `${average} · 1 avis`,
        de: `${average} · 1 Bewertung`
      })[locale]
  },
  {
    pattern: /^([\d,.]+) · (\d+) valoraciones$/,
    render: (locale, average, count) =>
      ({
        es: `${average} · ${count} valoraciones`,
        va: `${average} · ${count} valoracions`,
        ca: `${average} · ${count} valoracions`,
        en: `${average} · ${count} ratings`,
        fr: `${average} · ${count} avis`,
        de: `${average} · ${count} Bewertungen`
      })[locale]
  },
  {
    pattern: /^Receta de (.+) con gelatina bovina neutra: ingredientes en gramos, raciones, tiempos, alérgenos y tabla nutricional estimada\.$/,
    render: (locale, title) => {
      const translatedTitle = translateKnownText(title, locale);

      return {
        es: `Receta de ${translatedTitle} con gelatina bovina neutra: ingredientes en gramos, raciones, tiempos, alérgenos y tabla nutricional estimada.`,
        va: `Recepta de ${translatedTitle} amb gelatina bovina neutra: ingredients en grams, racions, temps, al·lèrgens i taula nutricional estimada.`,
        ca: `Recepta de ${translatedTitle} amb gelatina bovina neutra: ingredients en grams, racions, temps, al·lèrgens i taula nutricional estimada.`,
        en: `Recipe for ${translatedTitle} using neutral bovine gelatine: gram-based ingredients, servings, timings, allergens and an estimated nutrition table.`,
        fr: `Recette de ${translatedTitle} avec gélatine bovine neutre : ingrédients en grammes, portions, temps, allergènes et tableau nutritionnel estimé.`,
        de: `Rezept für ${translatedTitle} mit neutraler Rindergelatine: Zutaten in Gramm, Portionen, Zeiten, Allergene und geschätzte Nährwerttabelle.`
      }[locale];
    }
  },
  {
    pattern: /^1 producto encontrado$/,
    render: (locale) =>
      ({
        es: "1 producto encontrado",
        va: "1 producte trobat",
        ca: "1 producte trobat",
        en: "1 product found",
        fr: "1 produit trouvé",
        de: "1 Produkt gefunden"
      })[locale]
  },
  {
    pattern: /^(\d+) productos encontrados$/,
    render: (locale, count) =>
      ({
        es: `${count} productos encontrados`,
        va: `${count} productes trobats`,
        ca: `${count} productes trobats`,
        en: `${count} products found`,
        fr: `${count} produits trouvés`,
        de: `${count} Produkte gefunden`
      })[locale]
  },
  {
    pattern: /^(\d+) recetas encontradas con titulo, descripcion y URL propia\.$/,
    render: (locale, count) =>
      ({
        es: `${count} recetas encontradas con titulo, descripcion y URL propia.`,
        va: `${count} receptes trobades amb títol, descripció i URL pròpia.`,
        ca: `${count} receptes trobades amb títol, descripció i URL pròpia.`,
        en: `${count} recipes found, each with its own title, description and URL.`,
        fr: `${count} recettes trouvées, chacune avec son titre, sa description et son URL.`,
        de: `${count} Rezepte gefunden, jeweils mit eigenem Titel, eigener Beschreibung und URL.`
      })[locale]
  },
  {
    pattern: /^(\d+) valoraciones$/,
    render: (locale, count) =>
      ({
        es: `${count} valoraciones`,
        va: `${count} valoracions`,
        ca: `${count} valoracions`,
        en: `${count} ratings`,
        fr: `${count} avis`,
        de: `${count} Bewertungen`
      })[locale]
  }
];

export const translateText = (text: string, locale: Locale) => {
  if (locale === "es") {
    return text;
  }

  const dictionary = getDictionary(locale);
  const leadingWhitespace = text.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = text.match(/\s*$/)?.[0] ?? "";
  const normalizedText = text.trim().replace(/\s+/g, " ");

  if (!normalizedText) {
    return text;
  }

  const directTranslation = dictionary?.[normalizedText];

  if (directTranslation) {
    return `${leadingWhitespace}${directTranslation}${trailingWhitespace}`;
  }

  for (const { pattern, render } of countPatterns) {
    const match = normalizedText.match(pattern);

    if (match) {
      return `${leadingWhitespace}${render(locale, ...match.slice(1))}${trailingWhitespace}`;
    }
  }

  return text;
};

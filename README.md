# RAIAN Foods

Web corporativa y catalogo de productos alimentarios para RAIAN Foods, desarrollada con Next.js, TypeScript y Tailwind CSS.

## Estructura principal

```text
app/                         Rutas de la web
components/                  Componentes reutilizables de interfaz
data/products.ts             Catalogo editable de productos
data/recipes.ts              Recetas y usos practicos editables
data/site.ts                 Configuracion general, SEO y datos pendientes
public/images/placeholders/  Placeholders temporales
public/images/brand/         Imagenes reales de marca pendientes
public/images/products/      Imagenes reales de producto pendientes
```

## Instalar y ejecutar

```bash
npm install
npm run dev
```

Despues, abre `http://localhost:3000`.

Comandos utiles:

```bash
npm run lint
npm run build
```

## Campos pendientes

- Dominio final: `foods.raian.es`.
- Email visible de contacto: `ventas@raian.com`.
- Enlaces de Amazon por producto.
- ASIN, EAN, lote, formato, peso neto, pais de origen y otros datos tecnicos.
- Valores nutricionales reales por 100 g.
- Datos legales: razon social, CIF/NIF, domicilio, responsable del tratamiento y email legal.
- Conservacion de datos y destinatarios en privacidad.
- Imagenes reales de instalaciones, packaging, equipo y productos.
- Decision sobre cookies analiticas y herramienta concreta, si se activa.
- Backend real para el formulario de contacto.

## Como anadir un producto

1. Abre `data/products.ts`.
2. Duplica una entrada del array `products`.
3. Cambia `slug`, `name`, `shortDescription`, `category`, `tags`, `uses`, `howToUse`, `technicalSheet` y `nutrition`.
4. Si ya existe listing, anade `amazonUrl` y `amazonAsin`.
5. Coloca las imagenes reales en `public/images/products/` y marca `mainImage.available` como `true`.

La pagina `/productos/[slug]` se genera automaticamente a partir de ese archivo.

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    return [
      {
        // Imágenes, vídeos y documentos públicos — caché agresivo (1 año)
        source: "/:path*\\.(webp|avif|png|jpg|jpeg|svg|mp4|pdf|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      },
      {
        // Páginas estáticas de producto, receta y guía — 1h en CDN, 24h stale
        source: "/(productos|recetas|guias)/:slug*",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" }
        ]
      },
      {
        // Robots y sitemap — 1 día en CDN
        source: "/(robots.txt|sitemap.xml)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=604800" }
        ]
      }
    ];
  }
};

export default nextConfig;

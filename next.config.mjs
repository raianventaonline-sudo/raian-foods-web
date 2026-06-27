/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  outputFileTracingExcludes: {
    "*": ["public/images/recipes/**/*"]
  }
};

export default nextConfig;

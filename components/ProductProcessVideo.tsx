import { SectionTitle } from "@/components/SectionTitle";

type ProductProcessVideoProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ProductProcessVideo({
  eyebrow = "Nuestro proceso",
  title = "Así preparamos cada lote, paso a paso.",
  description = "Un vistazo real a la preparación de producto en nuestras instalaciones, con el mismo cuidado que ponemos en cada ficha y cada envase."
}: ProductProcessVideoProps) {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-[1fr_0.8fr] md:px-8">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="raian-media mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-line bg-black shadow-sm">
          <video
            src="/videos/sobre-nosotros-proceso.mp4"
            poster="/videos/sobre-nosotros-proceso-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full object-cover"
          >
            Tu navegador no admite la reproducción de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}

import collage from "@/assets/collage-treats.png";

const valores = [
  {
    title: "Artesanalidad",
    description:
      "Compromiso con el valor de lo hecho a mano, respetando los tiempos y procesos naturales de cada producto.",
  },
  {
    title: "Transparencia y Honestidad",
    description:
      "Enfoque en la entrega de productos frescos, garantizando que la experiencia física del cliente coincida plenamente con la oferta visual de la plataforma digital.",
  },
  {
    title: "Calidad Premium",
    description:
      "Selección rigurosa de materias primas para asegurar un sabor superior en cada bocado.",
  },
  {
    title: "Pasión por el Detalle",
    description:
      "Cuidado minucioso desde la elaboración en cocina hasta la presentación del empaque, con el fin de entregar un producto excepcional.",
  },
];

const Valores = () => {
  return (
    <section id="valores" className="py-12 bg-background">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden shadow-card-warm">
          <img
            src={collage}
            alt="Collage de postres artesanales"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
          <div className="relative p-8 md:p-16">
            <h2 className="font-serif italic text-5xl md:text-7xl font-bold text-cocoa text-center mb-8 md:mb-12 tracking-wide">
              Nuestros Valores
            </h2>
            <ul className="max-w-3xl mx-auto space-y-4 text-cocoa text-base md:text-lg leading-relaxed">
              {valores.map((v) => (
                <li key={v.title} className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>
                    <span className="font-bold">{v.title}:</span> {v.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valores;

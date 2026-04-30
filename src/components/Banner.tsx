import banner from "@/assets/banner-treats.png";

const Banner = () => {
  return (
    <section id="mision-vision" className="py-12 bg-background">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden shadow-card-warm">
          <img
            src={banner}
            alt="Postres artesanales: bolitas de maní y tartaletas de frutas"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 grid grid-cols-2 gap-6 md:gap-12 p-6 md:p-16">
            <div className="flex flex-col justify-center text-cocoa">
              <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                MISIÓN
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-justify max-w-md">
                Endulzar los momentos especiales de los clientes a través de
                postres artesanales que resaltan el sabor tradicional,
                garantizando calidad, frescura y una experiencia de compra
                digital cercana y eficiente.
              </p>
            </div>
            <div className="flex flex-col justify-center text-cocoa">
              <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                VISIÓN
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-justify max-w-md">
                Convertirse en el emprendimiento digital líder en repostería
                tradicional a nivel regional, siendo reconocidos por la
                excelencia de sus mini postres y por innovar en la forma de
                llevar dulces artesanales directamente a la puerta de cada
                hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

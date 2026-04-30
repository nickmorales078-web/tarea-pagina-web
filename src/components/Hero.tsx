import logo from "@/assets/logo.jpg";
import hero from "@/assets/hero-tarts.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cocoa text-primary-foreground">
      {/* Decorative organic shapes */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative grid md:grid-cols-2 gap-10 items-center py-20 md:py-28">
        <div className="animate-fade-up">
          <img
            src={logo}
            alt="Logo Guatemala TREATS"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-warm ring-4 ring-accent/20 mb-8"
          />
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
            PEQUEÑOS<br />
            <span className="italic text-accent">detalles,</span><br />
            GRANDES<br />
            <span className="italic text-accent">sabores.</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground shadow-card-warm hover:scale-105 transition-smooth"
            >
              Ver productos
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 -m-6 rounded-full bg-primary/20 blur-3xl" />
          <img
            src={hero}
            alt="Tartaletas artesanales con frutas frescas"
            className="relative w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

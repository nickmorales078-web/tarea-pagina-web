const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container grid md:grid-cols-2 gap-16">
        <div className="animate-fade-up">
          <p className="uppercase tracking-[0.3em] text-xs text-primary mb-3">
            Misión
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            Endulzamos los <em className="text-primary">momentos</em> que
            importan.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Endulzar los momentos especiales de nuestros clientes a través de
            postres artesanales que resaltan el sabor tradicional, garantizando
            calidad, frescura y una experiencia de compra digital cercana y
            eficiente.
          </p>
        </div>

        <div className="relative animate-fade-up md:mt-12" style={{ animationDelay: "0.15s" }}>
          <div className="bg-accent rounded-3xl p-10 shadow-soft border border-border">
            <p className="uppercase tracking-[0.3em] text-xs text-primary mb-3">
              Visión
            </p>
            <h3 className="font-serif text-3xl font-bold text-secondary mb-4">
              Líderes en repostería <em className="text-primary">tradicional</em>.
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Convertirnos en el emprendimiento digital líder en repostería
              tradicional a nivel regional, reconocidos por la excelencia de
              nuestros mini postres y por innovar en la forma de llevar dulces
              artesanales directamente a la puerta de cada hogar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

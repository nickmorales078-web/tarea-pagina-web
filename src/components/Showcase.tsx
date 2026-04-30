import showcase from "@/assets/showcase-treats.png";

const Showcase = () => {
  return (
    <section id="contacto-showcase" className="py-20 bg-background">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden shadow-card-warm">
          <img
            src={showcase}
            alt="Variedad de postres artesanales: galletas, bolitas de coco, mazapán, tartaletas de frutas"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-cocoa tracking-wide border-2 border-secondary/60 rounded-md px-6 py-3 inline-block bg-background/40 backdrop-blur-sm">
                NUESTROS POSTRES
              </h2>
              <p className="mt-6 font-serif font-bold text-cocoa text-xl md:text-3xl leading-tight">
                PEQUEÑOS DETALLES
                <br />
                GRANDES SABORES
              </p>
              <div className="mt-6 inline-flex flex-col items-center gap-2 rounded-2xl bg-primary/90 px-6 py-4 shadow-card-warm">
                <p className="text-xs font-bold tracking-widest text-primary-foreground">CONTACTO</p>
                <div className="flex items-center gap-5 text-primary-foreground text-sm font-medium">
                  <a href="https://instagram.com/gtreats" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    @gtreats
                  </a>
                  <a href="tel:00920000" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    00920000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

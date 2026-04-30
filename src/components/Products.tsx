import { useState } from "react";
import p1 from "@/assets/prod-1.jpg";
import p2 from "@/assets/prod-2.jpg";
import p3 from "@/assets/prod-3.jpg";
import p4 from "@/assets/prod-4.jpg";
import p5 from "@/assets/prod-5.jpg";
import p6 from "@/assets/prod-6.jpg";
import p7 from "@/assets/prod-7.jpg";

const products = [
  { img: p4, name: "Tartaletas de frutas", price: "Q25", desc: "Masa quebrada rellena de crema y frutas frescas de temporada." },
  { img: p2, name: "Galletas surtidas", price: "Q22", desc: "Mix de galletas con chips, granillo y rellenos artesanales." },
  { img: p3, name: "Mini cupcakes", price: "Q35", desc: "Bocados esponjosos con buttercream de vainilla y chocolate." },
  { img: p1, name: "Bolitas de coco", price: "Q15", desc: "Suaves bombones cubiertos de coco rallado, tradicionales y dulces." },
  { img: p5, name: "Cereal de colores", price: "Q18", desc: "Crocante, dulce y festivo, perfecto para compartir." },
  { img: p6, name: "Champurradas finas", price: "Q20", desc: "Hojaldres clásicos en formas tradicionales, recién horneadas." },
  { img: p7, name: "Mazapán de maní", price: "Q12", desc: "Dulce artesanal de maní molido con forma floral tradicional." },
  { img: p4, name: "Polvorosas de maní", price: "Q15", desc: "Galleta tradicional con maní tostado, suaves y aromáticas." },
];

const Products = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const toggle = (i: number) => setFlipped((prev) => (prev === i ? null : i));

  return (
    <section id="productos" className="py-24 bg-primary">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-primary-foreground/70 mb-3">
            — Catálogo —
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
            Nuestros productos
          </h2>
          <p className="mt-4 text-primary-foreground/80 italic">
            Cada pieza, hecha con dedicación y los mejores ingredientes. Toca una tarjeta para ver más.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const isFlipped = flipped === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggle(i)}
                aria-label={`Ver detalles de ${p.name}`}
                className="group [perspective:1200px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-3xl"
              >
                <div
                  className={`relative w-full h-[420px] transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front */}
                  <article className="absolute inset-0 bg-accent rounded-3xl overflow-hidden shadow-card-warm [backface-visibility:hidden] flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-105 transition-smooth duration-700"
                      />
                    </div>
                    <div className="p-6 text-center border-t border-secondary/10 flex-1 flex flex-col items-center justify-center">
                      <h3 className="font-serif text-2xl font-bold text-secondary">
                        {p.name}
                      </h3>
                      <p className="mt-4 inline-block px-4 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                        {p.price}
                      </p>
                    </div>
                  </article>

                  {/* Back */}
                  <article className="absolute inset-0 bg-accent rounded-3xl overflow-hidden shadow-card-warm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                    <div className="p-6 text-center border-t border-secondary/10 flex-1 flex flex-col items-center justify-center">
                      <h3 className="font-serif text-xl font-bold text-secondary">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </article>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

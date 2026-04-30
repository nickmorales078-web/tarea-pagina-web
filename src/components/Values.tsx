import { Sparkles, ShieldCheck, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Artesanalidad",
    desc: "Compromiso con el valor de lo hecho a mano, respetando los tiempos y procesos naturales de cada producto.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia y Honestidad",
    desc: "Productos frescos garantizados; lo que ves en la plataforma es exactamente lo que llega a tu puerta.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    desc: "Selección rigurosa de materias primas para asegurar un sabor superior en cada bocado.",
  },
  {
    icon: Heart,
    title: "Pasión por el Detalle",
    desc: "Cuidado minucioso desde la elaboración en cocina hasta la presentación del empaque.",
  },
];

const Values = () => {
  return (
    <section id="valores" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-accent/80 mb-3">
            — Lo que nos define —
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold">
            Nuestros <em className="text-primary">valores</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 rounded-2xl bg-secondary-foreground/5 border border-accent/10 backdrop-blur-sm hover:bg-secondary-foreground/10 transition-smooth"
            >
              <div className="shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <v.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-accent/80 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

import collage from "@/assets/collage-treats.png";

const Collage = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="rounded-3xl overflow-hidden shadow-card-warm">
          <img
            src={collage}
            alt="Collage de postres: polvorosas, tartaletas de frutas, bolitas de coco y galletas"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Collage;

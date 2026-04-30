import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const links = [
    { label: "Productos", href: "#productos" },
    { label: "Sobre nosotros", href: "#mision-vision" },
    { label: "Valores", href: "#valores" },
    { label: "Contacto", href: "#contacto-showcase" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-accent/95 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between gap-6 py-3">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Guatemala TREATS"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary/20"
          />
          <div className="hidden sm:block leading-tight">
            <p className="font-serif text-lg font-bold text-secondary">
              Guatemala <span className="text-primary">TREATS</span>
            </p>
            <p className="text-[11px] italic text-muted-foreground tracking-wide">
              Pequeños detalles, grandes sabores
            </p>
          </div>
        </a>
        <nav className="hidden md:flex items-center divide-x divide-secondary/30">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-5 font-serif italic text-secondary hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="md:hidden text-sm font-medium text-secondary"
        >
          Menú
        </a>
      </div>
    </header>
  );
};

export default Navbar;

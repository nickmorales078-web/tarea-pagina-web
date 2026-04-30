import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Showcase from "@/components/Showcase";
import Banner from "@/components/Banner";
import Valores from "@/components/Valores";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <Showcase />
      <Banner />
      <Valores />
    </main>
  );
};

export default Index;

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DataVisualization } from "@/components/DataVisualization";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DataVisualization />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
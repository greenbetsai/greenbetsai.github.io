import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center gradient-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Understand Your Portfolio's Impact – Start Today
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8">
          Greenbets AI provides real-time ESG insights for eco-conscious investors
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
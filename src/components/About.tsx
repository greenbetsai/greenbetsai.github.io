import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <Card className="bg-white/80 backdrop-blur">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">
              At Greenbets AI, we're committed to empowering investors with the tools and insights 
              they need to make environmentally conscious investment decisions. Our platform 
              combines cutting-edge AI technology with comprehensive ESG data to provide 
              actionable insights for a sustainable future.
            </p>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
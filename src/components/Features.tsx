import { Brain, Globe, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered ESG Ratings",
    description: "Advanced machine learning algorithms analyze real-time market data for accurate ESG scoring",
    icon: Brain,
  },
  {
    title: "Global Coverage",
    description: "Comprehensive analysis of publicly listed companies worldwide",
    icon: Globe,
  },
  {
    title: "Real-Time Data",
    description: "Live emissions data and environmental impact metrics for informed decision-making",
    icon: Database,
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with the latest news.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter for the latest insights on sustainable investing
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        duration: 3000,
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="sauce-container bg-gradient-to-r from-sauce-red/10 to-sauce-orange/10">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-block p-3 bg-sauce-red/10 rounded-2xl mb-6">
            <Send size={24} className="text-sauce-red" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive offers, recipes, and sauce tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-full focus:border-sauce-red"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-sauce-red hover:bg-sauce-red/90 text-white rounded-full px-6 button-hover"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-gray-500 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Saucy Palace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

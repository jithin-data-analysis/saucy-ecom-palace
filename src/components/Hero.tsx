
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sauce-orange/10 to-sauce-red/10 py-12 md:py-16 lg:py-20">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-sauce-yellow/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sauce-green/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover <span className="text-sauce-red">Extraordinary</span> Flavors
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Explore our collection of handcrafted artisanal sauces that will transform your everyday meals into culinary adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-sauce-red hover:bg-sauce-red/90 text-white rounded-full px-8 py-6 text-lg button-hover"
                asChild
              >
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-sauce-red text-sauce-red hover:bg-sauce-red/10 rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] w-full">
              <div className="absolute top-8 -right-4 w-64 h-64 rounded-full bg-sauce-yellow/30 blur-md"></div>
              <div className="absolute -bottom-8 left-8 w-48 h-48 rounded-full bg-sauce-green/30 blur-md"></div>
              <div className="absolute left-12 top-12 w-32 h-32 rounded-full bg-sauce-blue/30 blur-md"></div>
              
              <div className="absolute top-0 right-0 w-56 h-72 bg-white rounded-xl shadow-xl transform rotate-6 overflow-hidden">
                <img 
                  src="/lovable-uploads/0f4ab2b1-108d-442f-9b89-b3574ef3956f.png" 
                  alt="Hot sauce bottles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/4 left-0 w-52 h-64 bg-white rounded-xl shadow-xl transform -rotate-3 overflow-hidden z-10">
                <img 
                  src="/lovable-uploads/d805f999-5eb6-499f-930b-a07bc3fb9476.png" 
                  alt="Yellow sauce bottles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-1/4 w-48 h-56 bg-white rounded-xl shadow-xl transform -rotate-12 overflow-hidden">
                <img 
                  src="/lovable-uploads/7733bd8d-dbbd-4137-a8e6-66b4ce7bfd48.png" 
                  alt="Sauce with ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
            <h3 className="font-bold text-lg text-sauce-red">100+</h3>
            <p className="text-gray-600">Unique Flavors</p>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
            <h3 className="font-bold text-lg text-sauce-orange">Organic</h3>
            <p className="text-gray-600">Ingredients</p>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
            <h3 className="font-bold text-lg text-sauce-yellow">Vegan</h3>
            <p className="text-gray-600">Options Available</p>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
            <h3 className="font-bold text-lg text-sauce-green">Free</h3>
            <p className="text-gray-600">Fast Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

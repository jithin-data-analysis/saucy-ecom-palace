
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <div className="py-16">
        <FeaturedProducts />
      </div>
      <div className="py-16 bg-gray-50">
        <CategorySection />
      </div>
      <div className="py-16">
        <TestimonialsSection />
      </div>
      <div className="py-16 bg-gray-50">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Index;

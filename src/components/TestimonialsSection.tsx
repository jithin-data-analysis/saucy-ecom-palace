
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    title: "Home Chef",
    content: "The Ghost Pepper Hot Sauce has the perfect balance of heat and flavor. It's become a staple in my kitchen for adding a kick to any dish!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "BBQ Enthusiast",
    content: "Saucy Palace's Hickory Smoke BBQ sauce transformed my backyard grilling. Rich, smoky flavor with just the right amount of sweetness.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Food Blogger",
    content: "I've tried dozens of hot sauces, and the Mango Habanero is truly exceptional. Sweet, spicy, and perfect for tacos and grilled chicken!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="sauce-container">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Join thousands of satisfied sauce enthusiasts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md sauce-card flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? "#FFD54F" : "none"}
                    className={i < testimonial.rating ? "text-sauce-yellow" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

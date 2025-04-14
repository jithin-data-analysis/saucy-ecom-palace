
import { Link } from "react-router-dom";

const categories = [
  {
    id: "hot",
    name: "Hot Sauces",
    description: "Bring the heat to any dish",
    image: "/lovable-uploads/0f4ab2b1-108d-442f-9b89-b3574ef3956f.png",
    color: "bg-sauce-red",
  },
  {
    id: "bbq",
    name: "BBQ Sauces",
    description: "Perfect for grilling and smoking",
    image: "/lovable-uploads/7733bd8d-dbbd-4137-a8e6-66b4ce7bfd48.png",
    color: "bg-sauce-orange",
  },
  {
    id: "specialty",
    name: "Specialty Sauces",
    description: "Unique flavors for every palate",
    image: "/lovable-uploads/d805f999-5eb6-499f-930b-a07bc3fb9476.png",
    color: "bg-sauce-yellow",
  },
  {
    id: "dessert",
    name: "Dessert Sauces",
    description: "Sweet additions to your treats",
    image: "/lovable-uploads/8d4e8904-644d-44e1-88d7-8fd316c46dce.png",
    color: "bg-sauce-green",
  },
];

const CategorySection = () => {
  return (
    <section className="sauce-container bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Browse By Category</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Find the perfect sauce for any dish or occasion</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="sauce-card group relative h-64 rounded-xl overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className={`w-10 h-1 ${category.color} mb-3 transition-all duration-300 group-hover:w-16`}></div>
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/90 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

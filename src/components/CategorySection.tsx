
import { Link } from "react-router-dom";

const categories = [
  {
    id: "hot",
    name: "Hot Sauces",
    description: "Bring the heat to any dish",
    image: "https://images.unsplash.com/photo-1589732225478-c3e6a425a81a?q=80&w=687&auto=format&fit=crop",
    color: "bg-sauce-red",
  },
  {
    id: "bbq",
    name: "BBQ Sauces",
    description: "Perfect for grilling and smoking",
    image: "https://images.unsplash.com/photo-1608500218890-c4f9548a4171?q=80&w=687&auto=format&fit=crop",
    color: "bg-sauce-orange",
  },
  {
    id: "specialty",
    name: "Specialty Sauces",
    description: "Unique flavors for every palate",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=687&auto=format&fit=crop",
    color: "bg-sauce-yellow",
  },
  {
    id: "gift",
    name: "Gift Sets",
    description: "Perfect presents for sauce lovers",
    image: "https://images.unsplash.com/photo-1611014056030-1a4ceac5417b?q=80&w=687&auto=format&fit=crop",
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

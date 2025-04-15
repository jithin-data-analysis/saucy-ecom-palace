import { Link } from "react-router-dom";

const categories = [
  {
    name: "Hot Sauces",
    image: "/images/Hot-Sauce2.jpg",
    description: "Spicy and flavorful hot sauces from around the world",
    color: "bg-sauce-red"
  },
  {
    name: "BBQ Sauces",
    image: "/images/bbq-sauce.webp",
    description: "Rich and smoky BBQ sauces for grilling",
    color: "bg-sauce-orange"
  },
  {
    name: "Asian Sauces",
    image: "/images/chili-fish-sauce-908355_1280.jpg",
    description: "Authentic Asian sauces and marinades",
    color: "bg-sauce-yellow"
  },
  {
    name: "Specialty Sauces",
    image: "/images/speciality sauce.jpeg",
    description: "Unique and gourmet sauce creations",
    color: "bg-sauce-green"
  }
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
              key={category.name}
              to={`/products?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
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

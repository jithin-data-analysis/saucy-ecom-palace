import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Filter, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Filter states
  const [category, setCategory] = useState<string>(queryParams.get("category") || "");
  const [spiceLevel, setSpiceLevel] = useState<[number]>([0]);
  const [priceRange, setPriceRange] = useState<[number]>([30]);
  const [inStock, setInStock] = useState<boolean>(false);
  const [onSale, setOnSale] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  
  // Mobile filter drawer state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    if (category) {
      queryParams.set("category", category);
    } else {
      queryParams.delete("category");
    }
    
    navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
  }, [category]);
  
  // Apply filters and sorting
  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (spiceLevel[0] > 0 && product.spiceLevel < spiceLevel[0]) return false;
    if (priceRange[0] < 30 && product.price > priceRange[0]) return false;
    if (inStock && product.stockQuantity <= 0) return false;
    if (onSale && !product.onSale) return false;
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return a.new === b.new ? 0 : a.new ? -1 : 1;
      case "price-asc":
        return (a.onSale ? a.salePrice! : a.price) - (b.onSale ? b.salePrice! : b.price);
      case "price-desc":
        return (b.onSale ? b.salePrice! : b.price) - (a.onSale ? a.salePrice! : a.price);
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });
  
  const clearFilters = () => {
    setCategory("");
    setSpiceLevel([0]);
    setPriceRange([30]);
    setInStock(false);
    setOnSale(false);
    setSortBy("featured");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">Explore our complete collection of premium sauces</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} className="mr-2" />
            Filters
          </Button>
        </div>
        
        {/* Sidebar Filters - Desktop always visible, mobile conditional */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-sm`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Filters</h2>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
            <button className="md:hidden" onClick={() => setIsFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {["hot", "bbq", "specialty", "gift"].map((cat) => (
                <label key={cat} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="mr-2"
                  />
                  <span className="capitalize">{cat} Sauces</span>
                </label>
              ))}
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={category === ""}
                  onChange={() => setCategory("")}
                  className="mr-2"
                />
                <span>All Categories</span>
              </label>
            </div>
          </div>
          
          {/* Spice Level Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Spice Level</h3>
            <Slider
              defaultValue={[0]}
              max={6}
              step={1}
              value={spiceLevel}
              onValueChange={setSpiceLevel}
              className="mb-2"
            />
            <div className="flex justify-between">
              <span className="text-sm">Mild</span>
              <span className="text-sm">Medium</span>
              <span className="text-sm">Hot</span>
            </div>
            <p className="text-sm mt-2">
              {spiceLevel[0] === 0 ? "All spice levels" : `Level ${spiceLevel[0]}+`}
            </p>
          </div>
          
          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <Slider
              defaultValue={[30]}
              max={30}
              step={5}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between">
              <span className="text-sm">$0</span>
              <span className="text-sm">$30</span>
            </div>
            <p className="text-sm mt-2">
              {priceRange[0] === 30 ? "All prices" : `Under $${priceRange[0]}`}
            </p>
          </div>
          
          {/* Other Filters */}
          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox
                id="in-stock"
                checked={inStock}
                onCheckedChange={(checked) => setInStock(checked as boolean)}
              />
              <label htmlFor="in-stock" className="ml-2 text-sm cursor-pointer">
                In Stock Only
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="on-sale"
                checked={onSale}
                onCheckedChange={(checked) => setOnSale(checked as boolean)}
              />
              <label htmlFor="on-sale" className="ml-2 text-sm cursor-pointer">
                On Sale
              </label>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="flex-1">
          {/* Sorting and Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <p className="text-gray-600 mb-4 sm:mb-0">
              Showing {sortedProducts.length} products
            </p>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none rounded-md border border-gray-300 px-4 py-2 pr-8 focus:border-sauce-red focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <SlidersHorizontal className="mx-auto mb-4 text-gray-400" size={40} />
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

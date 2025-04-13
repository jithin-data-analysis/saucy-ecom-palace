
import { products } from "@/data/products";
import ProductFilters from "@/components/products/ProductFilters";
import ProductSort from "@/components/products/ProductSort";
import ProductGrid from "@/components/products/ProductGrid";
import MobileFilterToggle from "@/components/products/MobileFilterToggle";
import { useProductFiltering } from "@/hooks/useProductFiltering";

const Products = () => {
  const {
    category,
    setCategory,
    spiceLevel,
    setSpiceLevel,
    priceRange, 
    setPriceRange,
    inStock,
    setInStock,
    onSale,
    setOnSale,
    sortBy,
    setSortBy,
    isFilterOpen,
    setIsFilterOpen,
    sortedProducts,
    clearFilters
  } = useProductFiltering(products);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">Explore our complete collection of premium sauces</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <MobileFilterToggle setIsFilterOpen={setIsFilterOpen} />
        
        {/* Sidebar Filters */}
        <ProductFilters
          category={category}
          setCategory={setCategory}
          spiceLevel={spiceLevel}
          setSpiceLevel={setSpiceLevel}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          inStock={inStock}
          setInStock={setInStock}
          onSale={onSale}
          setOnSale={setOnSale}
          clearFilters={clearFilters}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
        
        {/* Product Grid */}
        <div className="flex-1">
          {/* Sorting and Results Count */}
          <ProductSort 
            sortBy={sortBy} 
            setSortBy={setSortBy} 
            productCount={sortedProducts.length} 
          />
          
          {/* Product Grid */}
          <ProductGrid 
            products={sortedProducts} 
            clearFilters={clearFilters} 
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

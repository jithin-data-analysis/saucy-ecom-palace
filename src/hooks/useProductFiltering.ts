
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "@/types/product";
import { SortOption } from "@/components/products/ProductSort";

export const useProductFiltering = (products: Product[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Filter states
  const [category, setCategory] = useState<string>(queryParams.get("category") || "");
  const [spiceLevel, setSpiceLevel] = useState<number[]>([0]);
  const [priceRange, setPriceRange] = useState<number[]>([30]);
  const [inStock, setInStock] = useState<boolean>(false);
  const [onSale, setOnSale] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  
  // Mobile filter drawer state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Update URL when category changes
  useEffect(() => {
    if (category) {
      queryParams.set("category", category);
    } else {
      queryParams.delete("category");
    }
    
    navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
  }, [category, location.pathname, navigate]);
  
  // Apply filters
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
        return (a.onSale && a.salePrice ? a.salePrice : a.price) - 
               (b.onSale && b.salePrice ? b.salePrice : b.price);
      case "price-desc":
        return (b.onSale && b.salePrice ? b.salePrice : b.price) - 
               (a.onSale && a.salePrice ? a.salePrice : a.price);
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

  return {
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
  };
};

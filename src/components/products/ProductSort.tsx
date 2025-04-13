
import { ChevronDown } from "lucide-react";

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

interface ProductSortProps {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  productCount: number;
}

const ProductSort = ({ sortBy, setSortBy, productCount }: ProductSortProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <p className="text-gray-600 mb-4 sm:mb-0">
        Showing {productCount} products
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
  );
};

export default ProductSort;

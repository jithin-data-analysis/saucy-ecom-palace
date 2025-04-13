
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  clearFilters: () => void;
}

const ProductGrid = ({ products, clearFilters }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
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
  );
};

export default ProductGrid;

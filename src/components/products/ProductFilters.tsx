import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface ProductFiltersProps {
  category: string;
  setCategory: (category: string) => void;
  spiceLevel: number[];
  setSpiceLevel: (level: number[]) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  inStock: boolean;
  setInStock: (inStock: boolean) => void;
  onSale: boolean;
  setOnSale: (onSale: boolean) => void;
  clearFilters: () => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
}

const ProductFilters = ({
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
  clearFilters,
  isFilterOpen,
  setIsFilterOpen
}: ProductFiltersProps) => {
  return (
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
          max={2000}
          step={100}
          onValueChange={(value) => setPriceRange(value)}
          className="mb-2"
        />
        <div className="flex justify-between">
          <span className="text-sm">₹0</span>
          <span className="text-sm">₹2000</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          {priceRange[0] === 2000 ? "All prices" : `Under ₹${priceRange[0]}`}
        </div>
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
  );
};

export default ProductFilters;

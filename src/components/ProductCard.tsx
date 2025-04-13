
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isWishlist, setIsWishlist] = useState(false);
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast({
      title: isWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlist ? "removed from" : "added to"} your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <div className="sauce-card bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover transform transition-transform hover:scale-105"
          />
        </Link>
        <div 
          className="absolute top-3 right-3 cursor-pointer p-1 rounded-full bg-white/70 backdrop-blur-sm"
          onClick={toggleWishlist}
        >
          <Heart size={20} fill={isWishlist ? "#E53935" : "none"} className={isWishlist ? "text-sauce-red" : "text-gray-600"} />
        </div>
        {product.onSale && (
          <div className="absolute top-3 left-3 bg-sauce-red text-white py-1 px-3 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/products/${product.id}`} className="hover:text-sauce-red transition-colors">
            <h3 className="font-bold text-lg">{product.name}</h3>
          </Link>
          <div className="flex items-center">
            <Star size={16} fill="#FFD54F" className="text-sauce-yellow" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        <div className="mb-3">
          <span className="text-gray-600 text-sm">{product.category}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {product.onSale ? (
              <>
                <span className="text-sauce-red font-bold text-lg">₹{product.salePrice}</span>
                <span className="text-gray-400 line-through ml-2 text-sm">₹{product.price}</span>
              </>
            ) : (
              <span className="font-bold text-lg">₹{product.price}</span>
            )}
          </div>
          <Button 
            size="sm" 
            className="sauce-button bg-sauce-orange hover:bg-sauce-red text-white rounded-full button-hover"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

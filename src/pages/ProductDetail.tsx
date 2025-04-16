import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ShoppingCart, Heart, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <AlertCircle className="mx-auto mb-4 text-sauce-red" size={48} />
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }
  
  const incrementQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Maximum quantity reached",
        description: `Sorry, only ${product.stockQuantity} in stock.`,
        variant: "destructive",
      });
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} (${quantity}) has been added to your cart.`,
    });
  };
  
  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast({
      title: isWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlist ? "removed from" : "added to"} your wishlist.`,
    });
  };
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-sauce-red transition-colors">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to="/products" className="hover:text-sauce-red transition-colors">Products</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to={`/products?category=${product.category}`} className="capitalize hover:text-sauce-red transition-colors">
          {product.category} Sauces
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-800 font-medium truncate">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`cursor-pointer w-20 h-20 rounded-lg overflow-hidden ${
                  selectedImageIndex === index ? "ring-2 ring-sauce-red" : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? "#FFD54F" : "none"}
                      className={i < Math.floor(product.rating) ? "text-sauce-yellow" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">{product.rating}</span>
                <span className="mx-2 text-gray-300">•</span>
                <Link to="#reviews" className="text-sm text-gray-500 hover:text-sauce-red">
                  See all reviews
                </Link>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-sauce-red/10"
              onClick={toggleWishlist}
            >
              <Heart size={20} fill={isWishlist ? "#E53935" : "none"} className={isWishlist ? "text-sauce-red" : ""} />
            </Button>
          </div>
          
          <div className="flex items-baseline gap-3 mb-4">
            {product.onSale ? (
              <>
                <span className="text-3xl font-bold text-sauce-red">₹{product.salePrice}</span>
                <span className="text-xl text-gray-500 line-through">₹{product.price}</span>
              </>
            ) : (
              <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
            )}
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{product.shortDescription}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Spice Level</h3>
            <div className="flex">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-4 first:rounded-l-full last:rounded-r-full ${
                    i < product.spiceLevel
                      ? `bg-sauce-${i < 2 ? 'green' : i < 4 ? 'yellow' : 'red'}`
                      : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {product.spiceLevel <= 2
                ? "Mild"
                : product.spiceLevel <= 4
                ? "Medium"
                : "Hot"}
            </p>
          </div>
          
          <Separator className="my-6" />
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center border rounded-full">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stockQuantity}
                >
                  <Plus size={16} />
                </Button>
              </div>
              <div className="text-sm">
                <span className={product.stockQuantity > 10 ? "text-green-600" : product.stockQuantity > 0 ? "text-amber-500" : "text-red-600"}>
                  {product.stockQuantity > 10
                    ? "In Stock"
                    : product.stockQuantity > 0
                    ? `Only ${product.stockQuantity} left`
                    : "Out of Stock"}
                </span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-sauce-red hover:bg-sauce-red/90 text-white rounded-full py-6 text-lg button-hover"
              disabled={product.stockQuantity <= 0}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2" size={18} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="mb-6">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="text-gray-700">
          <h2 className="text-2xl font-bold mb-4">About {product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">
            Our sauces are crafted in small batches to ensure quality and consistency. Each bottle is carefully inspected before shipping to ensure you get only the best.
          </p>
          <p>
            Use it as a marinade, dipping sauce, or cooking ingredient to add flavor to your favorite dishes.
          </p>
        </TabsContent>
        
        <TabsContent value="ingredients">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-1">
            {product.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Allergen Information</h3>
            <p className="text-gray-700 text-sm">
              Manufactured in a facility that also processes nuts, soy, and wheat. Please check ingredients carefully if you have food allergies.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center mb-6">
            <div className="flex mr-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(product.rating) ? "#FFD54F" : "none"}
                  className={i < Math.floor(product.rating) ? "text-sauce-yellow" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-xl font-medium">{product.rating}</span>
            <span className="text-gray-500 ml-2">based on 24 reviews</span>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Jane D.</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < 5 ? "#FFD54F" : "none"}
                      className={i < 5 ? "text-sauce-yellow" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Verified Purchase</p>
              <p className="text-gray-700">
                This sauce has become a staple in our household! Perfect balance of flavor and heat.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Mark T.</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < 4 ? "#FFD54F" : "none"}
                      className={i < 4 ? "text-sauce-yellow" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Verified Purchase</p>
              <p className="text-gray-700">
                Great flavor but I would have liked it to be a bit spicier. Still, really good quality and I'll definitely buy again.
              </p>
            </div>
            
            <Button variant="outline" className="w-full">Load More Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>
      
      {relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

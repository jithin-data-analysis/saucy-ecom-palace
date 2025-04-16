import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const { toast } = useToast();
  
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };
  
  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  const handleApplyPromo = () => {
    if (!promoCode) {
      toast({
        title: "Error",
        description: "Please enter a promo code.",
        variant: "destructive",
      });
      return;
    }
    
    setIsApplyingPromo(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Invalid code",
        description: "The promo code you entered is not valid.",
        variant: "destructive",
      });
      setIsApplyingPromo(false);
    }, 1000);
  };
  
  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="mx-auto mb-6 text-gray-400" size={64} />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any sauces to your cart yet.
          </p>
          <Button asChild className="bg-sauce-red hover:bg-sauce-red/90 text-white">
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 hidden sm:grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <span className="font-medium">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium">Total</span>
              </div>
            </div>
            
            {items.map((item) => (
              <div key={item.product.id} className="py-4 px-6 border-b last:border-0">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-6">
                    <div className="flex items-center">
                      <Link to={`/products/${item.product.id}`} className="w-16 h-16 rounded-md overflow-hidden mr-4 shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div>
                        <Link to={`/products/${item.product.id}`} className="font-medium text-gray-800 hover:text-sauce-red">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 capitalize">{item.product.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 text-left sm:text-center">
                    <div className="sm:hidden text-sm text-gray-500 mb-1">Price:</div>
                    {item.product.onSale && item.product.salePrice ? (
                      <div>
                        <span className="font-medium text-sauce-red">₹{item.product.salePrice.toFixed(2)}</span>
                        <span className="text-gray-400 text-sm line-through ml-2">₹{item.product.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span className="font-medium">₹{item.product.price.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <div className="sm:col-span-2 text-left sm:text-center">
                    <div className="sm:hidden text-sm text-gray-500 mb-1">Quantity:</div>
                    <div className="flex items-center sm:justify-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="mx-3 w-6 text-center">{item.quantity}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stockQuantity}
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 flex items-center justify-between sm:justify-end">
                    <div className="sm:hidden text-sm text-gray-500">Total:</div>
                    <div className="flex items-center">
                      <span className="font-medium">
                        ₹
                        {(
                          item.quantity *
                          (item.product.onSale && item.product.salePrice
                            ? item.product.salePrice
                            : item.product.price)
                        ).toFixed(2)}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="ml-2 text-gray-400 hover:text-sauce-red"
                        onClick={() => handleRemove(item.product.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="p-6 bg-gray-50 flex justify-between items-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="text-sauce-green"
                asChild
              >
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">₹{tax.toFixed(2)}</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            {/* Promo Code */}
            <div className="mb-4">
              <div className="mb-2 text-sm font-medium">Promo Code</div>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="secondary"
                  disabled={isApplyingPromo}
                  onClick={handleApplyPromo}
                >
                  Apply
                </Button>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold">Total</span>
              <span className="font-bold text-xl">₹{finalTotal.toFixed(2)}</span>
            </div>
            
            <Button 
              className="w-full bg-sauce-red hover:bg-sauce-red/90 text-white py-6 rounded-full"
              onClick={handleCheckout}
            >
              Checkout <ArrowRight size={16} className="ml-2" />
            </Button>
            
            <div className="mt-4">
              <p className="text-xs text-gray-500 text-center">
                Secure checkout powered by our payment processor. Your data is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const OrderConfirmation = () => {
  // Normally these would come from the server after processing an order
  const orderNumber = "SPC-" + Math.floor(10000 + Math.random() * 90000);
  const orderDate = new Date().toLocaleDateString("en-US", { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="bg-sauce-green/10 p-4 rounded-full mb-6">
          <CheckCircle size={48} className="text-sauce-green" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        <div className="bg-gray-50 px-6 py-4 rounded-xl mb-6 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="font-bold">{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="font-medium">{orderDate}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="font-bold text-lg mb-4">What happens next?</h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4 bg-sauce-orange/10 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <span className="font-bold text-sauce-orange">1</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Order Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive an email confirmation with your order details.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-sauce-red/10 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <span className="font-bold text-sauce-red">2</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Order Processing</h3>
                <p className="text-gray-600 text-sm">
                  Our team will prepare your order for shipment within 1-2 business days.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-sauce-green/10 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <span className="font-bold text-sauce-green">3</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Shipping</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive tracking information once your order ships.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="bg-gray-50 p-6">
          <div className="flex items-center">
            <Package className="text-sauce-blue mr-3" />
            <div>
              <h3 className="font-medium">Estimated Delivery</h3>
              <p className="text-sm text-gray-600">
                Your order should arrive within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Questions about your order? Contact our customer service team at <a href="mailto:support@saucypalace.com" className="text-sauce-red hover:underline">support@saucypalace.com</a>
        </p>
        
        <Button asChild className="bg-sauce-red hover:bg-sauce-red/90 text-white rounded-full px-8 py-6 mb-3 button-hover">
          <Link to="/">
            Continue Shopping <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;

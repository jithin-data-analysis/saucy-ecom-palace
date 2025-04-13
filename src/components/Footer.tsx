
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-sauce"></div>
              <span className="text-xl font-bold text-sauce-red">Saucy Palace</span>
            </Link>
            <p className="text-gray-600 mb-4">Spice up your culinary journey with our premium sauces. From mild to wild, we've got your flavor covered.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sauce-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-sauce-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-sauce-yellow transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-sauce-green transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-sauce-red transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-sauce-orange transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-sauce-green transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sauce-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=hot" className="text-gray-600 hover:text-sauce-red transition-colors">Hot Sauces</Link></li>
              <li><Link to="/products?category=bbq" className="text-gray-600 hover:text-sauce-orange transition-colors">BBQ Sauces</Link></li>
              <li><Link to="/products?category=specialty" className="text-gray-600 hover:text-sauce-green transition-colors">Specialty Sauces</Link></li>
              <li><Link to="/products?category=gift" className="text-gray-600 hover:text-sauce-blue transition-colors">Gift Sets</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-600">
              <p>123 Flavor Street</p>
              <p>Sauce City, SC 28990</p>
              <p className="mt-2">Email: hello@saucypalace.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Saucy Palace. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-sauce-red transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-sauce-orange transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="text-gray-500 text-sm hover:text-sauce-green transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

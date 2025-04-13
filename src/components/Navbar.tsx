
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-sauce animate-wiggle"></div>
            <span className="text-2xl font-bold text-sauce-red">Saucy Palace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-sauce-red transition-colors">Home</Link>
            <Link to="/products" className="font-medium text-gray-700 hover:text-sauce-orange transition-colors">Shop</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-sauce-green transition-colors">About</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-sauce-blue transition-colors">Contact</Link>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input type="text" placeholder="Search sauces..." className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-sauce-red focus:ring-0" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Link to="/cart">
              <Button variant="outline" className="rounded-full p-2 relative button-hover">
                <ShoppingCart />
                <span className="absolute -top-2 -right-2 bg-sauce-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-sauce-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Link>
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 mt-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-sauce-red transition-colors px-2 py-1">Home</Link>
              <Link to="/products" className="font-medium text-gray-700 hover:text-sauce-orange transition-colors px-2 py-1">Shop</Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-sauce-green transition-colors px-2 py-1">About</Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-sauce-blue transition-colors px-2 py-1">Contact</Link>
              <div className="relative">
                <Input type="text" placeholder="Search sauces..." className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-sauce-red focus:ring-0" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

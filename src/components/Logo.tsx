import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-12 h-12 overflow-hidden">
        <img 
          src="/images/logo_lips.jpeg" 
          alt="Saucy Palace Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-gray-900">Saucy Palace</span>
        <span className="text-sm text-gray-600">Premium Sauces</span>
      </div>
    </Link>
  );
};

export default Logo; 
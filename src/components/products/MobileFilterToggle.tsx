
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileFilterToggleProps {
  setIsFilterOpen: (isOpen: boolean) => void;
}

const MobileFilterToggle = ({ setIsFilterOpen }: MobileFilterToggleProps) => {
  return (
    <div className="md:hidden mb-4">
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center"
        onClick={() => setIsFilterOpen(true)}
      >
        <Filter size={18} className="mr-2" />
        Filters
      </Button>
    </div>
  );
};

export default MobileFilterToggle;

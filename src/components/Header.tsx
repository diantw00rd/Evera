
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-eco-accent py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/4d6e403e-123d-4e8a-afc3-70f9a2a9a8fd.png" 
              alt="EVera Logo" 
              className="h-20 md:h-24" 
            />
          </div>
          <div className="max-w-xl text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-2 text-eco-darker font-semibold">
              <Zap className="w-5 h-5 mr-1" />
              <span>Mission: Increase the percentage of carbon-free energy in the grid</span>
            </div>
            <h2 className="text-white text-sm md:text-base italic">
              (Plug in your car, forget about it, and know that it will charge during the lowest rates.)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

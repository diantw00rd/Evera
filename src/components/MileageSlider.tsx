
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface MileageSliderProps {
  onChangeMileage: (mileage: number) => void;
  className?: string;
}

const MileageSlider = ({ onChangeMileage, className }: MileageSliderProps) => {
  const [mileage, setMileage] = useState<number>(20000);
  
  const handleSliderChange = (value: number[]) => {
    const newMileage = value[0];
    setMileage(newMileage);
    onChangeMileage(newMileage);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-white/80">Annual Mileage</label>
        <span className="text-sm font-semibold text-eco-accent">
          {mileage.toLocaleString()} km
        </span>
      </div>
      
      <Slider
        defaultValue={[20000]}
        min={5000}
        max={50000}
        step={1000}
        onValueChange={handleSliderChange}
      />
      
      <div className="flex justify-between text-xs text-white/60">
        <span>5,000 km</span>
        <span>50,000 km</span>
      </div>
      
      <p className="text-sm text-white/70 italic mt-2">
        The average Canadian driver covers about 20,000 km per year
      </p>
    </div>
  );
};

export default MileageSlider;

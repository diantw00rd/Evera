
import { Battery, Leaf, Star, DollarSign } from "lucide-react";
import { formatCurrency } from "@/utils/evCalculations";

interface SavingsCardProps {
  yearlySavings: number;
  co2Reduction: number;
  loyaltyPoints: number;
  totalPeakCost: number;
  totalOffPeakCost: number;
  evModel?: string;
}

const SavingsCard = ({ 
  yearlySavings, 
  co2Reduction, 
  loyaltyPoints,
  totalPeakCost,
  totalOffPeakCost,
  evModel
}: SavingsCardProps) => {
  return (
    <div className="eco-card">
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-white/90 mb-2">
          Across a year, with off-peak charging you could save:
        </h3>
        <div className="mt-4">
          <span className="text-7xl font-bold savings-gradient">
            {formatCurrency(yearlySavings)}
          </span>
          {evModel && (
            <p className="text-white/70 mt-2">with your {evModel}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-eco-muted p-3 rounded-lg">
            <Battery className="h-6 w-6 text-eco-accent" />
          </div>
          <div>
            <h4 className="text-white/90 font-medium">Smart Charging bill savings</h4>
            <div className="flex justify-between mt-1">
              <span className="text-2xl font-bold savings-gradient">
                {formatCurrency(yearlySavings)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div className="text-white/70">
                Peak cost: <span className="text-white/90 font-medium">{formatCurrency(totalPeakCost)}</span>
              </div>
              <div className="text-white/70">
                Off-peak cost: <span className="text-white/90 font-medium">{formatCurrency(totalOffPeakCost)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-eco-muted p-3 rounded-lg">
            <Star className="h-6 w-6 text-eco-accent" />
          </div>
          <div>
            <h4 className="text-white/90 font-medium">Smart Charging rewards value</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold savings-gradient">
                {loyaltyPoints} points
              </span>
              <span className="text-white/70">
                ≈ {formatCurrency(loyaltyPoints / 10)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-eco-muted p-3 rounded-lg">
            <Leaf className="h-6 w-6 text-eco-accent" />
          </div>
          <div>
            <h4 className="text-white/90 font-medium">Carbon savings</h4>
            <span className="text-2xl font-bold savings-gradient">
              {co2Reduction.toFixed(0)} kg
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-white/60 text-center">
        Savings are calculated against standard peak charging rates
      </div>
    </div>
  );
};

export default SavingsCard;


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
    <div className="bg-white rounded-xl shadow-md p-6 border border-eco-light">
      <div className="text-center mb-6 pb-4 border-b border-eco-light/20">
        <h3 className="text-xl font-medium text-gray-800 mb-3">
          Annual Off-Peak Charging Savings
        </h3>
        <div className="mt-4">
          <span className="text-6xl font-bold savings-gradient">
            {formatCurrency(yearlySavings)}
          </span>
          {evModel && (
            <p className="text-gray-600 mt-2">with your {evModel}</p>
          )}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-4 p-3 bg-eco-darker rounded-lg">
          <div className="bg-eco-muted p-3 rounded-lg">
            <Battery className="h-5 w-5 text-eco-accent" />
          </div>
          <div>
            <h4 className="text-gray-800 font-medium">Charging Cost Savings</h4>
            <div className="flex justify-between mt-1">
              <span className="text-xl font-bold text-eco-accent">
                {formatCurrency(yearlySavings)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div className="text-gray-600">
                Peak: <span className="text-gray-800 font-medium">{formatCurrency(totalPeakCost)}</span>
              </div>
              <div className="text-gray-600">
                Off-peak: <span className="text-gray-800 font-medium">{formatCurrency(totalOffPeakCost)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 bg-eco-darker rounded-lg">
          <div className="bg-eco-muted p-3 rounded-lg">
            <Star className="h-5 w-5 text-eco-accent" />
          </div>
          <div>
            <h4 className="text-gray-800 font-medium">Loyalty Rewards Value</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-eco-accent">
                {loyaltyPoints} points
              </span>
              <span className="text-gray-600">
                ≈ {formatCurrency(loyaltyPoints / 10)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 bg-eco-darker rounded-lg">
          <div className="bg-eco-muted p-3 rounded-lg">
            <Leaf className="h-5 w-5 text-eco-accent" />
          </div>
          <div>
            <h4 className="text-gray-800 font-medium">Carbon Reduction</h4>
            <span className="text-xl font-bold text-eco-accent">
              {co2Reduction.toFixed(0)} kg CO₂
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-2 text-xs text-gray-500 text-center border-t border-eco-light/20">
        Savings calculated against standard peak charging rates
      </div>
    </div>
  );
};

export default SavingsCard;

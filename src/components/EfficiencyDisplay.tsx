
import { EVModel } from "@/data/evModels";

interface EfficiencyDisplayProps {
  selectedEV?: EVModel;
}

const EfficiencyDisplay = ({ selectedEV }: EfficiencyDisplayProps) => {
  if (!selectedEV) {
    return null;
  }

  return (
    <div className="bg-eco-darker border border-eco-light/30 rounded-lg p-4 text-center shadow-sm">
      <h3 className="text-sm font-medium text-gray-700 mb-1">Est. efficiency</h3>
      <p className="text-2xl font-bold text-eco-accent">
        {selectedEV.efficiency.toFixed(2)} km/kWh
      </p>
      <p className="text-xs text-gray-600 mt-1">
        Battery: {selectedEV.batteryCapacity} kWh
      </p>
    </div>
  );
};

export default EfficiencyDisplay;

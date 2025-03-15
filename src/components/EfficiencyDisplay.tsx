
import { EVModel } from "@/data/evModels";

interface EfficiencyDisplayProps {
  selectedEV?: EVModel;
}

const EfficiencyDisplay = ({ selectedEV }: EfficiencyDisplayProps) => {
  if (!selectedEV) {
    return null;
  }

  return (
    <div className="bg-eco-darker border border-eco-light/20 rounded-lg p-4 text-center">
      <h3 className="text-sm font-medium text-white/80 mb-1">Est. efficiency</h3>
      <p className="text-2xl font-bold text-eco-accent">
        {selectedEV.efficiency.toFixed(2)} km/kWh
      </p>
      <p className="text-xs text-white/60 mt-1">
        Battery: {selectedEV.batteryCapacity} kWh
      </p>
    </div>
  );
};

export default EfficiencyDisplay;


import { useState, useEffect } from "react";
import { EVModel } from "@/data/evModels";
import { calculateSavings } from "@/utils/evCalculations";
import EVSelector from "@/components/EVSelector";
import MileageSlider from "@/components/MileageSlider";
import ChargingHabitSelector from "@/components/ChargingHabitSelector";
import SavingsCard from "@/components/SavingsCard";
import EfficiencyDisplay from "@/components/EfficiencyDisplay";
import InfoCard from "@/components/InfoCard";

const Index = () => {
  const [selectedEV, setSelectedEV] = useState<EVModel | null>(null);
  const [annualMileage, setAnnualMileage] = useState<number>(20000);
  const [homeChargingPercentage, setHomeChargingPercentage] = useState<number>(0.6);
  const [calculationResults, setCalculationResults] = useState<any>(null);

  useEffect(() => {
    if (selectedEV) {
      const results = calculateSavings(
        selectedEV,
        annualMileage,
        homeChargingPercentage
      );
      setCalculationResults(results);
    }
  }, [selectedEV, annualMileage, homeChargingPercentage]);

  return (
    <div className="min-h-screen bg-eco-dark text-white pb-16">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            How much could you save?
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Calculate your potential savings by charging your EV during off-peak hours
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="form-section">
                <h2 className="text-2xl font-semibold mb-6">EV charging information</h2>
                <EVSelector onSelectEV={(ev) => setSelectedEV(ev)} />

                {selectedEV && (
                  <div className="mt-6">
                    <EfficiencyDisplay selectedEV={selectedEV} />
                  </div>
                )}
              </div>

              <div className="form-section">
                <MileageSlider onChangeMileage={setAnnualMileage} />
              </div>

              <div className="form-section">
                <ChargingHabitSelector onSelectHabit={setHomeChargingPercentage} />
              </div>

              <div className="mt-8 space-y-6">
                <h2 className="text-2xl font-semibold mb-2">Pricing information</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-white/80">Peak rate (CAD)</h3>
                    <div className="mt-2 bg-eco-darker border border-eco-light/20 rounded-lg p-4 text-center">
                      <span className="text-xl font-bold">$0.15/kWh</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/80">Off-peak rate (CAD)</h3>
                    <div className="mt-2 bg-eco-darker border border-eco-light/20 rounded-lg p-4 text-center">
                      <span className="text-xl font-bold text-eco-accent">$0.07/kWh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <InfoCard />
              </div>
            </div>

            <div className="md:col-span-1">
              {calculationResults && selectedEV ? (
                <SavingsCard
                  yearlySavings={calculationResults.yearlySavings}
                  co2Reduction={calculationResults.co2Reduction}
                  loyaltyPoints={calculationResults.loyaltyPoints}
                  totalPeakCost={calculationResults.totalPeakCost}
                  totalOffPeakCost={calculationResults.totalOffPeakCost}
                  evModel={`${selectedEV.make} ${selectedEV.model}`}
                />
              ) : (
                <div className="eco-card h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <h3 className="text-xl font-medium mb-4">Select your EV to see savings</h3>
                    <p className="text-white/70">
                      Choose your electric vehicle make and model to calculate potential savings
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

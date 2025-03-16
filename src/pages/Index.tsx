
import { useState, useEffect } from "react";
import { EVModel } from "@/data/evModels";
import { calculateSavings } from "@/utils/evCalculations";
import EVSelector from "@/components/EVSelector";
import MileageSlider from "@/components/MileageSlider";
import ChargingHabitSelector from "@/components/ChargingHabitSelector";
import SavingsCard from "@/components/SavingsCard";
import EfficiencyDisplay from "@/components/EfficiencyDisplay";
import InfoCard from "@/components/InfoCard";
import Header from "@/components/Header";

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
    <div className="min-h-screen bg-white pb-16">
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-eco-dark">
              EV Charging Savings Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your potential savings by charging your EV during off-peak hours
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column - Input Form */}
            <div className="md:col-span-7 space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-eco-light/20">
                <h2 className="section-title border-b border-eco-light/20 pb-2">Select Your EV</h2>
                <div className="mt-4">
                  <EVSelector onSelectEV={(ev) => setSelectedEV(ev)} />

                  {selectedEV && (
                    <div className="mt-6">
                      <EfficiencyDisplay selectedEV={selectedEV} />
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-eco-light/20">
                <h2 className="section-title border-b border-eco-light/20 pb-2">Usage Information</h2>
                <div className="space-y-6 mt-4">
                  <MileageSlider onChangeMileage={setAnnualMileage} />
                  <ChargingHabitSelector onSelectHabit={setHomeChargingPercentage} />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-eco-light/20">
                <h2 className="section-title border-b border-eco-light/20 pb-2">Pricing Information</h2>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <h3 className="info-label mb-2">Peak Rate</h3>
                    <div className="bg-eco-darker rounded-lg p-3 text-center">
                      <span className="text-xl font-bold text-gray-800">$0.15/kWh</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="info-label mb-2">Off-peak Rate</h3>
                    <div className="bg-eco-darker rounded-lg p-3 text-center">
                      <span className="text-xl font-bold text-eco-accent">$0.07/kWh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results & Info */}
            <div className="md:col-span-5 space-y-8">
              <div className="sticky top-4">
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
                  <div className="bg-white rounded-xl p-6 shadow-md border border-eco-light/20 text-center">
                    <div className="py-8">
                      <h3 className="text-xl font-medium text-gray-800 mb-4">Select your EV to see savings</h3>
                      <p className="text-gray-600">
                        Choose your electric vehicle make and model to calculate potential savings
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <InfoCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

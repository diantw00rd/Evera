
import { EVModel } from "../data/evModels";

// Constants
export const PEAK_RATE = 0.15; // CAD per kWh
export const OFF_PEAK_RATE = 0.07; // CAD per kWh
export const CO2_PER_KWH = 0.12; // kg of CO2 per kWh (average for Canadian grid)
export const LOYALTY_POINTS_PER_KWH = 1; // points per kWh charged off-peak

interface CalculationResults {
  yearlySavings: number;
  co2Reduction: number;
  loyaltyPoints: number;
  totalPeakCost: number;
  totalOffPeakCost: number;
  yearlyEnergyNeeded: number;
  numberOfCharges: number;
}

export function calculateSavings(
  selectedEV: EVModel,
  annualMileage: number,
  homeChargingPercentage: number
): CalculationResults {
  // Calculate total energy needed for annual driving
  const yearlyEnergyNeeded = annualMileage / selectedEV.efficiency; // kWh

  // Calculate energy charged at home
  const homeEnergyCharged = yearlyEnergyNeeded * homeChargingPercentage; // kWh

  // Calculate costs
  const totalPeakCost = homeEnergyCharged * PEAK_RATE; // CAD
  const totalOffPeakCost = homeEnergyCharged * OFF_PEAK_RATE; // CAD
  const yearlySavings = totalPeakCost - totalOffPeakCost; // CAD

  // Calculate CO2 reduction
  // Assume 20% less CO2 emissions for off-peak charging due to cleaner grid mix at night
  const co2Reduction = homeEnergyCharged * CO2_PER_KWH * 0.2; // kg of CO2

  // Calculate loyalty points
  const loyaltyPoints = Math.round(homeEnergyCharged * LOYALTY_POINTS_PER_KWH);

  // Calculate number of charges (assuming 80% of battery capacity per charge)
  const energyPerCharge = selectedEV.batteryCapacity * 0.8; // kWh
  const numberOfCharges = Math.ceil(homeEnergyCharged / energyPerCharge);

  return {
    yearlySavings,
    co2Reduction,
    loyaltyPoints,
    totalPeakCost,
    totalOffPeakCost,
    yearlyEnergyNeeded,
    numberOfCharges
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

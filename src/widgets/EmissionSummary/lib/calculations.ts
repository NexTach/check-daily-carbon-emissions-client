import type { DailyRecord } from "@/entities/dailyRecord/model/types";

const CARBON_FACTORS = {
  WATER_PER_LITER: 0.298,
  SHOWER_PER_MINUTE: 2.5,
  WALKING_STEPS_SAVED: -0.0001,
  PUBLIC_TRANSPORT_PER_MINUTE: 0.1,
  CAR_PER_MINUTE: 2.3,
};

export const calculateTotalEmissions = (
  waterConsumed: number,
  showerTime: number,
  publicTransportTime: number,
  carUsageTime: number
): number => {
  return (
    waterConsumed * CARBON_FACTORS.WATER_PER_LITER +
    showerTime * CARBON_FACTORS.SHOWER_PER_MINUTE +
    publicTransportTime * CARBON_FACTORS.PUBLIC_TRANSPORT_PER_MINUTE +
    carUsageTime * CARBON_FACTORS.CAR_PER_MINUTE
  );
};

export const calculateCarbonSaved = (walkingSteps: number): number => {
  return walkingSteps * CARBON_FACTORS.WALKING_STEPS_SAVED;
};

export const calculateAverageEmissions = (records: DailyRecord[], days: number): number => {
  const recentRecords = records.slice(0, days);
  if (recentRecords.length === 0) return 0;

  const sum = recentRecords.reduce((acc, record) => acc + record.totalCarbonEmission, 0);
  return sum / recentRecords.length;
};

export const calculateAverageEmission = calculateAverageEmissions;

export const calculateEmissionTrend = (emissions: number[]): "increasing" | "decreasing" | "stable" => {
  if (emissions.length < 2) return "stable";

  const lastWeekEmissions = emissions.slice(-7);
  const average = lastWeekEmissions.reduce((sum, val) => sum + val, 0) / lastWeekEmissions.length;
  const latestEmission = lastWeekEmissions[lastWeekEmissions.length - 1];

  if (latestEmission > average * 1.1) return "increasing";
  if (latestEmission < average * 0.9) return "decreasing";
  return "stable";
};

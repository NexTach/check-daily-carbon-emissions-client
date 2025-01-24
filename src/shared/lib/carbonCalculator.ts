import { CARBON_FACTORS, DailyRecord } from "@/entities/dailyRecord/model/types";

export const calculateCarbonEmission = (record: Partial<DailyRecord>): number => {
  let totalEmission = 0;

  if (record.waterConsumed) {
    totalEmission += record.waterConsumed * CARBON_FACTORS.WATER;
  }

  if (record.carUsageDistance) {
    totalEmission += record.carUsageDistance * CARBON_FACTORS.CAR.MEDIUM;
  }

  if (record.electricityUsage) {
    totalEmission += record.electricityUsage * CARBON_FACTORS.ELECTRICITY;
  }

  if (record.videoWatchingTime) {
    totalEmission += (record.videoWatchingTime / 10) * CARBON_FACTORS.VIDEO_WATCHING;
  }
  if (record.internetUsage) {
    totalEmission += record.internetUsage * CARBON_FACTORS.INTERNET_SEARCH;
  }
  if (record.phoneCallTime) {
    totalEmission += record.phoneCallTime * CARBON_FACTORS.PHONE_CALL;
  }

  return totalEmission;
};

export const calculateTreesNeeded = (carbonEmission: number): number => {
  return Math.ceil(carbonEmission / 1000 / CARBON_FACTORS.TREE_OFFSET);
};

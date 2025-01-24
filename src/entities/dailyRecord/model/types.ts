export interface DailyRecord {
  waterConsumed: number;
  showerTime: number;
  carUsageDistance: number;
  carUsageTime: number;
  publicTransportTime: number;
  walkingSteps: number;
  electricityUsage: number;
  videoWatchingTime: number;
  internetUsage: number;
  phoneCallTime: number;
  totalCarbonEmission: number;
  carbonSaved: number;
  treesNeeded: number;
  date: string;
}

export const CARBON_FACTORS = {
  WATER: 0.000298,
  CAR: {
    SMALL: 0.12,
    MEDIUM: 0.15,
    LARGE: 0.2,
  },
  ELECTRICITY: 0.443,
  VIDEO_WATCHING: 0.1,
  INTERNET_SEARCH: 0.011,
  PHONE_CALL: 0.0036,
  TREE_OFFSET: 0.167,
} as const;

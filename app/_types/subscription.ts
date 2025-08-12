type SubscriptionPlanLimit = {
  users: number;
  candidates: number;
  jobOpenings: number;
  interviews: number;
  copilotUsage: number;
};

export type SubscriptionPlan = {
  limits: SubscriptionPlanLimit;
  deleted: boolean;
  _id: string;
  name: "FREE" | "BASIC" | "PROFESSIONAL" | "ENTERPRISE" | "CUSTOM" | string;

  description: string;
  price: number;
  billingCycle: "MONTHLY" | "ANNUAL";
  features: string[];
  isActive: boolean;
  stripeProductId: string | null;
  stripePriceId: string | null;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  popular?: boolean;
  cta?: string;
  period?: "month" | "year";
};

// The whole data is an array of SubscriptionPlan
export type SubscriptionPlans = SubscriptionPlan[];

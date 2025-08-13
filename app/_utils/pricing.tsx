"use client";

import { Star, Zap, Users, Building } from "lucide-react";
import { SubscriptionPlan } from "@/app/_types/subscription";

const getIcon = (plan: SubscriptionPlan) => {
  switch (plan.name.toUpperCase()) {
    case "STARTER":
      return Users;
    case "PROFESSIONAL":
      return Zap;
    case "ENTERPRISE":
      return Building;
    case "CUSTOM":
      return Star;
    default:
      return Users;
  }
};

const getColor = (plan: SubscriptionPlan) => {
  switch (plan.name.toUpperCase()) {
    case "STARTER":
      return "from-blue-600 to-blue-700";
    case "PROFESSIONAL":
      return "from-blue-600 to-indigo-600";
    case "ENTERPRISE":
      return "from-gray-800 to-gray-900";
    default:
      return "from-gray-600 to-gray-700";
  }
};

const getBgColor = (plan: SubscriptionPlan) => {
  switch (plan.name.toUpperCase()) {
    case "STARTER":
      return "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20";
    case "PROFESSIONAL":
      return "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20";
    case "ENTERPRISE":
      return "bg-gray-50 dark:bg-gray-800";
    default:
      return "bg-gray-50 dark:bg-gray-800";
  }
};

const getBorderColor = (plan: SubscriptionPlan) => {
  switch (plan.name.toUpperCase()) {
    case "STARTER":
      return "border-blue-200 dark:border-blue-700";
    case "PROFESSIONAL":
      return "border-blue-200 dark:border-blue-700";
    case "ENTERPRISE":
      return "border-gray-200 dark:border-gray-700";
    default:
      return "border-gray-200 dark:border-gray-700";
  }
};

export { getIcon, getColor, getBgColor, getBorderColor };

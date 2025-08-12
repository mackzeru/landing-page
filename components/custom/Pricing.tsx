"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Zap, Users, Building } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useState } from "react";
import { SubscriptionPlan, SubscriptionPlans } from "@/app/_types/subscription";
import { BASE_URL, FRONTEND_URL } from "@/constant/env-constant";

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

export function EnhancedPricing() {
  const [pricing, setPricing] = useState<SubscriptionPlans>([]);

  useEffect(() => {
    fetchPricing();
  }, []);

  async function fetchPricing() {
    const res = await fetch(`${BASE_URL}/api/v1/subscription/plans`);
    const data = await res.json();
    // Enhance the plans data with additional properties for UI
    const enhancedPlans = data.data.map((plan: SubscriptionPlan) => ({
      ...plan,
      popular: plan.name === "Professional",
      color: getColor(plan),
      bgColor: getBgColor(plan),
      borderColor: getBorderColor(plan),
      period: plan.billingCycle === "MONTHLY" ? "/month" : "/year",
      cta: plan.name === "Enterprise" ? "Contact Sales" : "Get Started",
    }));
    setPricing(enhancedPlans);
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your team size and recruiting needs.
              All plans include our core AI features.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => {
            const Icon = getIcon(plan);
            return (
              <ScrollReveal key={plan._id} delay={index * 200}>
                <Card
                  className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-2 border-blue-500 dark:border-blue-400 shadow-xl scale-105"
                      : `border-2 ${getBorderColor(
                          plan
                        )} hover:border-blue-300 dark:hover:border-blue-600`
                  } ${getBgColor(plan)} overflow-visible`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-sm font-semibold">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${getColor(
                          plan
                        )} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-5xl font-bold text-gray-900 dark:text-white">
                          ${plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-xl text-gray-500 dark:text-gray-400 ml-2">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      {plan.name === "Professional" && (
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Save 20% with annual billing
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                          : plan.name === "Enterprise"
                          ? "border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 bg-transparent"
                          : "bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900"
                      }`}
                      variant={
                        plan.name === "Enterprise" ? "outline" : "default"
                      }
                      onClick={() => {
                        window.location.href = `${FRONTEND_URL}/plan/checkout?plan=${plan._id}`;
                      }}
                    >
                      {plan.cta}
                    </Button>

                    {plan.name !== "Enterprise" && (
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                        14-day free trial • No credit card required
                      </p>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                All plans include:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>AI-powered candidate matching</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Interview scheduling</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic analytics dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

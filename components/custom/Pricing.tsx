"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Zap, Users, Building } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small teams getting started with AI recruiting",
    icon: Users,
    color: "from-gray-600 to-gray-700",
    bgColor: "bg-gray-50 dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    features: [
      "3 active job postings",
      "500 candidates per month",
      "Basic AI sourcing",
      "Email support",
      "Standard integrations",
      "Basic analytics",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "Most popular choice for growing recruiting teams",
    icon: Zap,
    color: "from-blue-600 to-purple-600",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    features: [
      "Unlimited job postings",
      "Autonomous AI mode",
      "LinkedIn plugin access",
      "Priority support",
      "Advanced integrations",
      "Custom workflows",
      "Team collaboration",
      "Advanced analytics",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solution for large organizations",
    icon: Building,
    color: "from-gray-800 to-gray-900",
    bgColor: "bg-gray-50 dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    features: [
      "Dedicated AI training",
      "SLA guarantee",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
      "Advanced security",
      "Custom reporting",
      "Onboarding assistance",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

export function EnhancedPricing() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
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
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <ScrollReveal key={index} delay={index * 200}>
                <Card
                  className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-2 border-blue-500 dark:border-blue-400 shadow-xl scale-105"
                      : `border-2 ${plan.borderColor} hover:border-blue-300 dark:hover:border-blue-600`
                  } ${plan.bgColor} overflow-visible`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}
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
                          {plan.price}
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
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                          : plan.name === "Enterprise"
                          ? "border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 bg-transparent"
                          : "bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900"
                      }`}
                      variant={
                        plan.name === "Enterprise" ? "outline" : "default"
                      }
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
                  <span>24/7 AI monitoring</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>99.9% uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

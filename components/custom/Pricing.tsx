"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Briefcase,
  Check,
  Cpu,
  MessageSquare,
  Star,
  User,
  Users,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useState } from "react";
import { SubscriptionPlan, SubscriptionPlans } from "@/app/_types/subscription";
import { BASE_URL, FRONTEND_URL } from "@/constant/env-constant";
import {
  getBgColor,
  getBorderColor,
  getColor,
  getIcon,
} from "@/app/_utils/pricing";
import LimitItem from "./LimitItem";

export function EnhancedPricing() {
  const [pricing, setPricing] = useState<SubscriptionPlans>([]);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState("MONTHLY");

  useEffect(() => {
    fetchPricing();
  }, []);

  async function fetchPricing() {
    const res = await fetch(`${BASE_URL}/api/v1/subscription/plans`);
    const data = await res.json();
    // Enhance the plans data with additional properties for UI
    const enhancedPlans = data.data.map((plan: SubscriptionPlan) => ({
      ...plan,
      popular:
        plan.name === "Professional" || plan.name === "Premium Starter Annual",
      color: getColor(plan),
      bgColor: getBgColor(plan),
      borderColor: getBorderColor(plan),
      period: plan.billingCycle === "MONTHLY" ? "/month" : "/year",
      cta:
        plan.name === "Enterprise" || plan.name === "Enterprise Annual"
          ? "Contact Sales"
          : "Get Started",
    }));
    setPricing(enhancedPlans);
  }

  // Filter plans based on selected billing cycle
  const filteredPlans = pricing.filter(
    (plan) => plan.billingCycle === selectedBillingCycle
  );

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
            <div className="flex justify-center my-10 ">
              <div className="inline-flex rounded-lg shadow-sm p-1 bg-gray-100">
                <button
                  type="button"
                  className={`px-6 py-2 text-xl font-bold rounded-md transition-all ${
                    selectedBillingCycle === "MONTHLY"
                      ? "bg-white text-blue-700 shadow"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setSelectedBillingCycle("MONTHLY")}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`px-6 py-2 text-xl font-bold rounded-md transition-all ${
                    selectedBillingCycle === "ANNUAL"
                      ? "bg-white text-blue-700 shadow"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setSelectedBillingCycle("ANNUAL")}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPlans.length == 0 ? (
            <div className="col-span-3 py-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 text-center max-w-2xl mx-auto shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No Plans Available
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  We couldn't find any subscription plans matching your
                  selection.
                  {selectedBillingCycle === "MONTHLY"
                    ? " Our annual plans might better suit your needs."
                    : " Check out our monthly options for more flexibility."}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                    onClick={() =>
                      setSelectedBillingCycle(
                        selectedBillingCycle === "MONTHLY"
                          ? "ANNUAL"
                          : "MONTHLY"
                      )
                    }
                  >
                    View{" "}
                    {selectedBillingCycle === "MONTHLY" ? "Annual" : "Monthly"}{" "}
                    Plans
                  </Button>

                  <Button variant="outline" className="border-gray-300">
                    <a href="mailto:support@yourcompany.com">Contact Support</a>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Need a custom solution?
                  </p>
                  <Button
                    variant="ghost"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <a href="#contact">Request Enterprise Plan</a>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            filteredPlans.map((plan, index) => {
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
                      <div className="text-center mb-4">
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-5xl font-bold text-gray-900 dark:text-white">
                            ${plan.price}
                          </span>
                          <span className="text-xl text-gray-500 dark:text-gray-400 ml-2">
                            {plan.period}
                          </span>
                        </div>
                        {plan.monthlyEquivalent && (
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {plan.monthlyEquivalent} equivalent
                          </div>
                        )}
                        {plan.savingsPercentage && (
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Save {plan.savingsPercentage} with annual billing
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Limits */}
                      <div className="mb-0 p-6  dark:bg-gray-700/30 rounded-lg  pt-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <Briefcase className="h-5 w-5 mr-2" />
                          Plan Limits
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          <LimitItem
                            icon={User}
                            value={plan.limits.users || "Unlimited"}
                            label="users"
                          />
                          <LimitItem
                            icon={Users}
                            value={plan.limits.candidates || "Unlimited"}
                            label="candidates"
                          />
                          <LimitItem
                            icon={Briefcase}
                            value={plan.limits.jobOpenings || "Unlimited"}
                            label="job openings"
                          />
                          <LimitItem
                            icon={MessageSquare}
                            value={plan.limits.interviews || "Unlimited"}
                            label="interviews"
                          />
                          {plan.limits.copilotUsage && (
                            <LimitItem
                              icon={Cpu}
                              value={plan.limits.copilotUsage.toLocaleString()}
                              label="AI copilot uses"
                            />
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                            : plan.name.includes("Enterprise")
                            ? "border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 bg-transparent"
                            : "bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900"
                        }`}
                        variant={
                          plan.name.includes("Enterprise")
                            ? "outline"
                            : "default"
                        }
                        onClick={() => {
                          window.location.href = `${FRONTEND_URL}/login?plan=${plan._id}`;
                        }}
                      >
                        {plan.cta}
                      </Button>

                      {!plan.name.includes("Enterprise") && (
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                          14-day free trial • No credit card required
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })
          )}
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

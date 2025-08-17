import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState, useEffect } from "react";

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    hiresPerMonth: 5,
    hoursPerHire: 40,
    hourlyRate: 75,
  });

  const [savings, setSavings] = useState({
    timeSaved: 0,
    monthlySavings: 0,
    annualROI: 0,
  });

  // Constants - these could be made configurable if needed
  const TIME_SAVINGS_PERCENTAGE = 0.85; // 85%
  const ANNUAL_COST_OF_SERVICE = 9600; // $800/month * 12

  useEffect(() => {
    calculateSavings();
  }, [inputs]);

  const calculateSavings = () => {
    const { hiresPerMonth, hoursPerHire, hourlyRate } = inputs;
    // Calculate time saved in hours
    const timeSavedHours =
      hiresPerMonth * hoursPerHire * TIME_SAVINGS_PERCENTAGE;

    // Calculate monthly savings
    const monthlySavings = timeSavedHours * hourlyRate;

    // Calculate annual ROI (savings minus cost of service)
    const annualSavings = monthlySavings * 12;
    const annualROI =
      ((annualSavings - ANNUAL_COST_OF_SERVICE) / ANNUAL_COST_OF_SERVICE) * 100;

    setSavings({
      timeSaved: TIME_SAVINGS_PERCENTAGE * 100, // as percentage
      monthlySavings,
      annualROI,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how much time and money you could save with AI-powered
              recruiting
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Your Current Process
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Hires per month
                      </label>
                      <input
                        type="number"
                        name="hiresPerMonth"
                        value={inputs.hiresPerMonth}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Hours per hire
                      </label>
                      <input
                        type="number"
                        name="hoursPerHire"
                        value={inputs.hoursPerHire}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Recruiter hourly rate ($)
                      </label>
                      <input
                        type="number"
                        name="hourlyRate"
                        value={inputs.hourlyRate}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    With Leelu.ai
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">
                          Time Savings
                        </span>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {savings.timeSaved.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">
                          Monthly Savings
                        </span>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {formatCurrency(savings.monthlySavings)}
                        </span>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">
                          Annual ROI
                        </span>
                        <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {savings.annualROI.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold">
                  Get Detailed ROI Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InteractiveROICalculator;

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

import { CheckCircle, ArrowRight, Target, Calendar } from "lucide-react";
import { industries, useCaseStories } from "./demo";
import InteractiveROICalculator from "./InteractiveROICalculator";
import Link from "next/link";

export default function UseCasesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-400 via-purple-200 to-purple-50/10 dark:from-blue-900/10 dark:via-blue-900/5 dark:to-purple-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="use-cases-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e0e7ff"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#use-cases-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2 hover:text-white">
              <Target className="h-4 w-4 mr-2" />
              Use Cases & Solutions
            </Badge>
            <h1 className="text-5xl md:text-3xl sm:text-xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI Recruiting Solutions
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent block">
                for Every Industry & Team Size
              </span>
            </h1>
            <p className="text-xl md:text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Whether you're a fast-growing startup or a Fortune 500 company,
              our AI adapts to your unique hiring needs, industry requirements,
              and company culture.
            </p>
            <div className="flex justify-center">
              <Link
                href="/use-cases#industry-solutions"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-lg"
              >
                Find Your Solution
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Solutions */}
      <section
        className="py-24 bg-blue-50 dark:bg-gray-900"
        id="industry-solutions"
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI understands the unique requirements, skills, and
                compliance needs of different industries
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-lg`}
                      >
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}
                        >
                          {industry.stats.metric}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {industry.stats.label}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                      {industry.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {industry.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mt-auto">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Trusted by companies like:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {industry.companies.map((company, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Real Success Stories
              </h2>
              <p className="text-xl md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how teams like yours are transforming their hiring process
                across different industries
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCaseStories.map((story, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <img
                        src={story.avatar || "/placeholder.svg"}
                        alt={story.company}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {story.company}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {story.industry} • {story.size}
                        </div>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {story.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {story.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Result
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {story.result}
                      </p>
                      <blockquote className="text-gray-700 dark:text-gray-300 italic border-l-4 border-blue-500 pl-4">
                        "{story.quote}"
                      </blockquote>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {story.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="font-bold text-blue-600 dark:text-blue-400 text-sm">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <InteractiveROICalculator />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-2xl font-bold text-white mb-6">
              Ready to See Your Own Data?
            </h2>
            <p className="text-xl md:text-lg text-indigo-100 mb-8 leading-relaxed">
              Schedule a personalized demo with your actual job requirements and
              see real results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-3 py-1 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

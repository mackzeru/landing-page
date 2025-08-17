"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Users,
  MessageSquare,
  Calendar,
  Zap,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "Setup Your Job",
      description:
        "Configure job requirements and AI preferences in under 2 minutes",
      duration: "0-2 min",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "AI Starts Sourcing",
      description: "Watch as AI searches 10+ platforms simultaneously",
      duration: "2-6 min",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Candidate Outreach",
      description: "AI crafts and sends personalized messages automatically",
      duration: "6-12 min",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Interviews Booked",
      description:
        "Qualified candidates are automatically scheduled for interviews",
      duration: "12-24 min",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-blue-50/30 dark:from-indigo-900/10 dark:via-purple-900/5 dark:to-blue-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="demo-grid"
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
            <rect width="100%" height="100%" fill="url(#demo-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 mb-6 text-base px-4 py-2">
              <Play className="h-4 w-4 mr-2" />
              Interactive Demo
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              See Leelu.ai in Action
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                24-Hour Hiring Process
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Experience how our AI Copilot transforms recruiting from job post
              to scheduled interviews in just 24 hours. No signup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
                Start Interactive Demo
                <Play className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Schedule Live Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Demo Player */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl">
              {/* Demo Header */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm">
                    Leelu.ai Demo - Software Engineer Position
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    <span>{isPlaying ? "Pause" : "Play"}</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <RotateCcw className="h-4 w-4" />
                    <span>Restart</span>
                  </button>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Demo Steps */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Demo Timeline
                    </h3>
                    {demoSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                          currentStep === index
                            ? "border-blue-400 bg-blue-100"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => setCurrentStep(index)}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}
                          >
                            <span className="text-white font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-gray-800 font-semibold mb-1">
                              {step.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {step.description}
                            </p>
                            <Badge className="mt-2 bg-gray-200 text-gray-700">
                              {step.duration}
                            </Badge>
                          </div>
                          {currentStep === index && (
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Demo Visualization */}
                  <div className="bg-gray-100 rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {demoSteps[currentStep].title}
                      </h4>
                      <p className="text-gray-600">
                        {demoSteps[currentStep].description}
                      </p>
                    </div>

                    {/* Dynamic Demo Content Based on Current Step */}
                    {currentStep === 0 && (
                      <div className="space-y-4">
                        <div className="bg-gray-200 rounded-lg p-4">
                          <div className="text-gray-800 text-sm mb-2">
                            ✓ Job Title: Senior Software Engineer
                          </div>
                          <div className="text-gray-800 text-sm mb-2">
                            ✓ Skills: React, Node.js, TypeScript
                          </div>
                          <div className="text-gray-800 text-sm mb-2">
                            ✓ Experience: 5+ years
                          </div>
                          <div className="text-gray-800 text-sm">
                            ✓ Location: Remote/San Francisco
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div className="text-blue-900 text-sm animate-pulse">
                          🔍 Searching LinkedIn...
                        </div>
                        <div className="text-blue-900 text-sm animate-pulse">
                          🔍 Searching Indeed...
                        </div>
                        <div className="text-blue-900 text-sm animate-pulse">
                          🔍 Searching GitHub...
                        </div>
                        <div className="bg-gray-200 rounded-lg p-4 mt-4">
                          <div className="text-green-900 font-semibold">
                            247 candidates found
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="bg-gray-200 rounded-lg p-4">
                          <div className="text-yellow-600 text-sm mb-2">
                            📧 Sending personalized emails...
                          </div>
                          <div className="text-gray-700 text-xs">
                            "Hi Sarah, I noticed your React expertise at
                            TechCorp..."
                          </div>
                        </div>
                        <div className="text-green-900 text-sm">
                          ✓ 89 messages sent
                        </div>
                        <div className="text-green-900 text-sm">
                          ✓ 42 responses received
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div className="bg-gray-200 rounded-lg p-4">
                          <div className="text-gray-800 text-sm mb-2">
                            📅 Interview scheduled with Sarah Chen
                          </div>
                          <div className="text-gray-800 text-sm mb-2">
                            📅 Interview scheduled with Mike Rodriguez
                          </div>
                          <div className="text-gray-800 text-sm">
                            📅 Interview scheduled with Lisa Wang
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-900">
                            12 interviews booked
                          </div>
                          <div className="text-gray-600 text-sm">
                            in 24 hours
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Features Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What You Just Saw in Action
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The key features that make Leelu.ai the most advanced recruiting
                platform
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Autonomous Operation",
                description:
                  "Set it once, let AI handle everything until interviews are booked",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Users,
                title: "Multi-Platform Search",
                description:
                  "Simultaneously search LinkedIn, Indeed, Monster, and 7+ more platforms",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: MessageSquare,
                title: "Smart Outreach",
                description:
                  "AI crafts personalized messages that get 48% response rates",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Calendar,
                title: "Auto Scheduling",
                description:
                  "Seamlessly book interviews when candidates show interest",
                color: "from-purple-500 to-purple-600",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See Your Own Data?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Schedule a personalized demo with your actual job requirements and
              see real results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Schedule Live Demo
                <Calendar className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

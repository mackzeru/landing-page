"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  MessageSquare,
  Calendar,
  BarChart3,
  Zap,
  ArrowRight,
  Play,
  Users,
  Clock,
  Target,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function CopilotPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 dark:from-blue-900/10 dark:via-indigo-900/5 dark:to-purple-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="hero-grid"
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
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2">
                  <Bot className="h-4 w-4 mr-2" />
                  AI Copilot
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Your Autonomous
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                    Recruiting Assistant
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Set it and forget it. Our AI Copilot handles the entire
                  recruiting process autonomously - from candidate sourcing to
                  interview scheduling - while you focus on what matters most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      AI Copilot Status
                    </h3>
                    <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                      ACTIVE
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">
                        ✓ Candidates Sourced:
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        247
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">
                        ✓ Outreach Sent:
                      </span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        89
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">
                        ✓ Interviews Booked:
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        12
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                How AI Copilot Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Four autonomous steps that transform your recruiting process
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Smart Sourcing",
                description:
                  "Automatically searches 10+ platforms simultaneously using AI-powered candidate matching",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: MessageSquare,
                title: "Personalized Outreach",
                description:
                  "Crafts and sends customized messages based on candidate profile and job requirements",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: BarChart3,
                title: "Response Analysis",
                description:
                  "Uses AI to detect interest level and determines the optimal next action automatically",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Calendar,
                title: "Interview Booking",
                description:
                  "Schedules interviews when candidates are ready, handling all coordination seamlessly",
                color: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
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

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Why Teams Choose AI Copilot
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Clock,
                      title: "85% Time Savings",
                      description:
                        "Automate repetitive tasks and focus on strategic hiring decisions",
                    },
                    {
                      icon: Target,
                      title: "48% Response Rate",
                      description:
                        "AI-crafted personalized messages that candidates actually respond to",
                    },
                    {
                      icon: Zap,
                      title: "24/7 Operation",
                      description:
                        "Never miss a great candidate - AI works around the clock",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Real Results
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      10x
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Faster Sourcing
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      48%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Response Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      24hrs
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      To Interview
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                      85%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Time Saved
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Recruiting?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of recruiting teams who've made the switch to
              autonomous AI recruiting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

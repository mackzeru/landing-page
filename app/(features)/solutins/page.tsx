"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Users,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Code,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function SolutionsPage() {
  const useCases = [
    {
      icon: Code,
      title: "Tech & Engineering",
      description:
        "Find top developers, engineers, and technical talent across all skill levels",
      features: [
        "GitHub integration",
        "Technical skill assessment",
        "Stack-specific sourcing",
      ],
      color: "from-blue-500 to-blue-600",
      stats: { metric: "65%", label: "faster technical hiring" },
    },
    {
      icon: Briefcase,
      title: "Sales & Marketing",
      description:
        "Source high-performing sales reps and marketing professionals",
      features: [
        "Performance-based matching",
        "Industry experience focus",
        "Cultural fit analysis",
      ],
      color: "from-blue-500 to-blue-600",
      stats: { metric: "3x", label: "more qualified candidates" },
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description:
        "Recruit specialized healthcare professionals and researchers",
      features: [
        "Certification verification",
        "Compliance screening",
        "Specialty matching",
      ],
      color: "from-red-500 to-red-600",
      stats: { metric: "40%", label: "reduction in time-to-fill" },
    },
    {
      icon: TrendingUp,
      title: "Finance & Consulting",
      description:
        "Find experienced financial analysts, consultants, and executives",
      features: [
        "Experience verification",
        "Client-facing skills",
        "Regulatory compliance",
      ],
      color: "from-purple-500 to-purple-600",
      stats: { metric: "85%", label: "candidate quality score" },
    },
  ];

  const companySizes = [
    {
      icon: Rocket,
      title: "Startups (1-50)",
      description: "Move fast and hire the right people from day one",
      features: [
        "Quick setup in 5 minutes",
        "Affordable pricing for small teams",
        "Focus on cultural fit and potential",
        "Rapid scaling support",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Scale-ups (50-500)",
      description: "Scale your team efficiently without compromising quality",
      features: [
        "Multi-department hiring",
        "Advanced filtering and scoring",
        "Team collaboration tools",
        "Custom workflows",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Building,
      title: "Enterprise (500+)",
      description: "Enterprise-grade recruiting at scale with compliance",
      features: [
        "Custom integrations",
        "Advanced security & compliance",
        "Dedicated support",
        "White-label options",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:via-blue-900/5 dark:to-purple-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="solutions-grid"
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
            <rect width="100%" height="100%" fill="url(#solutions-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Solutions for Every Team
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI Recruiting Solutions
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent block">
                Tailored to Your Industry
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Whether you're a fast-growing startup or a Fortune 500 company,
              our AI adapts to your unique hiring needs and industry
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
                Find Your Solution
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI understands the unique requirements of different
                industries and roles
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${useCase.color} flex items-center justify-center shadow-lg`}
                    >
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {useCase.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}
                          >
                            {useCase.stats.metric}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {useCase.stats.label}
                          </div>
                        </div>
                        <Zap className="h-8 w-8 text-gray-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Size Solutions */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Solutions by Company Size
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From startup to enterprise, we scale with your growing needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {companySizes.map((size, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${size.color} flex items-center justify-center shadow-lg`}
                    >
                      <size.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {size.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                      {size.description}
                    </p>

                    <ul className="space-y-3">
                      {size.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Success Stories Across Industries
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how teams like yours are transforming their hiring process
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechScale",
                industry: "SaaS Startup",
                result: "Hired 15 engineers in 30 days",
                quote:
                  "Leelu.ai helped us scale our engineering team 3x faster than traditional recruiting.",
                avatar:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
              },
              {
                company: "FinTech Pro",
                industry: "Financial Services",
                result: "85% reduction in time-to-hire",
                quote:
                  "The compliance features and candidate quality are exactly what we needed.",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
              },
              {
                company: "HealthCorp",
                industry: "Healthcare",
                result: "40% improvement in candidate fit",
                quote:
                  "Finding specialized healthcare talent has never been this efficient.",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
              },
            ].map((story, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={story.avatar || "/placeholder.svg"}
                        alt={story.company}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {story.company}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {story.industry}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      {story.result}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "{story.quote}"
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of companies who've found their perfect recruiting
              solution with Leelu.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Talk to Sales
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

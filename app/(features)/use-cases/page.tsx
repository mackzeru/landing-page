"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

import {
  Building,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Code,
  Briefcase,
  Heart,
  Target,
} from "lucide-react";

export default function UseCasesPage() {
  const industries = [
    {
      icon: Code,
      title: "Technology & Engineering",
      description:
        "Find top developers, engineers, and technical talent across all skill levels and specializations",
      features: [
        "GitHub integration",
        "Technical skill assessment",
        "Stack-specific sourcing",
        "Open source contributions",
      ],
      color: "from-blue-500 to-blue-600",
      stats: { metric: "65%", label: "faster technical hiring" },
      companies: ["TechCorp", "DevStart", "CloudScale"],
    },
    {
      icon: Briefcase,
      title: "Sales & Marketing",
      description:
        "Source high-performing sales reps and marketing professionals with proven track records",
      features: [
        "Performance-based matching",
        "Industry experience focus",
        "Cultural fit analysis",
        "Revenue impact tracking",
      ],
      color: "from-blue-500 to-blue-600",
      stats: { metric: "3x", label: "more qualified candidates" },
      companies: ["SalesForce", "MarketPro", "GrowthCo"],
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description:
        "Recruit specialized healthcare professionals, researchers, and medical device experts",
      features: [
        "Certification verification",
        "Compliance screening",
        "Specialty matching",
        "License validation",
      ],
      color: "from-red-500 to-red-600",
      stats: { metric: "40%", label: "reduction in time-to-fill" },
      companies: ["MedTech", "BioLabs", "HealthCare+"],
    },
    {
      icon: TrendingUp,
      title: "Finance & Consulting",
      description:
        "Find experienced financial analysts, consultants, and executives with domain expertise",
      features: [
        "Experience verification",
        "Client-facing skills",
        "Regulatory compliance",
        "Industry certifications",
      ],
      color: "from-purple-500 to-purple-600",
      stats: { metric: "85%", label: "candidate quality score" },
      companies: ["FinanceFirst", "ConsultPro", "InvestCorp"],
    },
  ];

  const companySizes = [
    {
      icon: Rocket,
      title: "Startups",
      subtitle: "1-50 employees",
      description:
        "Move fast and hire the right people from day one with AI-powered recruiting",
      features: [
        "Quick setup in 5 minutes",
        "Affordable pricing for small teams",
        "Focus on cultural fit and potential",
        "Rapid scaling support",
        "Founder-friendly onboarding",
      ],
      color: "from-orange-500 to-orange-600",
      pricing: "Starting at $299/month",
      cta: "Perfect for early-stage teams",
    },
    {
      icon: TrendingUp,
      title: "Scale-ups",
      subtitle: "50-500 employees",
      description:
        "Scale your team efficiently without compromising quality or breaking the bank",
      features: [
        "Multi-department hiring",
        "Advanced filtering and scoring",
        "Team collaboration tools",
        "Custom workflows",
        "Department-specific templates",
      ],
      color: "from-blue-500 to-blue-600",
      pricing: "Starting at $799/month",
      cta: "Built for rapid growth",
    },
    {
      icon: Building,
      title: "Enterprise",
      subtitle: "500+ employees",
      description:
        "Enterprise-grade recruiting at scale with advanced compliance and security features",
      features: [
        "Custom integrations",
        "Advanced security & compliance",
        "Dedicated support team",
        "White-label options",
        "Custom SLA agreements",
      ],
      color: "from-purple-500 to-purple-600",
      pricing: "Custom pricing",
      cta: "Enterprise-ready solution",
    },
  ];

  const useCaseStories = [
    {
      company: "TechScale",
      industry: "SaaS Startup",
      size: "50 employees",
      challenge:
        "Needed to hire 15 engineers in 30 days to meet product deadlines",
      solution:
        "Used AI Copilot with GitHub integration for technical sourcing",
      result: "Hired 15 engineers in 28 days with 95% offer acceptance rate",
      quote:
        "Leelu.ai helped us scale our engineering team 3x faster than traditional recruiting.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      metrics: ["15 hires", "28 days", "95% acceptance"],
    },
    {
      company: "FinTech Pro",
      industry: "Financial Services",
      size: "200 employees",
      challenge: "Struggled to find compliance-ready financial analysts",
      solution:
        "Leveraged industry-specific filtering and certification verification",
      result: "85% reduction in time-to-hire with 100% compliance rate",
      quote:
        "The compliance features and candidate quality are exactly what we needed.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      metrics: ["85% faster", "100% compliant", "40 hires"],
    },
    {
      company: "HealthCorp",
      industry: "Healthcare",
      size: "1000+ employees",
      challenge: "Difficulty finding specialized healthcare professionals",
      solution:
        "Used certification verification and specialty matching features",
      result: "40% improvement in candidate fit and 60% faster hiring",
      quote:
        "Finding specialized healthcare talent has never been this efficient.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      metrics: ["40% better fit", "60% faster", "25 specialists"],
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
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Use Cases & Solutions
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI Recruiting Solutions
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent block">
                for Every Industry & Team Size
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Whether you're a fast-growing startup or a Fortune 500 company,
              our AI adapts to your unique hiring needs, industry requirements,
              and company culture.
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

      {/* Company Size Solutions */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Solutions by Company Size
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From startup to enterprise, we scale with your growing needs and
                budget
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {companySizes.map((size, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                  {index === 1 && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${size.color} flex items-center justify-center shadow-lg`}
                    >
                      <size.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {size.title}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 mb-4">
                      {size.subtitle}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                      {size.description}
                    </p>

                    <ul className="space-y-3 mb-6">
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

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {size.pricing}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {size.cta}
                        </div>
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${size.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all`}
                    >
                      Get Started
                    </Button>
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
                Real Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                          defaultValue="5"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Hours per hire
                        </label>
                        <input
                          type="number"
                          defaultValue="40"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Recruiter hourly rate ($)
                        </label>
                        <input
                          type="number"
                          defaultValue="75"
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
                            85%
                          </span>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300">
                            Monthly Savings
                          </span>
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            $12,750
                          </span>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300">
                            Annual ROI
                          </span>
                          <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            1,600%
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

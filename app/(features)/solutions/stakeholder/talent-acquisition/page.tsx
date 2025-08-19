"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  BarChart3,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Users,
  Clock,
  DollarSign,
  Star,
  Database,
  PieChart,
  Activity,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function TalentOperationsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700">
                  <Settings className="h-4 w-4 mr-2" />
                  For Talent Operations
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Optimize processes with
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    data-driven insights
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your talent operations with AI-powered analytics,
                  process automation, and strategic insights that drive
                  measurable results across your entire hiring ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Optimize Your Operations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-3 rounded-full font-semibold bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Talent Operations Challenges
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The complex challenges you face every day
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Fragmented Data",
                  description:
                    "Recruiting data scattered across multiple platforms makes it impossible to get a complete picture of performance.",
                  color: "text-red-500",
                },
                {
                  icon: Clock,
                  title: "Manual Reporting",
                  description:
                    "Hours spent compiling reports from different systems instead of analyzing and optimizing processes.",
                  color: "text-orange-500",
                },
                {
                  icon: Target,
                  title: "Lack of Visibility",
                  description:
                    "No real-time insights into recruiter performance, candidate pipeline health, or process bottlenecks.",
                  color: "text-yellow-500",
                },
                {
                  icon: TrendingUp,
                  title: "Inconsistent Processes",
                  description:
                    "Different recruiters using different approaches makes it hard to standardize and scale best practices.",
                  color: "text-blue-500",
                },
                {
                  icon: DollarSign,
                  title: "ROI Uncertainty",
                  description:
                    "Difficulty proving the value of recruiting investments and optimizing budget allocation.",
                  color: "text-green-500",
                },
                {
                  icon: Users,
                  title: "Resource Allocation",
                  description:
                    "Challenges in determining optimal team size, skill mix, and workload distribution.",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-purple-500">
                    <CardContent className="p-6">
                      <item.icon className={`h-12 w-12 ${item.color} mb-4`} />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI-Powered Operations Intelligence
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Centralize, automate, and optimize your entire talent
                  acquisition operation
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Unified Data Platform",
                  description:
                    "Consolidate data from all recruiting platforms into a single, comprehensive dashboard with real-time insights.",
                  features: [
                    "Multi-platform integration",
                    "Real-time data sync",
                    "Custom reporting",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description:
                    "Deep insights into recruiting performance, candidate quality, and process efficiency with predictive analytics.",
                  features: [
                    "Performance metrics",
                    "Predictive modeling",
                    "Trend analysis",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: Zap,
                  title: "Process Automation",
                  description:
                    "Automate routine tasks and workflows to free up your team for strategic initiatives and optimization.",
                  features: [
                    "Workflow automation",
                    "Task scheduling",
                    "Alert systems",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: Target,
                  title: "Performance Optimization",
                  description:
                    "Identify bottlenecks, optimize processes, and implement best practices across your entire team.",
                  features: [
                    "Bottleneck identification",
                    "Process optimization",
                    "Best practice sharing",
                  ],
                  color: "text-green-600",
                },
                {
                  icon: PieChart,
                  title: "Resource Planning",
                  description:
                    "Optimize team allocation, budget distribution, and capacity planning with data-driven insights.",
                  features: [
                    "Capacity planning",
                    "Budget optimization",
                    "Team allocation",
                  ],
                  color: "text-orange-600",
                },
                {
                  icon: Activity,
                  title: "Quality Assurance",
                  description:
                    "Monitor and maintain consistent quality standards across all recruiting activities and touchpoints.",
                  features: [
                    "Quality monitoring",
                    "Compliance tracking",
                    "Standard enforcement",
                  ],
                  color: "text-red-600",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <item.icon className={`h-12 w-12 ${item.color} mb-4`} />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {feature}
                            </span>
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

        {/* Dashboard Preview */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Operations Command Center
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get a complete view of your talent acquisition operations
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Active Campaigns",
                      value: "24",
                      change: "+12%",
                      icon: Target,
                      color: "text-blue-600",
                    },
                    {
                      title: "Avg. Time to Interview",
                      value: "3.2 days",
                      change: "-67%",
                      icon: Clock,
                      color: "text-green-600",
                    },
                    {
                      title: "Cost per Hire",
                      value: "$2,840",
                      change: "-45%",
                      icon: DollarSign,
                      color: "text-purple-600",
                    },
                    {
                      title: "Quality Score",
                      value: "94%",
                      change: "+18%",
                      icon: Star,
                      color: "text-orange-600",
                    },
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <metric.icon className={`h-8 w-8 ${metric.color}`} />
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          {metric.change}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {metric.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Measurable Impact
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  See the results that matter to your organization
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  stat: "75%",
                  label: "Faster reporting",
                  description:
                    "Automated dashboards eliminate manual report compilation",
                  color: "text-blue-600",
                },
                {
                  icon: DollarSign,
                  stat: "40%",
                  label: "Cost reduction",
                  description:
                    "Optimize resource allocation and eliminate inefficiencies",
                  color: "text-green-600",
                },
                {
                  icon: Target,
                  stat: "90%",
                  label: "Process standardization",
                  description:
                    "Consistent workflows across all recruiting activities",
                  color: "text-purple-600",
                },
                {
                  icon: Star,
                  stat: "95%",
                  label: "Data accuracy",
                  description:
                    "Reliable insights for strategic decision making",
                  color: "text-orange-600",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <item.icon
                        className={`h-12 w-12 ${item.color} mx-auto mb-4`}
                      />
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.stat}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.label}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Common Use Cases
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  How talent operations teams use Leelu to drive results
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Performance Optimization",
                  description:
                    "Identify top-performing recruiters and scale their best practices across the team.",
                  benefits: [
                    "Benchmark individual and team performance",
                    "Identify and replicate successful strategies",
                    "Provide data-driven coaching and development",
                  ],
                  icon: TrendingUp,
                },
                {
                  title: "Process Standardization",
                  description:
                    "Create consistent, repeatable processes that deliver predictable results.",
                  benefits: [
                    "Standardize workflows across all recruiters",
                    "Ensure compliance with company policies",
                    "Reduce training time for new team members",
                  ],
                  icon: Settings,
                },
                {
                  title: "Budget Optimization",
                  description:
                    "Maximize ROI on recruiting investments with data-driven budget allocation.",
                  benefits: [
                    "Track cost-per-hire across all channels",
                    "Optimize spending on job boards and tools",
                    "Demonstrate recruiting ROI to leadership",
                  ],
                  icon: DollarSign,
                },
                {
                  title: "Capacity Planning",
                  description:
                    "Right-size your team and allocate resources based on actual demand and performance.",
                  benefits: [
                    "Forecast hiring needs and resource requirements",
                    "Optimize team size and skill mix",
                    "Plan for seasonal hiring fluctuations",
                  ],
                  icon: Users,
                },
              ].map((useCase, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <useCase.icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mr-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {useCase.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {useCase.description}
                      </p>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {benefit}
                            </span>
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

        {/* Testimonial */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-purple-200 dark:border-purple-700 shadow-xl">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-8">
                    "Leelu's operations intelligence transformed how we manage
                    our recruiting function. We now have complete visibility
                    into performance, can identify bottlenecks instantly, and
                    our reporting time went from days to minutes."
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      MR
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Michael Rodriguez
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Director of Talent Operations, ScaleUp Inc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Operations?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join talent operations leaders who've transformed their
                recruiting function with AI-powered insights and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Optimizing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-purple-100 mt-4">
                No credit card required. Set up in under 5 minutes.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  DollarSign,
  Clock,
  Shield,
  Database,
  PieChart,
  Activity,
  UserCheck,
  FileText,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import GetStartLink from "@/app/(features)/_component/GetStartLink";
import { useState } from "react";
import VideoContainer from "@/app/(features)/_component/VideoContainer";

export default function PeopleOperationsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700">
                  <Users className="h-4 w-4 mr-2" />
                  For People Operations
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Streamline hiring operations
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    with intelligent automation
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your people operations with AI-powered hiring
                  workflows, compliance automation, and data-driven insights
                  that scale with your organization.
                </p>
                <GetStartLink setIsDialogOpen={setIsDialogOpen} />
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
                  People Operations Challenges
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The complex operational challenges you face every day
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Manual Processes",
                  description:
                    "Time-consuming manual workflows for candidate tracking, interview scheduling, and offer management.",
                  color: "text-red-500",
                },
                {
                  icon: BarChart3,
                  title: "Fragmented Data",
                  description:
                    "Hiring data scattered across multiple systems makes reporting and analysis nearly impossible.",
                  color: "text-orange-500",
                },
                {
                  icon: Shield,
                  title: "Compliance Risks",
                  description:
                    "Ensuring consistent compliance with hiring regulations and company policies across all teams.",
                  color: "text-yellow-500",
                },
                {
                  icon: Clock,
                  title: "Slow Processes",
                  description:
                    "Lengthy approval chains and manual handoffs create bottlenecks that delay hiring decisions.",
                  color: "text-blue-500",
                },
                {
                  icon: Target,
                  title: "Inconsistent Experience",
                  description:
                    "Candidate experience varies by recruiter and hiring manager, affecting employer brand.",
                  color: "text-green-500",
                },
                {
                  icon: DollarSign,
                  title: "Budget Visibility",
                  description:
                    "Lack of real-time visibility into hiring costs and ROI across different departments and roles.",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-indigo-500">
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
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI-Powered Operations Platform
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Streamline, automate, and optimize your entire hiring
                  operation
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Workflow Automation",
                  description:
                    "Automate repetitive tasks like interview scheduling, candidate communications, and status updates.",
                  features: [
                    "Automated scheduling",
                    "Email sequences",
                    "Status tracking",
                  ],
                  color: "text-indigo-600",
                },
                {
                  icon: Database,
                  title: "Unified Data Platform",
                  description:
                    "Centralize all hiring data from multiple sources into a single, comprehensive dashboard.",
                  features: [
                    "Multi-system integration",
                    "Real-time sync",
                    "Custom reporting",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Compliance Management",
                  description:
                    "Ensure consistent compliance with automated checks, documentation, and audit trails.",
                  features: [
                    "Automated compliance checks",
                    "Audit trails",
                    "Policy enforcement",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description:
                    "Get deep insights into hiring performance, bottlenecks, and ROI with predictive analytics.",
                  features: [
                    "Performance metrics",
                    "Bottleneck analysis",
                    "Predictive insights",
                  ],
                  color: "text-green-600",
                },
                {
                  icon: UserCheck,
                  title: "Candidate Experience",
                  description:
                    "Deliver consistent, personalized candidate experiences that strengthen your employer brand.",
                  features: [
                    "Personalized communications",
                    "Self-service portals",
                    "Feedback collection",
                  ],
                  color: "text-orange-600",
                },
                {
                  icon: PieChart,
                  title: "Resource Optimization",
                  description:
                    "Optimize team allocation, budget distribution, and capacity planning with data-driven insights.",
                  features: [
                    "Capacity planning",
                    "Budget tracking",
                    "Resource allocation",
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

        {/* Operations Dashboard */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Operations Command Center
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get complete visibility into your hiring operations
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-700">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Active Requisitions",
                      value: "47",
                      change: "+23%",
                      icon: FileText,
                      color: "text-blue-600",
                    },
                    {
                      title: "Avg. Time to Fill",
                      value: "18 days",
                      change: "-42%",
                      icon: Clock,
                      color: "text-green-600",
                    },
                    {
                      title: "Compliance Score",
                      value: "98%",
                      change: "+12%",
                      icon: Shield,
                      color: "text-purple-600",
                    },
                    {
                      title: "Candidate Satisfaction",
                      value: "4.8/5",
                      change: "+15%",
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
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Operational Excellence
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Measurable improvements across all key metrics
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  stat: "65%",
                  label: "Faster processing",
                  description:
                    "Automated workflows eliminate manual bottlenecks",
                  color: "text-blue-600",
                },
                {
                  icon: DollarSign,
                  stat: "40%",
                  label: "Cost reduction",
                  description:
                    "Optimize resource allocation and eliminate waste",
                  color: "text-green-600",
                },
                {
                  icon: Shield,
                  stat: "99%",
                  label: "Compliance rate",
                  description: "Automated checks ensure consistent compliance",
                  color: "text-purple-600",
                },
                {
                  icon: Star,
                  stat: "4.9/5",
                  label: "Candidate satisfaction",
                  description: "Consistent, personalized candidate experience",
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
                  How people operations teams leverage Leelu for maximum impact
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Workflow Standardization",
                  description:
                    "Create consistent, repeatable hiring processes that deliver predictable results across all departments.",
                  benefits: [
                    "Standardize interview processes and evaluation criteria",
                    "Automate approval workflows and documentation",
                    "Ensure consistent candidate communication",
                  ],
                  icon: Activity,
                },
                {
                  title: "Compliance Automation",
                  description:
                    "Maintain regulatory compliance and reduce legal risk with automated checks and documentation.",
                  benefits: [
                    "Automated EEO compliance tracking and reporting",
                    "Consistent documentation and audit trails",
                    "Policy enforcement across all hiring activities",
                  ],
                  icon: Shield,
                },
                {
                  title: "Performance Analytics",
                  description:
                    "Gain deep insights into hiring performance and identify opportunities for optimization.",
                  benefits: [
                    "Track key metrics across all departments and roles",
                    "Identify bottlenecks and process improvements",
                    "Measure ROI and demonstrate value to leadership",
                  ],
                  icon: BarChart3,
                },
                {
                  title: "Candidate Experience",
                  description:
                    "Deliver exceptional candidate experiences that strengthen your employer brand and improve offer acceptance rates.",
                  benefits: [
                    "Personalized communication throughout the hiring process",
                    "Self-service candidate portals for status updates",
                    "Automated feedback collection and analysis",
                  ],
                  icon: UserCheck,
                },
              ].map((useCase, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <useCase.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mr-4" />
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
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-indigo-200 dark:border-indigo-700 shadow-xl">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-8">
                    "Leelu transformed our people operations from reactive to
                    proactive. We now have complete visibility into our hiring
                    processes, automated compliance, and our candidate
                    satisfaction scores have never been higher. It's like having
                    a dedicated operations team working 24/7."
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      LT
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Lisa Thompson
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Head of People Operations, InnovateCorp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Operations?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join people operations leaders who've transformed their hiring
                processes with intelligent automation and data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Optimizing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full font-semibold bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-indigo-100 mt-4">
                No credit card required. Set up in under 5 minutes.
              </p>
            </ScrollReveal>
          </div>
        </section>
        {/* Modal Overlay */}
        <VideoContainer
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      </div>
    </PageLayout>
  );
}

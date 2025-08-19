"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Target,
  DollarSign,
  BarChart3,
  Calculator,
  CreditCard,
  Building,
  Briefcase,
  PieChart,
  FileText,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function FinancialServicesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700">
                  <Banknote className="h-4 w-4 mr-2" />
                  Financial Services Industry
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Analyze and optimize
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    finance recruitment strategies
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Find and engage top financial professionals, analysts,
                  advisors, and executives with AI-powered precision. Navigate
                  complex compliance requirements while building high-performing
                  financial teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Hiring Financial Talent
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

        {/* Financial Services Hiring Challenges */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Financial Services Hiring Challenges
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The unique challenges of recruiting in the highly regulated
                  financial sector
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  description:
                    "Complex licensing requirements, background checks, and regulatory approvals create lengthy hiring processes.",
                  color: "text-red-500",
                },
                {
                  icon: Target,
                  title: "Specialized Skills",
                  description:
                    "Financial expertise, certifications, and industry knowledge are highly specialized and in demand.",
                  color: "text-orange-500",
                },
                {
                  icon: DollarSign,
                  title: "Compensation Competition",
                  description:
                    "High compensation expectations and competitive market make talent acquisition expensive.",
                  color: "text-yellow-500",
                },
                {
                  icon: Clock,
                  title: "Market Volatility Impact",
                  description:
                    "Economic cycles and market conditions significantly impact hiring needs and candidate availability.",
                  color: "text-blue-500",
                },
                {
                  icon: Users,
                  title: "Cultural Fit",
                  description:
                    "Finding professionals who align with risk management culture and ethical standards is critical.",
                  color: "text-green-500",
                },
                {
                  icon: TrendingUp,
                  title: "Digital Transformation",
                  description:
                    "Need for professionals who understand both traditional finance and emerging fintech trends.",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-emerald-500">
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

        {/* Financial Roles */}
        <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Financial Roles We Excel At
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized AI sourcing for every financial services
                  discipline
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Investment Banking",
                  specialties: [
                    "Investment Bankers",
                    "Analysts",
                    "Associates",
                    "Managing Directors",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: PieChart,
                  title: "Wealth Management",
                  specialties: [
                    "Financial Advisors",
                    "Portfolio Managers",
                    "Private Bankers",
                    "Relationship Managers",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Calculator,
                  title: "Risk Management",
                  specialties: [
                    "Risk Analysts",
                    "Compliance Officers",
                    "Credit Risk",
                    "Market Risk",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: TrendingUp,
                  title: "Trading & Sales",
                  specialties: [
                    "Traders",
                    "Sales Traders",
                    "Quantitative Analysts",
                    "Structuring",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Building,
                  title: "Corporate Finance",
                  specialties: [
                    "CFOs",
                    "Controllers",
                    "Treasury",
                    "Financial Planning & Analysis",
                  ],
                  color: "text-orange-600",
                },
                {
                  icon: CreditCard,
                  title: "Commercial Banking",
                  specialties: [
                    "Commercial Lenders",
                    "Credit Analysts",
                    "Relationship Managers",
                    "Underwriters",
                  ],
                  color: "text-indigo-600",
                },
                {
                  icon: FileText,
                  title: "Insurance",
                  specialties: [
                    "Actuaries",
                    "Underwriters",
                    "Claims Adjusters",
                    "Insurance Brokers",
                  ],
                  color: "text-teal-600",
                },
                {
                  icon: Briefcase,
                  title: "FinTech",
                  specialties: [
                    "Product Managers",
                    "Data Scientists",
                    "Blockchain Developers",
                    "RegTech Specialists",
                  ],
                  color: "text-pink-600",
                },
              ].map((role, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <role.icon
                        className={`h-12 w-12 ${role.color} mx-auto mb-4`}
                      />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        {role.title}
                      </h3>
                      <div className="space-y-2">
                        {role.specialties.map((specialty, specialtyIndex) => (
                          <div
                            key={specialtyIndex}
                            className="text-sm bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300"
                          >
                            {specialty}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Powered Financial Sourcing */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI-Powered Financial Sourcing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  How Leelu revolutionizes financial services talent acquisition
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Regulatory Compliance Screening",
                  description:
                    "Automatically verify licenses, certifications, and regulatory requirements across jurisdictions.",
                  features: [
                    "Series licenses verification",
                    "CFA, FRM, CPA certification checks",
                    "FINRA background screening",
                    "Multi-jurisdiction compliance",
                  ],
                  icon: Shield,
                  color: "text-blue-600",
                },
                {
                  title: "Financial Expertise Assessment",
                  description:
                    "Evaluate technical skills, market knowledge, and specialized financial experience.",
                  features: [
                    "Asset class specialization",
                    "Financial modeling expertise",
                    "Market sector knowledge",
                    "Risk management experience",
                  ],
                  icon: BarChart3,
                  color: "text-purple-600",
                },
                {
                  title: "Cultural & Ethics Alignment",
                  description:
                    "Assess alignment with fiduciary responsibility, risk culture, and ethical standards.",
                  features: [
                    "Fiduciary responsibility mindset",
                    "Risk management culture fit",
                    "Ethical decision-making patterns",
                    "Client-first orientation",
                  ],
                  icon: Users,
                  color: "text-blue-600",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <item.icon className={`h-12 w-12 ${item.color} mb-6`} />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

        {/* Success Metrics */}
        <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Financial Services Success
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Proven results for financial institutions and firms
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  stat: "55%",
                  label: "Faster compliance clearing",
                  description:
                    "Automated verification reduces regulatory approval time",
                  color: "text-blue-600",
                },
                {
                  icon: Shield,
                  stat: "98%",
                  label: "Regulatory accuracy",
                  description: "Compliance screening accuracy rate",
                  color: "text-purple-600",
                },
                {
                  icon: DollarSign,
                  stat: "40%",
                  label: "Cost reduction",
                  description:
                    "Lower recruiting costs through efficient sourcing",
                  color: "text-blue-600",
                },
                {
                  icon: Star,
                  stat: "4.7/5",
                  label: "Quality rating",
                  description: "Average hiring manager satisfaction score",
                  color: "text-purple-600",
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

        {/* Case Study */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Financial Services Success Story
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Premier Investment Bank
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Global investment bank, 15,000+ employees
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                        Challenge
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Needed 50+ investment banking analysts</li>
                        <li>• Complex regulatory approval process</li>
                        <li>• High competition for top-tier talent</li>
                        <li>• Strict compliance and background requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-600 dark:text-green-400 mb-4">
                        Results
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Hired 52 analysts in 5 months</li>
                        <li>• 100% regulatory compliance rate</li>
                        <li>• 45% reduction in time-to-hire</li>
                        <li>• 85% offer acceptance rate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-lg p-6 border border-emerald-200 dark:border-emerald-700">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-gray-900 dark:text-white text-center mb-4">
                      "Leelu's compliance screening capabilities were
                      game-changing. We could identify qualified candidates who
                      would pass our rigorous background checks before investing
                      time in interviews. The AI understood our specific
                      regulatory requirements perfectly."
                    </blockquote>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        James Patterson
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Managing Director, Talent Acquisition
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Financial-Specific Features */}
        <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Built for Financial Services
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized features designed for financial services
                  recruiting
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Regulatory Database Integration",
                  description:
                    "Real-time integration with FINRA, SEC, and other regulatory databases for instant verification.",
                  icon: Shield,
                  features: [
                    "FINRA BrokerCheck integration",
                    "SEC registration verification",
                    "State licensing checks",
                  ],
                },
                {
                  title: "Financial Modeling Assessment",
                  description:
                    "Evaluate technical skills in financial modeling, valuation, and quantitative analysis.",
                  icon: Calculator,
                  features: [
                    "Excel/VBA proficiency",
                    "Valuation methodology",
                    "Risk modeling expertise",
                  ],
                },
                {
                  title: "Market Sector Specialization",
                  description:
                    "Match candidates based on specific industry sectors and market expertise.",
                  icon: TrendingUp,
                  features: [
                    "Industry sector experience",
                    "Market cycle knowledge",
                    "Product specialization",
                  ],
                },
                {
                  title: "Compensation Benchmarking",
                  description:
                    "AI-powered compensation analysis to ensure competitive offers within market ranges.",
                  icon: DollarSign,
                  features: [
                    "Market rate analysis",
                    "Bonus structure optimization",
                    "Equity compensation modeling",
                  ],
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <feature.icon className="h-12 w-12 text-blue-600 dark:text-emerald-400 mb-6" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {item}
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

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Hiring?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join financial institutions who've streamlined their recruiting
                process while maintaining the highest compliance and quality
                standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Hiring Financial Talent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold bg-transparent"
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

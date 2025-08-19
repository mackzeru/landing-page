"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  Cog,
  Wrench,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Target,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  HardHat,
  Truck,
  BarChart3,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function ManufacturingPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 text-blue-700 dark:text-orange-300 border-orange-200 dark:border-blue-700">
                  <Factory className="h-4 w-4 mr-2" />
                  Manufacturing Industry
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Streamline hiring processes
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
                    for skilled manufacturing
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Find and engage skilled technicians, engineers, operators, and
                  manufacturing leaders with AI-powered precision. Build
                  resilient manufacturing teams that drive operational
                  excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Hiring Manufacturing Talent
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

        {/* Manufacturing Hiring Challenges */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Manufacturing Hiring Challenges
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The unique challenges of recruiting in the manufacturing
                  sector
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Skills Gap Crisis",
                  description:
                    "Aging workforce and lack of skilled technicians create critical gaps in manufacturing capabilities.",
                  color: "text-red-500",
                },
                {
                  icon: HardHat,
                  title: "Safety Requirements",
                  description:
                    "Strict safety certifications and training requirements must be verified for all manufacturing roles.",
                  color: "text-orange-500",
                },
                {
                  icon: Clock,
                  title: "Production Demands",
                  description:
                    "24/7 operations and shift work requirements make scheduling and availability critical factors.",
                  color: "text-yellow-500",
                },
                {
                  icon: Cog,
                  title: "Technical Expertise",
                  description:
                    "Complex machinery and specialized processes require specific technical skills and certifications.",
                  color: "text-blue-500",
                },
                {
                  icon: Target,
                  title: "Location Constraints",
                  description:
                    "Manufacturing facilities often in specific locations limit the available talent pool significantly.",
                  color: "text-green-500",
                },
                {
                  icon: TrendingUp,
                  title: "Industry 4.0 Transition",
                  description:
                    "Need for workers who understand both traditional manufacturing and new digital technologies.",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-orange-500">
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

        {/* Manufacturing Roles */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Manufacturing Roles We Excel At
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized AI sourcing for every manufacturing discipline
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Cog,
                  title: "Production",
                  specialties: [
                    "Machine Operators",
                    "Assembly Workers",
                    "Production Supervisors",
                    "Line Leaders",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Wrench,
                  title: "Maintenance",
                  specialties: [
                    "Maintenance Technicians",
                    "Electricians",
                    "Mechanics",
                    "Millwrights",
                  ],
                  color: "text-red-600",
                },
                {
                  icon: Settings,
                  title: "Engineering",
                  specialties: [
                    "Manufacturing Engineers",
                    "Process Engineers",
                    "Quality Engineers",
                    "Design Engineers",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  specialties: [
                    "Quality Inspectors",
                    "QA Managers",
                    "Six Sigma Specialists",
                    "Compliance Officers",
                  ],
                  color: "text-green-600",
                },
                {
                  icon: Truck,
                  title: "Supply Chain",
                  specialties: [
                    "Supply Chain Managers",
                    "Logistics Coordinators",
                    "Procurement Specialists",
                    "Planners",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: BarChart3,
                  title: "Operations",
                  specialties: [
                    "Plant Managers",
                    "Operations Directors",
                    "Production Planners",
                    "Lean Specialists",
                  ],
                  color: "text-indigo-600",
                },
                {
                  icon: HardHat,
                  title: "Safety & Environment",
                  specialties: [
                    "Safety Managers",
                    "EHS Specialists",
                    "Environmental Engineers",
                    "Safety Coordinators",
                  ],
                  color: "text-teal-600",
                },
                {
                  icon: Zap,
                  title: "Automation",
                  specialties: [
                    "Automation Engineers",
                    "PLC Programmers",
                    "Robotics Technicians",
                    "Controls Engineers",
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

        {/* AI-Powered Manufacturing Sourcing */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI-Powered Manufacturing Sourcing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  How Leelu revolutionizes manufacturing talent acquisition
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Skills Assessment",
                  description:
                    "Evaluate hands-on technical skills, machinery experience, and manufacturing process knowledge.",
                  features: [
                    "Equipment and machinery experience",
                    "Manufacturing process knowledge",
                    "Technical certification verification",
                    "Hands-on skills assessment",
                  ],
                  icon: Cog,
                  color: "text-purple-600",
                },
                {
                  title: "Safety & Compliance Screening",
                  description:
                    "Verify safety certifications, training records, and compliance with manufacturing standards.",
                  features: [
                    "OSHA certification verification",
                    "Safety training records",
                    "Incident history screening",
                    "Compliance standard knowledge",
                  ],
                  icon: Shield,
                  color: "text-red-600",
                },
                {
                  title: "Shift & Location Matching",
                  description:
                    "Match candidates based on shift preferences, location proximity, and availability requirements.",
                  features: [
                    "Shift preference alignment",
                    "Geographic proximity analysis",
                    "Availability and flexibility",
                    "Transportation considerations",
                  ],
                  icon: Clock,
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
        <section className="py-20 px-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Manufacturing Hiring Success
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Proven results for manufacturing companies nationwide
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  stat: "62%",
                  label: "Faster time-to-fill",
                  description:
                    "From 45 days to 17 days average for skilled positions",
                  color: "text-purple-600",
                },
                {
                  icon: Shield,
                  stat: "97%",
                  label: "Safety compliance",
                  description:
                    "Candidates meet all safety and certification requirements",
                  color: "text-red-600",
                },
                {
                  icon: DollarSign,
                  stat: "35%",
                  label: "Cost reduction",
                  description: "Lower recruiting costs and reduced agency fees",
                  color: "text-blue-600",
                },
                {
                  icon: Star,
                  stat: "4.6/5",
                  label: "Quality rating",
                  description: "Average hiring manager satisfaction score",
                  color: "text-green-600",
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
                  Manufacturing Success Story
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Factory className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Precision Manufacturing Corp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Automotive parts manufacturer, 1,200+ employees
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                        Challenge
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Needed 75 skilled technicians for expansion</li>
                        <li>• Critical shortage of CNC operators</li>
                        <li>• Strict safety and quality requirements</li>
                        <li>• Multiple shift coverage needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
                        Results
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Hired 78 technicians in 4 months</li>
                        <li>• 100% safety certification compliance</li>
                        <li>• 50% reduction in time-to-hire</li>
                        <li>• 92% retention rate after 6 months</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-lg p-6 border border-orange-200 dark:border-blue-700">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-gray-900 dark:text-white text-center mb-4">
                      "Leelu solved our skilled labor shortage. The AI's ability
                      to match technical skills and verify safety certifications
                      was incredible. We found experienced CNC operators who
                      were ready to start immediately and fit perfectly with our
                      team culture."
                    </blockquote>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Robert Johnson
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        VP of Operations, Precision Manufacturing Corp
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Manufacturing-Specific Features */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Built for Manufacturing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized features designed for manufacturing recruiting
                  challenges
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Equipment Experience Matching",
                  description:
                    "Match candidates based on specific machinery, equipment, and manufacturing system experience.",
                  icon: Cog,
                  features: [
                    "CNC machine experience",
                    "PLC programming skills",
                    "Robotics operation",
                  ],
                },
                {
                  title: "Safety Certification Tracking",
                  description:
                    "Verify and track safety certifications, training records, and compliance requirements.",
                  icon: Shield,
                  features: [
                    "OSHA 10/30 certification",
                    "Forklift operation licenses",
                    "Confined space training",
                  ],
                },
                {
                  title: "Shift Pattern Optimization",
                  description:
                    "Optimize hiring for different shifts and ensure adequate coverage across all operations.",
                  icon: Clock,
                  features: [
                    "24/7 shift coverage",
                    "Weekend availability",
                    "Overtime flexibility",
                  ],
                },
                {
                  title: "Lean Manufacturing Knowledge",
                  description:
                    "Identify candidates with experience in lean manufacturing, Six Sigma, and continuous improvement.",
                  icon: TrendingUp,
                  features: [
                    "Six Sigma certification",
                    "Kaizen experience",
                    "5S methodology",
                  ],
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <feature.icon className="h-12 w-12 text-purple-600 dark:text-orange-400 mb-6" />
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
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Manufacturing Team?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Join manufacturing companies who've solved their skilled labor
                shortage with AI-powered talent acquisition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Hiring Manufacturing Talent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-orange-100 mt-4">
                No credit card required. Set up in under 5 minutes.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

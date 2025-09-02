"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  Heart,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Target,
  DollarSign,
  UserCheck,
  Activity,
  Clipboard,
  Microscope,
  Pill,
  Brain,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { useState } from "react";
import VideoContainer from "@/app/(features)/_component/VideoContainer";
import Link from "next/link";

export default function HealthcarePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 text-blue-700 dark:text-red-300 border-red-200 dark:border-blue-700">
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Healthcare Industry
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Match healthcare professionals
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    to critical roles
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Find and engage qualified nurses, physicians, specialists, and
                  healthcare administrators with AI-powered precision. Ensure
                  patient care continuity with faster, more accurate healthcare
                  hiring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#pricing">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Hiring Healthcare Talent
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Button
                    onClick={() => setIsDialogOpen(true)}
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

        {/* Healthcare Hiring Challenges */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Healthcare Hiring Challenges
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The critical challenges facing healthcare recruitment today
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Staffing Shortages",
                  description:
                    "Critical shortages of nurses, physicians, and specialists create urgent hiring needs that can't wait.",
                  color: "text-red-500",
                },
                {
                  icon: Shield,
                  title: "Licensing & Compliance",
                  description:
                    "Complex licensing requirements, certifications, and compliance standards vary by state and specialty.",
                  color: "text-orange-500",
                },
                {
                  icon: Clock,
                  title: "Time-Critical Hiring",
                  description:
                    "Patient care depends on quick staffing decisions, but thorough vetting can't be compromised.",
                  color: "text-yellow-500",
                },
                {
                  icon: Target,
                  title: "Specialized Skills",
                  description:
                    "Matching specific medical specialties, experience levels, and care settings requires deep expertise.",
                  color: "text-blue-500",
                },
                {
                  icon: DollarSign,
                  title: "Cost Pressures",
                  description:
                    "Healthcare organizations face budget constraints while competing for limited talent pools.",
                  color: "text-green-500",
                },
                {
                  icon: Heart,
                  title: "Cultural Fit",
                  description:
                    "Healthcare requires compassionate professionals who align with patient-centered care values.",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-red-500">
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

        {/* Healthcare Roles */}
        <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Healthcare Roles We Excel At
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized AI sourcing for every healthcare discipline
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Stethoscope,
                  title: "Physicians",
                  specialties: [
                    "Primary Care",
                    "Specialists",
                    "Hospitalists",
                    "Emergency Medicine",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Heart,
                  title: "Nursing",
                  specialties: [
                    "RNs",
                    "LPNs",
                    "Nurse Practitioners",
                    "Specialty Nurses",
                  ],
                  color: "text-pink-600",
                },
                {
                  icon: Brain,
                  title: "Mental Health",
                  specialties: [
                    "Psychiatrists",
                    "Psychologists",
                    "Therapists",
                    "Counselors",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Activity,
                  title: "Allied Health",
                  specialties: [
                    "Physical Therapy",
                    "Occupational Therapy",
                    "Respiratory",
                    "Radiology",
                  ],
                  color: "text-blue-600",
                },
                {
                  icon: Pill,
                  title: "Pharmacy",
                  specialties: [
                    "Clinical Pharmacists",
                    "Hospital Pharmacy",
                    "Retail Pharmacy",
                    "Specialty Pharmacy",
                  ],
                  color: "text-green-600",
                },
                {
                  icon: Microscope,
                  title: "Laboratory",
                  specialties: [
                    "Medical Technologists",
                    "Lab Technicians",
                    "Pathologists",
                    "Research Scientists",
                  ],
                  color: "text-indigo-600",
                },
                {
                  icon: Clipboard,
                  title: "Administration",
                  specialties: [
                    "Healthcare Executives",
                    "Practice Managers",
                    "Quality Directors",
                    "Compliance",
                  ],
                  color: "text-orange-600",
                },
                {
                  icon: UserCheck,
                  title: "Support Staff",
                  specialties: [
                    "Medical Assistants",
                    "Patient Care",
                    "Health Information",
                    "Social Workers",
                  ],
                  color: "text-teal-600",
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

        {/* AI-Powered Healthcare Sourcing */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI-Powered Healthcare Sourcing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  How Leelu revolutionizes healthcare talent acquisition
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Credential Verification",
                  description:
                    "Automatically verify licenses, certifications, and credentials across multiple states and specialties.",
                  features: [
                    "Multi-state license verification",
                    "Certification status checking",
                    "Continuing education tracking",
                    "Board certification validation",
                  ],
                  icon: Shield,
                  color: "text-purple-600",
                },
                {
                  title: "Experience Matching",
                  description:
                    "Match candidates based on specific healthcare settings, patient populations, and clinical experience.",
                  features: [
                    "Care setting experience (ICU, ER, etc.)",
                    "Patient population specialization",
                    "Procedure and treatment experience",
                    "Technology and equipment familiarity",
                  ],
                  icon: Target,
                  color: "text-pink-600",
                },
                {
                  title: "Compassion Assessment",
                  description:
                    "Evaluate soft skills, empathy, and cultural fit essential for patient-centered care.",
                  features: [
                    "Patient interaction skills",
                    "Team collaboration ability",
                    "Stress management capabilities",
                    "Cultural competency indicators",
                  ],
                  icon: Heart,
                  color: "text-purple-600",
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
        <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Healthcare Hiring Success
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Proven results for healthcare organizations nationwide
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  stat: "68%",
                  label: "Faster time-to-fill",
                  description:
                    "From 60 days to 19 days average for nursing positions",
                  color: "text-purple-600",
                },
                {
                  icon: Shield,
                  stat: "99%",
                  label: "Credential accuracy",
                  description: "Automated verification ensures compliance",
                  color: "text-pink-600",
                },
                {
                  icon: DollarSign,
                  stat: "45%",
                  label: "Cost reduction",
                  description: "Lower agency fees and reduced overtime costs",
                  color: "text-purple-600",
                },
                {
                  icon: Star,
                  stat: "4.9/5",
                  label: "Quality rating",
                  description: "Average hiring manager satisfaction score",
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

        {/* Case Study */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Healthcare Success Story
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Regional Medical Center
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      500-bed hospital system, 3,000+ employees
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-600 dark:text-red-400 mb-4">
                        Challenge
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>
                          • Critical nursing shortage affecting patient care
                        </li>
                        <li>• 90+ day average time-to-fill for RN positions</li>
                        <li>• High agency costs and overtime expenses</li>
                        <li>• Complex multi-state licensing requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
                        Results
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Filled 85 nursing positions in 3 months</li>
                        <li>• Reduced time-to-fill to 28 days</li>
                        <li>• 60% reduction in agency spending</li>
                        <li>• 95% credential verification accuracy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-lg p-6 border border-red-200 dark:border-blue-700">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-gray-900 dark:text-white text-center mb-4">
                      "Leelu helped us solve our nursing shortage crisis. The
                      AI's ability to verify credentials and match experience
                      levels saved us countless hours while ensuring we hired
                      qualified, compassionate nurses who fit our culture."
                    </blockquote>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Dr. Maria Rodriguez
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Chief Nursing Officer, Regional Medical Center
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Healthcare-Specific Features */}
        <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Built for Healthcare
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized features designed for healthcare recruiting
                  challenges
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "License Tracking & Alerts",
                  description:
                    "Monitor license expiration dates and renewal requirements across all states and specialties.",
                  icon: Shield,
                  features: [
                    "Multi-state license monitoring",
                    "Expiration alerts",
                    "Renewal tracking",
                  ],
                },
                {
                  title: "Shift & Schedule Matching",
                  description:
                    "Match candidates based on shift preferences, availability, and scheduling flexibility.",
                  icon: Clock,
                  features: [
                    "Shift preference matching",
                    "Availability tracking",
                    "Float pool compatibility",
                  ],
                },
                {
                  title: "Clinical Experience Depth",
                  description:
                    "Evaluate years of experience in specific units, procedures, and patient populations.",
                  icon: Activity,
                  features: [
                    "Unit-specific experience",
                    "Procedure competency",
                    "Patient acuity levels",
                  ],
                },
                {
                  title: "Cultural Fit Assessment",
                  description:
                    "Assess alignment with healthcare values, patient-centered care, and team collaboration.",
                  icon: Heart,
                  features: [
                    "Values alignment",
                    "Patient advocacy",
                    "Team collaboration skills",
                  ],
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <feature.icon className="h-12 w-12 text-purple-600 dark:text-red-400 mb-6" />
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
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Solve Your Healthcare Staffing Crisis?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Join healthcare organizations who've transformed their hiring
                process and improved patient care with AI-powered talent
                acquisition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Hiring Healthcare Talent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-red-100 mt-4">
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

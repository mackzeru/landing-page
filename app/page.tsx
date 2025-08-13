"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Zap, BarChart3, Linkedin, Globe } from "lucide-react";
import { RotatingTrustBadges } from "@/components/custom/RotatingTrustBadges";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { CopilotScrollSection } from "@/components/custom/CopilotScrollSection";
import { FAQSection } from "@/components/custom/FAQSection";
import { EnhancedTestimonials } from "@/components/custom/testimoniyal";
import { EnhancedPricing } from "@/components/custom/Pricing";
import { EnhancedTimeline } from "@/components/custom/TimelineSection";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import CompetitiveAdvantages from "@/components/custom/CompetitiveAdvantages";
import { IntegrationDashboard } from "@/components/custom/IntegrationDashbord";
import Navigation from "@/components/custom/Navigation";
import { Link } from "react-scroll";
export default function LeeluAI() {
  return (
    <div className="min-h-screen bg-blue-300   dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="w-full border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src={logo} // Replace with your actual path
                alt="Leelu.ai Logo"
                width={40}
                height={40}
                className="object-contain"
              />

              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Leelu.ai
              </span>
            </div>

            {/* Navigation */}
            <Navigation />

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              {/* Mobile Theme Toggle */}
              <div className="md:hidden">{/* <ThemeToggle /> */}</div>
              <Link
                to="pricing"
                className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white 
                  px-4 py-2 md:px-1 md:py-1 lg:px-8 lg:py-1
                  rounded-full font-medium
                  text-sm sm:text-base md:text-lg
                  transition-all duration-300
                  transform hover:scale-105 active:scale-95
                  shadow-md hover:shadow-lg
                  inline-block"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <Hero />

      {/* Rotating Trust Badges */}
      <RotatingTrustBadges />

      {/* 24-Hour Timeline */}
      <EnhancedTimeline />

      {/* Multi-Source Search Section - Enhanced */}
      <section
        className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
        id={"product"}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Search Every Platform At Once
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                While competitors search sequentially, we hit all sources
                simultaneously - getting results 10x faster
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "LinkedIn Plugin",
                desc: "Exclusive direct integration",
                color: "from-blue-500 to-blue-600",
                icon: Linkedin,
                badge: "Exclusive",
              },
              {
                name: "Job Boards",
                desc: "Indeed, Monster, CareerBuilder",
                color: "from-purple-500 to-purple-600",
                icon: Globe,
                badge: "Multi-Source",
              },
              {
                name: "ATS Systems",
                desc: "Greenhouse, Lever, Workday",
                color: "from-green-500 to-green-600",
                icon: BarChart3,
                badge: "Enterprise",
              },
              {
                name: "Your Database",
                desc: "Internal candidate pools",
                color: "from-orange-500 to-orange-600",
                icon: Users,
                badge: "Integrated",
              },
            ].map((platform, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="group border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 transform cursor-pointer overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <platform.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {platform.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {platform.desc}
                      </p>
                      <Badge
                        className={`bg-gradient-to-r ${platform.color} text-white text-sm px-3 py-1 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {platform.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={800}>
            <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 bg-blue-100 dark:bg-gray-900 shadow-xl border border-blue-200 dark:border-gray-700">
              {/* Animated Blurred Background Blobs */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite] top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite] bottom-0 right-0" />
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
                    🚀 Exclusive LinkedIn Plugin
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our exclusive LinkedIn plugin sources candidates directly from
                  your Recruiter account — no scraping, no delays — just
                  precision and speed.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  {["Direct API", "No Scraping", "Enterprise Security"].map(
                    (tag, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 text-sm px-4 py-1.5 rounded-full backdrop-blur-md hover:scale-105 transition-transform duration-200 hover:text-white"
                      >
                        {tag}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Copilot Scroll Section */}
      <CopilotScrollSection />

      {/* Competitive Advantages - Enhanced */}
      <CompetitiveAdvantages />
      <IntegrationDashboard />

      {/* Testimonials */}
      <EnhancedTestimonials />

      {/* Pricing Section */}
      <EnhancedPricing />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section - Light Blue Theme */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="cta-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#e0e7ff"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
            <circle
              cx="200"
              cy="200"
              r="300"
              fill="url(#gradient1)"
              opacity="0.1"
            />
            <circle
              cx="1200"
              cy="400"
              r="400"
              fill="url(#gradient2)"
              opacity="0.1"
            />
            <defs>
              <radialGradient id="gradient1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </radialGradient>
              <radialGradient id="gradient2">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/50 dark:border-gray-700/50">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                Ready to transform your hiring?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                Join thousands of recruiting teams who've made the switch to
                autonomous AI recruiting
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
                <Link
                  to="pricing"
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white 
            px-4 py-2 md:px-1 md:py-1 lg:px-8 lg:py-2
            rounded-full font-medium
            text-sm sm:text-base md:text-lg
            transition-all duration-300
            transform hover:scale-105 active:scale-95
            shadow-md hover:shadow-lg
            inline-block"
                >
                  Start Free Trial
                </Link>

                <Button
                  variant="outline"
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg lg:text-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Talk to Our Team
                </Button>
              </div>

              {/* Highlights */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-10 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer with Quarter-Circle Background */}
      <Footer />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Filter,
  BarChart3,
  Users,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function SourcingPage() {
  const platforms = [
    {
      name: "LinkedIn",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      count: "500M+",
    },
    {
      name: "Indeed",
      logo: "/placeholder.svg?height=40&width=40&text=Indeed",
      count: "250M+",
    },
    {
      name: "Monster",
      logo: "/placeholder.svg?height=40&width=40&text=Monster",
      count: "100M+",
    },
    {
      name: "CareerBuilder",
      logo: "/placeholder.svg?height=40&width=40&text=CB",
      count: "80M+",
    },
    {
      name: "Greenhouse",
      logo: "/placeholder.svg?height=40&width=40&text=GH",
      count: "ATS",
    },
    {
      name: "Lever",
      logo: "/placeholder.svg?height=40&width=40&text=Lever",
      count: "ATS",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-indigo-50/30 to-blue-50/30 dark:from-purple-900/10 dark:via-indigo-900/5 dark:to-blue-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="sourcing-grid"
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
            <rect width="100%" height="100%" fill="url(#sourcing-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 mb-6 text-base px-4 py-2">
                  <Search className="h-4 w-4 mr-2" />
                  Multi-Source Search
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Search Every Platform
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                    Simultaneously
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Why search platforms one by one when you can search them all
                  at once? Our AI scans 10+ platforms simultaneously with
                  PhD-level precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    See It In Action
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Live Search Results
                  </h3>
                  <div className="space-y-4">
                    {platforms.map((platform, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={platform.logo || "/placeholder.svg"}
                            alt={platform.name}
                            className="w-8 h-8 rounded"
                          />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {platform.name}
                          </span>
                        </div>
                        <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                          {platform.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        850M+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Total Candidate Profiles
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Platform Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Search Everywhere, Find Anyone
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI searches across all major platforms simultaneously, not
                sequentially
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: "Professional Networks",
                platforms: ["LinkedIn (Direct API)", "AngelList", "GitHub"],
                icon: Users,
                color: "from-blue-500 to-blue-600",
              },
              {
                category: "Job Boards",
                platforms: ["Indeed", "Monster", "CareerBuilder"],
                icon: Globe,
                color: "from-purple-500 to-purple-600",
              },
              {
                category: "ATS Systems",
                platforms: ["Greenhouse", "Lever", "Workday"],
                icon: Database,
                color: "from-green-500 to-green-600",
              },
            ].map((category, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.platforms.map((platform, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {platform}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* LinkedIn Exclusive */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">
                  🚀 Exclusive LinkedIn Integration
                </h3>
                <p className="text-xl text-blue-100 mb-8">
                  Direct API access to LinkedIn Recruiter - a feature
                  competitors can't match. No scraping, fully compliant.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-2xl font-bold mb-2">500M+</div>
                    <div className="text-blue-100">Professional Profiles</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-2xl font-bold mb-2">Real-time</div>
                    <div className="text-blue-100">Data Access</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-2xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                PhD-Level Search Intelligence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI doesn't just keyword match - it understands context,
                skills, and potential
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Intelligent Query Processing",
                description:
                  "AI analyzes your job requirements and creates optimized search queries for each platform",
                icon: Filter,
              },
              {
                step: "02",
                title: "Parallel Platform Search",
                description:
                  "Simultaneously searches all connected platforms using platform-specific APIs and algorithms",
                icon: Zap,
              },
              {
                step: "03",
                title: "Smart Candidate Scoring",
                description:
                  "PhD-level analysis evaluates each candidate's fit based on skills, experience, and potential",
                icon: BarChart3,
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Stop Searching One Platform at a Time
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join the recruiting teams who've discovered the power of
              simultaneous multi-platform search
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
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

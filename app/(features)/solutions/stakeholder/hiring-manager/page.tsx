"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Search,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Users,
  Star,
  Clock,
  Target,
  Database,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import VideoContainer from "@/app/(features)/_component/VideoContainer";
import { useState } from "react";
import Link from "next/link";

export default function HiringManagersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/20 dark:to-orange-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                  <Briefcase className="h-4 w-4 mr-2" />
                  For Hiring Managers
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Search Every Platform
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                    Simultaneously
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Why search one by one when you can launch a single search
                  across 10+ platforms at once? Leelu's AI sources candidates in
                  parallel — not sequentially — with intelligent filtering and
                  full compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#pricing">
                    <Button className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Sourcing Smarter Today
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

        {/* Live Search Results Demo */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Live Multi-Platform Search Results
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                  Watch as Leelu searches across all platforms simultaneously
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/10 dark:to-orange-900/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "LinkedIn",
                      results: "1,247 candidates",
                      status: "searching",
                      color: "bg-blue-500",
                    },
                    {
                      name: "Indeed",
                      results: "892 candidates",
                      status: "complete",
                      color: "bg-green-500",
                    },
                    {
                      name: "Monster",
                      results: "634 candidates",
                      status: "complete",
                      color: "bg-purple-500",
                    },
                    {
                      name: "CareerBuilder",
                      results: "423 candidates",
                      status: "searching",
                      color: "bg-orange-500",
                    },
                    {
                      name: "Greenhouse",
                      results: "156 candidates",
                      status: "complete",
                      color: "bg-teal-500",
                    },
                    {
                      name: "Lever",
                      results: "89 candidates",
                      status: "complete",
                      color: "bg-indigo-500",
                    },
                  ].map((platform, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full ${platform.color} mr-3`}
                          ></div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {platform.name}
                          </span>
                        </div>
                        {platform.status === "searching" ? (
                          <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {platform.results}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    Total: 3,441 candidates found in 47 seconds
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Traditional sequential search would take 8+ minutes
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Search Everywhere Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/10 dark:to-orange-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Search Everywhere, Find Anyone
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Leelu searches across all connected platforms in parallel —
                  not one after another — cutting sourcing time by up to 90%.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Professional Networks
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        LinkedIn (via Browser Plugin)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        AngelList
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        GitHub
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Job Boards
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Indeed
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Monster
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        CareerBuilder
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Database className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      ATS & CRM Systems
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Greenhouse
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Lever
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Workday
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* LinkedIn Integration */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Exclusive LinkedIn Integration
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Our browser-based plugin connects directly to your LinkedIn
                  Recruiter account — no scraping, no risk.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Compliant & Secure",
                  description:
                    "Operates within LinkedIn's API terms and GDPR guidelines",
                  color: "text-green-600",
                },
                {
                  icon: Zap,
                  title: "No Delays",
                  description:
                    "Real-time access to your network and search results",
                  color: "text-blue-600",
                },
                {
                  icon: Target,
                  title: "Full Control",
                  description: "Runs only when you're logged in and active",
                  color: "text-purple-600",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <item.icon
                        className={`h-16 w-16 ${item.color} mx-auto mb-4`}
                      />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
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

        {/* Smart Sourcing */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/10 dark:to-orange-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Smart, Context-Aware Sourcing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We go beyond keyword matching. Leelu uses intelligent logic to
                  find the right candidates — and only the right candidates.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Boolean Search Logic",
                  description:
                    "Automatically converts job descriptions into optimized Boolean queries for each platform, supporting AND/OR/NOT logic to refine results.",
                  icon: Search,
                },
                {
                  title: "Parallel Platform Search",
                  description:
                    "Searches all connected platforms at once, respecting API rate limits while maximizing speed and coverage.",
                  icon: Zap,
                },
                {
                  title: "AI Candidate Scoring",
                  description:
                    "Compares candidate profiles with your job description. Only candidates above your defined AI score receive outreach.",
                  icon: Target,
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <item.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
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

        {/* Accuracy & Compliance */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Built for Accuracy & Compliance
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    No Duplicates, No Errors
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Every candidate is validated across platforms. Duplicates
                    are merged, and email verification ensures no message is
                    sent to an invalid address.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Deduplication across all sources",
                      "Email validity checks before outreach",
                      "Re-sourcing enabled for similar roles anytime",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Security & Privacy First
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    We take data protection seriously and comply with GDPR and
                    other global privacy regulations.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "GDPR-compliant data handling",
                      "Secure browser plugin (no server-side scraping)",
                      "Full candidate opt-out and data deletion support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="h-5 w-5 text-blue-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/10 dark:to-orange-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Stop Searching One Platform at a Time
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Join recruiting teams who've discovered the power of
                  simultaneous, intelligent, and compliant sourcing.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  stat: "90%",
                  label: "Faster sourcing",
                  description:
                    "Parallel search vs sequential platform searching",
                },
                {
                  icon: Target,
                  stat: "10+",
                  label: "Platforms searched",
                  description: "Simultaneously with one click",
                },
                {
                  icon: Star,
                  stat: "99.9%",
                  label: "Accuracy rate",
                  description: "Duplicate detection and email validation",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <item.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
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

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sourcing?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hiring managers who've discovered the power of
                simultaneous, intelligent sourcing across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Sourcing Smarter Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-blue-100 mt-4">
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

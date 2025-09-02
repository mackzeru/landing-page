"use client";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  AlertCircle,
  Play,
  ArrowRight,
  Zap,
  Calendar,
  MessageCircle,
  Target,
  Users,
  Clock,
  X,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { useState } from "react";
import Link from "next/link";
import VideoContainer from "@/app/(features)/_component/VideoContainer";
import GetStartLink from "@/app/(features)/_component/GetStartLink";

export default function TalentAcquisitionPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Hero Section with gradient background */}
        <section className="relative py-28 px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/10 dark:via-gray-900 dark:to-blue-900/10 -z-10"></div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center rounded-full bg-white dark:bg-gray-800 shadow-md px-4 py-2 mb-8 border border-gray-100 dark:border-gray-700">
                <Zap className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium">
                  AI-Powered Talent Acquisition
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight dark:text-white">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Hiring Process
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Leelu's AI Copilot finds, qualifies, and books interviews with
                top candidates —
                <strong className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  while you sleep
                </strong>
                .
              </p>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 px-6 py-4 rounded-2xl inline-flex items-center space-x-3 max-w-max mx-auto mb-12 border border-green-200 dark:border-green-700/30 shadow-sm">
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span className="font-semibold">
                  From job post to first interview — in hours, not weeks
                </span>
              </div>

              <GetStartLink setIsDialogOpen={setIsDialogOpen} />
            </ScrollReveal>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 px-8 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-900/10 dark:to-orange-900/10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                  The Hiring Reality{" "}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Today
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  If you're a Talent Acquisition leader, you know the challenges
                  all too well
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-4">
                    <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold dark:text-white">
                    Before Leelu: Manual, Slow, and Overwhelming
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: <Target className="h-5 w-5" />,
                      text: "Hours wasted sourcing across multiple platforms",
                    },
                    {
                      icon: <Clock className="h-5 w-5" />,
                      text: "Manual resume screening and comparison",
                    },
                    {
                      icon: <MessageCircle className="h-5 w-5" />,
                      text: "Endless email chains for scheduling",
                    },
                    {
                      icon: <Users className="h-5 w-5" />,
                      text: "Scaling requires hiring more recruiters",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {index + 1}
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-700/30">
                  <p className="text-red-800 dark:text-red-300 font-semibold text-center">
                    The result?{" "}
                    <span className="underline">
                      Slow time-to-fill, burnout, and missed talent.
                    </span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 px-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                  After Leelu:{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Autonomous & Scalable
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Set it up once — and our AI does the rest while you focus on
                  what matters
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold dark:text-white">
                    How Leelu Transforms Your Hiring Process
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Simultaneous Sourcing",
                      description:
                        "Across LinkedIn, Indeed, Monster, Greenhouse, Lever, and more — all in one search.",
                      icon: <Target className="h-5 w-5 text-blue-600" />,
                    },
                    {
                      title: "AI-Powered Matching",
                      description:
                        "Compares every candidate's profile with your job description automatically.",
                      icon: <Zap className="h-5 w-5 text-purple-600" />,
                    },
                    {
                      title: "Autonomous Outreach",
                      description:
                        "Sends personalized messages and handles all responses and objections.",
                      icon: (
                        <MessageCircle className="h-5 w-5 text-green-600" />
                      ),
                    },
                    {
                      title: "Auto-Booked Interviews",
                      description:
                        "Interviews scheduled directly into your calendar — no coordination needed.",
                      icon: <Calendar className="h-5 w-5 text-orange-600" />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-shadow">
                          {item.icon}
                        </div>
                        <h4 className="font-semibold text-lg dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700/30">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold text-center text-lg">
                    🔹 <strong>Set it up in minutes.</strong> 🔹
                    <strong>Wake up to qualified interviews.</strong> 🔹
                    <strong>Scale hiring without scaling headcount.</strong>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Before vs After */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                  Before vs After{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Leelu
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  See the dramatic difference AI-powered hiring makes
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <ScrollReveal>
                <div className="bg-gradient-to-br from-red-50/70 to-orange-50/70 dark:from-red-900/10 dark:to-orange-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-700/30 shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-4">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">
                      Before Leelu
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Sourcing one platform at a time",
                      "Manual resume screening",
                      "Days of back-and-forth for scheduling",
                      "Scaling = hiring more recruiters",
                      "High recruiter burnout & turnover",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                      >
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* After */}
              <ScrollReveal delay={200}>
                <div className="bg-gradient-to-br from-green-50/70 to-emerald-50/70 dark:from-green-900/10 dark:to-emerald-900/10 p-8 rounded-3xl border border-green-200 dark:border-green-700/30 shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                      After Leelu
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Sourcing across all platforms at once",
                      "AI matches candidates to job descriptions",
                      "Interviews booked automatically",
                      "Scale hiring with the same team",
                      "Recruiters focus on strategy & relationships",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                  How It{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Works
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Three simple steps to transform your hiring process
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-20 bottom-20 w-1 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700 ml-6 hidden md:block"></div>

              <div className="space-y-20">
                {[
                  {
                    step: "1",
                    title: "Set Up in Minutes",
                    description:
                      "Paste your job description, set your AI score threshold, choose interview time slots, and define messaging preferences. That's it.",
                    icon: <Calendar className="h-8 w-8 text-blue-600" />,
                    color: "blue",
                  },
                  {
                    step: "2",
                    title: "AI Sources & Scores",
                    description:
                      "Leelu searches across LinkedIn, Indeed, ATS, and job boards simultaneously. Every candidate is scored against your job description.",
                    icon: <Zap className="h-8 w-8 text-purple-600" />,
                    color: "purple",
                  },
                  {
                    step: "3",
                    title: "AI Engages & Books",
                    description:
                      "Qualified candidates receive personalized outreach. The AI replies to questions, handles scheduling, and books interviews — no human needed.",
                    icon: <MessageCircle className="h-8 w-8 text-green-600" />,
                    color: "green",
                  },
                ].map((step, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="flex flex-col md:flex-row items-center gap-8 relative">
                      <div
                        className={`w-24 h-24 rounded-2xl bg-${step.color}-100 dark:bg-${step.color}-900/30 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg`}
                      >
                        <div className="text-2xl font-bold absolute -top-3 -left-3 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border">
                          {step.step}
                        </div>
                        {step.icon}
                      </div>

                      <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Join TA leaders who've cut time-to-interview by up to 90% and
                scaled hiring without adding headcount.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <p className="text-purple-100 mt-6 text-sm">
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

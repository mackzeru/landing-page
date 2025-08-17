"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Heart, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Link from "next/link";
import Timeline from "./component/Timeline";
import Team from "./component/Team";
import { team, values } from "./demo";

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50/30 to-indigo-50/30 dark:from-blue-900/10 dark:via-purple-900/5 dark:to-indigo-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="about-grid"
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
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              About Leelu.ai
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Democratizing AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Recruiting for Everyone
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              We're on a mission to make world-class recruiting accessible to
              every company. Our AI-powered platform levels the playing field,
              giving startups the same recruiting superpowers as Fortune 500
              companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
                Join Our Mission
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                View Open Positions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Leelu.ai was born from a simple frustration: why should only
                    large companies with massive recruiting budgets have access
                    to the best talent? Our founders, having worked at LinkedIn
                    and Google, saw firsthand how AI could transform recruiting.
                  </p>
                  <p>
                    We realized that the future of recruiting wasn't about
                    replacing human recruiters—it was about giving them
                    superpowers. By automating the repetitive tasks and
                    enhancing human decision-making with AI insights, we could
                    help every company build amazing teams.
                  </p>
                  <p>
                    Today, we're proud to serve over 2,000 companies worldwide,
                    from fast-growing startups to Fortune 500 enterprises, all
                    using the same cutting-edge AI technology to find and hire
                    the best talent.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    2,000+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Companies Served
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    50,000+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Interviews Booked
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    85%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Time Savings
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    48%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Response Rate
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-blue-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <Team team={team} /> */}

      {/* Timeline */}
      {/* <Timeline milestones={milestones} /> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you're looking to transform your hiring process or join
              our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-3 py-1 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

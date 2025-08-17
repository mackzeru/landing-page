"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Heart, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at LinkedIn, led the team that built LinkedIn Recruiter's AI features.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google AI researcher with 10+ years in machine learning and natural language processing.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "Former Product Lead at Greenhouse, passionate about creating intuitive recruiting experiences.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Head of AI",
      bio: "PhD in Computer Science from Stanford, specializes in conversational AI and automation.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We believe great hiring should be accessible to every company, regardless of size or budget.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible with AI to solve real recruiting challenges.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description:
        "Technology should enhance human potential, not replace it. We build tools that empower people.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Inclusive by Design",
      description:
        "We're committed to building diverse teams and reducing bias in the hiring process.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a vision to democratize AI-powered recruiting",
    },
    {
      year: "2023",
      title: "Series A Funding",
      description:
        "Raised $15M to accelerate product development and team growth",
    },
    {
      year: "2023",
      title: "LinkedIn Partnership",
      description: "Became official LinkedIn Recruiter API partner",
    },
    {
      year: "2024",
      title: "2,000+ Customers",
      description:
        "Helping thousands of companies transform their hiring process",
    },
  ];

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
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The passionate people building the future of recruiting
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">in</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Key milestones in our mission to democratize AI recruiting
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            {milestones.map((milestone, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-800">
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
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                View Careers
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

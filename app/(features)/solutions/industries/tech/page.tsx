"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Users,
  DollarSign,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import VideoContainer from "@/app/(features)/_component/VideoContainer";
import { useState } from "react";
import GetStartLink from "@/app/(features)/_component/GetStartLink";

export default function TechITPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                  <Code2 className="h-4 w-4 mr-2" />
                  Tech/IT Industry
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Recruit tech talent through
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-driven sourcing
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Find and engage top software engineers, data scientists,
                  DevOps specialists, and tech leaders with AI-powered
                  precision. Scale your tech hiring without compromising on
                  quality.
                </p>
                <GetStartLink setIsDialogOpen={setIsDialogOpen} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Tech Hiring Challenges */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Tech Hiring Challenges
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The unique challenges of recruiting in the competitive tech
                  landscape
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Talent Shortage",
                  description:
                    "High demand for skilled developers, data scientists, and tech specialists creates fierce competition.",
                  color: "text-red-500",
                },
                {
                  icon: Clock,
                  title: "Speed to Market",
                  description:
                    "Fast-paced development cycles require quick hiring decisions without sacrificing quality.",
                  color: "text-orange-500",
                },
                {
                  icon: DollarSign,
                  title: "Salary Inflation",
                  description:
                    "Rising compensation expectations make it challenging to attract top talent within budget.",
                  color: "text-yellow-500",
                },
                {
                  icon: Users,
                  title: "Skill Assessment",
                  description:
                    "Evaluating technical skills and cultural fit requires specialized knowledge and time.",
                  color: "text-blue-500",
                },
                {
                  icon: Globe,
                  title: "Remote Competition",
                  description:
                    "Global remote work expands the talent pool but increases competition from worldwide companies.",
                  color: "text-green-500",
                },
                {
                  icon: TrendingUp,
                  title: "Evolving Skills",
                  description:
                    "Rapidly changing technology stack requires recruiters to stay current with emerging skills.",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 dark:border-l-gray-700 hover:border-l-blue-500">
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

        {/* Tech Roles We Excel At */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Tech Roles We Excel At
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized AI sourcing for every tech discipline
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code2,
                  title: "Software Engineers",
                  skills: ["Full-Stack", "Frontend", "Backend", "Mobile"],
                  color: "text-blue-600",
                },
                {
                  icon: Database,
                  title: "Data Scientists",
                  skills: [
                    "ML Engineers",
                    "Data Analysts",
                    "AI Specialists",
                    "Research Scientists",
                  ],
                  color: "text-green-600",
                },
                {
                  icon: Cloud,
                  title: "DevOps/SRE",
                  skills: [
                    "Cloud Architects",
                    "Platform Engineers",
                    "Infrastructure",
                    "Automation",
                  ],
                  color: "text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Security Engineers",
                  skills: [
                    "Cybersecurity",
                    "Penetration Testing",
                    "Compliance",
                    "Risk Assessment",
                  ],
                  color: "text-red-600",
                },
                {
                  icon: Smartphone,
                  title: "Product/UX",
                  skills: [
                    "Product Managers",
                    "UX Designers",
                    "UI Designers",
                    "Researchers",
                  ],
                  color: "text-orange-600",
                },
                {
                  icon: Cpu,
                  title: "Engineering Leaders",
                  skills: [
                    "Tech Leads",
                    "Engineering Managers",
                    "CTOs",
                    "Architects",
                  ],
                  color: "text-indigo-600",
                },
                {
                  icon: Globe,
                  title: "QA/Testing",
                  skills: [
                    "Test Engineers",
                    "Automation",
                    "Performance",
                    "Manual Testing",
                  ],
                  color: "text-teal-600",
                },
                {
                  icon: Zap,
                  title: "Emerging Tech",
                  skills: ["Blockchain", "IoT", "AR/VR", "Quantum Computing"],
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
                        {role.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="text-sm bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300"
                          >
                            {skill}
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

        {/* AI-Powered Tech Sourcing */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI-Powered Tech Sourcing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  How Leelu revolutionizes tech talent acquisition
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Skill Matching",
                  description:
                    "Our AI understands technical requirements and matches candidates based on programming languages, frameworks, and experience depth.",
                  features: [
                    "Language and framework proficiency",
                    "Years of experience in specific technologies",
                    "Project complexity and scale",
                    "Open source contributions",
                  ],
                  icon: Code2,
                  color: "text-blue-600",
                },
                {
                  title: "GitHub & Portfolio Analysis",
                  description:
                    "Automatically analyze GitHub profiles, portfolios, and technical contributions to assess real-world coding ability.",
                  features: [
                    "Code quality assessment",
                    "Contribution frequency and consistency",
                    "Technology stack diversity",
                    "Collaboration and leadership indicators",
                  ],
                  icon: Database,
                  color: "text-green-600",
                },
                {
                  title: "Cultural & Team Fit",
                  description:
                    "Beyond technical skills, our AI evaluates communication style, team collaboration, and cultural alignment.",
                  features: [
                    "Communication style analysis",
                    "Remote work experience",
                    "Team collaboration indicators",
                    "Learning and growth mindset",
                  ],
                  icon: Users,
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
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Tech Hiring Success Metrics
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Proven results for tech companies of all sizes
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  stat: "75%",
                  label: "Faster time-to-hire",
                  description:
                    "From 45 days to 11 days average for senior engineers",
                  color: "text-blue-600",
                },
                {
                  icon: Target,
                  stat: "92%",
                  label: "Technical accuracy",
                  description:
                    "Candidates match technical requirements on first interview",
                  color: "text-green-600",
                },
                {
                  icon: DollarSign,
                  stat: "60%",
                  label: "Cost reduction",
                  description:
                    "Lower cost-per-hire compared to traditional recruiting",
                  color: "text-purple-600",
                },
                {
                  icon: Star,
                  stat: "4.8/5",
                  label: "Candidate quality",
                  description: "Average hiring manager satisfaction rating",
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
                  Tech Company Success Story
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      TechFlow Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Series B SaaS Startup, 200+ employees
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                        Challenge
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Needed to hire 25 engineers in 6 months</li>
                        <li>• Competing with FAANG companies for talent</li>
                        <li>• Limited recruiting team (2 recruiters)</li>
                        <li>• High standards for technical excellence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
                        Results
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Hired 28 engineers in 4 months</li>
                        <li>• 95% technical interview pass rate</li>
                        <li>• 40% reduction in time-to-hire</li>
                        <li>• 90% offer acceptance rate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-gray-900 dark:text-white text-center mb-4">
                      "Leelu transformed our hiring process. We went from
                      struggling to find qualified candidates to having a
                      pipeline of pre-screened, engaged engineers. The AI's
                      technical matching is incredibly accurate."
                    </blockquote>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Sarah Chen
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        VP of Engineering, TechFlow Solutions
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Tech-Specific Features */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Built for Tech Recruiting
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Specialized features designed for the unique needs of tech
                  hiring
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technical Assessment Integration",
                  description:
                    "Seamlessly integrate with coding challenge platforms and technical assessment tools.",
                  icon: Code2,
                  features: [
                    "HackerRank integration",
                    "CodeSignal compatibility",
                    "Custom coding challenges",
                  ],
                },
                {
                  title: "Stack-Specific Sourcing",
                  description:
                    "Target candidates based on specific technology stacks and experience combinations.",
                  icon: Database,
                  features: [
                    "Framework-specific searches",
                    "Version experience tracking",
                    "Architecture patterns",
                  ],
                },
                {
                  title: "Open Source Analysis",
                  description:
                    "Evaluate candidates based on their open source contributions and community involvement.",
                  icon: Globe,
                  features: [
                    "GitHub activity analysis",
                    "Contribution quality scoring",
                    "Community engagement",
                  ],
                },
                {
                  title: "Remote-First Optimization",
                  description:
                    "Optimized for remote tech hiring with global talent pool access.",
                  icon: Cloud,
                  features: [
                    "Timezone compatibility",
                    "Remote work experience",
                    "Async communication skills",
                  ],
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
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
                Ready to Scale Your Tech Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join tech companies who've revolutionized their hiring process
                with AI-powered talent acquisition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Hiring Tech Talent
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

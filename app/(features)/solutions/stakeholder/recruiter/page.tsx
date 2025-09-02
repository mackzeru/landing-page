"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserCog,
  Clock,
  Target,
  MessageSquare,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { useState } from "react";
import VideoContainer from "@/app/(features)/_component/VideoContainer";
import GetStartLink from "@/app/(features)/_component/GetStartLink";

export default function RecruitersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                  <UserCog className="h-4 w-4 mr-2" />
                  For Recruiters
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Stop chasing candidates.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Start booking interviews.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Leelu's AI Copilot handles outreach and scheduling — so you
                  can focus on what you do best: building relationships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GetStartLink setIsDialogOpen={setIsDialogOpen} />
                </div>
              </div>
            </ScrollReveal>

            {/* Key Message */}
            <ScrollReveal>
              <div className="text-center mb-20">
                <div className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/10 dark:to-blue-900/10 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100 dark:border-blue-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Set it up. Go to sleep. Wake up to booked interviews.
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your AI co-worker never sleeps, never takes breaks, and
                    never misses a follow-up.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Daily Grind Section */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  The Recruiter's Daily Grind
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                  You know the cycle all too well:
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Manual Sourcing",
                  description:
                    "Spend hours sourcing across LinkedIn, Indeed, and your ATS — one platform at a time.",
                  color: "text-red-500",
                },
                {
                  icon: Users,
                  title: "Resume Screening",
                  description:
                    "Manually screen resumes to find the few who might be a fit — then hope they reply.",
                  color: "text-orange-500",
                },
                {
                  icon: MessageSquare,
                  title: "Endless Follow-ups",
                  description:
                    "Send outreach… follow up… follow up again… just to schedule one interview.",
                  color: "text-yellow-500",
                },
                {
                  icon: Clock,
                  title: "Missing Top Talent",
                  description:
                    "Miss top talent because you're too slow or too busy to engage them in time.",
                  color: "text-red-600",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-200 dark:border-l-red-800">
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

            <ScrollReveal>
              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-red-600 dark:text-red-400">
                  It's exhausting. And it doesn't scale.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* AI Co-Worker Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/10 dark:to-blue-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Your AI Co-Worker is Here
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Leelu doesn't replace you — it works for you. Set it up once,
                  and let it handle the repetitive work while you stay in full
                  control:
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Set your AI Score",
                  description:
                    "Only candidates who meet your threshold get contacted.",
                  color: "text-blue-500",
                },
                {
                  icon: MessageSquare,
                  title: "Customize outreach",
                  description:
                    "Edit message templates and adjust tone (formal, friendly, bold).",
                  color: "text-blue-500",
                },
                {
                  icon: Zap,
                  title: "Real-time visibility",
                  description:
                    "See every interaction in real-time — pause and take over anytime.",
                  color: "text-purple-500",
                },
                {
                  icon: Calendar,
                  title: "Auto-sync calendar",
                  description:
                    "Get notified instantly when interviews are booked — all synced to your calendar.",
                  color: "text-indigo-500",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-200 dark:border-l-blue-800">
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

            <ScrollReveal>
              <div className="text-center mt-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
                  <p className="text-lg text-gray-900 dark:text-white mb-4">
                    <strong>You stay in control.</strong> AI does the heavy
                    lifting. <strong>Candidates think it's you.</strong>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Conversation Example */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  See How It Feels Like a Human
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  The AI replies naturally and contextually — no robotic
                  messages. Here's a real example:
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 space-y-6">
                {[
                  {
                    sender: "AI (as Recruiter)",
                    message:
                      "Hi Alex, I came across your profile and was impressed by your experience in full-stack development. We're hiring a Senior Software Engineer at TechFlow, and I think you'd be a great fit. Would you be open to a quick chat this week?",
                    type: "sent",
                  },
                  {
                    sender: "Candidate",
                    message:
                      "Thanks for reaching out! I'm definitely interested. What's the role about?",
                    type: "received",
                  },
                  {
                    sender: "AI (as Recruiter)",
                    message:
                      "Great to hear! The role focuses on building scalable backend systems using Node.js and React. We're a fast-growing startup with a strong engineering culture. I can share more details — are you free for a 15-minute call on Tuesday or Wednesday?",
                    type: "sent",
                  },
                  {
                    sender: "Candidate",
                    message: "Wednesday works. How about 3 PM?",
                    type: "received",
                  },
                  {
                    sender: "AI (as Recruiter)",
                    message:
                      "Perfect! I'll send you a calendar invite for Wednesday at 3 PM. Looking forward to speaking with you!",
                    type: "sent",
                  },
                ].map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.type === "sent" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.type === "sent"
                          ? "bg-gradient-to-r from-blue-500 to-blue-500 text-white"
                          : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      <p className="text-sm font-medium mb-1">{msg.sender}</p>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center mt-8">
                <div className="bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    This entire conversation was handled autonomously — and the
                    candidate had no idea they were chatting with AI.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/10 dark:to-blue-900/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  How It Works for You
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Set Up in Minutes",
                  description:
                    "Paste your job description, set your AI Score (e.g., 82+), customize your message, and define your interview time slots.",
                  icon: Target,
                },
                {
                  step: "2",
                  title: "AI Sources & Engages",
                  description:
                    "Leelu searches 10+ platforms at once. Only qualified candidates (based on your score) receive personalized outreach.",
                  icon: Users,
                },
                {
                  step: "3",
                  title: "AI Books Interviews",
                  description:
                    "When a candidate says yes, the AI books the interview directly into your calendar and sends the invite.",
                  icon: Calendar,
                },
                {
                  step: "4",
                  title: "You Take Over",
                  description:
                    "Review the candidate, prepare, and conduct a high-quality interview — knowing you're talking to someone who's already interested.",
                  icon: CheckCircle,
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {item.step}
                        </div>
                        <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
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

        {/* Stats Section */}
        <section className="py-20 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Full Visibility, Total Control
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything the AI does is logged in your activity feed. You
                  can pause, reply, or take over anytime.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  stat: "50%",
                  label: "Reduction in sourcing time",
                  description:
                    "Spend less time searching, more time connecting",
                },
                {
                  icon: Calendar,
                  stat: "2x",
                  label: "More interviews booked",
                  description: "AI never sleeps, never forgets to follow up",
                },
                {
                  icon: Star,
                  stat: "95%",
                  label: "Candidate satisfaction",
                  description: "Natural conversations that feel human",
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
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work Smarter, Not Harder?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of recruiters who've cut their sourcing time in
                half and doubled their interview bookings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Free Trial
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

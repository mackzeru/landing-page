"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Getting Started",
    "AI Features",
    "Integrations",
    "Pricing",
    "Security",
    "Support",
  ];

  const faqs = [
    {
      question: "How does the AI Copilot work?",
      answer:
        "Our AI Copilot operates autonomously once activated. It sources candidates from multiple platforms, sends personalized outreach messages, analyzes responses, and automatically books interviews when candidates show interest. You can pause or adjust settings anytime through your dashboard. The AI learns from your preferences and improves over time.",
      category: "AI Features",
      tags: ["copilot", "automation", "ai"],
    },
    {
      question: "Is the LinkedIn integration compliant?",
      answer:
        "Yes, our LinkedIn plugin uses official LinkedIn Recruiter APIs with proper authentication. We don't scrape data or violate terms of service. This direct integration is why we can access candidates that other tools can't reach, while maintaining full compliance with LinkedIn's policies and data protection requirements.",
      category: "Integrations",
      tags: ["linkedin", "compliance", "api"],
    },
    {
      question: "Can I pause the AI anytime?",
      answer:
        "Absolutely. You have full control over the AI Copilot. You can pause, resume, or modify settings at any time through your dashboard. The AI will immediately stop all activities when paused and resume exactly where it left off when reactivated. You can also set specific hours of operation.",
      category: "AI Features",
      tags: ["control", "pause", "settings"],
    },
    {
      question: "How does the PhD-level resume scoring work?",
      answer:
        "Our AI uses advanced natural language processing and machine learning models trained on millions of successful hires. It evaluates skills, experience, career progression, and cultural fit indicators to score candidates with the precision of a PhD-level analyst, considering context and nuance that simple keyword matching misses.",
      category: "AI Features",
      tags: ["scoring", "ai", "resume"],
    },
    {
      question: "What platforms do you search simultaneously?",
      answer:
        "We search LinkedIn (via direct API), Indeed, Monster, CareerBuilder, and integrate with major ATS systems like Greenhouse, Lever, and Workday. We also search your internal candidate database - all simultaneously, not sequentially, which is 10x faster than competitors.",
      category: "Integrations",
      tags: ["platforms", "search", "ats"],
    },
    {
      question: "How is this different from other recruiting tools?",
      answer:
        "Unlike competitors who search platforms one by one, we use true parallel processing. Our exclusive LinkedIn plugin, autonomous engagement until completion, and PhD-level scoring set us apart. We don't just find candidates - we get them to the interview stage automatically.",
      category: "AI Features",
      tags: ["comparison", "unique", "features"],
    },
    {
      question: "What's included in the free trial?",
      answer:
        "The 14-day free trial includes full access to all features: AI Copilot, multi-platform search, LinkedIn plugin, autonomous outreach, and interview scheduling. No credit card required, and you can upgrade or cancel anytime during the trial period.",
      category: "Pricing",
      tags: ["trial", "free", "features"],
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most customers see their first qualified candidates within 2-6 hours of setup, with interviews typically scheduled within 24 hours. Our fastest customer had 5 interviews booked within the first day of using Leelu.ai.",
      category: "Getting Started",
      tags: ["results", "speed", "timeline"],
    },
    {
      question: "Do you integrate with our existing ATS?",
      answer:
        "Yes, we integrate with all major ATS systems including Greenhouse, Lever, Workday, BambooHR, and many others. Our integrations are bi-directional, meaning candidate data flows seamlessly between systems. Custom integrations are available for enterprise customers.",
      category: "Integrations",
      tags: ["ats", "integration", "sync"],
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We're SOC 2 Type II compliant, GDPR compliant, and use enterprise-grade encryption for all data. Your candidate data is never shared with third parties, and we provide detailed audit logs for all activities.",
      category: "Security",
      tags: ["security", "gdpr", "soc2"],
    },
    {
      question: "Can I customize the outreach messages?",
      answer:
        "Yes, you can fully customize message templates, tone, and content. The AI learns from your preferences and successful messages to improve over time. You can also set approval workflows for sensitive outreach or maintain full control over messaging.",
      category: "AI Features",
      tags: ["customization", "messages", "templates"],
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide comprehensive support including onboarding assistance, training sessions, dedicated customer success managers for enterprise clients, and 24/7 technical support. Our help center includes detailed documentation, video tutorials, and best practices guides.",
      category: "Support",
      tags: ["support", "training", "help"],
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer three tiers: Starter ($299/month), Professional ($799/month), and Enterprise (custom pricing). All plans include core AI features, with higher tiers offering more job postings, advanced integrations, and dedicated support. Annual plans receive a 20% discount.",
      category: "Pricing",
      tags: ["pricing", "plans", "cost"],
    },
    {
      question: "Can I try it before committing?",
      answer:
        "We offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo to see how Leelu.ai works with your specific use cases and requirements.",
      category: "Getting Started",
      tags: ["trial", "demo", "commitment"],
    },
    {
      question: "Do you work with recruiting agencies?",
      answer:
        "Yes, we have special programs for recruiting agencies and staffing firms. Our platform can be white-labeled, and we offer volume discounts for agencies managing multiple clients. Contact our sales team for agency-specific pricing and features.",
      category: "Pricing",
      tags: ["agencies", "white-label", "volume"],
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-blue-50/30 dark:from-indigo-900/10 dark:via-purple-900/5 dark:to-blue-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="faq-grid"
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
            <rect width="100%" height="100%" fill="url(#faq-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 mb-6 text-base px-4 py-2">
              <HelpCircle className="h-4 w-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Everything You Need to Know
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                About Leelu.ai
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Get instant answers to common questions about our AI-powered
              recruiting platform, features, pricing, and more.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                      : "border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          {filteredFAQs.length === 0 ? (
            <ScrollReveal>
              <div className="text-center py-16">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or category filter
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <Card className="border-2 transition-all duration-300 overflow-hidden hover:shadow-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center mb-2">
                          <Badge className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 mr-3">
                            {faq.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-8 pb-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {faq.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Can't find what you're looking for? We're here to help you get
                started
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Live Chat Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Get instant help from our support team
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Help Center
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Browse our comprehensive documentation
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 bg-transparent"
                  >
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Schedule Demo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    See Leelu.ai in action with a personal demo
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                    Book Demo
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Start your free trial today and experience the future of
              AI-powered recruiting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

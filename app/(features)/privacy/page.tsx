"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  Shield,
  Calendar,
  Eye,
  Lock,
  Database,
  Users,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { tableOfContents } from "./demo";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 mb-6 text-base px-4 py-2 animate-float">
              <Calendar className="h-4 w-4 mr-2" />
              Last Updated: March 15, 2024
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how Leelu.ai
              collects, uses, and protects your personal information.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar - Table of Contents */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
                      Table of Contents
                    </h2>
                    <nav className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                            activeSection === item.id
                              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-l-4 border-purple-600 transform translate-x-1"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:translate-x-1"
                          }`}
                        >
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {/* Overview */}
              <ScrollReveal>
                <section id="overview" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-purple-600" />
                    Overview
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      At Leelu.ai, we are committed to protecting your privacy
                      and ensuring the security of your personal information.
                      This Privacy Policy explains how we collect, use,
                      disclose, and safeguard your information when you use our
                      AI-powered recruiting platform.
                    </p>
                    <blockquote className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
                      <p className="text-purple-800 dark:text-purple-200 font-semibold">
                        We believe in transparency and your right to control
                        your personal data. This policy is designed to help you
                        understand what information we collect and how we use it
                        to provide you with the best possible recruiting
                        experience.
                      </p>
                    </blockquote>
                  </div>
                </section>
              </ScrollReveal>

              {/* Information Collection */}
              <ScrollReveal>
                <section id="information-collection" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Database className="h-8 w-8 mr-3 text-purple-600" />
                    Information We Collect
                  </h2>

                  <div className="space-y-6">
                    {/* Personal Information Accordion */}
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleSection("personal-info")}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Personal Information
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              expandedSections.includes("personal-info")
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {expandedSections.includes("personal-info") && (
                          <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="pt-6 prose dark:prose-invert max-w-none">
                              <ul>
                                <li>
                                  <strong>Contact Information:</strong> Name,
                                  email address, phone number, and company
                                  details
                                </li>
                                <li>
                                  <strong>Account Information:</strong>{" "}
                                  Username, password, and account preferences
                                </li>
                                <li>
                                  <strong>Profile Information:</strong> Job
                                  title, department, and professional background
                                </li>
                                <li>
                                  <strong>Communication Data:</strong> Messages,
                                  feedback, and support requests
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Usage Information Accordion */}
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleSection("usage-info")}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Usage Information
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              expandedSections.includes("usage-info")
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {expandedSections.includes("usage-info") && (
                          <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="pt-6 prose dark:prose-invert max-w-none">
                              <ul>
                                <li>
                                  <strong>Platform Activity:</strong> Features
                                  used, time spent, and interaction patterns
                                </li>
                                <li>
                                  <strong>Search Queries:</strong> Candidate
                                  searches and filtering criteria
                                </li>
                                <li>
                                  <strong>Device Information:</strong> Browser
                                  type, operating system, and device identifiers
                                </li>
                                <li>
                                  <strong>Log Data:</strong> IP addresses,
                                  access times, and error logs
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Candidate Information Accordion */}
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleSection("candidate-info")}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Candidate Information
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              expandedSections.includes("candidate-info")
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {expandedSections.includes("candidate-info") && (
                          <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="pt-6 prose dark:prose-invert max-w-none">
                              <p>
                                When you use our platform to source and manage
                                candidates, we may collect:
                              </p>
                              <ul>
                                <li>
                                  <strong>Resume Data:</strong> Skills,
                                  experience, education, and work history
                                </li>
                                <li>
                                  <strong>Contact Information:</strong> Email
                                  addresses and professional profiles
                                </li>
                                <li>
                                  <strong>Assessment Results:</strong> Interview
                                  scores and evaluation data
                                </li>
                                <li>
                                  <strong>Communication Records:</strong> Email
                                  exchanges and interview notes
                                </li>
                              </ul>
                              <blockquote className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
                                <p className="text-blue-800 dark:text-blue-200">
                                  <strong>Important:</strong> We only collect
                                  candidate information that you provide or that
                                  is publicly available. We never access private
                                  candidate data without proper consent.
                                </p>
                              </blockquote>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </ScrollReveal>

              {/* How We Use Information */}
              <ScrollReveal>
                <section id="how-we-use" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Users className="h-8 w-8 mr-3 text-purple-600" />
                    How We Use Your Information
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      We use the information we collect for the following
                      purposes:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Service Provision
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                            <li>
                              • Provide and maintain our recruiting platform
                            </li>
                            <li>• Process and fulfill your requests</li>
                            <li>• Enable AI-powered candidate matching</li>
                            <li>• Facilitate communication with candidates</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Platform Improvement
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                            <li>• Analyze usage patterns and preferences</li>
                            <li>• Develop new features and functionality</li>
                            <li>• Improve AI algorithms and accuracy</li>
                            <li>• Optimize user experience</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Communication
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                            <li>• Send important account notifications</li>
                            <li>• Provide customer support</li>
                            <li>• Share product updates and news</li>
                            <li>• Respond to your inquiries</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Legal Compliance
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                            <li>• Comply with applicable laws</li>
                            <li>• Protect against fraud and abuse</li>
                            <li>• Enforce our terms of service</li>
                            <li>• Respond to legal requests</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
              </ScrollReveal>

              {/* Information Sharing */}
              <ScrollReveal>
                <section id="information-sharing" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-8 w-8 mr-3 text-purple-600" />
                    Information Sharing
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties except in the following
                      circumstances:
                    </p>

                    <blockquote className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
                      <p className="text-red-800 dark:text-red-200 font-semibold">
                        We never sell your personal data to third parties for
                        marketing purposes. Your privacy is not for sale.
                      </p>
                    </blockquote>

                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                      When We May Share Information:
                    </h4>
                    <ul>
                      <li>
                        <strong>Service Providers:</strong> Trusted third-party
                        vendors who help us operate our platform (cloud hosting,
                        analytics, customer support)
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by
                        law, court order, or government request
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In connection with
                        a merger, acquisition, or sale of assets
                      </li>
                      <li>
                        <strong>Consent:</strong> When you explicitly consent to
                        sharing your information
                      </li>
                      <li>
                        <strong>Safety:</strong> To protect the rights,
                        property, or safety of Leelu.ai, our users, or others
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollReveal>

              {/* Data Security */}
              <ScrollReveal>
                <section id="data-security" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Lock className="h-8 w-8 mr-3 text-purple-600" />
                    Data Security
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      We implement industry-standard security measures to
                      protect your personal information:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Encryption
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            All data is encrypted in transit and at rest using
                            AES-256 encryption
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Access Controls
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Multi-factor authentication and role-based access
                            controls
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Regular Audits
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            SOC 2 Type II compliance with regular security
                            audits
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <blockquote className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
                      <p className="text-green-800 dark:text-green-200 font-semibold">
                        We are SOC 2 Type II compliant and undergo regular
                        third-party security audits to ensure the highest level
                        of data protection.
                      </p>
                    </blockquote>
                  </div>
                </section>
              </ScrollReveal>

              {/* Your Rights */}
              <ScrollReveal>
                <section id="your-rights" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Users className="h-8 w-8 mr-3 text-purple-600" />
                    Your Rights
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      You have the following rights regarding your personal
                      information:
                    </p>

                    <div className="space-y-4 my-8">
                      {[
                        {
                          title: "Access",
                          description:
                            "Request a copy of the personal information we hold about you",
                        },
                        {
                          title: "Correction",
                          description:
                            "Request correction of inaccurate or incomplete information",
                        },
                        {
                          title: "Deletion",
                          description:
                            "Request deletion of your personal information (subject to legal requirements)",
                        },
                        {
                          title: "Portability",
                          description:
                            "Request your data in a structured, machine-readable format",
                        },
                        {
                          title: "Restriction",
                          description:
                            "Request restriction of processing in certain circumstances",
                        },
                        {
                          title: "Objection",
                          description:
                            "Object to processing based on legitimate interests",
                        },
                      ].map((right, index) => (
                        <Card key={index} className="border-0 shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                                  {index + 1}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                  {right.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {right.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <p>
                      To exercise any of these rights, please contact us at{" "}
                      <Link
                        href="mailto:privacy@leelu.ai"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        privacy@leelu.ai
                      </Link>
                      . We will respond to your request within 30 days.
                    </p>
                  </div>
                </section>
              </ScrollReveal>

              {/* Contact Section */}
              <ScrollReveal>
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="h-8 w-8 mr-3 text-purple-600" />
                    Contact Us
                  </h2>
                  <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                    <CardContent className="p-8">
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                          If you have any questions about this Privacy Policy or
                          our data practices, please contact us:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                              Email
                            </h4>
                            <p>
                              <Link
                                href="mailto:privacy@leelu.ai"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                              >
                                privacy@leelu.ai
                              </Link>
                            </p>

                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 mt-6">
                              Data Protection Officer
                            </h4>
                            <p>
                              <Link
                                href="mailto:dpo@leelu.ai"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                              >
                                dpo@leelu.ai
                              </Link>
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                              Mailing Address
                            </h4>
                            <p>
                              Leelu.ai, Inc.
                              <br />
                              123 Innovation Drive
                              <br />
                              San Francisco, CA 94105
                              <br />
                              United States
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

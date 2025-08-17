"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Calendar,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Scale,
  Users,
  CreditCard,
  Ban,
} from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export default function TermsOfServicePage() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2 animate-float">
              <Calendar className="h-4 w-4 mr-2" />
              Effective Date: March 15, 2024
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>
          </div>
        </ScrollReveal>

        {/* Terms Content */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <FileText className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Acceptance of Terms
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Welcome to Leelu.ai! These Terms of Service ("Terms") govern
                  your use of our AI-powered recruiting platform and related
                  services (collectively, the "Service") operated by Leelu.ai,
                  Inc. ("we," "us," or "our").
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                        Important Notice
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300">
                        These terms include important information about your
                        rights and obligations. Please read them carefully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Service Description */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Users className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Service Description
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Leelu.ai provides an AI-powered recruiting platform that helps
                  organizations streamline their hiring process. Our services
                  include:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        AI Copilot
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Intelligent recruiting assistant that automates
                        candidate screening, scheduling, and initial
                        communications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Multi-Source Sourcing
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Advanced candidate sourcing across multiple platforms
                        and databases simultaneously.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Analytics & Insights
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Comprehensive reporting and analytics to optimize your
                        recruiting performance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Integration Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Seamless integration with popular ATS and HR management
                        systems.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* User Accounts */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Shield className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  User Accounts
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h4>Account Creation</h4>
                <p>
                  To use our Service, you must create an account by providing
                  accurate, complete, and current information. You are
                  responsible for safeguarding your account credentials and for
                  all activities that occur under your account.
                </p>

                <h4>Account Responsibilities</h4>
                <ul>
                  <li>Maintain the security of your login credentials</li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>
                    Ensure all information provided is accurate and up-to-date
                  </li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>

                <div className="relative">
                  <div
                    className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 cursor-help"
                    onMouseEnter={() => setShowTooltip("account-security")}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <div className="flex items-start space-x-3">
                      <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                          Account Security
                        </p>
                        <p className="text-blue-700 dark:text-blue-300">
                          We recommend enabling two-factor authentication for
                          enhanced account security.
                        </p>
                      </div>
                    </div>
                  </div>

                  {showTooltip === "account-security" && (
                    <div className="absolute top-full left-4 mt-2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 shadow-lg">
                      Two-factor authentication adds an extra layer of security
                      to your account
                    </div>
                  )}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Acceptable Use */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Scale className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Acceptable Use
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  You agree to use our Service only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-0 shadow-lg border-l-4 border-red-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Ban className="h-5 w-5 text-red-600 mr-2" />
                        Prohibited Activities
                      </h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                        <li>• Violate any applicable laws or regulations</li>
                        <li>• Infringe on intellectual property rights</li>
                        <li>• Transmit harmful or malicious code</li>
                        <li>• Attempt to gain unauthorized access</li>
                        <li>• Interfere with service operation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg border-l-4 border-green-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Encouraged Practices
                      </h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                        <li>• Use the service for legitimate recruiting</li>
                        <li>• Respect candidate privacy and consent</li>
                        <li>• Provide accurate job descriptions</li>
                        <li>• Follow fair hiring practices</li>
                        <li>• Report any issues or concerns</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Payment Terms */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <CreditCard className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Payment Terms
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h4>Subscription Plans</h4>
                <p>
                  Our Service is offered through various subscription plans. By
                  subscribing, you agree to pay all applicable fees as described
                  in your chosen plan.
                </p>

                <h4>Billing and Payment</h4>
                <ul>
                  <li>
                    Subscription fees are billed in advance on a monthly or
                    annual basis
                  </li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We may change our pricing with 30 days' notice</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-green-800 dark:text-green-200 font-semibold mb-2">
                        Free Trial Available
                      </p>
                      <p className="text-green-700 dark:text-green-300">
                        New users can try our service free for 14 days with no
                        commitment required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Intellectual Property */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <FileText className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Intellectual Property
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Leelu.ai and its licensors. The Service is protected by
                  copyright, trademark, and other laws.
                </p>

                <h4>Your Content</h4>
                <p>
                  You retain ownership of any content you submit to our Service.
                  However, by submitting content, you grant us a worldwide,
                  non-exclusive, royalty-free license to use, reproduce, and
                  distribute your content solely for the purpose of providing
                  our Service.
                </p>

                <h4>Restrictions</h4>
                <ul>
                  <li>
                    You may not modify, distribute, or create derivative works
                  </li>
                  <li>
                    You may not reverse engineer or attempt to extract source
                    code
                  </li>
                  <li>You may not remove or alter any proprietary notices</li>
                  <li>
                    You may not use our trademarks without written permission
                  </li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Termination */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Ban className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Termination
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice, for any reason,
                  including breach of these Terms.
                </p>

                <h4>Effect of Termination</h4>
                <p>
                  Upon termination, your right to use the Service will cease
                  immediately. All provisions of these Terms that should survive
                  termination will survive, including ownership provisions,
                  warranty disclaimers, and limitations of liability.
                </p>

                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 my-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-orange-800 dark:text-orange-200 font-semibold mb-2">
                        Data Retention
                      </p>
                      <p className="text-orange-700 dark:text-orange-300">
                        After termination, we may retain your data for up to 30
                        days to allow for account recovery. After this period,
                        data will be permanently deleted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Limitation of Liability */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Shield className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Limitation of Liability
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  In no event shall Leelu.ai, its directors, employees,
                  partners, agents, suppliers, or affiliates be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including loss of profits, data, use, goodwill, or
                  other intangible losses.
                </p>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-red-800 dark:text-red-200 font-semibold mb-2">
                        Important Legal Notice
                      </p>
                      <p className="text-red-700 dark:text-red-300">
                        Our total liability to you for any damages shall not
                        exceed the amount you paid us in the 12 months preceding
                        the claim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Changes to Terms */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Calendar className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Changes to Terms
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days' notice prior to any new terms taking effect.
                </p>

                <p>
                  Your continued use of the Service after any such changes
                  constitutes your acceptance of the new Terms. If you do not
                  agree to the new Terms, you must stop using the Service.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                <Info className="h-8 w-8 mr-3 text-purple-600" />
                <span className="relative">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <CardContent className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      If you have any questions about these Terms, please
                      contact us:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Email
                        </h4>
                        <p>
                          <Link
                            href="mailto:legal@leelu.ai"
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                          >
                            legal@leelu.ai
                          </Link>
                        </p>

                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 mt-6">
                          Support
                        </h4>
                        <p>
                          <Link
                            href="mailto:support@leelu.ai"
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                          >
                            support@leelu.ai
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
                          Legal Department
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
    </PageLayout>
  );
}

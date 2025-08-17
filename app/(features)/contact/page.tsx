"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Zap,
  Users,
  CreditCard,
  Bug,
  Lightbulb,
  HeadphonesIcon,
  Video,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/custom/page-layou";
import { contactMethods, officeLocations, supportCategories } from "./demo";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    priority: "medium",
    category: "general",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full mb-8">
              <HeadphonesIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 font-semibold">
                24/7 Support
              </span>
            </div>

            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Support Team
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Get the help you need, when you need it. Our expert support team
              is here to ensure your success with Leelu.ai.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-green-200 text-green-700 dark:border-green-800 dark:text-green-300"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                99.9% Uptime
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
              >
                <Clock className="h-5 w-5 mr-2" />
                24/7 Support
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300"
              >
                <Zap className="h-5 w-5 mr-2" />2 Min Response
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Choose Your Preferred Contact Method
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {method.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {method.availability}
                      </div>
                      <Badge
                        className={`bg-${method.color}-100 text-${method.color}-700 dark:bg-${method.color}-900/30 dark:text-${method.color}-300`}
                      >
                        {method.response}
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-8 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {supportCategories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() =>
                            handleInputChange("category", category.id)
                          }
                          className={`flex items-center space-x-2 p-3 rounded-xl border-2 transition-all duration-300 ${
                            formData.category === category.id
                              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                              : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-600"
                          }`}
                        >
                          <category.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            {category.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800 min-h-[120px]"
                      placeholder="Please provide as much detail as possible..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Our Offices
                </h2>

                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <Card
                      key={index}
                      className="bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {office.city}
                            </h3>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                              <p>{office.address}</p>
                              <p>{office.zipcode}</p>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Phone className="h-4 w-4" />
                                  <span>{office.phone}</span>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                                >
                                  {office.timezone}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-r from-green-700 to-emerald-900 text-white border-0">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold mb-2">99.9%</div>
                      <div className="text-green-100">Uptime</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold mb-2">&lt; 2 min</div>
                      <div className="text-blue-100">Response Time</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "What's your average response time?",
                  answer:
                    "We respond to all inquiries within 2 minutes during business hours and within 4 hours outside business hours.",
                },
                {
                  question: "Do you offer phone support?",
                  answer:
                    "Yes! Phone support is available Monday-Friday, 9AM-6PM PST. Enterprise customers have 24/7 phone access.",
                },
                {
                  question: "Can I schedule a demo?",
                  answer:
                    "You can book a personalized demo at any time. Our team will walk you through all features relevant to your use case.",
                },
                {
                  question: "What if I need help outside business hours?",
                  answer:
                    "Our live chat and email support are available 24/7. For urgent issues, enterprise customers can access our emergency hotline.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="text-left bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Live Demo CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to See Your Own Data?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Schedule a personalized demo with your actual job requirements
                and see real results
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
      </div>
    </PageLayout>
  );
}

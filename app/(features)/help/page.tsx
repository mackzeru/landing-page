"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Zap,
  Users,
  Settings,
  CreditCard,
  Shield,
  ChevronRight,
  Clock,
  Star,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/custom/page-layou";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const categories = [
    { id: "getting-started", label: "Getting Started", icon: Zap, count: 12 },
    { id: "features", label: "Features", icon: BookOpen, count: 24 },
    { id: "integrations", label: "Integrations", icon: Settings, count: 18 },
    { id: "billing", label: "Billing", icon: CreditCard, count: 8 },
    { id: "security", label: "Security", icon: Shield, count: 15 },
    { id: "team", label: "Team Management", icon: Users, count: 10 },
  ];

  const popularArticles = [
    {
      title: "Getting Started with Leelu.ai",
      description:
        "Complete guide to setting up your account and running your first search",
      category: "Getting Started",
      readTime: "5 min",
      rating: 4.9,
      views: "12.5k",
    },
    {
      title: "Setting Up Multi-Source Candidate Search",
      description:
        "How to configure and optimize searches across LinkedIn, GitHub, and other platforms",
      category: "Features",
      readTime: "8 min",
      rating: 4.8,
      views: "8.2k",
    },
    {
      title: "AI Copilot Best Practices",
      description:
        "Tips and tricks to get the most out of your AI recruiting assistant",
      category: "Features",
      readTime: "6 min",
      rating: 4.9,
      views: "9.1k",
    },
    {
      title: "Integrating with Your ATS",
      description:
        "Step-by-step guide to connect Leelu.ai with popular ATS platforms",
      category: "Integrations",
      readTime: "10 min",
      rating: 4.7,
      views: "6.8k",
    },
  ];

  const quickActions = [
    {
      title: "Schedule a Demo",
      description: "Get a personalized walkthrough of Leelu.ai",
      icon: Video,
      action: "Book Demo",
      color: "purple",
    },
    {
      title: "Contact Support",
      description: "Get help from our expert support team",
      icon: MessageCircle,
      action: "Get Help",
      color: "blue",
    },
    {
      title: "Feature Request",
      description: "Suggest new features or improvements",
      icon: Zap,
      action: "Submit Idea",
      color: "green",
    },
  ];

  const videoTutorials = [
    {
      title: "Leelu.ai Platform Overview",
      duration: "12:34",
      thumbnail: "/video-tutorial-dashboard.png",
      views: "15.2k",
      category: "Overview",
    },
    {
      title: "Advanced Search Techniques",
      duration: "8:45",
      thumbnail: "/search-interface-tutorial.png",
      views: "9.8k",
      category: "Features",
    },
    {
      title: "Team Collaboration Features",
      duration: "6:22",
      thumbnail: "/team-collaboration-interface.png",
      views: "7.3k",
      category: "Team",
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Help Center &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Knowledge Base
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Find answers, learn best practices, and get the most out of
              Leelu.ai
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-16">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for help articles, tutorials, and guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-6 text-lg rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-xl dark:shadow-gray-900/50"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${action.color}-500 to-${action.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {action.description}
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-semibold">
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
                          activeCategory === category.id
                            ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-5 w-5" />
                          <span className="font-medium">{category.label}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`${
                            activeCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs value="articles" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl">
                    <TabsTrigger
                      value="articles"
                      className="text-lg py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                    >
                      Articles
                    </TabsTrigger>
                    <TabsTrigger
                      value="videos"
                      className="text-lg py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                    >
                      Video Tutorials
                    </TabsTrigger>
                    <TabsTrigger
                      value="guides"
                      className="text-lg py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                    >
                      Guides
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="articles">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Popular Articles
                      </h2>
                      {popularArticles.map((article, index) => (
                        <Card
                          key={index}
                          className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <Badge
                                    variant="outline"
                                    className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                                  >
                                    {article.category}
                                  </Badge>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-1">
                                      <Clock className="h-4 w-4" />
                                      <span>{article.readTime}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-4 w-4 text-yellow-500" />
                                      <span>{article.rating}</span>
                                    </div>
                                    <span>{article.views} views</span>
                                  </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                  {article.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {article.description}
                                </p>
                              </div>
                              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 ml-4" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="videos">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Video Tutorials
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {videoTutorials.map((video, index) => (
                          <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 overflow-hidden"
                          >
                            <div className="relative">
                              <img
                                src={video.thumbnail || "/placeholder.svg"}
                                alt={video.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                {video.duration}
                              </div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Video className="h-8 w-8 text-purple-600 ml-1" />
                              </div>
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-3">
                                <Badge
                                  variant="outline"
                                  className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                                >
                                  {video.category}
                                </Badge>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {video.views} views
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                {video.title}
                              </h3>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="guides">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Step-by-Step Guides
                      </h2>
                      <div className="grid gap-6">
                        {[
                          "Complete Setup Guide for New Users",
                          "Advanced Search Optimization Techniques",
                          "Team Onboarding and Permission Management",
                          "Integration Setup for Popular ATS Platforms",
                          "Data Export and Reporting Best Practices",
                        ].map((guide, index) => (
                          <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                    {index + 1}
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                      {guide}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                      Comprehensive step-by-step instructions
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Our support team is available 24/7 to help you succeed with
              Leelu.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

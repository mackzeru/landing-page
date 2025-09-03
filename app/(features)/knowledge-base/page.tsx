"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BookOpen,
  AlertTriangle,
  Mail,
  Send,
  Settings,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Database,
  MessageSquare,
  Bot,
} from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/custom/page-layou";
import { categories, troubleshootingArticles } from "./demo";
import Link from "next/link";

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = troubleshootingArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const groupedArticles = filteredArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof troubleshootingArticles>);

  const getCategoryInfo = (categoryId: string) => {
    const categoryMap = {
      "email-accounts": {
        title: "Email Accounts: Fix Connection Issues",
        icon: Mail,
      },
      campaigns: {
        title: "Campaigns: Fix Sending & Tracking Issues",
        icon: Send,
      },
      "ai-copilot": { title: "AI Copilot: Fix Automation Issues", icon: Bot },
      sourcing: {
        title: "Multi-Source Sourcing: Fix Search Issues",
        icon: Database,
      },
      integrations: {
        title: "Integrations: Fix Connection Issues",
        icon: Settings,
      },
      general: {
        title: "General: Troubleshoot Account Issues",
        icon: HelpCircle,
      },
    };
    return (
      categoryMap[categoryId as keyof typeof categoryMap] || {
        title: "Articles",
        icon: BookOpen,
      }
    );
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Troubleshoot &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Solve Issues
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Find solutions to common problems and get back to recruiting top
              talent with Leelu.ai
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-16">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <Input
                type="text"
                placeholder="How can we help? (e.g., email connection, AI copilot, sourcing...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-6 text-lg rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800 shadow-lg"
              />
            </div>

            {/* Category Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.slice(1).map((category) => (
                <Badge
                  key={category.id}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.label}: {category.count} articles
                </Badge>
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
                            ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
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

              {/* Articles */}
              <div className="lg:col-span-3">
                <div className="space-y-12">
                  {activeCategory === "all" ? (
                    // Show all categories
                    Object.entries(groupedArticles).map(
                      ([categoryId, articles]) => {
                        const categoryInfo = getCategoryInfo(categoryId);
                        return (
                          <div key={categoryId} className="space-y-6">
                            <div className="flex items-center space-x-3 mb-6">
                              <categoryInfo.icon className="h-6 w-6 text-red-500" />
                              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {categoryInfo.title}
                              </h2>
                            </div>
                            <div className="grid gap-6">
                              {articles.map((article) => (
                                <Link
                                  href={`/knowledge-base/${article.id}`}
                                  key={article.id}
                                >
                                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer">
                                    <CardContent className="p-6">
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                          <div className="flex items-center space-x-3 mb-3">
                                            <div className="flex flex-wrap gap-2">
                                              {article.tags
                                                .slice(0, 2)
                                                .map((tag) => (
                                                  <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                                                  >
                                                    {tag}
                                                  </Badge>
                                                ))}
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                              <div className="flex items-center space-x-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{article.readTime}</span>
                                              </div>
                                              <div className="flex items-center space-x-1">
                                                <User className="h-4 w-4" />
                                                <span>{article.author}</span>
                                              </div>
                                            </div>
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                                            {article.title}
                                          </h3>
                                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                            {article.description}
                                          </p>
                                          <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Published on{" "}
                                            {new Date(
                                              article.date
                                            ).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                            })}
                                          </div>
                                        </div>
                                        <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 ml-4 flex-shrink-0" />
                                      </div>
                                    </CardContent>
                                  </Card>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    // Show specific category
                    <div className="space-y-6">
                      {filteredArticles.length > 0 ? (
                        <>
                          <div className="flex items-center space-x-3 mb-6">
                            {(() => {
                              const category = categories.find(
                                (c) => c.id === activeCategory
                              );
                              return category ? (
                                <>
                                  <category.icon className="h-6 w-6 text-red-500" />
                                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {category.label} ({filteredArticles.length}{" "}
                                    articles)
                                  </h2>
                                </>
                              ) : null;
                            })()}
                          </div>
                          <div className="grid gap-6">
                            {filteredArticles.map((article) => (
                              <Link
                                href={`/knowledge-base/${article.id}`}
                                key={article.id}
                              >
                                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer">
                                  <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-3">
                                          <div className="flex flex-wrap gap-2">
                                            {article.tags
                                              .slice(0, 3)
                                              .map((tag) => (
                                                <Badge
                                                  key={tag}
                                                  variant="outline"
                                                  className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                                                >
                                                  {tag}
                                                </Badge>
                                              ))}
                                          </div>
                                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center space-x-1">
                                              <Clock className="h-4 w-4" />
                                              <span>{article.readTime}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                              <User className="h-4 w-4" />
                                              <span>{article.author}</span>
                                            </div>
                                          </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                                          {article.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                          {article.description}
                                        </p>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                          Published on{" "}
                                          {new Date(
                                            article.date
                                          ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          })}
                                        </div>
                                      </div>
                                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 ml-4 flex-shrink-0" />
                                    </div>
                                  </CardContent>
                                </Card>
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-12">
                          <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No articles found
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Try adjusting your search terms or browse different
                            categories.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
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
              Our support team is available 24/7 to help you resolve any issues
              with Leelu.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Help Center
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

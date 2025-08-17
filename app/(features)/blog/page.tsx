"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Newsletter from "@/components/custom/Newsletter";
import { blogPosts, categories, featuredPost } from "./demo";
import { SearchFilter } from "./_component/SearchFilter";
import { NoResults } from "./_component/NoResults";
import { ArticleCard } from "./_component/ArticleCard";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let results = blogPosts;

    if (searchQuery) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      results = results.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(results);
  }, [searchQuery, selectedCategory]);

  const resetSearch = () => setSearchQuery("");
  const resetFilters = () => setSelectedCategory("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50/30 to-indigo-50/30 dark:from-purple-900/10 dark:via-blue-900/5 dark:to-indigo-900/10 overflow-hidden">
        {/* Background SVG remains the same */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 mb-6 text-base px-4 py-2">
              Blog & Insights
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                AI-Powered Recruiting
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Stay ahead of the curve with insights, trends, and best practices
              from the world of AI recruiting and talent acquisition.
            </p>

            <SearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Article
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link href="/blog/future-ai-recruiting-2024-trends">
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0 cursor-pointer">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                            {typeof featuredPost.author === "string"
                              ? featuredPost.author
                              : featuredPost.author.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {typeof featuredPost.author === "string"
                              ? featuredPost.author
                              : featuredPost.author.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {featuredPost.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => handleCategoryChange("All")}
                variant={selectedCategory === "All" ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === "All"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
                }`}
              >
                All
              </Button>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`rounded-full ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Latest Articles
              </h2>
              {filteredPosts.length === 0 && (
                <NoResults
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  resetSearch={resetSearch}
                  resetFilters={resetFilters}
                />
              )}
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <ArticleCard post={post} />
              </ScrollReveal>
            ))}
          </div>
          {/* Load More */}
          {/* Load More */}
          {filteredPosts.length > 0 && (
            <ScrollReveal delay={600}>
              <div className="text-center mt-16">
                <Button
                  variant="outline"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium bg-transparent transition-all duration-300 hover:shadow-sm active:scale-[0.98]
        border-2 border-gray-300 dark:border-gray-600
        hover:border-transparent
        hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-origin-border"
                >
                  <span className="bg-white dark:bg-gray-900 group-hover:bg-transparent rounded-full inset-0 absolute -z-10 m-[2px]"></span>
                  <span className="text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors duration-300">
                    Load More Articles
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80 group-hover:translate-x-1 group-hover:stroke-white transition-all duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <Newsletter />
    </PageLayout>
  );
}

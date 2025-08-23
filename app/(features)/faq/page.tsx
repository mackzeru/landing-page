"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search } from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import QuickActions from "./_components/QuickActions";
import CTASection from "./_components/CTASection";
import FAQList from "./_components/FAQList";
import CategoryFilter from "./_components/CategoryFilter";
import { getAllTags, getPosts } from "@/services/content-api";
import { useDebounce } from "@/hooks/custom/use-debounce";
import { Post } from "@/app/_types/ghost";

const limit = 10;

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("tag:faq");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [category, setCategory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Fetch all tags dynamically
  const fetchAllTags = async (prefix?: string) => {
    try {
      const ghostTags: any = await getAllTags(prefix);
      const uniqueTagNames = new Set<string>(["All"]);
      ghostTags.forEach((tag: any) => {
        uniqueTagNames.add(tag.name);
      });
      setCategory(Array.from(uniqueTagNames));
    } catch (error) {
      console.error("Failed to fetch tags:", error);
    }
  };

  // Fetch posts based on selected tag dynamically
  const fetchPosts = async (tagSlug: string = "All") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(
        tagSlug === "All" ? "tag-faq" : tagSlug.replace("tag:", "tag-"),
        currentPage,
        limit,
        debouncedSearch
      );
      
      setTotalPage(ghostPosts?.meta?.pagination?.pages);
      if (currentPage === 1) {
        setPosts(ghostPosts || []);
      } else {
        setPosts((prev) => [...prev, ...(ghostPosts || [])]);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter posts based on search term and category
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || 
      post.tags?.some(tag => tag.name === selectedCategory);
    
    const matchesSearch = searchTerm === "" ||
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.html?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some(tag => tag.name?.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Fetch tags on mount
  useEffect(() => {
    fetchAllTags("tag-faq");
  }, []);

  useEffect(() => {
    fetchPosts(selectedCategory);
  }, [debouncedSearch, currentPage, selectedCategory]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log(selectedCategory);
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
      <CategoryFilter
        categories={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* FAQ List */}
      {isLoading ? (
        <p className="text-center text-gray-500 py-12">Loading FAQs...</p>
      ) : (
        <FAQList
          filteredFAQs={filteredPosts}
          toggleFAQ={toggleFAQ}
          openIndex={openIndex}
        />
      )}

      {/* Quick Actions */}
      <QuickActions />

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
}
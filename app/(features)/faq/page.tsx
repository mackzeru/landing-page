
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
import { FAQPost, getFAQPosts } from "@/services/faq-content-api";

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQPost[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from Ghost CMS
  useEffect(() => {
    async function fetchFAQs() {
      try {
        const data = await getFAQPosts();
        setFaqs(data);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFAQs();
  }, []);

  // Build categories dynamically from Ghost tags
  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* FAQ List */}
      {loading ? (
        <p className="text-center text-gray-500 py-12">Loading FAQs...</p>
      ) : (
        <FAQList
          filteredFAQs={filteredFAQs}
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

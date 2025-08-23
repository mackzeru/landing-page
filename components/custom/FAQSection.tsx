"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getPosts } from "@/services/content-api";
import { Post } from "@/app/_types/ghost";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  // Fetch posts based on selected tag dynamically
  const fetchPosts = async (tagSlug: string = "All") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(
        tagSlug === "All" ? "tag-faq" : tagSlug.replace("tag:", "tag-"),
        1,
        10,
        "", true
      );
      setPosts(ghostPosts || []);

    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // Fetch tags on mount
  useEffect(() => {
    fetchPosts("tag-faq");
  }, []);

  return (
    <div className="py-20 bg-blue-200 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Leelu.ai
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.title}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div
                    className="prose prose-indigo dark:prose-invert max-w-none text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        faq.html ||
                        faq.excerpt ||
                        "<p>No content available</p>",
                    }}
                  />

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

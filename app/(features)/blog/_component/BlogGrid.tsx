"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { ArticleCard } from "./ArticleCard";
import { NoResults } from "./NoResults";
import { Post } from "@/app/_types/ghost";

const BlogGrid = ({filteredPosts,searchQuery,selectedTag,resetSearch,resetFilters}: {filteredPosts: Post[],searchQuery: string,selectedTag: string,resetSearch: () => void,resetFilters:() => void}) => {
  return (
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
                  selectedCategory={selectedTag}
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
  )
}

export default BlogGrid

"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Newsletter from "@/components/custom/Newsletter";
import { SearchFilter } from "./_component/SearchFilter";
import FeaturedArticle from "./_component/FeaturedArticle";
import TagsFilterSection from "./_component/TagsFilterSection";
import { getPosts, getAllTags } from "@/services/content-api";
import BlogGrid from "./_component/BlogGrid";
import { Post } from "@/app/_types/ghost";
import { useDebounce } from "@/hooks/custom/use-debounce";
const limit = 8;
export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("tag:blog");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 500);
  // Fetch all tags dynamically, optional prefix for category
  const fetchAllTags = async (prefix?: string) => {
    try {
      const ghostTags: any = await getAllTags(prefix); // pass prefix if needed
      // Get unique tag names and include "All"
      const uniqueTagNames = new Set<string>(["All"]);
      ghostTags.forEach((tag: any) => {
        uniqueTagNames.add(tag.name);
      });
      setTags(Array.from(uniqueTagNames));
    } catch (error) {
      console.error("Failed to fetch tags:", error);
    }
  };

  // Fetch posts based on selected tag dynamically
  const fetchPosts = async (tagSlug: string = "All") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(
        tagSlug === "All" ? "tag-blog" : tagSlug.replace("tag:", "tag-"),
        currentPage,
        limit,
        debouncedSearch
      );
      setTotalPage(ghostPosts?.meta?.pagination?.pages);
      if (currentPage == 1) {
        setPosts(ghostPosts);
        setFilteredPosts(ghostPosts);
      } else {
        // Append new posts to the existing state
          setPosts((prev) => [...prev, ...ghostPosts]);

      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };


  // Fetch tags on mount
  useEffect(() => {
    fetchAllTags("tag-blog");
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [debouncedSearch, currentPage])

  // Fetch new posts when tag changes
  useEffect(() => {
    if (selectedTag !== "All") {
      fetchPosts(selectedTag);
    } else {
      fetchPosts("All");
    }
  }, [selectedTag]);

  // Apply search filter locally (since search is usually quick and doesn't need API call)
  useEffect(() => {
    if (!searchQuery) {
      setFilteredPosts(posts);
      return;
    }

    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.primary_tag?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredPosts(results);
  }, [searchQuery, posts]);
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50/30 to-indigo-50/30 dark:from-purple-900/10 dark:via-blue-900/5 dark:to-indigo-900/10 overflow-hidden">
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
              categories={tags}
              selectedCategory={selectedTag}
              setSelectedCategory={setSelectedTag}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <FeaturedArticle />

      {/* Categories / Tags - Now uses tag names instead of slugs for display */}
      <TagsFilterSection
        selectedCategory={selectedTag}
        handleCategoryChange={(category: string) => setSelectedTag(category)}
        isLoading={isLoading} tags={tags}
      />

      {/* Blog Grid */}
      <BlogGrid
        isLoading={isLoading}
        filteredPosts={filteredPosts}
        searchQuery={searchQuery}
        selectedTag={selectedTag}
        resetSearch={() => { }}
        resetFilters={() => { }}
        hasMore={currentPage < totalPage}
        handleLoadeMore={() => {
          setCurrentPage(currentPage + 1);
        }}
      />

      <Newsletter />
    </PageLayout>
  );
}
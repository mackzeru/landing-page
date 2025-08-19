"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Newsletter from "@/components/custom/Newsletter";
import { SearchFilter } from "./_component/SearchFilter";
import FeaturedArticle from "./_component/FeaturedArticle";
import TagsFilterSection from "./_component/TagsFilterSection";
import { getPosts } from "@/services/content-api";
import BlogGrid from "./_component/BlogGrid";
import { Post } from "@/app/_types/ghost";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);

  const resetSearch = () => setSearchQuery("");
  const resetFilters = () => setSelectedTag("All");

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const ghostPosts: any = await getPosts();
        setPosts(ghostPosts as any);

        // collect all tags dynamically
        const uniqueTags = new Set<string>();
        ghostPosts.forEach((p: Post) => {
          if (p.primary_tag) uniqueTags.add(p.primary_tag.name);
          if (p.tags && p.tags.length > 0) {
            p.tags.forEach((t: any) => uniqueTags.add(t.name));
          }
        });

        setTags(["All", ...Array.from(uniqueTags)]);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Apply filters
  useEffect(() => {
    let results = [...posts];

    if (searchQuery) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.primary_tag?.name
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTag !== "All") {
      results = results.filter(
        (post) =>
          post.primary_tag?.name === selectedTag ||
          post.tags?.some((t: any) => t.name === selectedTag)
      );
    }

    setFilteredPosts(results);
  }, [searchQuery, selectedTag, posts]);

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

      {/* Featured Article (pass first featured post if available) */}
      <FeaturedArticle />

      {/* Categories / Tags */}
      <TagsFilterSection
        selectedCategory={selectedTag}
        handleCategoryChange={(cat: string) => setSelectedTag(cat)}
      />

      {/* Blog Grid */}
      <BlogGrid
        filteredPosts={filteredPosts}
        searchQuery={searchQuery}
        selectedTag={selectedTag}
        resetSearch={resetSearch}
        resetFilters={resetFilters}
      />

      <Newsletter />
    </PageLayout>
  );
}

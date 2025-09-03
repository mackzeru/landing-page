"use client";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/custom/page-layou";
import { getAllTags, getPosts } from "@/services/content-api";
import { Post } from "@/app/_types/ghost";
import { useDebounce } from "@/hooks/custom/use-debounce";
import ContactSupportCTA from "./_components/ContactSupportCTA";
import Articles from "./_components/Articles";
import { getCategoryInfo } from "./_components/getCategoryInfo";
import Pagination from "../_component/Pagination";
const limit = 2;

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [tags, setTags] = useState<string[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Fetch all tags dynamically, optional prefix for category
  const fetchAllTags = async (prefix?: string) => {
    try {
      const ghostTags: any = await getAllTags(prefix);
      // Get unique tag names and include "All"
      const uniqueTagNames = new Set<string>(["All"]);

      if (ghostTags && Array.isArray(ghostTags)) {
        ghostTags.forEach((tag: any) => {
          if (tag.name && typeof tag.name === "string") {
            uniqueTagNames.add(tag.name);
          }
        });
      }

      setTags(Array.from(uniqueTagNames));
    } catch (error) {
      console.error("Failed to fetch tags:", error);
      setTags(["All"]); // Fallback
    }
  };

  const fetchPosts = async (tagSlug: string = "All") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(
        tagSlug === "All"
          ? "tag-knowledge-base"
          : `tag-${tagSlug.replace("tag:", "tag-")}`,
        currentPage,
        limit,
        debouncedSearch
      );

      setTotalPage(ghostPosts?.meta?.pagination?.pages || 1);
      setPosts(ghostPosts || []);
      setFilteredPosts(ghostPosts || []);
    
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      setPosts([]);
      setFilteredPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = tags
    .filter((tag) => tag.toLowerCase() !== "tag:knowledge-base")
    .map((tag) => {
      const id = tag === "All" ? "all" : tag.replace("tag:", "");
      const { title, icon } = getCategoryInfo(tag);
      return {
        id,
        label: title,
        icon,
        count: 0, // Update if needed
      };
    });

  // Filter articles based on search and category
  const filteredArticles = posts.filter((article) => {
    const matchesCategory =
      activeCategory === "all" ||
      article.tags?.some((tag: any) =>
        tag.name?.toLowerCase().includes(activeCategory.toLowerCase())
      );

    const matchesSearch =
      searchQuery === "" ||
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags?.some((tag: any) =>
        tag.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Group articles by category for display
  const groupedArticles = filteredArticles.reduce((acc, article) => {
    const primaryCategory = article.primary_tag?.slug || "uncategorized";
    if (!acc[primaryCategory]) {
      acc[primaryCategory] = [];
    }
    acc[primaryCategory].push(article);
    return acc;
  }, {} as Record<string, typeof posts>);

  // Fetch tags on mount
  useEffect(() => {
    fetchAllTags("tag-knowledge-base");
  }, []);

  // Fetch posts when search or page changes
  useEffect(() => {
    fetchPosts(activeCategory === "all" ? "All" : activeCategory);
  }, [debouncedSearch, currentPage, activeCategory]);

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
              {categories
                .filter((cat) => cat.id !== "all")
                .map((category) => (
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
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1); // Reset to first page when changing category
                        }}
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
                          {/* {category.count} */}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles */}
              <div className="lg:col-span-3">
                <Articles
                  activeCategory={activeCategory}
                  groupedArticles={groupedArticles}
                  getCategoryInfo={getCategoryInfo}
                  articles={filteredArticles}
                  isLoading={isLoading}
                />
                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPage}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                  }}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <ContactSupportCTA />
      </div>
    </PageLayout>
  );
}

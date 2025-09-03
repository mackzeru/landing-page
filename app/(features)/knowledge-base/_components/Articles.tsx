"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ChevronRight, Search } from "lucide-react";
import { type ElementType } from "react";
import Link from "next/link";
import { Post } from "@/app/_types/ghost";

interface CategoryInfo {
  icon: ElementType<any>;
  title: string;
}

interface ArticlesProps {
  activeCategory: string;
  groupedArticles: Record<string, Post[]>;
  getCategoryInfo: (categoryId: string) => CategoryInfo;
  articles: Post[];
  isLoading?: boolean;
}

const Articles: React.FC<ArticlesProps> = ({
  activeCategory,
  groupedArticles,
  getCategoryInfo,
  articles,
  isLoading = false,
}) => {
  // Helper function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to get read time (estimate based on word count)
  const getReadTime = (htmlContent: string) => {
    const wordsPerMinute = 200;
    const text = htmlContent.replace(/<[^>]*>/g, "");
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };


  // Helper function to get all tag names
  const getTagNames = (post: Post) => {
    return post.tags
      ?.map((tag) => tag.name)
      .filter(Boolean)
      .filter((name) => name !== "tag:knowledge-base") || [];
  };
  

  if (isLoading) {
    return (
      <div className="lg:col-span-3">
        <div className="space-y-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="h-8 w-48 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </div>
              <div className="grid gap-6">
                {[1, 2].map((card) => (
                  <Card
                    key={card}
                    className="bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50"
                  >
                    <CardContent className="p-6">
                      <div className="animate-pulse">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="flex flex-wrap gap-2">
                            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                        </div>
                        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
                        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="lg:col-span-3">
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No articles found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search terms or browse different categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-3">
      <div className="space-y-12">
        {activeCategory === "all" ? (
          // Show all categories
          Object.entries(groupedArticles).map(
            ([categoryId, categoryArticles]) => {
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
                    {categoryArticles.map((article) => (
                      <Link
                        href={`/knowledge-base/${article.slug}`}
                        key={article.id}
                      >
                        <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <div className="flex flex-wrap gap-2">
                                    {getTagNames(article)
                                      .slice(0, 2)
                                      .map((tag) => {
                                        const { title } = getCategoryInfo(tag); // Clean label
                                        return (
                                          <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                                          >
                                            {title}
                                          </Badge>
                                        );
                                      })}
                                  </div>

                                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-1">
                                      <Clock className="h-4 w-4" />
                                      <span>
                                        {getReadTime(article.html || "")}
                                      </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <User className="h-4 w-4" />
                                      <span>
                                        {article.primary_author?.name ||
                                          "Unknown Author"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                                  {article.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                  {article.excerpt ||
                                    article.custom_excerpt ||
                                    "No description available"}
                                </p>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Published on{" "}
                                  {formatDate(
                                    article.published_at || article.created_at
                                  )}
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
            <div className="flex items-center space-x-3 mb-6">
              {(() => {
                const categoryInfo = getCategoryInfo(activeCategory);
                return (
                  <>
                    <categoryInfo.icon className="h-6 w-6 text-red-500" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {categoryInfo.title} ({articles.length} articles)
                    </h2>
                  </>
                );
              })()}
            </div>
            <div className="grid gap-6">
              {articles.map((article) => (
                <Link href={`/knowledge-base/${article.slug}`} key={article.id}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex flex-wrap gap-2">
                            {getTagNames(article)
                                      .slice(0, 2)
                                      .map((tag) => {
                                        const { title } = getCategoryInfo(tag); // Clean label
                                        return (
                                          <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                                          >
                                            {title}
                                          </Badge>
                                        );
                                      })}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{getReadTime(article.html || "")}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>
                                  {article.primary_author?.name ||
                                    "Unknown Author"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            {article.excerpt ||
                              article.custom_excerpt ||
                              "No description available"}
                          </p>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Published on{" "}
                            {formatDate(
                              article.published_at || article.created_at
                            )}
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
        )}
      </div>
    </div>
  );
};

export default Articles;

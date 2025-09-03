"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Copy,
  MessageSquare,
  Mail,
  Send,
  Bot,
  Database,
  Settings,
  HelpCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PageLayout } from "@/components/custom/page-layou";
import { Post } from "@/app/_types/ghost";
import { getPost, getPosts } from "@/services/content-api";

export default function KnowledgeBaseArticlePage() {
  const params = useParams();
  const { slug } = params;
  const [copied, setCopied] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategoryInfo = (categorySlug: string) => {
    const categoryMap: Record<string, { title: string; icon: any; color: string }> = {
      "email-accounts": {
        title: "Email Accounts",
        icon: Mail,
        color: "text-green-600",
      },
      campaigns: { title: "Campaigns", icon: Send, color: "text-purple-600" },
      "ai-copilot": {
        title: "AI Copilot",
        icon: Bot,
        color: "text-orange-600",
      },
      sourcing: {
        title: "Multi-Source Sourcing",
        icon: Database,
        color: "text-cyan-600",
      },
      integrations: {
        title: "Integrations",
        icon: Settings,
        color: "text-pink-600",
      },
      general: { title: "General", icon: HelpCircle, color: "text-gray-600" },
    };
    
    return (
      categoryMap[categorySlug] || {
        title: "Articles",
        icon: BookOpen,
        color: "text-blue-600",
      }
    );
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedPost = await getPost(slug as string);
        setPost(fetchedPost as Post);
        
        // Fetch related posts based on primary tag
        if (fetchedPost && fetchedPost.primary_tag) {
          const related: any = await getPosts(
            `tag-${fetchedPost.primary_tag.slug.replace("tag:", "")}`,
            1,
            3
          );
          setRelatedPosts(related.filter((p: Post) => p.slug !== slug));
        }
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <PageLayout>
        <div className="max-w-4xl mx-auto py-24 text-center text-gray-500 flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin mb-4" />
          Loading article...
        </div>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout>
        <div className="max-w-4xl mx-auto py-24 text-center text-gray-500">
          Article not found.
        </div>
      </PageLayout>
    );
  }

  // Extract category from tags
  const categoryTag = post.tags?.find(tag => 
    tag.name?.startsWith("tag:knowledge-base-") || 
    (tag.name !== "tag:knowledge-base" && tag.name?.startsWith("tag:"))
  );
  
  const categorySlug = categoryTag?.name?.replace("tag:knowledge-base-", "").replace("tag:", "") || "general";
  const categoryInfo = getCategoryInfo(categorySlug);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Header */}
        <section className="py-8 px-8 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <Link
                href="/knowledge-base"
                className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Knowledge Base
              </Link>
              <span>/</span>
              <span className="flex items-center space-x-1">
                <categoryInfo.icon className="h-4 w-4" />
                <span>{categoryInfo.title}</span>
              </span>
            </nav>

            {/* Back Button */}
            <Link href="/knowledge-base">
              <Button
                variant="ghost"
                className="mb-6 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Knowledge Base
              </Button>
            </Link>

            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {post.tags?.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag.id}
                    variant="outline"
                    className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                  >
                    {tag.name?.replace("tag:", "")}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.primary_author?.name || "Leelu Support Team"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.published_at || "").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.reading_time || 5} min read</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 bg-transparent"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 bg-transparent"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50">
                  <CardContent className="p-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      {/* Overview */}
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-800 rounded-xl p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <BookOpen className="h-6 w-6 text-red-500 mr-3" />
                          Overview
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Article HTML Content */}
                      {post.html && (
                        <div 
                          className="article-content"
                          dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>

     
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Need More Help */}
                  <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">
                        Still Need Help?
                      </h3>
                      <p className="text-red-100 text-sm mb-4">
                        Our support team is here to help you resolve any issues.
                      </p>
                      <Link href="/contact">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full bg-white text-red-600 hover:bg-gray-100"
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact Support
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-12 px-8 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/knowledge-base/${relatedPost.slug}`}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedPost.tags?.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag.id}
                              variant="outline"
                              className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs"
                            >
                              {tag.name?.replace("tag:", "")}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                          <span>{relatedPost.reading_time || 5} min read</span>
                          <ExternalLink className="h-4 w-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
}
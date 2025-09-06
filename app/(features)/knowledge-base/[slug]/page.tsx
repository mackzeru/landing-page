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
  Copy,
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
import RelatedArticles from "../_components/RelatedArticles";
import ArticleContent from "../_components/ArticleContent";

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
        <ArticleContent post={post} />

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
         <RelatedArticles relatedPosts={relatedPosts} />
        )}
      </div>
    </PageLayout>
  );
}
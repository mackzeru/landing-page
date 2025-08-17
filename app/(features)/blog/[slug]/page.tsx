"use client";

import Link from "next/link";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Newsletter from "@/components/custom/Newsletter";
import { post, relatedPosts } from "./demo";
import {
  Clock,
  ArrowLeft,
  Bookmark,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleCard } from "../_component/ArticleCard";
import { BlogPost, FeaturedPost } from "@/app/_types/blog";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return (
    <PageLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={post.title} />

      {/* Article Header */}
      <ArticleHeader post={post} />

      {/* Featured Image */}
      <FeaturedImage image={post.image} alt={post.title} />

      {/* Article Content */}
      <ArticleContent content={post.content ?? ""} />

      {/* Tags */}
      <ArticleTags tags={post.tags || []} />

      {/* Author Bio */}
      <AuthorBio author={post.author} />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* Newsletter CTA */}
      <Newsletter />
    </PageLayout>
  );
}

// Reusable Components with proper typing

const Breadcrumb = ({ title }: { title: string }) => (
  <section className="py-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-4xl mx-auto px-6">
      <nav className="flex items-center space-x-2 text-sm">
        <Link
          href="/"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <Link
          href="/blog"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Blog
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <span className="text-gray-900 dark:text-white font-medium">
          {title}
        </span>
      </nav>
    </div>
  </section>
);

const ArticleHeader = ({ post }: { post: FeaturedPost }) => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6">
            <Tag className="h-3 w-3 mr-1" />
            {post.category}
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <ArticleMeta post={post} />
          <ShareButtons />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ArticleMeta = ({ post }: { post: FeaturedPost }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-4">
      <img
        src={
          typeof post.author === "string"
            ? "/placeholder.svg"
            : post.author.avatar || "/placeholder.svg"
        }
        alt={typeof post.author === "string" ? post.author : post.author.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-gray-900 dark:text-white">
          {typeof post.author === "string" ? post.author : post.author.name}
        </div>
        {typeof post.author !== "string" && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {post.author.title}
          </div>
        )}
      </div>
    </div>

    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center">
        <Calendar className="h-4 w-4 mr-1" />
        {post.date}
      </div>
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-1" />
        {post.readTime}
      </div>
    </div>
  </div>
);

const ShareButtons = () => (
  <div className="flex items-center justify-between pt-6">
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Share:
      </span>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full bg-transparent"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full bg-transparent"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full bg-transparent"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
      <Bookmark className="h-4 w-4 mr-2" />
      Save
    </Button>
  </div>
);

const FeaturedImage = ({ image, alt }: { image?: string; alt: string }) => (
  <section className="py-0 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      <ScrollReveal delay={200}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={image || "/placeholder.svg"}
            alt={alt}
            className="w-full h-64 lg:h-96 object-cover"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ArticleContent = ({ content }: { content: string }) => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal delay={300}>
        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-p:leading-relaxed
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-blockquote:border-l-blue-500
            prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/10
            prose-blockquote:py-4 prose-blockquote:px-6
            prose-blockquote:rounded-r-lg
            prose-blockquote:not-italic
            prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200
            prose-ul:text-gray-700 dark:prose-ul:text-gray-300
            prose-li:text-gray-700 dark:prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </ScrollReveal>
    </div>
  </section>
);

const ArticleTags = ({ tags }: { tags: string[] }) => (
  <section className="py-8 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="flex flex-wrap gap-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tags:
          </span>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const AuthorBio = ({ author }: { author: FeaturedPost["author"] }) => {
  if (typeof author === "string") return null;

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={author.avatar || "/placeholder.svg"}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {author.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {author.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

const RelatedPosts = ({ posts }: { posts: BlogPost[] }) => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Related Articles
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ScrollReveal key={post.id} delay={100}>
            <ArticleCard post={post} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

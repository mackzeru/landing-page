"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import Newsletter from "@/components/custom/Newsletter";
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
import {  getPost, getPosts, getRelatedPosts } from "@/services/content-api";
import { Post } from "@/app/_types/ghost";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const fetchedPost = await getPost(slug)
      setPost(fetchedPost as any);

      if (fetchedPost?.primary_tag?.slug) {
        const related = await getRelatedPosts(fetchedPost.primary_tag.slug, fetchedPost.id);
        setRelatedPosts(related as any);
      } else {
        // fallback: latest posts excluding current
        const latest:any = await getPosts({ limit: 3 });
        setRelatedPosts(latest.filter((p:any) => p.id !== fetchedPost.id));
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
        <div className="max-w-4xl mx-auto py-24 text-center text-gray-500">
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

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={post.title} />

      {/* Article Header */}
      <ArticleHeader post={post} />

      {/* Featured Image */}
      <FeaturedImage image={post.feature_image} alt={post.title} />

      {/* Article Content */}
      <ArticleContent content={post.html ?? ""} />

      {/* Tags */}
      <ArticleTags
        tags={post.tags?.map((t) => t.name) || []}
      />

      {/* Author Bio */}
      <AuthorBio author={post.primary_author} />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* Newsletter CTA */}
      <Newsletter />
    </PageLayout>
  );
}

/* ────────────── Reusable Components ────────────── */

const Breadcrumb = ({ title }: { title: string }) => (
  <section className="py-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-4xl mx-auto px-6">
      <nav className="flex items-center space-x-2 text-sm">
        <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <Link href="/blog" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <span className="text-gray-900 dark:text-white font-medium">{title}</span>
      </nav>
    </div>
  </section>
);

const ArticleHeader = ({ post }: { post: Post }) => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {post.primary_tag && (
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6">
              <Tag className="h-3 w-3 mr-1" />
              {post.primary_tag.name}
            </Badge>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <ArticleMeta post={post} />
          <ShareButtons />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ArticleMeta = ({ post }: { post: Post }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-4">
      <img
        src={post.primary_author?.profile_image || "/placeholder.svg"}
        alt={post.primary_author?.name || "Author"}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-gray-900 dark:text-white">
          {post.primary_author?.name}
        </div>
        {post.primary_author?.bio && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {post.primary_author?.bio}
          </div>
        )}
      </div>
    </div>

    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center">
        <Calendar className="h-4 w-4 mr-1" />
        {new Date(post.published_at).toLocaleDateString()}
      </div>
      {post.reading_time && (
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {post.reading_time} min read
        </div>
      )}
    </div>
  </div>
);

const ShareButtons = () => (
  <div className="flex items-center justify-between pt-6">
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Share:
      </span>
      <Button variant="outline" size="sm" className="rounded-full bg-transparent">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" className="rounded-full bg-transparent">
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" className="rounded-full bg-transparent">
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
          <img src={image || "/placeholder.svg"} alt={alt} className="w-full h-64 lg:h-96 object-cover" />
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
          className="prose prose-lg dark:prose-invert max-w-none"
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
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tags:</span>
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

const AuthorBio = ({ author }: { author: Post["primary_author"] }) => {
  if (!author) return null;

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={author.profile_image || "/placeholder.svg"}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {author.name}
                  </h3>
                  {author.bio && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {author.bio}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

const RelatedPosts = ({ posts }: { posts: Post[] }) => (
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

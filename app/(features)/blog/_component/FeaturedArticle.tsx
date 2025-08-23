"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { Post } from "@/app/_types/ghost";
import { useEffect, useState } from "react";
import { getFeaturedPosts } from "@/services/content-api";

const FeaturedArticle = () => {
  const [featuredPost, setFeaturedBlog] = useState<Post | undefined>(undefined);

  const fetchFeaturedPost = async () => {
    const featuredPosts = await getFeaturedPosts(1);
    const featuredPost = featuredPosts[0];
    setFeaturedBlog(featuredPost as Post);
  };

  // FetchFeaturedPost the first featured post
  useEffect(() => {
    fetchFeaturedPost();
  }, []);
  if (featuredPost == undefined) {
    return <></>;
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Article
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0 cursor-pointer">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.feature_image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                          {featuredPost.primary_author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {featuredPost.primary_author.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(
                            featuredPost.published_at
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {featuredPost.reading_time} min
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedArticle;

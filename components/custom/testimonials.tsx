"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { Post } from "@/app/_types/ghost";
import { getPosts } from "@/services/content-api";

export function EnhancedTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async (tagSlug: string = "All") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(
        tagSlug === "All" ? "tag-testimonial" : tagSlug.replace("tag:", "tag-"),
        1,
        10,"",true
      );
      setPosts(ghostPosts || []);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts("tag-testimonial");
  }, []);

  // Infinite scroll effect
  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;

    const cards = Array.from(scrollWrapper.children) as HTMLElement[];
    const clonedCards = cards.map((card) => card.cloneNode(true) as HTMLElement);
    clonedCards.forEach((card) => {
      card.setAttribute("aria-hidden", "true");
      scrollWrapper.appendChild(card);
    });

    let animationFrameId: number;
    let scrollSpeed = 1;
    let isPaused = false;

    const startScrolling = () => {
      if (isPaused) return;
      if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth / 2) {
        scrollWrapper.scrollLeft -= scrollWrapper.scrollWidth / 2;
      } else {
        scrollWrapper.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(startScrolling);
    };

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => {
      isPaused = false;
      startScrolling();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    startScrolling();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [posts]);

  if (isLoading) {
    return <div className="text-center py-20 text-gray-500">Loading testimonials...</div>;
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-100 to-blue-400 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-2xl mb-6">
              <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Real results from real recruiting teams who've transformed their hiring process
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white ml-3">4.9/5</span>
              <span className="text-gray-600 dark:text-gray-400">from 200+ reviews</span>
            </div>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative overflow-hidden py-4">
          <div ref={scrollWrapperRef} className="flex space-x-8 w-max will-change-transform">
            {posts.map((post, index) => {
              const quote = post.excerpt;
              const author = post.title.split(" – ")[0] || "Unknown";
              const titleCompany = post.title.split(" – ")[1] || "";
              const [title, company] = titleCompany.split(", ").map((s) => s.trim());
              const avatar = post.feature_image || "/placeholder.svg";

              const ratingTag = post.tags.find((tag) => tag.name.includes("rating"));
              const rating = ratingTag ? parseInt(ratingTag.name.split("-").pop() || "5") : 5;

              const metricsTag = post.tags.find((tag) => tag.name.includes("testimonial-"));
              const metrics = metricsTag ? metricsTag.name.replace("tag:testimonial-", "").replace(/-/g, " ") : "";

              return (
                <div key={post.id} className="flex-shrink-0 w-[400px]">
                  <ScrollReveal delay={index * 150}>
                    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 overflow-hidden flex flex-col h-[500px]">
                      <CardContent className="p-8 relative flex flex-col justify-between h-full">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Quote className="h-12 w-12 text-blue-600" />
                        </div>

                        {/* Rating */}
                        <div className="flex mb-4">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg font-medium flex-1">
                          "{quote}"
                        </blockquote>

                        {/* Metrics Badge */}
                        {metrics && (
                          <div className="mb-4">
                            <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1">
                              {metrics}
                            </Badge>
                          </div>
                        )}

                        {/* Author Info */}
                        <div className="flex items-center mt-auto">
                          <div className="relative">
                            <img
                              src={avatar}
                              alt={author}
                              className="w-14 h-14 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-lg"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                  author
                                )}&background=3b82f6&color=fff&size=150`;
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-bold text-gray-900 dark:text-white text-lg">{author}</div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">{title}</div>
                            <div className="text-blue-600 dark:text-blue-400 font-semibold">{company}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <ScrollReveal delay={800}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Join 2,000+ recruiting teams
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">48%</div>
                  <div className="text-gray-600 dark:text-gray-300">Average response rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">85%</div>
                  <div className="text-gray-600 dark:text-gray-300">Time saved vs manual</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24hrs</div>
                  <div className="text-gray-600 dark:text-gray-300">Average time to interview</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

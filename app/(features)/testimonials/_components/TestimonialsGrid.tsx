"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { Post } from "@/app/_types/ghost";

interface TestimonialsGridProps {
  posts: Post[];
  isLoading: boolean;
}

const TestimonialsGrid = ({ posts, isLoading }: TestimonialsGridProps) => {
  if (isLoading) {
    return <div className="text-center py-20 text-gray-500">Loading testimonials...</div>;
  }

  if (!posts.length) {
    return <div className="text-center py-20 text-gray-500">No testimonials found.</div>;
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of recruiting teams who've transformed their hiring process
            </p>
            {/* <div className="flex items-center justify-center mt-6 space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                4.9/5
              </span>
              <span className="text-gray-600 dark:text-gray-400">from 200+ reviews</span>
            </div> */}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={post.id} className="flex-shrink-0 max-w-[400px]">
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
    </section>
  );
};

export default TestimonialsGrid;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Play, Star } from "lucide-react";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { Post } from "@/app/_types/ghost";
import { useState, useEffect } from "react";
import { getPosts } from "@/services/content-api";

const FeaturedTestimonial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async (tagSlug: string = "tag-testimonial") => {
    try {
      setIsLoading(true);
      const ghostPosts: any = await getPosts(tagSlug, 1, 10, "", true);
      setPosts(ghostPosts || []);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) return <div className="text-center py-20 text-gray-500">Loading testimonial...</div>;
  if (!posts.length) return <div className="text-center py-20 text-gray-500">No testimonial found.</div>;

  const post = posts[0]; // Use the first post as featured
  const quote = post.excerpt;
  const author = post.title.split(" – ")[0] || "Unknown";
  const titleCompany = post.title.split(" – ")[1] || "";
  const [title, company] = titleCompany.split(", ").map((s) => s.trim());
  const avatar = post.feature_image || `/placeholder.svg`;

  // Parse metrics from tags: expect format `testimonial-label|value|change;...

  const ratingTag = post.tags.find((tag) => tag.name.includes("rating"));
  const rating = ratingTag ? parseInt(ratingTag.name.split("-").pop() || "5") : 5;

 const metricsTag = post.tags.find((tag) => tag.name.includes("testimonial-"));
              const metrics = metricsTag ? metricsTag.name.replace("tag:testimonial-", "").replace(/-/g, " ") : "";

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <Card className="border-0 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Left Side: Quote & Author */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-12 flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-4">
                  <Quote className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />

                  <div className="flex mb-4">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8">
                  {quote}
                </blockquote>
                {/* Rating */}

              </div>

              <div className="flex items-center mb-8">
                <img
                  src={avatar}
                  alt={author}
                  className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-white dark:ring-gray-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=3b82f6&color=fff&size=150`;
                  }}
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-lg">{author}</div>
                  <div className="text-gray-600 dark:text-gray-400">{title}</div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">{company}</div>
                </div>
              </div>


            </div>

            {/* Right Side: Metrics */}
            <CardContent className="lg:w-1/2 p-12 bg-white dark:bg-gray-800 flex flex-col justify-center h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
                Key Results
              </h3>
              <div className="space-y-6">
                {/* Metrics Badge */}
                {metrics && (
                  <div className="mb-4">
                    <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1">
                      {metrics}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;

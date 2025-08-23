import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Post } from "@/app/_types/ghost";

interface ArticleCardProps {
  post: Post;
  className?: string;
}

export function ArticleCard({ post, className = "" }: ArticleCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className={`group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${className}`}
      >
        {/* Image */}
        <div className="relative h-52 w-full">
          <img
            src={post.feature_image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {post.featured && (
            <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 dark:text-gray-900 text-xs font-semibold shadow-sm hover:text-white">
              {post.primary_tag.name?.replace("tag:", "")}
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-5 flex flex-col h-full justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {/* Author & Meta */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-semibold  text-purple-600 dark:text-purple-400 font-semibold text-sm ">
                {post.primary_author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white text-sm font-medium">
                  {post.primary_author.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {new Date(post.published_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs space-x-1">
              <Clock className="w-3 h-3" />
              <span>{post.reading_time || 3} min read</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

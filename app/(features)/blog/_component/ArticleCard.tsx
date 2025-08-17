import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { BlogPost } from "@/app/_types/blog";

interface ArticleCardProps {
  post: BlogPost;
  className?: string;
}

export function ArticleCard({ post, className = "" }: ArticleCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card
        className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden h-full cursor-pointer ${className}`}
      >
        <div className="relative">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-gray-700 text-xs">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-semibold text-xs">
                  {typeof post.author === "string"
                    ? post.author
                    : post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {typeof post.author === "string"
                    ? post.author
                    : post.author.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {post.date}
                </div>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">{post.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

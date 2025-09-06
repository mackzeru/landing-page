import { Post } from "@/app/_types/ghost";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ArticleContent = ({ post }: { post: Post }) => {
  return (
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
  );
};

export default ArticleContent;

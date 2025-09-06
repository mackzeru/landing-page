import { Post } from '@/app/_types/ghost'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'


const RelatedArticles = ({ relatedPosts }: { relatedPosts: Post[] }) => {
  return (
    <section className="py-12 px-8 bg-gray-50 dark:bg-gray-800/50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Related Articles
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((relatedPost) => (
          <Link
            key={relatedPost.id}
            href={`/knowledge-base/${relatedPost.slug}`}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-lg dark:shadow-gray-900/50 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {relatedPost.tags?.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag.id}
                      variant="outline"
                      className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs"
                    >
                      {tag.name?.replace("tag:", "")}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>{relatedPost.reading_time || 5} min read</span>
                  <ExternalLink className="h-4 w-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </section>
  )
}

export default RelatedArticles
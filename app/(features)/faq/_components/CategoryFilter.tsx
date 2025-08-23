import { ScrollReveal } from '@/components/custom/ScrollReveal'
import { Button } from '@/components/ui/button'
import React from 'react'

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (i: string) => void
}) => {
  const uniqueTags = Array.from(new Set(categories))

  const formatTagName = (name: string) => {
    if (name === "tag:faq") return "All" 
    
    return name
      .replace("tag:faq-", "") // remove `tag:faq-`
      .replace("tag:faq", "") // also safe for `tag:faq`
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {uniqueTags.splice(1).map(tag => (
              <Button
                key={tag}
                onClick={() => setSelectedCategory(tag)}
                variant={selectedCategory === tag ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === tag
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
                }`}
              >
                {formatTagName(tag)}
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CategoryFilter

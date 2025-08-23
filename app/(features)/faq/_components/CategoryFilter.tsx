import { ScrollReveal } from '@/components/custom/ScrollReveal'
import { Button } from '@/components/ui/button'
import React from 'react'

const CategoryFilter = ({categories,selectedCategory,setSelectedCategory}: {categories: string[],selectedCategory: string,setSelectedCategory: (i: string)=>void}) => {
  return (
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all ${selectedCategory === category
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                      : "border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400"
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
  )
}

export default CategoryFilter
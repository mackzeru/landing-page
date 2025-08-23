"use client";
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/custom/ScrollReveal';



export default function TagsFilterSection({
  selectedCategory,
  handleCategoryChange,
  isLoading,
  tags
}: {
  isLoading: boolean;
  tags: string[];
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}) {
  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {[...Array(5)].map((_, i) => (
              <Button key={i} variant="outline" className="rounded-full animate-pulse w-24 h-10" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const formatTagName = (name: string) => {
    return name.replace("tag:", "").replace("blog", 'All')
      .split('-') // Split by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join words with space
  };

  const uniqueTags = Array.from(new Set(tags));
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center">

            {uniqueTags.map((tag) => {
              if(tag.toUpperCase()=="ALL"){
                return<></>
              }
              return <Button
                key={tag}
                onClick={() => handleCategoryChange(tag)}
                variant={selectedCategory === tag ? "default" : "outline"}
                className={`rounded-full ${selectedCategory === tag
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
                  }`}
              >
                {formatTagName(tag)}
              </Button>
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
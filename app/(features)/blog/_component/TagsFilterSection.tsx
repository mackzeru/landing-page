"use client";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/custom/ScrollReveal';
import { getAllTags } from '@/services/content-api';

type Tag = {
  id: string;
  name: string;
  slug: string;
};

export default function TagsFilterSection({
  selectedCategory,
  handleCategoryChange
}: {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
           const ghostTags = await getAllTags();
            setTags(ghostTags as any)
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTags();
  }, []);

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

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => handleCategoryChange("All")}
              variant={selectedCategory === "All" ? "default" : "outline"}
              className={`rounded-full ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
              }`}
            >
              All
            </Button>
            {tags.map((tag) => (
              <Button
                key={tag.id}
                onClick={() => handleCategoryChange(tag.slug)}
                variant={selectedCategory === tag.slug ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === tag.slug
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
                }`}
              >
                {tag.name}
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
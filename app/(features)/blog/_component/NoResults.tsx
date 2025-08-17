import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  searchQuery: string;
  selectedCategory: string;
  resetSearch: () => void;
  resetFilters: () => void;
}

export function NoResults({
  searchQuery,
  selectedCategory,
  resetSearch,
  resetFilters,
}: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 p-5 bg-purple-100/50 dark:bg-purple-900/20 rounded-full">
        <Search className="h-8 w-8 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        No articles found
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
        We couldn't find any articles matching "{searchQuery}"
        {selectedCategory !== "All" && ` in "${selectedCategory}"`}.
      </p>
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={resetSearch}
          className="border-gray-300 dark:border-gray-600"
        >
          Clear search
        </Button>
        <Button
          onClick={resetFilters}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        >
          Show all articles
        </Button>
      </div>
    </div>
  );
}

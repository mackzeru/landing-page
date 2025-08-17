"use client";

import { Search, Filter, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
}

export function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  isFilterOpen,
  setIsFilterOpen,
}: SearchFilterProps) {
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <Button
            variant={selectedCategory !== "All" ? "default" : "outline"}
            className={`rounded-xl px-5 py-3 border-2 transition-all duration-200 ${
              selectedCategory !== "All"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                : "border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 bg-white dark:bg-gray-800"
            }`}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
            {selectedCategory !== "All" && (
              <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                {selectedCategory}
              </span>
            )}
          </Button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-10 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="py-1">
                <button
                  onClick={() => handleCategoryChange("All")}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center transition-colors ${
                    selectedCategory === "All"
                      ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span>All Categories</span>
                  {selectedCategory === "All" && (
                    <Check className="h-4 w-4 ml-auto text-purple-600 dark:text-purple-400" />
                  )}
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center transition-colors ${
                      selectedCategory === category
                        ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span>{category}</span>
                    {selectedCategory === category && (
                      <Check className="h-4 w-4 ml-auto text-purple-600 dark:text-purple-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Active Filter Badge */}
      {selectedCategory !== "All" && (
        <div className="mt-3 flex items-center">
          <Badge className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800 rounded-lg px-3 py-1.5">
            {selectedCategory}
            <button
              onClick={() => setSelectedCategory("All")}
              className="ml-2 p-0.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              aria-label="Clear filter"
            >
              <X className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
            </button>
          </Badge>
        </div>
      )}
    </div>
  );
}

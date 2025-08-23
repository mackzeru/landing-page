"use client";

import { Search, Filter, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const allExceptFirst = (categories: string[]) => {
  const rest = categories.filter(cat => cat !== "tag:blog");
  return rest;
};

const formatCategoryName = (name: unknown) => {
  if (typeof name !== "string") return ""; // defensive fallback
  return name
    .replace("tag:blog", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: SearchFilterProps) {
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
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
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={selectedCategory !== "All" ? "default" : "outline"}
              className={`rounded-xl px-8 py-5 border-2 transition-all duration-200 ${selectedCategory !== "All"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                  : "border-gray-300 hover:border-purple-500 bg-white"
                }`}
            >
              <Filter className="h-6 w-6 mr-2" />
              Filter
              {selectedCategory !== "All" && (
                <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                  {formatCategoryName(selectedCategory)}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0 rounded-xl shadow-xl border border-gray-200 max-h-36 overflow-auto">
            <div className="py-1">
              {/* <button
                onClick={() => handleCategoryChange("All")}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center transition-colors ${selectedCategory === "All"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <span>All Categories</span>
                {selectedCategory === "All" && (
                  <Check className="h-4 w-4 ml-auto text-purple-600" />
                )}
              </button> */}

              {categories.length > 0 && allExceptFirst(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center transition-colors ${selectedCategory === category
                      ? "bg-purple-50 text-purple-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span>{formatCategoryName(category)}</span> {/* Format category name */}
                  {selectedCategory === category && (
                    <Check className="h-4 w-4 ml-auto text-purple-600" />
                  )}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {/* Active Filter Badge */}
      {selectedCategory !== "All" && (
        <div className="mt-3 flex items-center">
          <Badge className="bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 border border-purple-200 rounded-lg px-3 py-1.5">
            {formatCategoryName(selectedCategory)}
            <button
              onClick={() => setSelectedCategory("All")}
              className="ml-2 p-0.5 rounded-full hover:bg-purple-100 transition-colors"
              aria-label="Clear filter"
            >
              <X className="h-3.5 w-3.5 text-purple-500" />
            </button>
          </Badge>
        </div>
      )}
    </div>
  );
}
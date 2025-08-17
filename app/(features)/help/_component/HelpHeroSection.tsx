import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const HelpHeroSection = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Help Center &{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Knowledge Base
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          Find answers, learn best practices, and get the most out of Leelu.ai
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-purple-500" />
          <Input
            type="text"
            placeholder="Search for help articles, tutorials, and guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-16 pr-6 py-6 text-lg rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 bg-white dark:bg-gray-800 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HelpHeroSection;

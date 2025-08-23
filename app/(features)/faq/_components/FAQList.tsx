"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { Post } from "@/app/_types/ghost";

interface FAQListProps {
  filteredFAQs: Post[];
  toggleFAQ: (id: number) => void;
  openIndex: number | null;
}

const FAQList = ({ filteredFAQs, toggleFAQ, openIndex }: FAQListProps) => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {filteredFAQs.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or category filter
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <ScrollReveal key={faq.id || index} delay={index * 50}>
                <Card
                  className={`border-2 transition-all duration-500 overflow-hidden 
                  ${
                    openIndex === index
                      ? "border-indigo-500 shadow-lg shadow-indigo-100 dark:shadow-indigo-900/40"
                      : "hover:shadow-md"
                  } rounded-2xl`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                  >
                    <div className="flex-1 pr-4">
                      <h3
                        className={`text-lg md:text-xl font-semibold leading-relaxed transition-colors 
                        ${
                          openIndex === index
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {faq.title}
                      </h3>
                     
                    </div>

                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center 
                      transition-all duration-300 group-hover:scale-105
                      ${
                        openIndex === index
                          ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer Section */}
                  <div
                    className={`transition-all duration-500 ease-in-out 
                      ${
                        openIndex === index
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <div className="px-8 pb-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                        <div
                          className="prose prose-indigo dark:prose-invert max-w-none text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html:
                              faq.html ||
                              faq.excerpt ||
                              "<p>No content available</p>",
                          }}
                        />
                        {faq.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {faq.tags.map((tag, i) => (
                              <Badge
                                key={tag.id || i}
                                variant="secondary"
                                className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                              >
                                {tag.name
                                  .replace("-", " ")
                                  .replace("tag:", "")}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQList;

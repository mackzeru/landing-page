"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { FAQType } from "@/app/_types/faq";
const FAQList = ({filteredFAQs,toggleFAQ,openIndex}: {filteredFAQs: FAQType[],toggleFAQ: (id: number)=>void,openIndex: number| null}) => {
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
                <ScrollReveal key={index} delay={index * 50}>
                  <Card className="border-2 transition-all duration-300 overflow-hidden hover:shadow-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center mb-2">
                          <Badge className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 mr-3">
                            {faq.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
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

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-8 pb-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {faq.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
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
  )
}

export default FAQList
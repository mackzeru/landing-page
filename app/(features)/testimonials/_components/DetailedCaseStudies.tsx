"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { caseStudies } from "../demo";

const DetailedCaseStudies = () => {
  return (
         <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Detailed Case Studies
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Deep dive into how our customers achieved transformational
                results
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                  >
                    <div
                      className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""
                        }`}
                    >
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.company} case study`}
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-2xl font-bold">
                          {study.company}
                        </div>
                        <div className="text-lg opacity-90">
                          {study.industry}
                        </div>
                      </div>
                    </div>

                    <CardContent
                      className={`p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""
                        }`}
                    >
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {study.company}
                        </h3>
                        <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6">
                          {study.industry}
                        </Badge>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Solution
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {study.solution}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Results
                          </h4>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li
                                key={i}
                                className="flex items-center text-gray-600 dark:text-gray-300"
                              >
                                <Target className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-blue-500 pl-6 mb-8">
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                          "{study.testimonial}"
                        </p>
                        <cite className="text-gray-600 dark:text-gray-400 font-semibold">
                          — {study.author}
                        </cite>
                      </blockquote>

                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(study.metrics).map(
                          ([key, value], i) => (
                            <div
                              key={i}
                              className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                            >
                              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                {value}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
  )
}

export default DetailedCaseStudies
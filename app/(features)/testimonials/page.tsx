"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Target, ArrowRight, Play } from "lucide-react";
import { PageLayout } from "@/components/custom/page-layou";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
import { caseStudies, featuredTestimonial, stats, testimonials } from "./demo";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50/30 to-red-50/30 dark:from-blue-900/10 dark:via-purple-900/5 dark:to-red-900/10 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
          >
            <defs>
              <pattern
                id="testimonials-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Customer Success Stories
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Real Results from
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Real Companies
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              See how recruiting teams across industries are transforming their
              hiring process and achieving unprecedented results with AI-powered
              recruiting.
            </p>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <Quote className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
                    <blockquote className="text-2xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8">
                      {featuredTestimonial.quote}
                    </blockquote>
                  </div>

                  <div className="flex items-center mb-8">
                    <img
                      src={featuredTestimonial.avatar || "/placeholder.svg"}
                      alt={featuredTestimonial.author}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">
                        {featuredTestimonial.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {featuredTestimonial.title}
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 font-semibold">
                        {featuredTestimonial.company}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {featuredTestimonial.industry} •{" "}
                        {featuredTestimonial.companySize}
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-fit">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Video Story
                  </Button>
                </div>

                <CardContent className="p-12 bg-white dark:bg-gray-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    Key Results
                  </h3>
                  <div className="space-y-6">
                    {featuredTestimonial.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                      >
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {metric.label}
                          </div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {metric.value}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                            {metric.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join thousands of recruiting teams who've transformed their
                hiring process
              </p>
              <div className="flex items-center justify-center mt-6 space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-blue-400 text-blue-400"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                  4.9/5
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  from 200+ reviews
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-blue-400 text-blue-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg font-medium flex-grow">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Metrics Badge */}
                    <div className="mb-6">
                      <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1">
                        {testimonial.metrics}
                      </Badge>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            testimonial.author
                          )}&background=f59e0b&color=fff&size=150`;
                        }}
                      />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                          {testimonial.title}
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                          {testimonial.company}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {testimonial.industry}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
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
                    className={`grid lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`relative ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
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
                      className={`p-12 ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Start your transformation today and see why thousands of
              recruiting teams choose Leelu.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-3 py-1 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

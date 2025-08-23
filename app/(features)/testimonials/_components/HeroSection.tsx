"use client";
import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/custom/ScrollReveal";
// import { stats } from "../demo";
const HeroSection = () => {
    return (
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
                    <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 mb-6 text-base px-4 py-2 hover:text-white">
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
                    {/* <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
                    </div> */}
                </ScrollReveal>
            </div>
        </section>
    )
}

export default HeroSection
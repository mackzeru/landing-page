"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { integrations } from "@/constant/integrations";

export function IntegrationDashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              All Your Tools in One Dashboard
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Seamlessly connect with your existing recruiting stack. One
              platform, unlimited possibilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className={`group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border-2 ${integration.borderColor} hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform:
                    hoveredCard === index
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 ${integration.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Logo */}
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={integration.logo || "/placeholder.svg"}
                      alt={`${integration.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLDivElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      className={`hidden w-12 h-12 bg-gradient-to-r ${integration.color} rounded-xl items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {integration.name.slice(0, 2)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {integration.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {integration.description}
                    </p>
                    <Badge
                      className={`bg-gradient-to-r ${integration.color} text-white px-4 py-1`}
                    >
                      {integration.badge}
                    </Badge>
                  </div>

                  {/* Features (shown on hover) */}
                  <div
                    className={`transition-all duration-300 ${
                      hoveredCard === index
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="space-y-2">
                      {integration.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* LinkedIn Exclusive Section */}
        <div className="my-10">
          <ScrollReveal delay={1000}>
            <section className="relative bg-blue-50 dark:bg-[#0c0f1c] py-20 px-6 rounded-4xl shadow-2xl overflow-hidden border border-blue-100 dark:border-gray-800">
              {/* Soft Animated Glow */}
              <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
              <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

              <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    🚀 Exclusive LinkedIn Plugin
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Our exclusive LinkedIn plugin sources candidates directly via
                  your Recruiter account — with no scraping, full compliance,
                  and enterprise-level security. Unlock hidden talent pools
                  faster.
                </p>

                {/* Highlight Badges */}
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Direct API Access",
                    "No Scraping",
                    "Enterprise Security",
                  ].map((text, idx) => (
                    <Badge
                      key={idx}
                      className="bg-white/20 dark:bg-white/10 text-blue-900 dark:text-white text-sm sm:text-base px-6 py-2 rounded-full backdrop-blur-sm shadow-md hover:scale-105 transition-transform"
                    >
                      {text}
                    </Badge>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, BarChart3, Target, Calendar } from "lucide-react";

const copilotSteps = [
  {
    id: "initial-outreach",
    title: "Initial Outreach",
    icon: MessageSquare,
    description:
      "Sends customized emails based on candidate profile and job requirements",
    details:
      "Our AI analyzes candidate profiles, job requirements, and company culture to craft personalized outreach messages that resonate with top talent.",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "response-analysis",
    title: "Response Analysis",
    icon: BarChart3,
    description:
      "Detects interest level with AI and determines next best action",
    details:
      "Advanced sentiment analysis and natural language processing evaluate candidate responses to determine engagement level and optimal follow-up strategy.",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "smart-followup",
    title: "Smart Follow-up",
    icon: Target,
    description: "Only sends ONE intelligent reply to maintain professionalism",
    details:
      "Strategic follow-up timing and messaging that respects candidate preferences while maximizing response rates through intelligent conversation flow.",
    color: "from-green-500 to-green-600",
  },
  {
    id: "interview-booking",
    title: "Interview Booking",
    icon: Calendar,
    description:
      "Auto-sends calendar links when candidates are ready to interview",
    details:
      "Seamless calendar integration that automatically schedules interviews based on mutual availability, sends confirmations, and manages the entire booking process.",
    color: "from-orange-500 to-orange-600",
  },
];

export function CopilotScrollSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const scrollTop = Math.max(0, -rect.top);
      const scrollHeight = containerHeight - windowHeight;
      const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));

      setScrollProgress(progress);

      // Determine active step based on scroll position
      const stepIndex = Math.floor(progress * copilotSteps.length);
      setActiveStep(Math.min(stepIndex, copilotSteps.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Copilot: Autonomous Candidate Engagement
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Set it and forget it. Our AI handles the entire engagement process
            until interviews are booked.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-8 lg:sticky lg:top-24">
            {copilotSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep >= index;
              const scale = activeStep === index ? 1.1 : isActive ? 1.05 : 1;

              return (
                <div
                  key={step.id}
                  ref={(el: HTMLDivElement | null) => {
                    stepRefs.current[index] = el;
                  }}
                  className={`transition-all duration-700 transform ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                  style={{ transform: `scale(${scale})` }}
                >
                  <div
                    className={`p-8 rounded-3xl border-2 transition-all duration-500 ${
                      isActive
                        ? "bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-700 shadow-2xl"
                        : "bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 shadow-lg"
                    }`}
                  >
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-r ${step.color} shadow-lg`
                            : "bg-gray-100 dark:bg-gray-700"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                          {step.description}
                        </p>
                        {isActive && (
                          <p className="text-gray-500 dark:text-gray-400 leading-relaxed animate-fade-in">
                            {step.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Visual */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-8">
                <Badge
                  className={`bg-gradient-to-r ${copilotSteps[activeStep].color} text-white text-lg px-6 py-2`}
                >
                  Step {activeStep + 1} of {copilotSteps.length}
                </Badge>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`w-24 h-24 bg-gradient-to-r ${copilotSteps[activeStep].color} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse`}
                    >
                      {React.createElement(copilotSteps[activeStep].icon, {
                        className: "h-12 w-12 text-white",
                      })}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {copilotSteps[activeStep].title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {copilotSteps[activeStep].description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          ((activeStep + 1) / copilotSteps.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

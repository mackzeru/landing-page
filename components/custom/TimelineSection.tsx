"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Search,
  MessageSquare,
  Calendar,
  Play,
  CheckCircle,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const timelineSteps = [
  {
    time: "0-2 hrs",
    action: "Activate AI Copilot",
    result: "Job posted & AI preferences configured automatically",
    icon: Clock,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    details: [
      "Job requirements analyzed",
      "AI preferences set",
      "Search parameters optimized",
      "Integration connections verified",
    ],
  },
  {
    time: "2-6 hrs",
    action: "Multi-Platform AI Sourcing",
    result:
      "500+ qualified candidates sourced from LinkedIn, Indeed, Monster & more",
    icon: Search,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-700",
    details: [
      "LinkedIn API search active",
      "Job boards scanned",
      "ATS databases queried",
      "PhD-level resume scoring",
    ],
  },
  {
    time: "6-12 hrs",
    action: "Autonomous Candidate Outreach",
    result:
      "Personalized messages sent to top-scoring candidates automatically",
    icon: MessageSquare,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-700",
    details: [
      "Personalized email crafting",
      "Multi-channel outreach",
      "Response tracking",
      "Follow-up scheduling",
    ],
  },
  {
    time: "12-24 hrs",
    action: "Interview Scheduling",
    result: "Qualified candidates automatically booked for interviews",
    icon: Calendar,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-700",
    details: [
      "Calendar integration",
      "Availability matching",
      "Interview confirmations",
      "Reminder notifications",
    ],
  },
];

export function EnhancedTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveStep((current) => (current + 1) % timelineSteps.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl mb-6">
              <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              24-Hour Recruitment Timeline
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Watch how Leelu.ai transforms your hiring process from job post to
              scheduled interviews
            </p>
            <button
              onClick={togglePlayback}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
            >
              <Play
                className={`h-5 w-5 mr-2 ${isPlaying ? "animate-pulse" : ""}`}
              />
              {isPlaying ? "Playing" : "Play"} Timeline
            </button>
          </div>
        </ScrollReveal>

        {/* Timeline Visualization */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 hidden md:block">
            <div
              className="w-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300"
              style={{
                height: `${(activeStep / (timelineSteps.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal key={index} delay={index * 200}>
                  <div
                    className={`flex items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:space-x-12`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 ${
                        isLeft ? "md:text-right" : "md:text-left"
                      } text-center mb-8 md:mb-0`}
                    >
                      <div
                        className={`transition-all duration-700 cursor-pointer ${
                          isActive ? "transform scale-105" : ""
                        } ${step.bgColor} rounded-3xl p-8 shadow-xl border-2 ${
                          isActive
                            ? `${step.borderColor} shadow-2xl`
                            : "border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
                        }`}
                        onClick={() => handleStepClick(index)}
                      >
                        {/* Time Badge */}
                        <Badge
                          className={`bg-gradient-to-r ${step.color} text-white mb-6 text-base px-4 py-2`}
                        >
                          {step.time}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {step.action}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                          {step.result}
                        </p>

                        {/* Details (shown when active) */}
                        <div
                          className={`transition-all duration-500 ${
                            isActive
                              ? "opacity-100 max-h-40"
                              : "opacity-0 max-h-0"
                          } overflow-hidden`}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            {step.details.map((detail, i) => (
                              <div
                                key={i}
                                className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Progress Bar (for active step) */}
                        {isActive && (
                          <div className="mt-6">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className={`bg-gradient-to-r ${step.color} h-2 rounded-full transition-all duration-300`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 cursor-pointer ${
                          isActive
                            ? `bg-gradient-to-r ${step.color} shadow-2xl transform scale-125`
                            : isCompleted
                            ? `bg-gradient-to-r ${step.color} shadow-lg`
                            : "bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 shadow-lg hover:scale-110"
                        }`}
                        onClick={() => handleStepClick(index)}
                      >
                        <Icon
                          className={`h-10 w-10 transition-colors ${
                            isActive || isCompleted
                              ? "text-white"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                      </div>
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Interactive Controls */}
        <ScrollReveal delay={800}>
          <div className="flex justify-center space-x-4">
            {timelineSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-blue-600 w-12"
                    : activeStep > index
                    ? "bg-green-500"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

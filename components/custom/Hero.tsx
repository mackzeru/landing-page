import React from "react";
import { DemoInterface } from "./DemoInterface";
import { CopilotPanel } from "./CopilotPanel";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20" />
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <g stroke="#e5e7eb" strokeWidth="1" opacity="0.4">
            <line x1="0" y1="200" x2="1440" y2="600" />
            <line x1="0" y1="250" x2="1440" y2="650" />
            <line x1="0" y1="300" x2="1440" y2="700" />
            <line x1="0" y1="150" x2="1440" y2="550" />
            <line x1="0" y1="100" x2="1440" y2="500" />
            <line
              x1="0"
              y1="180"
              x2="1440"
              y2="580"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="320"
              x2="1440"
              y2="720"
              stroke="#3b82f6"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            From Job Post to First Interview
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in 24 Hours
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Your AI Copilot searches 10+ platforms simultaneously, engages
            candidates autonomously,
            <br />
            and doesn't stop until interviews are scheduled
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium text-base shadow-lg">
            Start Free Trial →
          </Button>
          <Button
            variant="outline"
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-3 rounded-full font-medium text-base shadow-lg"
          >
            <Play className="h-4 w-4 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Key Visual - Platform Dashboard */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Leelu.ai - AI Recruiting Copilot
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <DemoInterface />
                <CopilotPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

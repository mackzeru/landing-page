"use client";
import React, { useState } from "react";
import { DemoInterface } from "./DemoInterface";
import { CopilotPanel } from "./CopilotPanel";
import { Button } from "../ui/button";
import { Play, X, Sparkles, Zap, Target, Users, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";
import VideoContainer from "@/app/(features)/_component/VideoContainer";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { EnhancedDemoButton, PremiumDemoButton } from "@/app/(features)/_component/button";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20" />
        
        {/* Animated grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
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
                stroke="#8b5cf6"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated lines */}
          <g stroke="#e5e7eb" strokeWidth="1" opacity="0.4">
            <motion.line
              x1="0"
              y1="200"
              x2="1440"
              y2="600"
              stroke="#8b5cf6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.line
              x1="0"
              y1="300"
              x2="1440"
              y2="700"
              stroke="#3b82f6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
            />
          </g>
        </svg>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400/30"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
            }}
            animate={{
              y: [0, Math.random() * 50, 0],
              x: [0, Math.random() * 30, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Main Headline */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-sm">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Sparkles className="h-5 w-5 text-purple-600" />
                <motion.div
                  className="absolute inset-0 bg-purple-400/30 rounded-full blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-sm font-medium text-purple-700">
                AI-Powered Recruitment
              </span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            From Job Post to First Interview
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              in 24 Hours
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            Your AI Copilot searches 10+ platforms simultaneously, engages
            candidates autonomously,
            <br />
            and doesn't stop until interviews are scheduled
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: Zap, text: "10x Faster Candidate Sourcing", color: "text-blue-600" },
            { icon: Target, text: "95% Reduction in Time-to-Hire", color: "text-purple-600" },
            { icon: Users, text: "Automated Candidate Engagement", color: "text-indigo-600" }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/30 rounded-xl p-5 text-center group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-3 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
              </div>
              <h3 className="font-semibold text-gray-800">{benefit.text}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="pricing"
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white 
            px-8 py-2 rounded-full font-medium text-base
            transition-all duration-300 transform hover:scale-105 active:scale-95
            shadow-lg hover:shadow-xl
            inline-flex items-center justify-center"
          >
            Start Free Trial
          </Link>
          <PremiumDemoButton setIsDialogOpen={setIsDialogOpen} />
   
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          className="flex justify-center items-center text-sm text-gray-500 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span>Trusted by 500+ recruitment teams worldwide</span>
        </motion.div>

        {/* Key Visual - Platform Dashboard */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700 overflow-hidden transform hover:shadow-2xl transition-all duration-500">
            <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200/50 dark:border-gray-700 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Leelu.ai - AI Recruiting Copilot Dashboard
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
        </motion.div>
      </div>
      
      {/* Modal Overlay */}
      <VideoContainer
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </main>
  );
};

export default Hero;
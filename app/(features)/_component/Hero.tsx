"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles, Zap, Target, Users, CheckCircle } from "lucide-react";
import Image from "next/image";
import hero from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import VideoContainer from "./VideoContainer";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden p-4">
      {/* Animated Background similar to login page */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1 + Math.random() * 0.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Sparkles className="h-9 w-9 text-purple-600" />
              <motion.div
                className="absolute inset-0 bg-purple-400/30 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Leelu.ai
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Recruitment
              </span>
              <br />
              Powered by AI
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover how our platform transforms your hiring process with intelligent automation and candidate matching.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { icon: Zap, text: "AI-powered candidate matching", color: "text-blue-600" },
              { icon: Target, text: "Streamlined hiring workflow", color: "text-purple-600" },
              { icon: Users, text: "Collaborative team hiring", color: "text-indigo-600" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4 group relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <div className="relative">
                  <feature.icon className={`h-6 w-6 ${feature.color} relative z-10`} />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-white/60 via-transparent to-white/30 rounded-full opacity-0"
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0.8, 1.2, 0.8],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)",
                    }}
                  />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link href="/signup">
                Get Started Free
              </Link>
            </Button>
            
            <AnimatePresence>
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No credit card required • Start in minutes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src={hero}
                alt="Leelu.ai platform visualization"
                width={500}
                height={500}
                className="object-contain opacity-90"
                priority
              />
            </motion.div>
            
            {/* Floating elements around the main image */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200/30"
                style={{
                  top: `${[20, 80, 30, 70][i]}%`,
                  left: `${[10, 80, 70, 20][i]}%`,
                  width: "100px",
                  height: "60px",
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
              >
                <div className="text-xs font-medium text-center text-gray-700">
                  {["Matches", "AI Filter", "Schedule", "Hire!"][i]}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
         {/* Modal Overlay */}
         <VideoContainer
          isDialogOpen={isVideoOpen}
          setIsDialogOpen={setIsVideoOpen}
        />
    </main>
  );
}
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import hero from "@/assets/logo.png";

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
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Image with parallax effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={hero}
          alt="Background depth"
          fill
          className="object-contain opacity-20 blur-[2px]"
          priority
        />
      </motion.div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Modern Recruitment
            </span>
            <br />
            Powered by AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our platform transforms your hiring process with
            intelligent automation
          </p>
        </motion.div>

        {/* Animated Bubble Button */}
        <AnimatePresence>
          {!isVideoOpen && (
            <motion.button
              onClick={() => setIsVideoOpen(true)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.5)",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 15px 40px -5px rgba(59, 130, 246, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="relative z-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 flex items-center justify-center shadow-xl"
            >
              <div className="absolute inset-0 rounded-full bg-white/10 animate-ping-slow opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <Play className="w-8 h-8" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import { Play, Sparkles, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const EnhancedDemoButton = ({setIsDialogOpen}: {setIsDialogOpen: (val: boolean)=>void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      className="relative inline-block"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? [0, 1, 0] : 0,
            y: isHovered ? [0, -15, -30] : 0,
            x: isHovered ? (i % 2 === 0 ? [-5, 5, -5] : [5, -5, 5]) : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            delay: i * 0.3,
          }}
          style={{
            left: `${20 + i * 20}%`,
            bottom: "15%",
          }}
        />
      ))}
      
      <Button
        variant="outline"
        className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md 
                   border-2 border-blue-300/70 dark:border-purple-700/60 
                   text-gray-800 dark:text-gray-200 
                   hover:bg-white dark:hover:bg-gray-800 
                   hover:border-blue-400 dark:hover:border-purple-500
                   px-8 py-4 rounded-full font-medium text-base 
                   shadow-lg hover:shadow-xl
                   inline-flex items-center gap-2
                   transition-all duration-300
                   group overflow-hidden"
        onClick={() => setIsDialogOpen(true)}
      >
        {/* Animated icon */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <Play 
            className="h-5 w-5 text-blue-600 dark:text-purple-400 
                       group-hover:text-blue-700 dark:group-hover:text-purple-300
                       transition-colors duration-300" 
            fill="currentColor"
          />
        </motion.div>
        
        {/* Text with gradient effect on hover */}
        <motion.span
          animate={{
            background: isHovered 
              ? "linear-gradient(to right, #2563eb, #7c3aed)" 
              : "none",
            backgroundClip: isHovered ? "text" : "none",
            color: isHovered ? "transparent" : "inherit",
          }}
          transition={{ duration: 0.3 }}
        >
          Watch Demo
        </motion.span>
        
        {/* Subtle arrow that appears on hover */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-4 w-4 ml-1" />
        </motion.div>
        
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: isHovered ? "200%" : "-100%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </Button>
    </motion.div>
  );
};

// Alternative even more enhanced version with sparkle effects
export  const PremiumDemoButton = ({setIsDialogOpen}: {setIsDialogOpen: (val: boolean)=>void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative inline-block"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md"
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <Button
        variant="outline"
        className="relative bg-gradient-to-b from-white/95 to-gray-100/95 dark:from-gray-900/95 dark:to-gray-800/95 
                   backdrop-blur-lg 
                   border border-blue-200/50 dark:border-purple-700/50 
                   text-gray-800 dark:text-gray-200 
                   hover:border-blue-300 dark:hover:border-purple-500
                   px-8 py-4 rounded-2xl font-semibold text-base 
                   shadow-lg hover:shadow-2xl
                   inline-flex items-center gap-3
                   transition-all duration-300
                   group overflow-hidden
                   hover:-translate-y-0.5"
        onClick={() => setIsDialogOpen(true)}
      >
        {/* Sparkle icon with animation */}
        <motion.div
          className="relative"
          animate={{
            rotate: isHovered ? [0, 15, -15, 0] : 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <Play 
            className="h-5 w-5 text-blue-600 dark:text-purple-400" 
            fill="currentColor"
          />
          {isHovered && (
            <>
              <motion.div
                className="absolute -top-1 -right-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="h-3 w-3 text-yellow-400" fill="currentColor" />
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Zap className="h-3 w-3 text-blue-400" fill="currentColor" />
              </motion.div>
            </>
          )}
        </motion.div>
        
        {/* Text with gradient effect */}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Watch Demo
        </span>
        
        {/* Pulse ring effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 dark:border-purple-400/30"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: isHovered ? "200%" : "-100%",
            opacity: isHovered ? [0, 1, 0] : 0,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </Button>
    </motion.div>
  );
};


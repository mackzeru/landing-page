
import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface LogoProps {
  variant?: "default" | "light" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ 
  variant = "default", 
  size = "md",
  className
}: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };
  
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };
  
  const variantClasses = {
    default: "text-foreground",
    light: "text-white",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
  };
  
  return (
    <div className={cn("flex items-center gap-2 font-bold", sizeClasses[size], className)}>
      <Sparkles className={cn(iconSizes[size], variant === "gradient" ? "text-purple-500" : 
        variant === "light" ? "text-purple-200" : "text-purple-500")} />
      <span className={cn(variantClasses[variant])}>
        Lee<span className="font-extrabold">LU</span>
      </span>
    </div>
  );
}

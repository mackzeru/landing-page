// components/ToastNotification.tsx
"use client";

import { useCookieContext } from "@/context/CookieContext";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export const ToastNotification = () => {
  const { showToast, setShowToast } = useCookieContext();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast, setShowToast]);

  if (!showToast) return null;

  return (
    <div className="fixed top-24 right-6 bg-green-100 border-green-500 border-l-4 text-green-700 p-4 rounded-lg shadow-lg z-50 animate-slide-in-from-right">
      <div className="flex items-center space-x-2">
        <CheckCircle className="h-5 w-5" />
        <span>Cookie preferences saved successfully!</span>
      </div>
    </div>
  );
};

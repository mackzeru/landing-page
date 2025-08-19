// components/CookieBanner.tsx
"use client";

import { useCookieContext } from "@/context/CookieContext";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export const CookieBanner = () => {
  const {
    preferences,
    updatePreferences,
    showBanner,
    setShowBanner,
    setShowToast,
  } = useCookieContext();

  const acceptAll = () => {
    updatePreferences({
      analytics: true,
      marketing: true,
      functional: true,
    });
    setShowBanner(false);
    setShowToast(true);
  };

  const rejectAll = () => {
    updatePreferences({
      analytics: false,
      marketing: false,
      functional: false,
    });
    setShowBanner(false);
    setShowToast(true);
  };

  // Don't render during SSR
  if (typeof window === "undefined") {
    return null;
  }

  // Don't render if banner shouldn't be shown
  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <Cookie className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                We use cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                We use cookies to enhance your experience, analyze site usage,
                and assist in our marketing efforts. You can customize your
                preferences or accept all cookies.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              variant="outline"
              onClick={rejectAll}
              className="w-full sm:w-auto bg-transparent"
            >
              Reject All
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowBanner(false);
                // Optionally navigate to cookie policy page
                // router.push('/cookie-policy');
              }}
              className="w-full sm:w-auto"
            >
              Customize
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full sm:w-auto"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

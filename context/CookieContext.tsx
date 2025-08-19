"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  showToast: boolean;
  setShowToast: (show: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check if we're running in the browser
    if (typeof window !== "undefined") {
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      } else {
        // Only show banner if no preferences are saved (first visit)
        setShowBanner(true);
      }
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized && typeof window !== "undefined") {
      localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    }
  }, [preferences, initialized]);

  const updatePreferences = (newPrefs: Partial<CookiePreferences>) => {
    setPreferences((prev) => ({
      ...prev,
      ...newPrefs,
      necessary: true, // Always keep necessary cookies enabled
    }));
  };

  return (
    <CookieContext.Provider
      value={{
        preferences,
        updatePreferences,
        showBanner,
        setShowBanner,
        showToast,
        setShowToast,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieContext = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookieContext must be used within a CookieProvider");
  }
  return context;
};

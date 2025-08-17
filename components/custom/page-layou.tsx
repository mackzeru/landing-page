import type React from "react";
import Navigation from "./Navigation";
import Footer from "@/components/custom/Footer";
interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

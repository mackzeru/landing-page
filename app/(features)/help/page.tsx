"use client";
import { useState } from "react";
import QuickActions from "./_component/QuickActions";
import HelpMainContent from "./_component/HelpMainContent";
import HelpHeroSection from "./_component/HelpHeroSection";
import ContactSupportCTA from "./_component/ContactSupportCTA";
import { PageLayout } from "@/components/custom/page-layou";
import {
  categories,
  popularArticles,
  quickActions,
  videoTutorials,
} from "./demo";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Hero Section */}
        <HelpHeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Quick Actions */}
        <QuickActions quickActions={quickActions} />

        {/* Main Content */}
        <HelpMainContent
          content={{
            categories: categories,
            articles: popularArticles,
            videos: videoTutorials,
            guides: [],
          }}
        />

        {/* Contact Support CTA */}
        <ContactSupportCTA />
      </div>
    </PageLayout>
  );
}

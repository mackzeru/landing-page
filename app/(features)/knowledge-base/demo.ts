"use client";
import {
  BookOpen,
  Mail,
  Send,
  Settings,
  HelpCircle,
  Database,
  Bot,
} from "lucide-react";

export const categories = [
  {
    id: "all",
    label: "All Articles",
    icon: BookOpen,
    count: 21,
    color: "bg-blue-500",
  },
  {
    id: "email-accounts",
    label: "Email Accounts",
    icon: Mail,
    count: 3,
    color: "bg-green-500",
  },
  {
    id: "campaigns",
    label: "Campaigns",
    icon: Send,
    count: 4,
    color: "bg-purple-500",
  },
  {
    id: "ai-copilot",
    label: "AI Copilot",
    icon: Bot,
    count: 3,
    color: "bg-orange-500",
  },
  {
    id: "sourcing",
    label: "Multi-Source Sourcing",
    icon: Database,
    count: 5,
    color: "bg-cyan-500",
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Settings,
    count: 4,
    color: "bg-pink-500",
  },
  {
    id: "general",
    label: "General Issues",
    icon: HelpCircle,
    count: 2,
    color: "bg-gray-500",
  },
];

export const troubleshootingArticles = [
  // Email Accounts Section
  {
    id: 1,
    category: "email-accounts",
    title: "How to fix common email SMTP connection errors",
    description:
      "Learn about SMTP and IMAP errors, their possible reasons and how to fix them when connecting email accounts to Leelu.ai.",
    author: "Leelu Support Team",
    date: "2025-01-14",
    readTime: "8 min",
    tags: ["SMTP", "Email", "Connection"],
  },
  {
    id: 2,
    category: "email-accounts",
    title: "How to reconnect your Outlook/Exchange accounts through OAuth",
    description:
      "Learn how to restore the connection with your Outlook/Exchange accounts so that you can resume sending campaigns.",
    author: "Leelu Support Team",
    date: "2025-01-10",
    readTime: "6 min",
    tags: ["Outlook", "OAuth", "Exchange"],
  },
  {
    id: 3,
    category: "email-accounts",
    title: "How to fix IMAP error in email accounts",
    description:
      "Learn what a conditional email connection is and how to fix an IMAP connection error in Leelu.ai.",
    author: "Leelu Support Team",
    date: "2025-01-06",
    readTime: "5 min",
    tags: ["IMAP", "Email", "Connection"],
  },

  // Campaigns Section
  {
    id: 4,
    category: "campaigns",
    title: "How to reduce email bounce rate",
    description:
      "This article provides a checklist to improve email deliverability and lower the number of delivery errors in your campaigns.",
    author: "Leelu Support Team",
    date: "2025-01-12",
    readTime: "10 min",
    tags: ["Bounce Rate", "Deliverability", "Campaigns"],
  },
  {
    id: 5,
    category: "campaigns",
    title: "How to fix and prevent bounced emails",
    description:
      "Learn about common email delivery errors (bounces), why they happen, and how to fix them in Leelu.ai campaigns.",
    author: "Leelu Support Team",
    date: "2025-01-08",
    readTime: "7 min",
    tags: ["Bounced Emails", "Delivery", "Campaigns"],
  },
  {
    id: 6,
    category: "campaigns",
    title: "Why are replies not being tracked?",
    description:
      "Learn why replies may not be logged into campaign statistics and how to ensure proper reply tracking.",
    author: "Leelu Support Team",
    date: "2025-01-05",
    readTime: "4 min",
    tags: ["Reply Tracking", "Analytics", "Campaigns"],
  },
  {
    id: 7,
    category: "campaigns",
    title: "How to manage recipients in 'To Check' tab",
    description:
      "This article explains how to manually add missing variables on the To Check tab before sending your campaign.",
    author: "Leelu Support Team",
    date: "2025-01-03",
    readTime: "6 min",
    tags: ["Recipients", "Variables", "Campaign Setup"],
  },

  // AI Copilot Section
  {
    id: 8,
    category: "ai-copilot",
    title: "Why AI Copilot actions may be skipped",
    description:
      "Learn why AI Copilot automation actions may be skipped in Leelu.ai and how to fix it. Discover common reasons and tips.",
    author: "Leelu Support Team",
    date: "2025-01-15",
    readTime: "9 min",
    tags: ["AI Copilot", "Automation", "Troubleshooting"],
  },
  {
    id: 9,
    category: "ai-copilot",
    title: "How to reconnect your AI Copilot integration",
    description:
      "Find out how to fix a disconnected AI Copilot integration in Leelu.ai. Step-by-step instructions to reconnect and resume.",
    author: "Leelu Support Team",
    date: "2025-01-11",
    readTime: "5 min",
    tags: ["AI Copilot", "Integration", "Connection"],
  },
  {
    id: 10,
    category: "ai-copilot",
    title: "Why AI Copilot automation is paused",
    description:
      "Learn why your AI Copilot automation was paused in Leelu.ai, what causes it, and how to prevent future interruptions.",
    author: "Leelu Support Team",
    date: "2025-01-09",
    readTime: "7 min",
    tags: ["AI Copilot", "Paused", "Automation"],
  },

  // Multi-Source Sourcing Section
  {
    id: 11,
    category: "sourcing",
    title: "Multi-source search stopped working – how to fix it?",
    description:
      "Learn about common reasons for issues you may be experiencing with multi-source candidate search and solutions to them.",
    author: "Leelu Support Team",
    date: "2025-01-13",
    readTime: "8 min",
    tags: ["Multi-Source", "Search", "Troubleshooting"],
  },
  {
    id: 12,
    category: "sourcing",
    title: "How to troubleshoot Leelu.ai browser extensions",
    description:
      "Learn how to fix issues with Leelu.ai browser extensions for LinkedIn, GitHub, and other platforms.",
    author: "Leelu Support Team",
    date: "2025-01-07",
    readTime: "6 min",
    tags: ["Extensions", "Browser", "Troubleshooting"],
  },
  {
    id: 13,
    category: "sourcing",
    title: "How to resolve candidate search interruptions",
    description:
      "Learn how to continue candidate search across platforms when it was interrupted or stopped unexpectedly.",
    author: "Leelu Support Team",
    date: "2025-01-04",
    readTime: "5 min",
    tags: ["Search", "Interruption", "Candidates"],
  },
  {
    id: 14,
    category: "sourcing",
    title: "LinkedIn search limits and restrictions",
    description:
      "Understand LinkedIn's search limits and how to work within them while using Leelu.ai's sourcing features.",
    author: "Leelu Support Team",
    date: "2025-01-02",
    readTime: "7 min",
    tags: ["LinkedIn", "Limits", "Restrictions"],
  },
  {
    id: 15,
    category: "sourcing",
    title: "GitHub integration troubleshooting",
    description:
      "Common issues with GitHub integration and how to resolve them for effective technical candidate sourcing.",
    author: "Leelu Support Team",
    date: "2024-12-28",
    readTime: "6 min",
    tags: ["GitHub", "Integration", "Technical"],
  },

  // Integrations Section
  {
    id: 16,
    category: "integrations",
    title: "ATS integration connection issues",
    description:
      "Learn how to troubleshoot and fix connection issues with your ATS (Applicant Tracking System) integration.",
    author: "Leelu Support Team",
    date: "2025-01-01",
    readTime: "9 min",
    tags: ["ATS", "Integration", "Connection"],
  },
  {
    id: 17,
    category: "integrations",
    title: "Slack notifications not working",
    description:
      "Fix issues with Slack notifications from Leelu.ai not appearing in your workspace channels.",
    author: "Leelu Support Team",
    date: "2024-12-30",
    readTime: "4 min",
    tags: ["Slack", "Notifications", "Integration"],
  },
  {
    id: 18,
    category: "integrations",
    title: "Calendar sync problems",
    description:
      "Resolve calendar synchronization issues with Google Calendar, Outlook, and other calendar providers.",
    author: "Leelu Support Team",
    date: "2024-12-27",
    readTime: "6 min",
    tags: ["Calendar", "Sync", "Integration"],
  },
  {
    id: 19,
    category: "integrations",
    title: "API rate limits and errors",
    description:
      "Understanding API rate limits and how to handle common API errors when using Leelu.ai integrations.",
    author: "Leelu Support Team",
    date: "2024-12-25",
    readTime: "8 min",
    tags: ["API", "Rate Limits", "Errors"],
  },

  // General Issues Section
  {
    id: 20,
    category: "general",
    title: "How to clear cache and cookies in your browser",
    description:
      "Learn how to clear your browsing data to resolve minor account issues and improve Leelu.ai performance.",
    author: "Leelu Support Team",
    date: "2024-12-29",
    readTime: "3 min",
    tags: ["Cache", "Cookies", "Browser"],
  },
  {
    id: 21,
    category: "general",
    title: "How to open console or network details in your browser",
    description:
      "Learn how to check your browser's console and network for errors when troubleshooting Leelu.ai issues.",
    author: "Leelu Support Team",
    date: "2024-12-26",
    readTime: "4 min",
    tags: ["Console", "Network", "Debugging"],
  },
];

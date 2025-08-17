"use client";
import {
  BookOpen,
  Video,
  MessageCircle,
  Zap,
  Users,
  Settings,
  CreditCard,
  Shield,
  LucideProps,
  Database,
  HelpCircle,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
export type ArticleType = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  rating: number;
  views: string;
};
export type QuickCategoryType = {
  id: string;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  count: number;
  title?: string;
  description?: string;
  action?: string;
  color?: string;
  href?: string;
};

export const categories: QuickCategoryType[] = [
  { id: "getting-started", label: "Getting Started", icon: Zap, count: 12 },
  { id: "features", label: "Features", icon: BookOpen, count: 24 },
  { id: "integrations", label: "Integrations", icon: Settings, count: 18 },
  { id: "billing", label: "Billing", icon: CreditCard, count: 8 },
  { id: "security", label: "Security", icon: Shield, count: 15 },
  { id: "team", label: "Team Management", icon: Users, count: 10 },
];

export const popularArticles = [
  {
    title: "Getting Started with Leelu.ai",
    description:
      "Complete guide to setting up your account and running your first search",
    category: "Getting Started",
    readTime: "5 min",
    rating: 4.9,
    views: "12.5k",
  },
  {
    title: "Setting Up Multi-Source Candidate Search",
    description:
      "How to configure and optimize searches across LinkedIn, GitHub, and other platforms",
    category: "Features",
    readTime: "8 min",
    rating: 4.8,
    views: "8.2k",
  },
  {
    title: "AI Copilot Best Practices",
    description:
      "Tips and tricks to get the most out of your AI recruiting assistant",
    category: "Features",
    readTime: "6 min",
    rating: 4.9,
    views: "9.1k",
  },
  {
    title: "Integrating with Your ATS",
    description:
      "Step-by-step guide to connect Leelu.ai with popular ATS platforms",
    category: "Integrations",
    readTime: "10 min",
    rating: 4.7,
    views: "6.8k",
  },
];

export type QuickAType = {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  action: string;
  color: string;
};

export const quickActions: QuickAType[] = [
  {
    title: "Schedule a Demo",
    description: "Get a personalized walkthrough of Leelu.ai",
    icon: Video,
    action: "Book Demo",
    color: "purple",
  },
  {
    title: "Contact Support",
    description: "Get help from our expert support team",
    icon: MessageCircle,
    action: "Get Help",
    color: "blue",
  },
  {
    title: "Feature Request",
    description: "Suggest new features or improvements",
    icon: Zap,
    action: "Submit Idea",
    color: "green",
  },
];

export type VideoType = {
  title: string;
  duration: string;
  thumbnail: string;
  views: string;
  category: string;
};
export const videoTutorials: VideoType[] = [
  {
    title: "Leelu.ai Platform Overview",
    duration: "12:34",
    thumbnail: "/video-tutorial-dashboard.png",
    views: "15.2k",
    category: "Overview",
  },
  {
    title: "Advanced Search Techniques",
    duration: "8:45",
    thumbnail: "/search-interface-tutorial.png",
    views: "9.8k",
    category: "Features",
  },
  {
    title: "Team Collaboration Features",
    duration: "6:22",
    thumbnail: "/team-collaboration-interface.png",
    views: "7.3k",
    category: "Team",
  },
];

export const demoHelpContent = {
  categories: [
    { id: "getting-started", label: "Getting Started", icon: Zap, count: 12 },
    { id: "features", label: "Features", icon: BookOpen, count: 24 },
    { id: "integrations", label: "Integrations", icon: Settings, count: 18 },
    { id: "billing", label: "Billing", icon: CreditCard, count: 8 },
    { id: "security", label: "Security", icon: Shield, count: 15 },
    { id: "team", label: "Team Management", icon: Users, count: 10 },
    { id: "api", label: "API", icon: Database, count: 7 },
    {
      id: "troubleshooting",
      label: "Troubleshooting",
      icon: HelpCircle,
      count: 9,
    },
  ],
  articles: [
    {
      title: "Getting Started with Our Platform",
      description:
        "Complete guide to setting up your account and making your first search",
      category: "Getting Started",
      readTime: "5 min",
      rating: 4.9,
      views: "12.5k",
    },
    {
      title: "Advanced Search Techniques",
      description:
        "Learn how to use advanced filters and boolean search operators",
      category: "Features",
      readTime: "8 min",
      rating: 4.8,
      views: "8.2k",
    },
    {
      title: "Integrating with Your ATS",
      description: "Step-by-step guide to connect with popular ATS platforms",
      category: "Integrations",
      readTime: "10 min",
      rating: 4.7,
      views: "6.8k",
    },
    {
      title: "Understanding Your Invoice",
      description: "Breakdown of billing components and payment options",
      category: "Billing",
      readTime: "4 min",
      rating: 4.5,
      views: "3.2k",
    },
    {
      title: "Security Best Practices",
      description: "How to configure security settings and manage permissions",
      category: "Security",
      readTime: "7 min",
      rating: 4.9,
      views: "5.6k",
    },
    {
      title: "Managing Team Members",
      description: "How to add, remove, and set permissions for team members",
      category: "Team Management",
      readTime: "6 min",
      rating: 4.6,
      views: "4.9k",
    },
  ],
  videos: [
    {
      title: "Platform Overview Tour",
      duration: "12:34",
      thumbnail: "/videos/platform-overview.jpg",
      views: "15.2k",
      category: "Getting Started",
    },
    {
      title: "Advanced Search Walkthrough",
      duration: "8:45",
      thumbnail: "/videos/advanced-search.jpg",
      views: "9.8k",
      category: "Features",
    },
    {
      title: "API Integration Tutorial",
      duration: "14:22",
      thumbnail: "/videos/api-integration.jpg",
      views: "7.3k",
      category: "API",
    },
    {
      title: "Team Collaboration Features",
      duration: "6:22",
      thumbnail: "/videos/team-collaboration.jpg",
      views: "5.1k",
      category: "Team Management",
    },
    {
      title: "Security Settings Explained",
      duration: "9:15",
      thumbnail: "/videos/security-settings.jpg",
      views: "6.7k",
      category: "Security",
    },
    {
      title: "Troubleshooting Common Issues",
      duration: "11:08",
      thumbnail: "/videos/troubleshooting.jpg",
      views: "8.4k",
      category: "Troubleshooting",
    },
  ],
  guides: [
    {
      title: "Complete Setup Guide for New Users",
      category: "Getting Started",
    },
    {
      title: "Advanced Search Optimization Techniques",
      category: "Features",
    },
    {
      title: "Step-by-Step API Integration Guide",
      category: "API",
    },
    {
      title: "Team Onboarding and Permission Management",
      category: "Team Management",
    },
    {
      title: "Security Audit Checklist",
      category: "Security",
    },
    {
      title: "Monthly Billing Report Guide",
      category: "Billing",
    },
    {
      title: "Troubleshooting Common Error Messages",
      category: "Troubleshooting",
    },
    {
      title: "Custom Integration Setup",
      category: "Integrations",
    },
  ],
};

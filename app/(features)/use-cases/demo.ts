"use client";

import {
  Building,
  Rocket,
  TrendingUp,
  Code,
  Briefcase,
  Heart,
} from "lucide-react";

export const industries = [
  {
    icon: Code,
    title: "Technology & Engineering",
    description:
      "Find top developers, engineers, and technical talent across all skill levels and specializations",
    features: [
      "GitHub integration",
      "Technical skill assessment",
      "Stack-specific sourcing",
      "Open source contributions",
    ],
    color: "from-blue-500 to-blue-600",
    stats: { metric: "65%", label: "faster technical hiring" },
    companies: ["TechCorp", "DevStart", "CloudScale"],
  },
  {
    icon: Briefcase,
    title: "Sales & Marketing",
    description:
      "Source high-performing sales reps and marketing professionals with proven track records",
    features: [
      "Performance-based matching",
      "Industry experience focus",
      "Cultural fit analysis",
      "Revenue impact tracking",
    ],
    color: "from-blue-500 to-blue-600",
    stats: { metric: "3x", label: "more qualified candidates" },
    companies: ["SalesForce", "MarketPro", "GrowthCo"],
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description:
      "Recruit specialized healthcare professionals, researchers, and medical device experts",
    features: [
      "Certification verification",
      "Compliance screening",
      "Specialty matching",
      "License validation",
    ],
    color: "from-red-500 to-red-600",
    stats: { metric: "40%", label: "reduction in time-to-fill" },
    companies: ["MedTech", "BioLabs", "HealthCare+"],
  },
  {
    icon: TrendingUp,
    title: "Finance & Consulting",
    description:
      "Find experienced financial analysts, consultants, and executives with domain expertise",
    features: [
      "Experience verification",
      "Client-facing skills",
      "Regulatory compliance",
      "Industry certifications",
    ],
    color: "from-purple-500 to-purple-600",
    stats: { metric: "85%", label: "candidate quality score" },
    companies: ["FinanceFirst", "ConsultPro", "InvestCorp"],
  },
];

export const companySizes = [
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "1-50 employees",
    description:
      "Move fast and hire the right people from day one with AI-powered recruiting",
    features: [
      "Quick setup in 5 minutes",
      "Affordable pricing for small teams",
      "Focus on cultural fit and potential",
      "Rapid scaling support",
      "Founder-friendly onboarding",
    ],
    color: "from-orange-500 to-orange-600",
    pricing: "Starting at $299/month",
    cta: "Perfect for early-stage teams",
  },
  {
    icon: TrendingUp,
    title: "Scale-ups",
    subtitle: "50-500 employees",
    description:
      "Scale your team efficiently without compromising quality or breaking the bank",
    features: [
      "Multi-department hiring",
      "Advanced filtering and scoring",
      "Team collaboration tools",
      "Custom workflows",
      "Department-specific templates",
    ],
    color: "from-blue-500 to-blue-600",
    pricing: "Starting at $799/month",
    cta: "Built for rapid growth",
  },
  {
    icon: Building,
    title: "Enterprise",
    subtitle: "500+ employees",
    description:
      "Enterprise-grade recruiting at scale with advanced compliance and security features",
    features: [
      "Custom integrations",
      "Advanced security & compliance",
      "Dedicated support team",
      "White-label options",
      "Custom SLA agreements",
    ],
    color: "from-purple-500 to-purple-600",
    pricing: "Custom pricing",
    cta: "Enterprise-ready solution",
  },
];

export const useCaseStories = [
  {
    company: "TechScale",
    industry: "SaaS Startup",
    size: "50 employees",
    challenge:
      "Needed to hire 15 engineers in 30 days to meet product deadlines",
    solution: "Used AI Copilot with GitHub integration for technical sourcing",
    result: "Hired 15 engineers in 28 days with 95% offer acceptance rate",
    quote:
      "Leelu.ai helped us scale our engineering team 3x faster than traditional recruiting.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    metrics: ["15 hires", "28 days", "95% acceptance"],
  },
  {
    company: "FinTech Pro",
    industry: "Financial Services",
    size: "200 employees",
    challenge: "Struggled to find compliance-ready financial analysts",
    solution:
      "Leveraged industry-specific filtering and certification verification",
    result: "85% reduction in time-to-hire with 100% compliance rate",
    quote:
      "The compliance features and candidate quality are exactly what we needed.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    metrics: ["85% faster", "100% compliant", "40 hires"],
  },
  {
    company: "HealthCorp",
    industry: "Healthcare",
    size: "1000+ employees",
    challenge: "Difficulty finding specialized healthcare professionals",
    solution: "Used certification verification and specialty matching features",
    result: "40% improvement in candidate fit and 60% faster hiring",
    quote:
      "Finding specialized healthcare talent has never been this efficient.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    metrics: ["40% better fit", "60% faster", "25 specialists"],
  },
];

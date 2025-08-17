"use client";

import { Users, Target, Zap, Heart, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";
import { RefAttributes } from "react";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at LinkedIn, led the team that built LinkedIn Recruiter's AI features.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher with 10+ years in machine learning and natural language processing.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Former Product Lead at Greenhouse, passionate about creating intuitive recruiting experiences.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "David Kim",
    role: "Head of AI",
    bio: "PhD in Computer Science from Stanford, specializes in conversational AI and automation.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
  },
];

export interface Value {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  color: string;
}

export const values: Value[] = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We believe great hiring should be accessible to every company, regardless of size or budget.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI to solve real recruiting challenges.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description:
      "Technology should enhance human potential, not replace it. We build tools that empower people.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Inclusive by Design",
    description:
      "We're committed to building diverse teams and reducing bias in the hiring process.",
    color: "from-orange-500 to-orange-600",
  },
];

export const milestones: {
  year: string;
  title: string;
  description: string;
}[] = [
  {
    year: "2022",
    title: "Company Founded",
    description: "Started with a vision to democratize AI-powered recruiting",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description:
      "Raised $15M to accelerate product development and team growth",
  },
  {
    year: "2023",
    title: "LinkedIn Partnership",
    description: "Became official LinkedIn Recruiter API partner",
  },
  {
    year: "2024",
    title: "2,000+ Customers",
    description:
      "Helping thousands of companies transform their hiring process",
  },
];

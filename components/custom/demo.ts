import {
  Bot,
  Search,
  Users,
  UserCog,
  BarChart3,
  Briefcase,
  Shield,
  Stethoscope,
  School,
  Banknote,
  Factory,
  PlugZap,
  Code2,
  Network,
} from "lucide-react";
const featuresDropdown = [
  {
    title: "AI Copilot",
    description: "Intelligent recruiting assistant",
    href: "/features/copilot",
    icon: Bot,
  },
  {
    title: "Multi-Source Sourcing",
    description: "Search across all platforms simultaneously",
    href: "/features/sourcing",
    icon: Search,
  },
];

const industries = [
  {
    title: "Tech/IT",
    href: "/solutions#tech",
    description: "Recruit tech talent through AI-driven sourcing",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    title: "Healthcare",
    href: "/solutions#healthcare",
    description: "Match healthcare professionals to critical roles",
    icon: Stethoscope,
    color: "text-red-500",
  },
  {
    title: "RPO/Staffing",
    href: "/solutions#rpo-staffing",
    description: "Automate talent pipelines with tailored outreach",
    icon: Network,
    color: "text-green-500",
  },
  {
    title: "Security & Defense",
    href: "/solutions#security-defense",
    description: "Build secure teams with intelligent pools",
    icon: Shield,
    color: "text-gray-500",
  },
  {
    title: "Education",
    href: "/solutions#education",
    description: "Discover top educators with intelligent matching",
    icon: School,
    color: "text-yellow-500",
  },
  {
    title: "Financial",
    href: "/solutions#finance",
    description: "Analyze and optimize finance recruitment strategies",
    icon: Banknote,
    color: "text-emerald-500",
  },
  {
    title: "Manufacturing",
    href: "/solutions#manufacturing",
    description: "Streamline hiring processes for skilled manufacturing",
    icon: Factory,
    color: "text-orange-500",
  },
  {
    title: "Energy/Utilities",
    href: "/solutions#energy-utilities",
    description: "Engage energy experts with precise matching",
    icon: PlugZap,
    color: "text-indigo-500",
  },
];

const stakeholders = [
  {
    title: "Talent Acquisition Leader",
    href: "/solutions#talent-acquisition",
    description: "Optimize team performance with AI-driven recruiting",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Recruiter/Sourcer",
    href: "/solutions#recruiter",
    description: "Discover and engage top talent efficiently",
    icon: UserCog,
    color: "text-green-500",
  },
  {
    title: "Hiring Manager",
    href: "/solutions#hiring-manager",
    description: "Hire with confidence using AI precision",
    icon: Briefcase,
    color: "text-yellow-500",
  },
  {
    title: "Talent Operations",
    href: "/solutions#talent-ops",
    description: "Streamline operations with centralized AI insights",
    icon: BarChart3,
    color: "text-purple-500",
  },
];

export { featuresDropdown, industries, stakeholders };

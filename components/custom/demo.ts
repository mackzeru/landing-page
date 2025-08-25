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
  Users2,
  BookOpen,
  Film,
  Info,
  Mail,
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
export const moreDropdown = [
  {
    title: "Knowledge Base",
    description: "Access articles and tutorials",
    href: "/knowledge-base",
    icon: BookOpen,
  },
  //demo
  {
    title: "Demo",
    description: "Watch a demo of Leelu",
    href: "/demo",
    icon: Film,
  },
  //about
  {
    title: "About",
    description: "Learn more about Leelu",
    href: "/about",
    icon: Info,
  },
  //contact
  {
    title: "Contact",
    description: "Get in touch with Leelu",
    href: "/contact",
    icon: Mail,
  },
];
const industries = [
  {
    title: "Tech/IT",
    href: "/solutions/industries/tech",
    description: "Recruit tech talent through AI-driven sourcing",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    title: "Healthcare",
    href: "/solutions/industries/healthcare",
    description: "Match healthcare professionals to critical roles",
    icon: Stethoscope,
    color: "text-red-500",
  },
  {
    title: "Manufacturing",
    href: "/solutions/industries/manufacturing",
    description: "Streamline hiring processes for skilled manufacturing",
    icon: Factory,
    color: "text-orange-500",
  },
  {
    title: "Financial",
    href: "/solutions/industries/finance",
    description: "Analyze and optimize finance recruitment strategies",
    icon: Banknote,
    color: "text-emerald-500",
  },
  // {
  //   title: "RPO/Staffing",
  //   href: "/solutions/industries/rpo-staffing",
  //   description: "Automate talent pipelines with tailored outreach",
  //   icon: Network,
  //   color: "text-green-500",
  // },
  // {
  //   title: "Security & Defense",
  //   href: "/solutions/industries/security-defense",
  //   description: "Build secure teams with intelligent pools",
  //   icon: Shield,
  //   color: "text-gray-500",
  // },
  // {
  //   title: "Education",
  //   href: "/solutions/industries/education",
  //   description: "Discover top educators with intelligent matching",
  //   icon: School,
  //   color: "text-yellow-500",
  // },

  // {
  //   title: "Energy/Utilities",
  //   href: "/solutions/industries/energy-utilities",
  //   description: "Engage energy experts with precise matching",
  //   icon: PlugZap,
  //   color: "text-indigo-500",
  // },
];

const stakeholders = [
  {
    title: "Talent Acquisition Leader",
    href: "/solutions/stakeholder/talent-acquisition",
    description: "Optimize team performance with AI-driven recruiting",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Recruiter/Sourcer",
    href: "/solutions/stakeholder/recruiter",
    description: "Discover and engage top talent efficiently",
    icon: UserCog,
    color: "text-green-500",
  },
  {
    title: "Hiring Manager",
    href: "/solutions/stakeholder/hiring-manager",
    description: "Hire with confidence using AI precision",
    icon: Briefcase,
    color: "text-yellow-500",
  },
  {
    title: "Talent Operations",
    href: "/solutions/stakeholder/talent-operations",

    description: "Streamline operations with centralized AI insights",
    icon: BarChart3,
    color: "text-purple-500",
  },
  // people-operations
  {
    title: "People Operations",
    href: "/solutions/stakeholder/people-operations",
    description: "Streamline operations with centralized AI insights",
    icon: Users2, // Changed to Users2 icon which better represents people/team operations
    color: "text-purple-500",
  },
];

export { featuresDropdown, industries, stakeholders };

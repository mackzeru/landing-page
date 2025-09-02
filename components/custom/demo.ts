import {
  Bot,
  Search,
  Users,
  UserCog,
  Briefcase,
  Stethoscope,
  Banknote,
  Factory,
  Code2,
  Users2,
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
const resourceDropdown = [
  {
    title: "Knowledge Base",
    description: "Search across all platforms simultaneously",
    href: "/knowledge-base",
    icon: Search,
  },
    {
    title: "Blog",
    description: "Search across all platforms simultaneously",
    href: "/blog",
    icon: Search,
  },
];
export const moreDropdown = [
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

  // people-operations
  {
    title: "People Operations",
    href: "/solutions/stakeholder/people-operations",
    description: "Streamline operations with centralized AI insights",
    icon: Users2,
    color: "text-purple-500",
  },
];

export { featuresDropdown, industries, stakeholders,resourceDropdown };

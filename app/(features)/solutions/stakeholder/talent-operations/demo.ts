"use client";
import {
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
export const stakeholders = [
  {
    id: "talent-acquisition",
    title: "Talent Acquisition Leader",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    description:
      "Optimize team performance with AI-driven recruiting strategies and advanced analytics",
    painPoints: [
      "Struggling to meet aggressive hiring targets",
      "Limited visibility into recruiting pipeline",
      "Difficulty scaling recruiting operations",
      "Inconsistent candidate quality across teams",
    ],
    solutions: [
      "AI-powered candidate scoring and ranking",
      "Real-time pipeline analytics and forecasting",
      "Automated workflow orchestration",
      "Team performance optimization insights",
    ],
    metrics: {
      primary: "65%",
      secondary: "faster time-to-hire",
      tertiary: "3x more qualified candidates",
    },
    testimonial: {
      quote:
        "Leelu.ai transformed our recruiting operations. We're now hitting 95% of our hiring targets.",
      author: "Sarah Chen",
      role: "VP of Talent Acquisition",
      company: "TechScale Inc.",
    },
  },
  {
    id: "recruiter",
    title: "Recruiter/Sourcer",
    icon: UserCog,
    color: "from-green-500 to-green-600",
    description:
      "Discover and engage top talent efficiently with intelligent sourcing and outreach",
    painPoints: [
      "Spending too much time on manual sourcing",
      "Low response rates from candidates",
      "Difficulty finding passive candidates",
      "Managing multiple sourcing channels",
    ],
    solutions: [
      "Multi-platform candidate discovery",
      "AI-generated personalized outreach",
      "Automated follow-up sequences",
      "Intelligent candidate matching",
    ],
    metrics: {
      primary: "4x",
      secondary: "more candidates sourced",
      tertiary: "85% higher response rates",
    },
    testimonial: {
      quote:
        "I can now source 4x more candidates in half the time. The AI outreach is incredibly effective.",
      author: "Marcus Rodriguez",
      role: "Senior Technical Recruiter",
      company: "InnovateTech",
    },
  },
  {
    id: "hiring-manager",
    title: "Hiring Manager",
    icon: Briefcase,
    color: "from-yellow-500 to-yellow-600",
    description:
      "Hire with confidence using AI precision and streamlined interview processes",
    painPoints: [
      "Too many unqualified candidates to review",
      "Long time-to-fill for critical roles",
      "Inconsistent interview experiences",
      "Difficulty assessing cultural fit",
    ],
    solutions: [
      "Pre-screened, qualified candidate pools",
      "AI-powered skill and culture assessments",
      "Structured interview guides and scorecards",
      "Predictive hiring success analytics",
    ],
    metrics: {
      primary: "50%",
      secondary: "reduction in interviews",
      tertiary: "90% hiring success rate",
    },
    testimonial: {
      quote:
        "The quality of candidates has improved dramatically. I spend less time interviewing and more time building my team.",
      author: "Jennifer Park",
      role: "Engineering Manager",
      company: "DataFlow Systems",
    },
  },
  {
    id: "talent-ops",
    title: "Talent Operations",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    description:
      "Streamline operations with centralized AI insights and process optimization",
    painPoints: [
      "Lack of recruiting data visibility",
      "Inefficient recruiting processes",
      "Difficulty measuring ROI",
      "Manual reporting and analytics",
    ],
    solutions: [
      "Comprehensive recruiting analytics dashboard",
      "Automated process optimization",
      "ROI tracking and cost-per-hire analysis",
      "Predictive workforce planning",
    ],
    metrics: {
      primary: "40%",
      secondary: "cost reduction",
      tertiary: "Real-time insights",
    },
    testimonial: {
      quote:
        "Our recruiting operations are now data-driven and highly efficient. We've cut costs by 40%.",
      author: "David Kim",
      role: "Director of Talent Operations",
      company: "GrowthCorp",
    },
  },
];

export const industries = [
  {
    id: "tech",
    title: "Tech/IT",
    icon: Code2,
    color: "from-blue-500 to-blue-600",
    description:
      "Recruit top tech talent through AI-driven sourcing and technical skill assessment",
    challenges: [
      "High competition for skilled developers",
      "Technical skill verification complexity",
      "Remote work talent pool expansion",
      "Rapid technology evolution",
    ],
    solutions: [
      "GitHub and Stack Overflow integration",
      "Automated technical screening",
      "Global remote talent sourcing",
      "Skill-based matching algorithms",
    ],
    stats: { companies: "500+", hires: "10,000+", satisfaction: "94%" },
    caseStudy: {
      company: "CloudTech Solutions",
      challenge: "Needed to hire 50 engineers in 3 months",
      result: "Hired 52 engineers in 10 weeks with 96% retention rate",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    color: "from-red-500 to-red-600",
    description:
      "Match healthcare professionals to critical roles with compliance and certification focus",
    challenges: [
      "Critical staffing shortages",
      "Complex licensing requirements",
      "Specialized skill matching",
      "Compliance and background checks",
    ],
    solutions: [
      "Automated license verification",
      "Specialty-specific candidate pools",
      "Compliance workflow automation",
      "Emergency staffing solutions",
    ],
    stats: { companies: "200+", hires: "5,000+", satisfaction: "92%" },
    caseStudy: {
      company: "Regional Medical Center",
      challenge: "Urgent need for ICU nurses during expansion",
      result: "Filled 25 critical positions in 2 weeks",
    },
  },
  {
    id: "rpo-staffing",
    title: "RPO/Staffing",
    icon: Network,
    color: "from-green-500 to-green-600",
    description:
      "Automate talent pipelines with tailored outreach and scalable recruiting operations",
    challenges: [
      "Managing multiple client requirements",
      "Scaling recruiting operations",
      "Maintaining candidate quality",
      "Competitive market pressures",
    ],
    solutions: [
      "Multi-client workflow management",
      "Scalable candidate sourcing",
      "Quality assurance automation",
      "Performance analytics and reporting",
    ],
    stats: { companies: "150+", hires: "25,000+", satisfaction: "96%" },
    caseStudy: {
      company: "Elite Staffing Partners",
      challenge: "Scale operations for 3 new enterprise clients",
      result: "300% increase in placements with same team size",
    },
  },
  {
    id: "security-defense",
    title: "Security & Defense",
    icon: Shield,
    color: "from-gray-500 to-gray-600",
    description:
      "Build secure teams with intelligent pools and security clearance management",
    challenges: [
      "Security clearance requirements",
      "Specialized skill verification",
      "Background check complexity",
      "Limited candidate pools",
    ],
    solutions: [
      "Clearance-level candidate matching",
      "Automated background verification",
      "Specialized skill assessments",
      "Secure candidate database",
    ],
    stats: { companies: "75+", hires: "2,000+", satisfaction: "98%" },
    caseStudy: {
      company: "Defense Contractor Inc.",
      challenge: "Find cybersecurity experts with Top Secret clearance",
      result: "Filled 15 critical positions in 6 weeks",
    },
  },
  {
    id: "education",
    title: "Education",
    icon: School,
    color: "from-yellow-500 to-yellow-600",
    description:
      "Discover top educators with intelligent matching and credential verification",
    challenges: [
      "Teacher shortage crisis",
      "Credential verification complexity",
      "Subject-specific expertise",
      "Geographic limitations",
    ],
    solutions: [
      "Automated credential verification",
      "Subject matter expertise matching",
      "Geographic expansion tools",
      "Cultural fit assessment",
    ],
    stats: { companies: "300+", hires: "8,000+", satisfaction: "91%" },
    caseStudy: {
      company: "Metro School District",
      challenge: "Hire 100 teachers before school year",
      result: "Filled all positions with 95% first-year retention",
    },
  },
  {
    id: "finance",
    title: "Financial Services",
    icon: Banknote,
    color: "from-emerald-500 to-emerald-600",
    description:
      "Analyze and optimize finance recruitment with compliance and risk assessment",
    challenges: [
      "Regulatory compliance requirements",
      "Risk assessment complexity",
      "Specialized financial expertise",
      "Market volatility impact",
    ],
    solutions: [
      "Compliance-aware candidate screening",
      "Risk profile assessment",
      "Financial expertise verification",
      "Market-adaptive sourcing",
    ],
    stats: { companies: "100+", hires: "3,000+", satisfaction: "93%" },
    caseStudy: {
      company: "Investment Partners LLC",
      challenge: "Hire compliance officers across 5 states",
      result: "100% compliance hire success rate",
    },
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    color: "from-orange-500 to-orange-600",
    description:
      "Streamline hiring processes for skilled manufacturing and industrial roles",
    challenges: [
      "Skilled labor shortages",
      "Safety certification requirements",
      "Shift work scheduling",
      "Geographic distribution",
    ],
    solutions: [
      "Skills-based candidate matching",
      "Certification tracking and verification",
      "Shift preference optimization",
      "Multi-location coordination",
    ],
    stats: { companies: "250+", hires: "12,000+", satisfaction: "89%" },
    caseStudy: {
      company: "Industrial Manufacturing Co.",
      challenge: "Staff new production facility",
      result: "Hired 200 workers in 4 weeks for facility launch",
    },
  },
  {
    id: "energy-utilities",
    title: "Energy/Utilities",
    icon: PlugZap,
    color: "from-indigo-500 to-indigo-600",
    description:
      "Engage energy experts with precise matching and regulatory compliance focus",
    challenges: [
      "Specialized technical expertise",
      "Safety and regulatory compliance",
      "Geographic project requirements",
      "Seasonal demand fluctuations",
    ],
    solutions: [
      "Technical expertise verification",
      "Safety certification management",
      "Project-based staffing solutions",
      "Demand forecasting and planning",
    ],
    stats: { companies: "80+", hires: "1,500+", satisfaction: "95%" },
    caseStudy: {
      company: "Green Energy Solutions",
      challenge: "Staff renewable energy projects nationwide",
      result: "Deployed 500 specialists across 20 projects",
    },
  },
];

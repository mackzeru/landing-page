const featuredTestimonial = {
  quote:
    "Leelu.ai transformed our entire recruiting process. We went from 45 days to hire to just 12 days, and the quality of candidates has never been better. The AI Copilot feels like having a senior recruiter working 24/7.",
  author: "Sarah Chen",
  title: "VP of Talent Acquisition",
  company: "TechScale Inc.",
  industry: "SaaS",
  companySize: "500+ employees",
  avatar:
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  metrics: [
    { label: "Time to Hire", value: "45 → 12 days", change: "-73%" },
    { label: "Candidate Quality", value: "95% fit score", change: "+40%" },
    { label: "Cost per Hire", value: "$3,200 → $1,100", change: "-66%" },
  ],
  videoUrl: "#",
};

const testimonials = [
  {
    quote:
      "Had 5 interviews booked within 24 hours of posting. The LinkedIn integration is a game-changer for finding passive candidates.",
    author: "Michael Rodriguez",
    title: "CTO",
    company: "DevStart",
    industry: "Technology",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "5 interviews in 24hrs",
    results: ["15 engineers hired", "28-day timeline", "95% offer acceptance"],
  },
  {
    quote:
      "10x faster than our old process. The AI actually understands what we're looking for in candidates and finds people we never would have discovered.",
    author: "Emily Watson",
    title: "Head of People",
    company: "FinTech Pro",
    industry: "Financial Services",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "10x faster hiring",
    results: ["85% time reduction", "100% compliance", "40 analysts hired"],
  },
  {
    quote:
      "Finally beating FAANG companies to top candidates. The autonomous mode is incredible - it works while we sleep.",
    author: "David Kim",
    title: "Recruiting Lead",
    company: "DataCorp",
    industry: "Data Analytics",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "Beat FAANG to hires",
    results: ["3x response rate", "60% faster", "25 data scientists"],
  },
  {
    quote:
      "The PhD-level resume scoring is spot on. It identifies candidates with the exact skills and experience we need, saving us hours of manual screening.",
    author: "Lisa Thompson",
    title: "Talent Acquisition Director",
    company: "HealthCorp",
    industry: "Healthcare",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "40% better candidate fit",
    results: [
      "60% faster hiring",
      "100% certification match",
      "30 specialists hired",
    ],
  },
  {
    quote:
      "Our response rates went from 15% to 48%. The personalized outreach messages are incredibly effective and feel genuinely human.",
    author: "James Wilson",
    title: "Senior Recruiter",
    company: "GrowthCo",
    industry: "Marketing",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "15% → 48% response rate",
    results: ["3x more responses", "50% faster", "20 marketers hired"],
  },
  {
    quote:
      "The multi-platform search saved us thousands in recruiting fees. We're finding candidates on platforms we didn't even know existed.",
    author: "Anna Martinez",
    title: "VP of Operations",
    company: "ScaleCorp",
    industry: "Operations",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    metrics: "Immediate ROI",
    results: ["$50K saved", "5 platforms", "35 operations hires"],
  },
];

const caseStudies = [
  {
    company: "TechScale Inc.",
    industry: "SaaS Platform",
    challenge: "Scale engineering team from 50 to 150 engineers in 6 months",
    solution:
      "Implemented AI Copilot with GitHub integration and technical assessment automation",
    results: [
      "Hired 100 engineers in 5 months",
      "Reduced time-to-hire from 45 to 12 days",
      "Achieved 95% offer acceptance rate",
      "Saved $320K in recruiting costs",
    ],
    testimonial:
      "Leelu.ai didn't just help us hire faster - it helped us hire better. The quality of candidates has been exceptional.",
    author: "Sarah Chen, VP of Talent",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    metrics: {
      timeToHire: "73% reduction",
      costSavings: "$320K saved",
      qualityScore: "95% fit rate",
    },
  },
  {
    company: "FinTech Pro",
    industry: "Financial Services",
    challenge:
      "Find compliance-ready financial analysts while maintaining strict regulatory requirements",
    solution:
      "Used industry-specific filtering, certification verification, and compliance screening features",
    results: [
      "Hired 40 certified analysts in 3 months",
      "100% compliance rate maintained",
      "85% reduction in screening time",
      "Zero regulatory issues",
    ],
    testimonial:
      "The compliance features are exactly what we needed. Every candidate comes pre-screened and certified.",
    author: "Michael Rodriguez, Chief Compliance Officer",
    image:
      "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    metrics: {
      complianceRate: "100% compliant",
      screeningTime: "85% faster",
      certificationMatch: "100% verified",
    },
  },
  {
    company: "HealthCorp Medical",
    industry: "Healthcare",
    challenge:
      "Recruit specialized healthcare professionals across multiple locations",
    solution:
      "Leveraged specialty matching, license verification, and location-based sourcing",
    results: [
      "Hired 25 specialists in 2 months",
      "60% faster than traditional methods",
      "100% license verification accuracy",
      "Expanded to 5 new locations",
    ],
    testimonial:
      "Finding specialized healthcare talent has never been this efficient. The AI understands medical specialties better than most recruiters.",
    author: "Dr. Emily Watson, Chief Medical Officer",
    image:
      "https://plus.unsplash.com/premium_photo-1723291280862-e315f4ba74a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    metrics: {
      specialistHires: "25 in 2 months",
      licenseAccuracy: "100% verified",
      locationCoverage: "5 new sites",
    },
  },
];

const stats = [
  {
    label: "Average Response Rate",
    value: "48%",
    description: "vs 15% industry average",
  },
  {
    label: "Time to Hire Reduction",
    value: "73%",
    description: "from 45 to 12 days average",
  },
  {
    label: "Customer Satisfaction",
    value: "4.9/5",
    description: "from 200+ reviews",
  },
  {
    label: "Cost Savings",
    value: "66%",
    description: "average cost per hire reduction",
  },
];
export { testimonials, caseStudies, stats, featuredTestimonial };

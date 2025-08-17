import { BlogPost, FeaturedPost } from "@/app/_types/blog";

export const featuredPost: FeaturedPost = {
  id: "future-ai-recruiting-2024",
  slug: "future-ai-recruiting-2024-trends",
  title: "The Future of AI in Recruiting: 2024 Trends and Predictions",
  excerpt:
    "Discover how artificial intelligence is reshaping the recruiting landscape and what it means for talent acquisition teams in 2024 and beyond.",
  author: {
    name: "Sarah Chen",
    title: "Head of Product, Leelu.ai",
    bio: "Sarah leads product development at Leelu.ai and has over 8 years of experience in AI and recruiting technology.",
    avatar: "/images/authors/sarah-chen.jpg",
  },
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "AI & Technology",
  tags: ["AI", "Recruiting", "Technology", "Trends", "2024"],
  image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",

  featured: true,
  content: `
    <p>The recruiting industry is experiencing a seismic shift...</p>
    <!-- rest of the content -->
  `,
};
export const blogPosts: BlogPost[] = [
  {
    id: "reduce-time-to-hire",
    slug: "reduce-time-to-hire-65-percent",
    title: "How to Reduce Time-to-Hire by 65% with AI Automation",
    excerpt:
      "Learn the proven strategies that top recruiting teams use to dramatically reduce their time-to-hire while maintaining candidate quality.",
    author: {
      name: "Mike Rodriguez",
      title: "Recruiting Technology Specialist",
      bio: "Mike specializes in implementing AI solutions for talent acquisition teams.",
      avatar: "/images/authors/mike-rodriguez.jpg",
    },
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Best Practices",
    tags: ["AI", "Automation", "Efficiency"],
    image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",
  },
  {
    id: "linkedin-recruiting",
    slug: "linkedin-recruiting-api-vs-scraping",
    title:
      "LinkedIn Recruiting: Direct API vs Scraping - What You Need to Know",
    excerpt:
      "Understanding the differences between official LinkedIn integrations and scraping tools, and why compliance matters.",
    author: {
      name: "Emily Watson",
      title: "Compliance Officer",
      bio: "Emily focuses on legal and ethical aspects of recruiting technology.",
      avatar: "/images/authors/emily-watson.jpg",
    },
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Platform Insights",
    tags: ["LinkedIn", "Compliance", "Sourcing"],
    image: "https://images.pexels.com/photos/5439148/pexels-photo-5439148.jpeg",
  },
  {
    id: "diverse-teams",
    slug: "ai-reducing-hiring-bias",
    title: "Building Diverse Teams: AI's Role in Reducing Hiring Bias",
    excerpt:
      "Explore how AI-powered recruiting tools can help create more diverse and inclusive hiring processes.",
    author: {
      name: "David Kim",
      title: "Diversity & Inclusion Lead",
      bio: "David works at the intersection of technology and equitable hiring practices.",
      avatar: "/images/authors/david-kim.jpg",
    },
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Diversity & Inclusion",
    tags: ["Diversity", "Bias", "Inclusion"],
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  },
  {
    id: "roi-automated-recruiting",
    slug: "roi-automated-recruiting-analysis",
    title: "The ROI of Automated Recruiting: A Complete Cost Analysis",
    excerpt:
      "Break down the real costs and savings of implementing AI-powered recruiting automation in your organization.",
    author: {
      name: "Lisa Thompson",
      title: "Financial Analyst",
      bio: "Lisa specializes in cost-benefit analysis of HR technologies.",
      avatar: "/images/authors/lisa-thompson.jpg",
    },
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Business Impact",
    tags: ["ROI", "Cost Analysis", "Automation"],
    image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",
  },
  {
    id: "candidate-experience",
    slug: "candidate-experience-ai-era",
    title:
      "Candidate Experience in the Age of AI: Balancing Automation and Human Touch",
    excerpt:
      "How to maintain a personal candidate experience while leveraging the efficiency of AI recruiting tools.",
    author: {
      name: "James Wilson",
      title: "Candidate Experience Manager",
      bio: "James focuses on creating positive candidate journeys through technology.",
      avatar: "/images/authors/james-wilson.jpg",
    },
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Candidate Experience",
    tags: ["Candidate Experience", "Automation", "Personalization"],
    image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
  },
  {
    id: "multi-platform-sourcing",
    slug: "multi-platform-sourcing-strategy",
    title: "Multi-Platform Sourcing: Why Sequential Search is Dead",
    excerpt:
      "The evolution from platform-by-platform recruiting to simultaneous multi-source candidate discovery.",
    author: {
      name: "Anna Martinez",
      title: "Sourcing Strategist",
      bio: "Anna develops innovative talent sourcing methodologies.",
      avatar: "/images/authors/anna-martinez.jpg",
    },
    date: "March 1, 2024",
    readTime: "5 min read",
    category: "Sourcing Strategy",
    tags: ["Sourcing", "Multi-Platform", "Strategy"],
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  },
];

export const categories = [
  "All Posts",
  "AI & Technology",
  "Best Practices",
  "Platform Insights",
  "Diversity & Inclusion",
  "Business Impact",
  "Candidate Experience",
  "Sourcing Strategy",
];

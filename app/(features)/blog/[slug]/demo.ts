import { BlogPost, FeaturedPost } from "@/app/_types/blog";

export const post: FeaturedPost = {
  id: "future-ai-recruiting-2024",
  slug: "future-ai-recruiting-2024-trends",
  title: "The Future of AI in Recruiting: 2024 Trends and Predictions",
  excerpt:
    "Discover how artificial intelligence is reshaping the recruiting landscape and what it means for talent acquisition teams in 2024 and beyond.",
  content: `
    <p>The recruiting industry is experiencing a seismic shift...</p>
    <!-- rest of the content remains the same -->
  `,
  author: {
    name: "Sarah Chen",
    title: "Head of Product, Leelu.ai",
    bio: "Sarah leads product development at Leelu.ai and has over 8 years of experience in AI and recruiting technology.",
    avatar: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
  },
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "AI & Technology",
  tags: ["AI", "Recruiting", "Technology", "Trends", "2024"],
  image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
  featured: true,
};

export const relatedPosts: BlogPost[] = [
  {
    id: "reduce-time-to-hire",
    slug: "reduce-time-to-hire-ai-automation",
    title: "How to Reduce Time-to-Hire by 65% with AI Automation",
    excerpt:
      "Learn the proven strategies that top recruiting teams use to dramatically reduce their time-to-hire while maintaining candidate quality.",
    author: {
      name: "Mike Rodriguez",
      title: "Recruiting Technology Specialist",
      bio: "Mike specializes in implementing AI solutions for talent acquisition teams.",
      avatar:
        "https://images.pexels.com/photos/4240606/pexels-photo-4240606.jpeg",
    },
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Best Practices",
    tags: ["Automation", "Efficiency", "AI"],
    image: "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg",
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
    image: "https://images.pexels.com/photos/267363/pexels-photo-267363.jpeg",
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
    image: "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg",
  },
];

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
  hasResume: boolean;
  position?: string;
  location?: {
    city?: string;
    country?: string;
    isRemote?: boolean;
  };
  source: {
    type: "autoSource" | "jobBoard" | "humanSourced" | "atsImported";
    platform?: string;
  };
  tags?: string[];
  openToWork: boolean;
  availability: "openToWork" | "activelyLooking" | "passive";
  contactStatus: "revealed" | "hidden";
  lastInteraction?: Date;
  dateSourced: Date;
  industry?: string;
  roleType?: ("fullTime" | "partTime" | "contract")[];
  seniority?: "junior" | "mid" | "senior" | "lead";
  skills: string[];
  status: "new" | "screening" | "interview" | "offered" | "hired" | "rejected";
  conversation?: {
    messages: Array<{
      sender: "ai" | "candidate" | "recruiter";
      text: string;
      timestamp: string;
    }>;
  };
  interviewScheduled?: {
    date: string;
    time: string;
  };
}

export const mockCandidates: Candidate[] = [
  {
    id: "c1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 555-123-4567",
    linkedIn: "linkedin.com/in/alexjohnson",
    github: "github.com/alexj",
    hasResume: true,
    position: "Senior Java Developer",
    location: {
      city: "London",
      country: "United Kingdom",
      isRemote: true,
    },
    source: {
      type: "autoSource",
      platform: "linkedin",
    },
    tags: ["Java", "Spring", "Cloud"],
    openToWork: true,
    availability: "openToWork",
    contactStatus: "revealed",
    lastInteraction: new Date("2025-05-15"),
    dateSourced: new Date("2025-05-01"),
    industry: "Tech",
    roleType: ["fullTime"],
    seniority: "senior",
    skills: ["Java", "Spring Boot", "AWS", "Microservices", "Docker"],
    status: "interview",
    conversation: {
      messages: [
        {
          sender: "ai",
          text: "Hi Alex, I noticed your profile and I'm impressed by your Java experience. Are you open to new opportunities?",
          timestamp: "2025-05-01T10:30:00Z",
        },
        {
          sender: "candidate",
          text: "Hello! Yes, I'd be interested in hearing more about what you have available.",
          timestamp: "2025-05-02T14:22:00Z",
        },
      ],
    },
    interviewScheduled: {
      date: "2025-05-25",
      time: "14:00",
    },
  },
  {
    id: "c2",
    name: "Samantha Lee",
    email: "samantha.lee@example.com",
    phone: "+1 555-987-6543",
    linkedIn: "linkedin.com/in/samanthalee",
    hasResume: true,
    position: "UX/UI Designer",
    location: {
      city: "San Francisco",
      country: "United States",
      isRemote: false,
    },
    source: {
      type: "jobBoard",
      platform: "monster",
    },
    tags: ["Design", "UX", "Creative"],
    openToWork: false,
    availability: "passive",
    contactStatus: "revealed",
    lastInteraction: new Date("2025-05-10"),
    dateSourced: new Date("2025-04-20"),
    industry: "Tech",
    roleType: ["fullTime", "contract"],
    seniority: "mid",
    skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping"],
    status: "screening",
  },
  {
    id: "c3",
    name: "Marcus Chen",
    email: "marcus.chen@example.com",
    linkedIn: "linkedin.com/in/marcuschen",
    github: "github.com/marcusc",
    hasResume: false,
    position: "Frontend Developer",
    location: {
      city: "Berlin",
      country: "Germany",
      isRemote: true,
    },
    source: {
      type: "humanSourced",
    },
    tags: ["React", "JavaScript", "Frontend"],
    openToWork: true,
    availability: "activelyLooking",
    contactStatus: "hidden",
    lastInteraction: new Date("2025-05-12"),
    dateSourced: new Date("2025-04-15"),
    industry: "Tech",
    roleType: ["fullTime"],
    seniority: "mid",
    skills: ["React", "TypeScript", "CSS", "HTML", "Redux"],
    status: "new",
  },
  {
    id: "c4",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43210",
    linkedIn: "linkedin.com/in/priyasharma",
    hasResume: true,
    position: "Data Scientist",
    location: {
      city: "Bangalore",
      country: "India",
      isRemote: true,
    },
    source: {
      type: "autoSource",
      platform: "linkedin",
    },
    tags: ["Data", "ML", "Python"],
    openToWork: true,
    availability: "openToWork",
    contactStatus: "revealed",
    lastInteraction: new Date("2025-05-14"),
    dateSourced: new Date("2025-04-10"),
    industry: "Tech",
    roleType: ["fullTime", "partTime"],
    seniority: "senior",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Data Analysis",
      "Machine Learning",
    ],
    status: "screening",
  },
  {
    id: "c5",
    name: "David Kim",
    email: "david.kim@example.com",
    phone: "+1 555-789-0123",
    linkedIn: "linkedin.com/in/davidkim",
    github: "github.com/davidk",
    hasResume: true,
    position: "Backend Engineer",
    location: {
      city: "New York",
      country: "United States",
      isRemote: false,
    },
    source: {
      type: "atsImported",
    },
    tags: ["Node.js", "API", "Backend"],
    openToWork: false,
    availability: "passive",
    contactStatus: "revealed",
    lastInteraction: new Date("2025-05-05"),
    dateSourced: new Date("2025-04-05"),
    industry: "Finance",
    roleType: ["fullTime"],
    seniority: "lead",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "System Design"],
    status: "offered",
  },
];

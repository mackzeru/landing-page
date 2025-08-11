// types.ts
export interface CopilotItem {
  id: string;
  name: string;
  openingTitle: string;
  campaign: string;
  position: string;
  department: string;
  status: "completed" | "in sourcing";
  interviewScheduled?: {
    date: string;
    time: string;
  };
  totalSourcingRequired: {
    local: number;
    monster: number;
    careerBuilder: number;
    total: number;
  };
}

export const mockData: CopilotItem[] = [
  {
    id: "liti1",
    name: "Liti1",
    openingTitle: "Litigation Attorney",
    campaign: "Legal Department Q2 2025",
    position: "Senior Litigation Attorney",
    department: "Legal",
    status: "completed",
    interviewScheduled: {
      date: "2025-04-20",
      time: "10:00 AM",
    },
    totalSourcingRequired: {
      local: 10,
      monster: 10,
      careerBuilder: 10,
      total: 30,
    },
  },
  {
    id: "stuc1",
    name: "Stuc1",
    openingTitle: "Structural Designer",
    campaign: "Engineering Expansion 2025",
    position: "Senior Structural Designer",
    department: "Engineering",
    status: "completed",
    totalSourcingRequired: {
      local: 10,
      monster: 10,
      careerBuilder: 10,
      total: 30,
    },
  },
  {
    id: "test12",
    name: "Test12",
    openingTitle: "Structural Design Manager",
    campaign: "Engineering Leadership Q2",
    position: "Design Manager",
    department: "Engineering",
    status: "in sourcing",
    totalSourcingRequired: {
      local: 0,
      monster: 0,
      careerBuilder: 0,
      total: 0,
    },
  },
  {
    id: "test1",
    name: "Test1",
    openingTitle: "Structural Design Manager",
    campaign: "Engineering Leadership Q2",
    position: "Senior Design Manager",
    department: "Engineering",
    status: "completed",
    interviewScheduled: {
      date: "2025-04-22",
      time: "2:00 PM",
    },
    totalSourcingRequired: {
      local: 10,
      monster: 10,
      careerBuilder: 10,
      total: 30,
    },
  },
];

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

export interface GetCopilotsParams {
  page: number;
  limit: number;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  search?: string;
  sort?: string;
  openingId?: string;
  recruiterId?: string;
}

interface TimeRange {
  start: string;
  end: string;
}

interface CampaignActiveDaysAndTime {
  timeRange: TimeRange;
  days: (
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
  )[];
}

interface OpeningId {
  _id: string;
  openingTitle: string;
  shortDescription: string;
  categoryId: {
    _id: string;
    name: string;
  };
}

interface UserId {
  _id: string;
  email: string;
}

interface NumberOfSourcePerPlatforms {
  monster: number;
  cb: number;
  local: number;
  autoSource: number;
}

interface Followup {
  message: string;
  delay: number;
  sent: boolean;
  _id: string;
}

export interface CopilotCampaign {
  campaignActiveDaysAndTime: CampaignActiveDaysAndTime;
  _id: string;
  campaignName: string;
  mode: string;
  openingId: OpeningId;
  userId: UserId;
  numberOfSourcePerPlatforms: NumberOfSourcePerPlatforms;
  minimumScore: number;
  minimumScoreOn: boolean;
  aiEnableDelay: boolean;
  aiMinDelay: number;
  aiMaxDelay: number;
  aiPrompt: string;
  followupSourceDelay: number;
  resourceFollowupCount: number;
  monsterRadius: number;
  cbRadius: number;
  lastActivity: string | null;
  followups: Followup[];
  isBooleanStringVerified: boolean;
  totalSourced: number;
  totalLocalSourced: number;
  totalMonsterSourced: number;
  totalCbSourced: number;
  totalAutoSourced: number;
  lastSentIndex: number;
  startDate: string;
  endDate: string;
  timeZone: string;
  totalEmailsSent: number;
  totalEmailsBounced: number;
  booleanStrings: string[];
  emailTemplateId: {
    _id: string;
    templateName: string;
    subject: string;
  };
  emailToReachCandidate: string;
  stopAiReplayAfterMessageCount: number;
  isExpired: boolean;
  status: string;
  runningStatus: boolean;
  createdBy: string;
  updatedBy: string;
  deletedBy: string | null;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// For an array of campaigns
export type CopilotCampaigns = CopilotCampaign[];

export interface CopilotCampaignsResponse {
  docs: CopilotCampaigns;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null;
  page: number;
  pagingCounter: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
}

export interface CopilotActivityResponse {
  docs: CopilotActivity[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
export interface CopilotActivity {
  _id: string;
  copilotId: {
    _id: string;
    campaignName: string;
  };
  activityType: string;
  activityLog: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ActivityLogParams {
  copilotId: string;
  page: number;
  limit: number;
  activityType:
    | "source"
    | "followup"
    | "email"
    | "interview"
    | "other"
    | undefined;
  startDate: string;
  endDate: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
  search: string;
}

export interface CopilotEngagement {
  totalCandidates: number;
  interested: number;
  notInterested: number;
  pending: number;
  emailSent: number;
  emailVerified: number;
  interviewScheduled: number;
  unsubscribed: number;
  interestRate: number;
}

export interface WeeklyEngagementGraph {
  days: string[];
  emailsSent: number[];
  responses: number[];
}

export interface CopilotUpcomingInterviews {
  docs: {
    candidateName: string;
    openingTitle: string;
    interviewDate: string;
    timeframe: string;
  }[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
export interface CopilotRecentCandidates {
  docs: {
    _id: string;
    candidateName: string;
    candidateEmail: string;
    candidateId: string;
    copilotId: string;
    openingId: string;
    openingTitle: string;
    createdAt: string;
    status: string;
  }[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

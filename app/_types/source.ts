export interface SourceQueryParams {
  copilotId: string;
  page?: number;
  limit?: number;
  emailStatus?:
    | "pending"
    | "sent"
    | "replied"
    | "opened"
    | "failed"
    | "skipped"
    | "scoring";
  candidateStatus?: "new" | "interviewed" | "hired" | "rejected";
  isInterested?: boolean;
  platformSourcedFrom?: string;
  emailVerified?: boolean;
  emailSent?: boolean;
  isInterviewScheduled?: boolean;
  unsubscribed?: boolean;
  isPaused?: boolean;
  startDate?: Date;
  endDate?: Date;
  sortBy?:
    | "createdAt"
    | "updatedAt"
    | "sentAt"
    | "aiScore"
    | "emailStatus"
    | "platformSourcedFrom"
    | "followupCount"
    | "lastFollowupTime";
  sortOrder?: "asc" | "desc";
  search?: string;
}

export interface Candidate {
  _id: string;
  candidateId: {
    _id: string;
    currentLocation?: string;
    email: string;
  };
  candidateStatus?: "new" | "interviewed" | "hired" | "rejected";
  copilotId: {
    _id: string;
    campaignName: string;
    openingId: {
      _id: string;
      companyName: string;
      openingTitle: string;
    };
  };
  platformSourcedFrom: string;
  emailVerified: boolean;
  emailSent: boolean;
  emailStatus:
    | "pending"
    | "sent"
    | "replied"
    | "opened"
    | "failed"
    | "skipped"
    | "scoring";
  isInterested: boolean | null;
  isInterviewScheduled: boolean;
  unsubscribed: boolean;
  isPaused: boolean;
  followupCount: number;
  deleted: boolean;
  technicalQuestions: any[];
  __v: number;
  createdAt?: string;
  updatedAt?: string;
  conversationId?: string;
  sentAt?: string;
  lastMessageId?: string;
  step?: number;
  lastFollowupTime?: string;
  id: string;
}

export interface PaginationInfo {
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

export interface TSourcedCandidate {
  _id: string;
  candidateId: string;
  platformSourcedFrom: string;
  emailVerified: boolean;
  emailSent: boolean;
  emailStatus: string;
  candidateStatus: string;
  isInterested: null | boolean;
  isInterviewScheduled: boolean;
  unsubscribed: boolean;
  aiScore?: number;
  createdAt: string;
  updatedAt: string;
  sourcedCandidateId: string;
  candidateFullName: string;
  candidateEmail: string;
  is_paused: boolean;
  isPaused: boolean;
  copilotName: string;
  copilotCategory: string;
  jobTitle: string;
  campaign_id: string;
  conversation_id: string;
  email: string;
  from_email: string;
}
export interface SourceCandidateDataResponse {
  docs: TSourcedCandidate[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
  copilot: {
    _id: string;
    name: string;
    category: string;
  };
}

export interface SourceCandidateDataStatistics {
  total: number;
  interested: number;
  notInterested: number;
  pending: number;
  emailSent: number;
  emailVerified: number;
  interviewScheduled: number;
  unsubscribed: number;
  paused: number;
  interestRate: number;
  new: number;
  interviewed: number;
  hired: number;
  rejected: number;
}

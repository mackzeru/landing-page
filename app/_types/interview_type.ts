export interface Organization {
  _id: string;
  name: string;
}

export interface User {
  _id: string;
  email: string;
}

export interface Copilot {
  _id: string;
}

export interface InterviewSlot {
  _id: string;
  organizationId: Organization;
  copilotId: Copilot;
  organizationUserId: User;
  timeZone: string;
  fromTime: string;
  toTime: string;
  dateOfInterview: string;
  TotalSlots: number;
  bookedSlots: number;
  status: string;
  createdBy: User;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface InterviewSlotsResponse {
  docs: InterviewSlot[];
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

export type SortOrder = "asc" | "desc";

export interface InterviewQueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  orderBy?: SortOrder;
  openingId?: string;
  candidateId?: string;
  copilotId?: string;
  sourcedCandidateId?: string;
  organizationId?: string;
  organizationUserId?: string;
  status?: InterviewStatus;
  fromDate?: string;
  toDate?: string;
  dateOfInterview?: string;
}

export interface InterviewParamsType {
  copilotId: string;
  candidateId: string;
  sourcedCandidateId: string;
  organizationMemberId: string;
  token: string;
}
export type InterviewStatus =
  | "scheduled"
  | "completed"
  | "cancelled"
  | "rescheduled"
  | "pending";
export type InterviewTypes =
  | "Phone"
  | "Video"
  | "In-person"
  | "Technical"
  | "Multiple";
export interface IInterView {
  _id: string;
  interviewSlotId: {
    _id: string;
    fromTime: string;
    toTime: string;
    organizationUserId?: {
      _id: string;
      email: string;
      firstName?: string;
      lastName?: string;
    };
  };
  dateOfInterview: string;
  meetingId: string;
  teamsLink: string;
  webLink: string;
  emailSent: boolean;
  scheduledAt: string;
  interviewType: InterviewTypes;
  note?: string;
  status: InterviewStatus;
  openingId: {
    _id: string;
    openingTitle?: string;
    openingId: string;
  };
  copilotId: {
    _id: string;
    name?: string;
  };
  candidateId: {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    mobile: string;
  };
  sourcedCandidateId: string;
  organizationId: {
    _id: string;
    name?: string;
  };
  isCompanyViewMessage: boolean;
  createdBy: {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

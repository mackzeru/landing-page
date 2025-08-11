// Reusable types
export type Gender = "male" | "female" | string;

export type Status = "active" | "inactive";

export type PayType = "hourly" | "monthly" | "Hourly" | "Monthly" | string;
export type CandidateStatus =
  | "all"
  | "active-interviews"
  | "offered"
  | "rejected";
export interface Note {
  _id: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface LinkedInInvitationStatus {
  status: string;
  sentBy: string;
}

export interface UserReference {
  _id: string;
  email: string;
}

export interface Qualification {
  _id: string;
  candidateId: string;
  qualification: string;
  course: string;
  courseType: string;
  specialization: string;
  university: string;
  passingYear: string;
  country: string;
  createdBy: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;

  __v?: number;
}

export interface Employment {
  _id: string;
  candidateId: string;
  designation: string;
  organization: string;
  isCurrentCompany?: boolean;
  workSinceMonth: number;
  workSinceYear: number;
  workTillMonth: number;
  workTillYear: number;
  annualSalary: number;
  descriptionJobProfile: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  noticePeriod?: string;
  employmentType?: string;
  country?: string;
}

export interface Links {
  _id: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  website?: string;
  twitter?: string;
  stackOverflow?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Candidate {
  _id: string;
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobile: string;
  status: Status;
  totalWorkExpYear?: string;
  totalWorkExpMonth?: string;
  attachments?: string;
  profileSummary?: string;
  gender: Gender;
  currentLocation?: string;
  desiredLocation?: string;
  keySkills: string[];
  profileImage?: string;
  profileStrength?: number;
  multipleNotes: Note[];
  textResumeId: string | null;
  deletedBy: string | null;
  createdBy: UserReference;
  isCandidate: "1" | "0";
  isMonsterCandidate: "1" | "0";
  isAutoSourced: boolean;
  candidateDetails: any | null;
  document: any | null;
  tags: string[];
  payType?: PayType;
  deleted: boolean;
  linkedInInvitationStatus: LinkedInInvitationStatus[];
  createdAt: string;
  updatedAt: string;
  updatedBy?: UserReference;
  __v: number;
  qualifications: Qualification[];
  employments: Employment[];
  links?: Links;
  users?: any[]; // Adjust this type if you have more specific user data
  lastInteraction?: string;
  platform?: string;
  platformType?: string;
  openToWork?: boolean;
  position?: string;
  isRemote?: boolean;
  hasResume?: boolean;
}

export interface CandidatesResponse {
  docs: Candidate[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  nextPage: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
}

export interface DateRangeFilter {
  from?: Date | string;
  to?: Date | string;
}

export interface CandidateFiltersParams {
  status?: CandidateStatus;
  gender?: "male" | "female" | "other";
  createdAt?: DateRangeFilter;
  currentLocation?: string;
  desiredLocation?: string;
  keySkills?: string;
  tags?: string;
  sortBy?: "createdAt" | "firstName" | "lastName" | "email" | "updatedAt";
  sortOrder?: "asc" | "desc";
  page: number;
  limit: number;
  search: string;
  sourceTypes?: string[];
}

export interface Location {
  _id: string;
  country: string;
  state: string;
  city: string;
  isRemote: boolean;
}

export interface DateRangeFilter {
  from?: Date | string;
  to?: Date | string;
}

export interface CandidateFiltersParams {
  status?: CandidateStatus;
  gender?: "male" | "female" | "other";
  createdAt?: DateRangeFilter;
  currentLocation?: string;
  desiredLocation?: string;
  keySkills?: string;
  tags?: string;
  sortBy?: "createdAt" | "firstName" | "lastName" | "email" | "updatedAt";
  sortOrder?: "asc" | "desc";
  page: number;
  limit: number;
  search: string;
  sourceTypes?: string[];
}

export interface Qualification {
  _id: string;
  candidate_id: string;
  qualification: string;
  course: string;
  courseType: string;
  specialization: string;
  university: string;
  passingYear: string;
  is_candidate_recruiter_by: number;
  created_by: string;
  deleted_by: null | string;
  deleted: boolean;
  created_at: string;
  updated_at: string;
  updated_by: {
    _id: string;
    email: string;
    firstName: string;
  };
}

export interface Employments {
  _id: string;
  candidate_id: string;
  designation: string;
  organization: string;
  isCurrentCompany: boolean;
  workSinceMonth: string;
  workSinceYear: string;
  workTillMonth: string;
  workTillYear: string;
  annualSalary: number;
  descriptionJobProfile: string;
  noticePeriod: string;
  deleted_by: null | string;
  deleted: boolean;
  created_at: string;
  updated_at: string;
}

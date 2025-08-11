export interface JobCategoryResponse {
  docs: JobCategory[];
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

export interface JobCategory {
  _id: string;
  name: string;
  description: string;
  active: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}
export type JobQueryParams = {
  openingTitle?: string;
  openingId?: string;
  organizationId?: string;
  status?:
    | "draft"
    | "active"
    | "on_hold"
    | "filled"
    | "closed"
    | "cancelled"
    | string;
  category?: string;
  subCategory?: string;
  experienceLevel?: string;
  employmentType?: string;
  country?: string;
  state?: string;
  city?: string;
  createdBy?: string;
  createdAtStart?: Date;
  createdAtEnd?: Date;
  salaryRangeFrom?: number;
  salaryRangeTo?: number;
  limit?: number;
  page?: number;
  sortBy?: "createdAt" | "updatedAt" | "openingTitle";
  sortOrder?: "asc" | "desc";
  searchText?: string;
};

export interface JobOpening {
  _id: string;
  title: string;
  companyName: string;
  openingTitle: string;
  shortDescription: string;
  jobDescription: string;
  categoryId: NameWithId;
  subCategoryId: NameWithId | null;
  organizationId: {
    _id: string;
    name: string;
  };
  requiredSkills: string[];
  requiredExperience: number;
  experienceLevel: "Entry" | "Junior" | "Mid" | "Senior" | "Lead"; // Adjust as needed
  employmentType:
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Internship"
    | "Temporary";
  role: string;
  duration: string;
  numberOfOpenings: number;
  maxResumesAllowed: number;
  projectStartDate: string; // or Date
  projectCloseDate: string; // or Date
  country: string;
  state: string;
  city: string;
  zipCode: string;
  localIndicator: ("Local" | "Remote" | "Hybrid" | "Onsite")[];
  salaryRangeFrom: number;
  salaryRangeTo: number;
  currency: string; // or specific like "USD" | "EUR" | "GBP"
  salaryType: "Hourly" | "Daily" | "Weekly" | "Monthly" | "Yearly";
  visaTypeIds: {
    _id: string;
    label: string;
  }[];
  securityClearance: string;
  interviewType: "In-person" | "Phone" | "Video" | "Online";
  status: "active" | "inactive" | "closed" | "draft"; // Adjust based on possible values
  attachments: unknown[]; // Replace with actual type if known
  booleanStrings: unknown[]; // Replace with actual type if known
  createdBy: {
    _id: string;
    email: string;
    firstName: string;
  };
  deletedBy: null | {
    // Adjust if `deletedBy` can have a structure
    _id: string;
    email?: string;
    name?: string;
  };
  deleted: boolean;
  createdAt: string; // or Date
  updatedAt: string; // or Date
  openingId: string;
  __v: number;
  id: string; // Same as _id
  isAssigned: boolean;
}

export type JobOpeningsOpenings = JobOpening[];

export interface OpeningResponse {
  docs: JobOpeningsOpenings;
  limit: number;
  page: number;
  nextPage: number;
  pagingCounter: number;
  prevPage: number;
  totalPages: number;
  totalDocs: number;
}

export interface NameWithId {
  _id: string;
  name: string;
}
export interface VisaTypesResponse {
  docs: VisaTypes[];
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
export interface VisaTypes {
  _id: string;
  label: string;
  value: string;
  active: boolean;
  deleted: boolean;
}

export type AssignedRecruiter = {
  _id: string;
  jobOpeningId: {
    _id: string;
    companyName: string;
    openingTitle: string;
  };
  assignedBy: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  assignedTo: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: string; // or Date if you'll parse it
  updatedAt: string; // or Date if you'll parse it
  __v: number;
  id: string;
};

export type PaginatedAssignedRecruiters = {
  docs: AssignedRecruiter[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};
export type HumanSourcingParams = {
  page?: number;
  limit?: number;
  sortBy?: "createdAt" | "updatedAt";
  sortOrder?: "asc" | "desc";
  jobOpeningId?: string;
  assignedBy?: string;
  assignedTo?: string;
  createdAtStart?: string;
  createdAtEnd?: string;
};

export interface HumanSourcingAssign {
  _id: string;
  jobOpeningId: {
    _id: string;
    companyName: string;
    openingTitle: string;
  };
  assignedTo: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  assignedBy: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  id: string;
  createdAt: string;
}

export interface CreateHumanSourcingAssignRequest {
  jobOpeningId: string;
  assignedTo: string;
}

export interface UpdateHumanSourcingAssignRequest {
  jobOpeningId?: string;
  assignedTo?: string;
}

export interface HumanSourcingAssignsListResponse {
  docs: HumanSourcingAssign[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
}

export interface AvailableSourcer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AvailableSourcersResponse {
  data: AvailableSourcer[];
}

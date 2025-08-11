interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Role {
  _id: string;
  name: string;
}

export interface UserInvitation {
  _id: string;
  email: string;
  role: Role;
  invitedBy: User;
  token: string;
  status: "Pending" | "Accepted" | "Expired" | "Revoked";
  deleted: boolean;
  expiresAt: string; // ISO 8601 format
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
  __v: number;
}
export interface InviteResponse {
  docs: UserInvitation[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}

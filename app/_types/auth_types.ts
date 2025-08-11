import { Role } from "./workspace_types";

export type Resource =
  | "roles"
  | "permissions"
  | "users"
  | "jobOpenings"
  | "jobCategories"
  | "jobSubCategories"
  | "visaTypes"
  | "candidates"
  | "invitations"
  | "employees"
  | "booleanStrings"
  | "copilot"
  | "emailTemplates"
  | "outlook"
  | "careerBuilder"
  | "candidateNotes"
  | "sourcedCandidates"
  | "invitations"
  | "notificationPreferences"
  | "notifications"
  | "user-organization-relations"
  | "workspaces"
  | "humanSourcingAssigns";
export type Actions = "create" | "find" | "findOne" | "update" | "delete";
export interface Permission {
  _id: string;
  resource: Resource;
  action: Actions;
  __v: 0;
}

export interface AuthUserType {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  token: string;
}

// Define the shape of the initial state
export interface UserState {
  token: string | null;
  user: AuthUserType | null;
  isAuthenticated: boolean;
}

// Define the Role type
export interface RoleType {
  _id: string;
  name: string;
  permissions: Permission[];
}
export interface TokenType {
  key: string;
  value: string;
}
interface Organization {
  _id: string;
  name: string;
}

interface UserOrganization {
  _id: string;
  userId: string;
  organizationId: Organization;
  role: Role;
  customPermissions: Permission[];
  isActive: boolean;
  deleted: boolean;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserType {
  accessToken: string;
  refreshToken: string;
  phone_number?: any;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  isActive: boolean;
  role: RoleType;
  customPermissions: Permission[];
  allPermissions: Permission[];
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  currentOrganizationId: string;
  organizationId: {
    _id: string;
    name: string;
  };
  allOrganizations: UserOrganization[];
}

export interface AuthPayload {
  user: UserType;
  accessToken: string;
  refreshToken: string;
}
export interface AuthPayloadResponse extends UserType {
  accessToken: string;
  refreshToken: string;
}

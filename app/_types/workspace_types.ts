export interface Workspace {
  _id: string;
  name: string;
  description?: string;
  memberCount: number;
  organizationId:
    | string
    | {
        _id: string;
        name: string;
      };
  accessType: "public" | "private";
  isActive: boolean;
  createdBy:
    | string
    | {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
      };
  deleted?: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  userAccess?: {
    hasAccess: boolean;
    isMember: boolean;
    role?: {
      _id: string;
      name: string;
    };
    customPermissions?: string[];
  };
}
export interface JoinWorkspaceResponse {
  workspace: Workspace;
}

export interface WorkspaceMember {
  _id: string;
  workspaceId: string;

  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: string;
  };
  addedBy: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  isActive: boolean;
  deleted: boolean;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  role?: {
    _id: string;
    name: string;
    description?: string;
  };
}

export interface CreateWorkspaceRequest {
  name: string;
  description?: string;
  organizationId?: string;
  accessType: "public" | "private";
}

export interface PaginatedWorkspaces {
  docs: Workspace[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface WorkspaceAccessInfo {
  isMember: boolean;
  role?: {
    _id: string;
    name: string;
    description?: string;
  };
  permissions?: string[];
}

export interface WorkspaceWithAccess {
  workspaceId: string;
  name?: string;
  accessType?: "public" | "private";
  description?: string;
  memberCount?: number;
  workspace: {
    _id: string;
    name: string;
    organizationId: {
      _id: string;
      name: string;
    };
    createdBy: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    accessType: "public" | "private";
    isActive: boolean;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    inviteToken?: string;
    inviteTokenExpiry?: string;
    description?: string;
  };
  member: {
    _id: string;
    userId: string;
    workspaceId: string;
    addedBy: string;
    isActive: boolean;
    deleted: boolean;
    joinedAt: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  joinedAt: string;
  workspaceSpecificData: Record<string, any>;
  userAccess?: {
    hasAccess: boolean;
    isMember: boolean;
    canJoin?: boolean;
  };
}

export interface UserWorkspace {
  _id: string;
  memberCount: number;
  workspaceId: {
    _id: string;
    name: string;
    description?: string;
    organizationId: {
      _id: string;
      name: string;
    };
    accessType: "public" | "private";
    isActive: boolean;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  role: {
    _id: string;
    name: string;
    description?: string;
  };
  customPermissions: string[];
  addedBy: string;
  isActive: boolean;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddMemberRequest {
  userId: string;
  roleId: string;
  customPermissions?: string[];
}

export interface SendInviteEmailRequest {
  email: string;
  expiryHours?: number;
}

export interface SendMultipleInvitesRequest {
  emails: string[];
}

export interface PaginatedWorkspaceMembers {
  docs: WorkspaceMember[];
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

export interface OrganizationMember {
  _id: string;
  userId: string;
  organizationId: string;
  roleId: string;
  joinedAt: string;
  isActive: boolean;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  role: {
    _id: string;
    name: string;
    description?: string;
  };
}

export interface PaginatedOrganizationMembers {
  docs: OrganizationMember[];
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

export interface Role {
  _id: string;
  name: string;
  description?: string;
  permissions?: Permission[];
}

export interface Permission {
  _id: string;
  name: string;
  description?: string;
  resource: string;
  action: string;
}

export interface UpdateWorkspaceRequest {
  name?: string;
  description?: string;
  accessType?: "public" | "private";
}

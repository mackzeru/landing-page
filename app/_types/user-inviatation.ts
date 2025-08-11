type Permission = {
    _id: string;
    resource: string;
    action: string;
};

type Role = {
    _id: string;
    name: string;
    permissions: Permission[];
};

type User = {
    _id: string;
    firstName?: string; 
    lastName?: string;  
    email: string;
    isActive: boolean;
};

export type Member = {
    _id: string;
    userId: User;
    organizationId: string;
    role: Role;
    customPermissions: any[];
    isActive: boolean;
    deleted: boolean;
    joinedAt: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type OrganizationMemPaginatedResponse = {
    docs: Member[];
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
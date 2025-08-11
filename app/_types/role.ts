export interface Permission {
  _id: string;
  resource: string;
  action: string;
  route: string;
  __v: number;
}

export interface RoleType {
  _id: string;
  name: string;
  actions: Permission[];
  permissions?: Permission[];
  __v: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

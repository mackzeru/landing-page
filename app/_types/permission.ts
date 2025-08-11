import { ResourceAction } from "./action";

export interface Permission {
  _id: string;
  resource: string;
  actions: Action[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Action {
  _id: string;
  resource: string;
  action: ResourceAction;

  route: string;
  __v: number;
}

export type PermissionAction = {
  _id: string;
  resource: string;
  action: string;
  route: string;
  __v?: number;
};

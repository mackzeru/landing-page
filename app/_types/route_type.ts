import { LazyExoticComponent, ReactNode } from "react";
import { Actions, Resource } from "./auth_types";

export interface RouteType {
  path: string;
  element: LazyExoticComponent<React.ComponentType<any>>;
  exact: boolean;
  permission?:
    | {
        resource: Resource;
        action: Actions;
        isSuperAdminOnly?: boolean;
      }
    | undefined;
}

export interface SideBarRouteType {
  path: string;
  label: string;
  icon: ReactNode;
  permission?:
    | {
        resource: Resource;
        action: Actions;
      }
    | undefined;
}

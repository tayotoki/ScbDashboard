import { AppRoutes } from "@/shared/types/router";
import { FC, SVGProps } from "react";

export interface SidebarItemsType {
    path: AppRoutes;
    text: string;
    Icon?: FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}
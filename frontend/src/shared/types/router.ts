import { ValueOf } from "next/dist/shared/lib/constants";
import { avz, device, kipReport, login, mechanicReport } from "../const/route";

export type AppRoutes = ValueOf<typeof AppRoutes>

export const AppRoutes = {
    login,
    avz,
    device,
    kipReport,
    mechanicReport
} as const
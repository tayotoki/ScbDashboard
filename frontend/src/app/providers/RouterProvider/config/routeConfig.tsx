import { RouteObject } from 'react-router-dom';

import { AvzPage } from '@/pages/AvzPage';
import { CurrDeviceEditPage } from '@/pages/CurrDeviceEditPage';
import { CurrDevicePage } from '@/pages/CurrDevicePage';
import { CurrKipReportEditPage } from '@/pages/CurrKipReportEditPage';
import { CurrKipReportPage } from '@/pages/CurrKipReportPage';
import { CurrMechanicReportEditPage } from '@/pages/CurrMechanicReportEditPage';
import { CurrMechanicReportPage } from '@/pages/CurrMechanicReportPage';
import { CurrStationPage } from '@/pages/CurrStationPage';
import { DevicePage } from '@/pages/DevicePage';
import { DeviceTypePage } from '@/pages/DeviceTypePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { KipReportsPage } from '@/pages/KipReportsPage';
import { MainPage } from '@/pages/MainPage';
import { MechanicReportsPage } from '@/pages/MechanicReportsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RacksPage } from '@/pages/RacksPage';
import { StationsPage } from '@/pages/StationsPage';
import {
  AppRoutes,
  getRouteAvz,
  getRouteCurrDevice,
  getRouteCurrDeviceEdit,
  getRouteCurrKipReport,
  getRouteCurrKipReportEdit,
  getRouteCurrMechanicReport,
  getRouteCurrMechanicReportEdit,
  getRouteCurrStation,
  getRouteDevice,
  getRouteForbidden,
  getRouteKipReport,
  getRouteMain,
  getRouteMechanicReport,
  getRouteRack,
  getRouteStation,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, RouteObject> = {
  main: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  avz: {
    path: getRouteAvz(),
    element: <AvzPage />,
  },
  device: {
    path: getRouteDevice(),
    element: <DevicePage />,
  },
  curr_device: {
    path: getRouteCurrDevice(':id'),
    element: <CurrDevicePage />,
  },
  curr_device_edit: {
    path: getRouteCurrDeviceEdit(':id'),
    element: <CurrDeviceEditPage />,
  },
  device_type: {
    path: getRouteDevice(),
    element: <DeviceTypePage />,
  },
  station: {
    path: getRouteStation(),
    element: <StationsPage />,
  },
  current_station: {
    path: getRouteCurrStation(':id'),
    element: <CurrStationPage />,
  },
  rack: {
    path: getRouteRack(),
    element: <RacksPage />,
  },
  kip_report: {
    path: getRouteKipReport(),
    element: <KipReportsPage />,
  },
  curr_kip_report: {
    path: getRouteCurrKipReport(':id'),
    element: <CurrKipReportPage />,
  },
  curr_kip_report_edit: {
    path: getRouteCurrKipReportEdit(':id'),
    element: <CurrKipReportEditPage />,
  },
  mechanic_report: {
    path: getRouteMechanicReport(),
    element: <MechanicReportsPage />,
  },
  curr_mechanic_report: {
    path: getRouteCurrMechanicReport(':id'),
    element: <CurrMechanicReportPage />,
  },
  curr_mechanic_report_edit: {
    path: getRouteCurrMechanicReportEdit(':id'),
    element: <CurrMechanicReportEditPage />,
  },
  forbidden: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },

  //last
  not_found: {
    path: '*',
    element: <NotFoundPage />,
  },
};

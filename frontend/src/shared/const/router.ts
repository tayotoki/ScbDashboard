export type AppRoutes = ValueOf<typeof AppRoutes>;

export const AppRoutes = {
  MAIN: 'main',
  AVZ: 'avz',
  MECHANIC_REPORT: 'mechanic_report',
  CURR_MECHANIC_REPORT: 'curr_mechanic_report',
  CURR_MECHANIC_REPORT_EDIT: 'curr_mechanic_report_edit',
  KIP_REPORT: 'kip_report',
  CURR_KIP_REPORT: 'curr_kip_report',
  CURR_KIP_REPORT_EDIT: 'curr_kip_report_edit',
  DEVICE: 'device',
  CURR_DEVICE: 'curr_device',
  CURR_DEVICE_EDIT: 'curr_device_edit',
  STATION: 'station',
  CURR_STATION: 'current_station',
  RACK: 'rack',
  DEVICE_TYPE: 'device_type',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
} as const;

export const getRouteMain = () => '/';
export const getRouteAvz = () => `/${AppRoutes.AVZ}`;
export const getRouteMechanicReport = () => `/${AppRoutes.MECHANIC_REPORT}`;
export const getRouteCurrMechanicReport = (id: string) => `/${AppRoutes.MECHANIC_REPORT}/${id}`;
export const getRouteCurrMechanicReportEdit = (id: string) => `/${AppRoutes.MECHANIC_REPORT}/${id}/edit`;
export const getRouteKipReport = () => `/${AppRoutes.KIP_REPORT}`;
export const getRouteCurrKipReport = (id: string) => `/${AppRoutes.KIP_REPORT}/${id}`;
export const getRouteCurrKipReportEdit = (id: string) => `/${AppRoutes.KIP_REPORT}/${id}/edit`;
export const getRouteDevice = () => `/${AppRoutes.DEVICE}`;
export const getRouteCurrDevice = (id: string) => `/${AppRoutes.DEVICE}/${id}`;
export const getRouteCurrDeviceEdit = (id: string) => `/${AppRoutes.DEVICE}/${id}/edit`;
export const getRouteStation = () => `/${AppRoutes.STATION}`;
export const getRouteCurrStation = (id: string) => `/${AppRoutes.STATION}/${id}`;
export const getRouteRack = () => `/${AppRoutes.RACK}`;
export const getRouteDeviceType = () => `/${AppRoutes.DEVICE_TYPE}`;
export const getRouteForbidden = () => `/${AppRoutes.FORBIDDEN}`;

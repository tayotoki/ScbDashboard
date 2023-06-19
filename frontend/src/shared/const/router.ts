export type AppRoutes = ValueOf<typeof AppRoutes>;

export const AppRoutes = {
  MAIN: 'main',
  AVZ: 'avz',
  MECHANIC_REPORT: 'mechanic_report',
  KIP_REPORT: 'kip_report',
  DEVICE: 'device',
  STATION: 'station',
  RACK: 'rack',
  DEVICE_TYPE: 'device_type',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
} as const;

export const getRouteMain = () => '/';
export const getRouteAvz = () => `/${AppRoutes.AVZ}`;
export const getRouteMechanicReport = () => `/${AppRoutes.MECHANIC_REPORT}`;
export const getRouteKipReport = () => `/${AppRoutes.KIP_REPORT}`;
export const getRouteDevice = () => `/${AppRoutes.DEVICE}`;
export const getRouteStation = () => `/${AppRoutes.STATION}`;
export const getRouteRack = () => `/${AppRoutes.RACK}`;
export const getRouteDeviceType = () => `/${AppRoutes.DEVICE_TYPE}`;
export const getRouteForbidden = () => `/${AppRoutes.FORBIDDEN}`;

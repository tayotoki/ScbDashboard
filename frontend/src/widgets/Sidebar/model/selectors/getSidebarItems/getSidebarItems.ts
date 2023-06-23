import { SidebarItemsProps } from '../../types/items';

import {
  getRouteAvz,
  getRouteDevice,
  getRouteKipReport,
  getRouteMain,
  getRouteMechanicReport,
} from '@/shared/const/router';

export const getSidebarItems: SidebarItemsProps[] = [
  {
    path: getRouteMain(),
    text: 'Главная',
  },
  {
    path: getRouteAvz(),
    text: 'Авз',
  },
  {
    path: getRouteDevice(),
    text: 'Приборы',
  },
  {
    path: getRouteKipReport(),
    text: 'Отчеты Кипа',
  },
  {
    path: getRouteMechanicReport(),
    text: 'Отчеты Механика',
  },
];

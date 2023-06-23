import { AppRoutes } from '@/shared/const/router';
import { RouteObject } from 'react-router-dom';

type RouterNormalizeType = (
  config: Record<AppRoutes, RouteObject>,
  parent?: AppRoutes,
  children?: AppRoutes[]
) => RouteObject[];

export const routerNormalize: RouterNormalizeType = (config, parent, children) => {

  if (!parent) return Object.values(config);

    const result = {
        config[parent]: 
    }

  return result
};

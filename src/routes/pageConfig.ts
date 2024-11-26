export const enum Routes {
  index = 'index',
  error = 'error',
}

export interface PageConfig {
  allowHeader: boolean;
  allowFooter: boolean;
}

type RoutesFilter = {
  [key in Routes]: PageConfig;
};

const pagesConfig: RoutesFilter = {
  [Routes.index]: {
    allowHeader: true,
    allowFooter: true,
  },
  [Routes.error]: {
    allowHeader: false,
    allowFooter: false,
  },
};

export default pagesConfig;

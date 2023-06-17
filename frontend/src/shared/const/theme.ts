export type Theme = ValueOf<typeof Theme>;

export const Theme = {
  LIGHT: 'app-theme-light',
  DARK: 'app-theme-dark',
} as const;

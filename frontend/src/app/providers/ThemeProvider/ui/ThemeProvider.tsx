import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

import { THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const fallbackTheme = localStorage.getItem(THEME_KEY) as Theme;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(fallbackTheme || Theme.LIGHT);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

import { useContext } from 'react';

import { ThemeContext } from '../../../app/providers/ThemeProvider/ui/ThemeProvider';

import { Theme } from '@/shared/const/theme';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme = 'app-theme-light';

    switch (theme) {
      case 'app-theme-dark':
        {
          newTheme = 'app-theme-light';
        }
        break;
      case 'app-theme-light':
        {
          newTheme = 'app-theme-dark';
        }
        break;
      default: {
        newTheme = 'app-theme-light';
      }
    }
    setTheme(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};

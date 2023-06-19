import { ThemeProvider } from '../ui/ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
  return () => (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

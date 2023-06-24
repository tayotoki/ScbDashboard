import { FC, memo } from 'react';

import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { classNames } from '@/shared/lib';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Icon } from '@/shared/ui/Icon';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <Icon
      Svg={ThemeIcon}
      clickable
      onClick={toggleThemeHandler}
      className={classNames(cls.themeSwitcher, [className], {})}
    />
  );
});

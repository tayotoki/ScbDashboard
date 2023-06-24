import { FC, memo } from 'react';

import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { classNames } from '@/shared/lib';
import { Icon } from '@/shared/ui/Icon';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props;

  return <Icon Svg={ThemeIcon} className={classNames(cls.themeSwitcher, [className], {})} />;
});

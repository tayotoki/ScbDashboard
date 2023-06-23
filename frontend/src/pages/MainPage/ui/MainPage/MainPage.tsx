import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.mainPage, [className], {})}>MainPage</div>;
});

export default MainPage;

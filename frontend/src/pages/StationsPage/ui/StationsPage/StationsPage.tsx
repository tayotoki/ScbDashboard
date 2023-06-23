import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './StationsPage.module.scss';

interface StationsPageProps {
  className?: string;
}

const StationsPage: FC<StationsPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.stationsPage, [className], {})}>StationsPage</div>;
});

export default StationsPage;

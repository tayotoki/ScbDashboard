import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './MechanicReportsPage.module.scss';

interface MechanicReportsPageProps {
  className?: string;
}

const MechanicReportsPage: FC<MechanicReportsPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.mechanicReportsPage, [className], {})}></div>;
});

export default MechanicReportsPage;

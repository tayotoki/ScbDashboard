import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './KipReportsPage.module.scss';

interface KipReportsPageProps {
  className?: string;
}

const KipReportsPage: FC<KipReportsPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.kipReportsPage, [className], {})}></div>;
});

export default KipReportsPage;

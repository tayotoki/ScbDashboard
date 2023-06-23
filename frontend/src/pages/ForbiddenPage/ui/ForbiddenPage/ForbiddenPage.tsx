import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.forbiddenPage, [className], {})}></div>;
});

export default ForbiddenPage;

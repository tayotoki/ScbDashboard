import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './AvzPage.module.scss';

interface AvzPageProps {
  className?: string;
}

const AvzPage: FC<AvzPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.avzPage, [className], {})}>AvzPage</div>;
});

export default AvzPage;

import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.notFoundPage, [className], {})}>NotFoundPage</div>;
});

export default NotFoundPage;

import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './RacksPage.module.scss';

interface RacksPageProps {
  className?: string;
}

const RacksPage: FC<RacksPageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.racksPage, [className], {})}></div>;
});

export default RacksPage;

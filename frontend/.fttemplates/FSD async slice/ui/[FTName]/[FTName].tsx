import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './[FTName].module.scss';

interface [FTName]Props {
  className?: string;
}

const [FTName]: FC<[FTName]Props> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.[FTName | camelcase], [className], {})}></div>;
});

export default [FTName];

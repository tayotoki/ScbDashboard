import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrStationPage.module.scss';

interface CurrStationPageProps {
  className?: string;
}

const CurrStationPage: FC<CurrStationPageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return <div className={classNames(cls.currStationPage, [className], {})}>CurrStationPage - {id}</div>;
});

export default CurrStationPage;

import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrDevicePage.module.scss';

interface CurrDevicePageProps {
  className?: string;
}

const CurrDevicePage: FC<CurrDevicePageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return <div className={classNames(cls.currDevicePage, [className], {})}> CurrDevicePage - {id}</div>;
});

export default CurrDevicePage;

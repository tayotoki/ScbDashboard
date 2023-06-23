import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrDeviceEditPage.module.scss';

interface CurrDeviceEditPageProps {
  className?: string;
}

const CurrDeviceEditPage: FC<CurrDeviceEditPageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return <div className={classNames(cls.currDeviceEditPage, [className], {})}>CurrDeviceEditPage - {id}</div>;
});

export default CurrDeviceEditPage;

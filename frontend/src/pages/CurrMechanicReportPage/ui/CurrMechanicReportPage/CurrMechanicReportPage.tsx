import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrMechanicReportPage.module.scss';

interface CurrMechanicReportPageProps {
  className?: string;
}

const CurrMechanicReportPage: FC<CurrMechanicReportPageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return <div className={classNames(cls.currMechanicReportPage, [className], {})}>CurrMechanicReportPage - {id}</div>;
});

export default CurrMechanicReportPage;

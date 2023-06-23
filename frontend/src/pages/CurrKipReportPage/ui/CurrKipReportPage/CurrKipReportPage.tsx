import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrKipReportPage.module.scss';

interface CurrKipReportPageProps {
  className?: string;
}

const CurrKipReportPage: FC<CurrKipReportPageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return <div className={classNames(cls.currKipReportPage, [className], {})}>CurrKipReportPage - {id}</div>;
});

export default CurrKipReportPage;

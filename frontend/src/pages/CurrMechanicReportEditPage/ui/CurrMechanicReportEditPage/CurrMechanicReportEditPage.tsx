import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrMechanicReportEditPage.module.scss';

interface CurrMechanicReportEditPageProps {
  className?: string;
}

const CurrMechanicReportEditPage: FC<CurrMechanicReportEditPageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return (
    <div className={classNames(cls.currMechanicReportEditPage, [className], {})}>CurrMechanicReportEditPage - {id}</div>
  );
});

export default CurrMechanicReportEditPage;

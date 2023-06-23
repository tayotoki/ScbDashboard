import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './CurrKipReportEditPage.module.scss';

interface CurrKipReportEditPageProps {
  className?: string;
}

const CurrKipReportEditPage: FC<CurrKipReportEditPageProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();

  return <div className={classNames(cls.currKipReportEditPage, [className], {})}>CurrKipReportEditPage - {id}</div>;
});

export default CurrKipReportEditPage;

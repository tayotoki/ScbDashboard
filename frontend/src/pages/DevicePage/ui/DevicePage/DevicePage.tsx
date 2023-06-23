import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './DevicePage.module.scss';

interface DevicePageProps {
  className?: string;
}

const DevicePage: FC<DevicePageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.devicePage, [className], {})}>DevicePage</div>;
});

export default DevicePage;

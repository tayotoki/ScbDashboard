import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './DeviceTypePage.module.scss';

interface DeviceTypePageProps {
  className?: string;
}

const DeviceTypePage: FC<DeviceTypePageProps> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.deviceTypePage, [className], {})}></div>;
});

export default DeviceTypePage;

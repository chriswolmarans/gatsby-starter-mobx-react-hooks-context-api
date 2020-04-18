import * as React from 'react';
import { useObserver } from 'mobx-react';
import { Logger } from './Logger';
import { storeContext } from '../../RootLayout';
import { useEffect } from 'react';

export const TemperatureII: React.FC = () => {
  const { Temperature } = React.useContext(storeContext);
  useEffect(() => {
    (window as any).t = Temperature;
  });
  return useObserver(() => {
    return <>
      <div>{Temperature!.formatted}</div>
      <Logger label="TemperatureII"/>
    </>;
  });
};

export default TemperatureII;

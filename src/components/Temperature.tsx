import * as React from 'react';
import { useObserver } from 'mobx-react';
import { Logger } from './Logger';
// @ts-ignore
import { storeContext } from '../../RootLayout';
import { useEffect } from 'react';

export const Temperature: React.FC = () => {
  const { temperatureStore } = React.useContext(storeContext);
  useEffect(() => {
    (window as any).t = temperatureStore;
  });
  return useObserver(() => {
    return <>
      <div>{temperatureStore!.formatted}</div>
      <Logger label="Temperature"/>
    </>;
  });
};

export default Temperature;

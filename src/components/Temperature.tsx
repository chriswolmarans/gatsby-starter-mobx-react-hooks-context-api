import * as React from 'react';
import { observer } from "mobx-react-lite";
import { Logger } from './Logger';
import { useMst } from '../models/Root';
import { useEffect } from 'react';

export const Temperature: React.FC = observer(() => {
  const { temperature } = useMst();
  useEffect(() => {
    (window as any).t = temperature;
  });

    return (<>
      <div>{temperature!.formatted}</div>
      <Logger label="Temperature"/>
    </>);

});

export default Temperature;

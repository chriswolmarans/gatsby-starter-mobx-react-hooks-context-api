import * as React from 'react';
import { observer } from "mobx-react-lite";
import { useMst } from '../models/Root';

export const CounterTotal: React.FC = observer(() => {
  const { counter } = useMst();
    return (<>
      {counter.count}
    </>);
});

export default CounterTotal;

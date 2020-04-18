import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger'

export const Counter: React.FC = () => {
  const  { counterStore }  = React.useContext(storeContext);
  return useObserver(() => {
    return <>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
      <Logger label="counter" />
    </>
  });
};

export default Counter;

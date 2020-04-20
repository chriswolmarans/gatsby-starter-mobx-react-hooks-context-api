import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';

export const CounterTotal: React.FC = () => {
  const { counterStore } = React.useContext(storeContext);
  if (!counterStore) {
    throw Error('Store shouldn\'t be null');
  }
  return useObserver(() => {
    return <>
      {counterStore.count}
    </>;
  });
};

export default CounterTotal;

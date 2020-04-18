import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';

export const SelectedCity: React.FC = () => {
  const { cityStore } = React.useContext(storeContext);
  if (!cityStore) {
    throw Error('Store shouldn\'t be null');
  }
  return useObserver(() => {
    return <>
      {cityStore.selectedCity.get()}
    </>;
  });
};

export default SelectedCity;

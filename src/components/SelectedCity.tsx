import * as React from 'react';
import { useObserver } from 'mobx-react';
// @ts-ignore
import { storeContext } from '../../RootLayout';
import { Box } from 'theme-ui';

export const SelectedCity: React.FC = () => {
  const { cityStore } = React.useContext(storeContext);
  if (!cityStore) {
    throw Error('Store shouldn\'t be null');
  }
  return useObserver(() => {
    return <Box>
      {cityStore.selectedCity.get()}
    </Box>;
  });
};

export default SelectedCity;

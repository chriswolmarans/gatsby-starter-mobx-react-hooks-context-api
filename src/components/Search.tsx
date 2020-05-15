/** @jsx jsx */
import { jsx, Box, Input, Close } from 'theme-ui';
import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
// @ts-ignore
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger';

export const Search: React.FC = () => {
  const { cityStore } = React.useContext(storeContext);
  if (!cityStore) {
    throw Error('Store shouldn\'t be null');
  }

  const { query, setQuery } = cityStore;

  return useObserver(() => {
    return <Box
      sx={{
        maxWidth: '400px',
        margin: '0 auto',
        display:  'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      mb={5}
    >
      <Input value={query.get()} onChange={e => setQuery(e.target.value)}/>
      <Close
        sx={{
        height: 'unset'
      }}
        onClick={() => cityStore.setQuery('')}
      />
      <Logger label="Search"/>
    </Box>;
  });
};

export default Search;

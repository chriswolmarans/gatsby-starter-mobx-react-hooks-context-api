import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger';

export const Search: React.FC = () => {
  const { cityStore } = React.useContext(storeContext);
  if (!cityStore) {
    throw Error('Store shouldn\'t be null');
  }

  const { query, setQuery } = cityStore;

  return useObserver(() => {
    return <>
      <input value={query.get()} onChange={e => setQuery(e.target.value)}/>
      <Logger label="Search"/>
    </>;
  });
};

export default Search;

/** @jsx jsx */
import { jsx, Box, Input, Close } from 'theme-ui';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';
import { Logger } from './Logger';

export const Search: React.FC = observer(() => {
  const { city } = useMst();

  return (<Box
    sx={{
      maxWidth: '400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    mb={5}
  >
    <Input
      value={city.query}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (e && e.target) {
          city.setQuery(e.target.value);
        }
      }}
    />
    <Close
      sx={{
        height: 'unset',
      }}
      onClick={() => city.setQuery('')}
    />
    <Logger label="Search"/>
  </Box>);
});

export default Search;

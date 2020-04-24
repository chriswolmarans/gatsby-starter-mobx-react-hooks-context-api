/** @jsx jsx */
import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger';
import { Button, Box, jsx, Flex } from 'theme-ui';

export const Counter: React.FC = () => {
  const { counterStore } = React.useContext(storeContext);
  return useObserver(() => {
    return <Flex mt={5} sx={{
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <Button onClick={() => counterStore.decrement()}>-</Button>
      <Box
        sx={{
          fontWeight: 'bold',
          fontSize: '4rem',
          minWidth: '6rem'
        }}
      >{counterStore.count}</Box>
      <Button onClick={() => counterStore.increment()}>+</Button>
      <Logger label="counter"/>
    </Flex>;
  });
};

export default Counter;

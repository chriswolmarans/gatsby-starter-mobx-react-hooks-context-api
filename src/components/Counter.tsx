/** @jsx jsx */
import * as React from 'react';
import { observer } from "mobx-react-lite";
import { useMst } from '../models/Root';
import { Logger } from './Logger';
import { Button, Box, jsx, Flex } from 'theme-ui';

export const Counter: React.FC = observer(() => {
  const { counter } = useMst();
    return (
    <Flex mt={5} sx={{
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <Button onClick={() => counter.decrement()}>-</Button>
      <Box
        sx={{
          fontWeight: 'bold',
          fontSize: '4rem',
          minWidth: '6rem'
        }}
      >{counter.count}</Box>
      <Button onClick={() => counter.increment()}>+</Button>
      <Logger label="counter"/>
    </Flex>
  );
});

export default Counter;

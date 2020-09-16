/** @jsx jsx */
import { jsx, Flex, Label, Radio, Box, Input, Styled } from 'theme-ui';
import * as React from 'react';
import Temperature from '../components/Temperature';
import { useMst } from '../models/Root';
import { observer } from "mobx-react-lite";

const TemperatureForm: React.FC = observer(() => {
  const { temperature } = useMst();
  return (
    <div>
      <Box
        sx={{
          maxWidth: '400px',
          margin: '0 auto',
        }}
        mb={5}>
        <Label htmlFor='Temperature'
               mb={3}
               as={Styled.h3}
               sx={{
                 justifyContent: 'center'
               }}
        >Set Temperature in Celsius:</Label>
        <Input
          type="number"
          name="Temperature"
          mb={3}
          onChange={(event) => temperature.setTemperatureCelsius(Number(event.target.value))}
          value={temperature.temperatureCelsius}
        />
      </Box>
      <Box my={5}>
        <Styled.h3>Set Temperature Unit:</Styled.h3>
        <Flex my={3}
              sx={{
                flexWrap: ['wrap', 'nowrap', 'nowrap', 'nowrap']
              }}>
          <Label>
            <Radio
              sx={{
                color: 'text',
              }}
              checked={temperature.unit === 'K'}
              onChange={() => temperature.setUnit('K')}/> Kelvin
          </Label>
          <Label>
            <Radio
              sx={{
                color: 'text',
              }}
              checked={temperature.unit === 'F'}
              onChange={() => temperature.setUnit('F')}/> Fahrenheit
          </Label>
          <Label>
            <Radio
              sx={{
                color: 'text',
              }}
              checked={temperature.unit === 'C'}
              onChange={() => temperature.setUnit('C')}/> Celsius
          </Label>
        </Flex>
      </Box>
      <Box>
        <div
          sx={{
            fontWeight: 'bold',
            fontSize: '4rem',
          }}
        ><Temperature/></div>
        <p>
          As in the egghead course, you can open browser console and call things on <code>t</code>.
        </p>
      </Box>
    </div>
  );
});

export default TemperatureForm;

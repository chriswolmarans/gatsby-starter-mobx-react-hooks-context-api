/** @jsx jsx */
import { jsx, Flex, Label, Radio, Box, Input, Styled } from 'theme-ui';
import * as React from 'react';
import Temperature from '../components/Temperature';
import DefaultLayout from '../components/DefaultLayout';
import { storeContext } from '../../RootLayout';
import { useObserver } from 'mobx-react';
import { GatsbyHelmet } from '../utils/helmet';

const TemperaturePage: React.FC = () => {
  const { temperatureStore } = React.useContext(storeContext);
  if (!temperatureStore) {
    throw Error('Store shouldn\'t be null');
  }
  return useObserver(() => {
    return (
      <DefaultLayout>
        <GatsbyHelmet title="Temperature Page" />
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
            onChange={(event) => temperatureStore.setTemperatureCelsius(Number(event.target.value))}
            value={temperatureStore.temperatureCelsius}
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
                checked={temperatureStore.unit === 'K'}
                onChange={() => temperatureStore.setUnit('K')}/> Kelvin
            </Label>
            <Label>
              <Radio
                sx={{
                  color: 'text',
                }}
                checked={temperatureStore.unit === 'F'}
                onChange={() => temperatureStore.setUnit('F')}/> Fahrenheit
            </Label>
            <Label>
              <Radio
                sx={{
                  color: 'text',
                }}
                checked={temperatureStore.unit === 'C'}
                onChange={() => temperatureStore.setUnit('C')}/> Celsius
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
      </DefaultLayout>
    );
  });
};

export default TemperaturePage;

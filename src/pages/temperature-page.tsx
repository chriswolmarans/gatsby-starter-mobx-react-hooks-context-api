/** @jsx jsx */
import { jsx, Flex, Label, Radio, Box, Input, Styled } from 'theme-ui';
import * as React from 'react';
import TemperatureForm from '../components/TemperatureForm';
import DefaultLayout from '../components/DefaultLayout';
import { GatsbyHelmet } from '../utils/helmet';

const TemperaturePage: React.FC = () => {
  return (
    <DefaultLayout>
      <GatsbyHelmet title="Counter Page" />
      <TemperatureForm />
    </DefaultLayout>
  );
};

export default TemperaturePage;

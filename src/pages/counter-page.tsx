import * as React from 'react';
import Counter from '../components/Counter';
import DefaultLayout from '../components/DefaultLayout';
import { GatsbyHelmet } from '../utils/helmet';

const CounterPage: React.FC = () => {
  return (
    <DefaultLayout>
      <GatsbyHelmet title="Counter Page" />
      <Counter/>
    </DefaultLayout>
  );
};

export default CounterPage;

import * as React from 'react';
import Counter from '../components/Counter';
import DefaultLayout from '../components/DefaultLayout';

const CounterPage: React.FC = () => {
  return (
    <>
    <DefaultLayout>
      <Counter/>
    </DefaultLayout>
    </>
  );
};

export default CounterPage;

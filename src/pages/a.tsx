import * as React from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import Search from '../components/Search';
import CityList from '../components/City';

const A: React.FC = () => {
  return (
    <DefaultLayout>
      <Search/>
      <CityList/>
    </DefaultLayout>
  );

};

export default A;

import * as React from 'react';
import DefaultLayout from '../components/layout';
import Search from '../components/search';
import CityList from '../components/city';
const A: React.FC = () => {
  return (
    <DefaultLayout>
      <Search/>
      <CityList/>
    </DefaultLayout>
  );

};

export default A;

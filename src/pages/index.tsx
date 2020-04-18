import * as React from 'react';
import { DefaultLayout } from '../components/layout';
import Search from '../components/search';
import { CityList } from '../components/city';

const Index: React.FC = () => {
  return (
    <DefaultLayout>
      <div>Here's the app index!</div>
      <p>Search for your favourite city and click on it to get started.</p>
      <Search/>
      <CityList/>
    </DefaultLayout>
  );
};

export default Index;

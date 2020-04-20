import * as React from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import Search from '../components/Search';
import { CityList } from '../components/City';

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

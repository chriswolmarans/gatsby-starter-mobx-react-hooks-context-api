import * as React from 'react';
import Temperature from '../components/Temperature';
import DefaultLayout from '../components/layout';

const TempPage: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <p>
          As in the egghead course, you can open browser console and call things on <code>t</code>.
        </p>
      <Temperature/>
      </DefaultLayout>
    </>
  );
};

export default TempPage;

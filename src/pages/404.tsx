import * as React from 'react';
import { GatsbyHelmet } from '../utils/helmet';

const FourOhFour: React.FC = () => {
  return (
    <>
      <GatsbyHelmet title="404"/>
      <p>FourOhFour!!</p>
    </>
  );
};
export default FourOhFour;

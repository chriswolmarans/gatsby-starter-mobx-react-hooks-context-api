import * as React from 'react';
import * as moment from 'moment';

export const Logger: React.FC = (props) => {
  console.log(`-------------------------------`);
  console.log(`${props.label} rendered at: `);
  console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
  return null; // what is returned here is irrelevant...
};

export default Logger;

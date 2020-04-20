import * as React from 'react';
import * as moment from 'moment';

type LoggerProps = {
  label: string
}

export const Logger: React.FC<LoggerProps> = (props) => {
  console.log(`-------------------------------`);
  console.log(`${props.label} rendered at: `);
  console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
  return null; // what is returned here is irrelevant...
};

export default Logger;

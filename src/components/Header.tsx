import * as React from 'react';
import { CounterTotal } from './CounterTotal';
import { Temperature } from './Temperature';
import { SelectedCity } from './SelectedCity';

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <h4>Selected city:</h4>
      <SelectedCity/>
      <hr />
      <h4>Temperature:</h4>
      <Temperature/>
      <hr />
      <h4>Counter total:</h4>
      <CounterTotal/>
      <hr />
    </header>
  );
};

export default Header;

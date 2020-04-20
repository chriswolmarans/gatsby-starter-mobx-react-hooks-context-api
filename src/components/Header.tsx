import * as React from 'react';
import { Counter } from './Counter';
import { Temperature } from './Temperature';
import { SelectedCity } from './SelectedCity';

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <SelectedCity/>
      <Counter/>
      <Temperature/>
    </header>
  );
};

export default Header;

/** @jsx jsx */
import { jsx, Divider } from 'theme-ui';
import * as React from 'react';
import { CounterTotal } from './CounterTotal';
import { Temperature } from './Temperature';
import { SelectedCity } from './SelectedCity';
import { Link } from 'gatsby';

export const Header: React.FC = () => {

  return (
    <header className="App-header">
      <h1><Link to='/'>Gatsby MobX starter using React Context & Hooks</Link></h1>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          '& > h4': {
            marginRight: '25px'
          }
        }}>
        <h4>Selected city:</h4>
        <SelectedCity/>
      </div>
      <Divider/>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          '& > h4': {
            marginRight: '25px'
          }
        }}>
        <h4>Temperature:</h4>
        <Temperature/>
      </div>
      <Divider/>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          '& > h4': {
            marginRight: '25px'
          }
        }}>
        <h4>Counter total:</h4>
        <CounterTotal/>
      </div>
      <Divider/>
      <ul
        sx={{
          margin: '0',
          padding: '0',
          display: ['block', 'flex','flex','flex'],
          flexWrap: ['null', 'nowrap', 'nowrap', 'nowrap'],
          justifyContent: ['null','space-between','space-between','space-between'],
          listStyle: 'none',
          '& > li > a': {
            maxWidth: '180px',
            padding: '1.25rem 0.5rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'flex-start',
          },
        }}>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/counter-page/'>counter example</Link>
        </li>
        <li>
          <Link to='/temperature-page/'>temperature example</Link>
        </li>
      </ul>
      <Divider/>
    </header>
  );
};

export default Header;

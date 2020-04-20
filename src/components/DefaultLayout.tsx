/** @jsx jsx */
import { Styled, jsx, NavLink, Flex } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';
import { storeContext } from '../../RootLayout';
import { Header } from './Header';

export const DefaultLayout = ({ children }) => {
  return (
    <storeContext.Consumer>
      {() => (
        <Styled.root className="App">
          <div
            sx={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <h1><Link to='/'>Gatsby MobX starter</Link></h1>
            <Header/>
            <ul>
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
            {children}
          </div>
        </Styled.root>
      )}
    </storeContext.Consumer>
  );
};
export default DefaultLayout;

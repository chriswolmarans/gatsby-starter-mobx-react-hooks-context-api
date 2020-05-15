/** @jsx jsx */
import { Styled, jsx, Box } from 'theme-ui';
import * as React from 'react';
// @ts-ignore
import { storeContext } from '../../RootLayout';
import { Header } from './Header';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <storeContext.Consumer>
      {() => (
        <Styled.root
          sx={{
            minWidth: '320px'
          }}
          className="App">
          <div
            sx={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',

            }}
          >
            <Header/>
            <Box
              sx={{
                margin: '3rem 0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
                textAlign: 'center',
              }}
            >
              {children}
            </Box>
            <footer
              sx={{
                width: '100%',
              }}>
              Footer
            </footer>
          </div>
        </Styled.root>
      )}
    </storeContext.Consumer>
  );
};
export default DefaultLayout;

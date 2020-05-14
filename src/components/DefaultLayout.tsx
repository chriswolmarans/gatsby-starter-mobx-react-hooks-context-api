/** @jsx jsx */
import { Styled, jsx, Box } from 'theme-ui';
import * as React from 'react';
import { storeContext } from '../../RootLayout';
import { Header } from 'components/Header';
import { Helmet } from 'react-helmet';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <storeContext.Consumer>
      {() => (
        <Styled.root className="App">
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@300;400&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <div
            sx={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
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
          </div>
        </Styled.root>
      )}
    </storeContext.Consumer>
  );
};
export default DefaultLayout;

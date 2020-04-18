import * as React from 'react';
import { Router } from '@reach/router';
import { storeContext } from '../../RootLayout';
import DefaultLayout from '../components/layout';
import Index from './index';
import A from './a';
import TempPage from './temperature';

const App: React.FC = () => {
  return (
    <storeContext.Consumer>
      {({ children }) => (
        <DefaultLayout>
          <Router>
            {/*THIS IS NOT NEEDED YET, WILL BE FOR AUTHED ROUTES e.g.
          <PrivateRoute path="/profile" component={Profile} />*/}
            {/*<Index path="/"/>*/}
            {/*<A path="/a"/>*/}
            {/*<TempPage path="/temperatureBaby" />*/}
          </Router>
        </DefaultLayout>)}
    </storeContext.Consumer>
  );
};

export default App;

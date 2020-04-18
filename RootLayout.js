import * as React from 'react';
// import { useLocalStore } from 'mobx-react';
import { CounterStore, cityStore, TemperatureStore } from './src/stores/stores';

export const storeContext = React.createContext({
  counterStore: new CounterStore(),
  cityStore: new cityStore(),
  Temperature: new TemperatureStore(),
});

export const useStores = () => React.useContext(storeContext);

const StoreProvider = ({ children }) => {
  // const store = useLocalStore(storeContext); WTF!? never works - https://mobx-react.js.org/recipes-context
  const store = useStores();

  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default ({ element }) => (
  <StoreProvider>
    {element}
  </StoreProvider>
)

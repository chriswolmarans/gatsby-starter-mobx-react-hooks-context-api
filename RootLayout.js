import * as React from 'react';
import { CounterStore, cityStore, TemperatureStore } from './src/stores/stores';

export const storeContext = React.createContext({
  counterStore: new CounterStore(),
  cityStore: new cityStore(),
  temperatureStore: new TemperatureStore(),
});

export const useStores = () => React.useContext(storeContext);

const StoreProvider = ({ children }) => {
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

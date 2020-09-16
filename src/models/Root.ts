import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";

import { Counter } from "./Counter";
import { Cart } from "./Cart";
import { UI } from "./UI";
import { City } from "./City";
import { Temperature } from "./Temperature";

const RootModel = types.model({
  counter: Counter,
  cart: Cart,
  ui: UI,
  city: City,
  temperature: Temperature,
});

export const rootStore = RootModel.create({
  counter: {
    count: 0
  },
  cart: { items: [] },
  ui: {
    isMenuOpen: false
  },
  city: {
    query: '',
    selectedCity: 'Amsterdam',
    cities: [
      'Amsterdam',
      'London',
      'Madrid',
    ]
  },
  temperature: {
    unit: 'C',
    temperatureCelsius: 25,
  }
});

onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

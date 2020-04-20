import { IObservableValue, observable } from 'mobx';

const Cities = [
  'Amsterdam',
  'London',
  'Madrid',
];

export const cityStore: () => {
  selectedCity: IObservableValue<string>;
  query: IObservableValue<string>;
  setSelectedCity(city: string): void;
  readonly filteredCities: string[];
  setQuery(query: string): void
} = () => {
  const store = {
    query: observable.box(''),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },
    get filteredCities() {
      return Cities.filter(city =>
        city.toLowerCase().includes(store.query.get()),
      );
    },
    selectedCity: observable.box('Amsterdam'),
    // get selectedCity() {
    //   return Cities.filter(city =>
    //     store.selectedCity === city
    //   );
    // },
    setSelectedCity(city: string):void {
      store.selectedCity.set(city);
    },
  };

  return store;
};

export type TStore = ReturnType<typeof cityStore>

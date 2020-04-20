import { observable } from "mobx";

const Cities = [
  'Amsterdam',
  'London',
  'Madrid'
];

export const cityStore = () => {
  const store = {
    query: observable.box(''),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },
    get filteredCities() {
      return Cities.filter(city =>
        city.toLowerCase().includes(store.query.get())
      );
    },
    selectedCity: observable.box('Amsterdam'),
    // get selectedCity() {
    //   return Cities.filter(city =>
    //     store.selectedCity === city
    //   );
    // },
    setSelectedCity(city) {
      store.selectedCity.set(city)
    }
  };

  return store;
};

export type TStore = ReturnType<typeof cityStore>

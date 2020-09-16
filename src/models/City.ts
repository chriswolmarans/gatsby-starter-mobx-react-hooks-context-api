import { types } from 'mobx-state-tree';

export const City = types
  .model({
    query: types.string,
    selectedCity: types.string,
    cities: types.array(types.string),
  })
  .actions(self => ({
    setQuery(query: string) {
      if (query && query.length > 0) {
        self.query = query;
      } else {
        self.query = ''
      }
    },
    setSelectedCity(city: string) {
      self.selectedCity = city;
    },
  }))
  .views(self => ({
    get filteredCities() {
      return self.cities.filter(city =>
        city.toLowerCase().includes(self.query.toLowerCase()),
      );
    },
  }));

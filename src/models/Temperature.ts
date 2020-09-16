import { types } from 'mobx-state-tree';


export const Temperature = types
  .model({
    unit: types.string,
    temperatureCelsius: types.number,
  })
  .actions(self => ({
    setUnit(value: string) {
      self.unit = value;
    },
    setTemperatureCelsius(value: number) {
      self.temperatureCelsius = value;
    },
  }))
  .views(self => ({
    get temperatureKelvin() {
      console.log('get temperatureKelvin');
      return self.temperatureCelsius * (9 / 5) + 32;
    },
    get temperatureFahrenheit() {
      console.log('get temperatureFahrenheit');
      return self.temperatureCelsius + 273.15;
    },
    get formatted() {
      console.log('get formatted');
      switch (self.unit) {
        case 'K':
          // @ts-ignore
          return self.temperatureKelvin + ' °K';
        case 'F':
          // @ts-ignore
          return self.temperatureFahrenheit + ' °F';
        case 'C':
          return self.temperatureCelsius + ' °C';
      }
    },
  }));

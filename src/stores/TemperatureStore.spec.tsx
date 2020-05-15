import { TemperatureStore } from './TemperatureStore';

describe('TemperatureStore', () => {
  it('has an initial temperatureCelsius value of 25', () => {
    const store = new TemperatureStore;
    expect(store.temperatureCelsius).toBe(25);
  });

  it('has an initial temperature unit set to Celsius', () => {
    const store = new TemperatureStore;
    expect(store.unit).toBe('C');
  });

  it('will update the temperature unit when calling the setUnit method', () => {
    const store = new TemperatureStore;
    expect(store.unit).toBe('C');
    store.setUnit('K');
    expect(store.unit).toBe('K');
  });

});

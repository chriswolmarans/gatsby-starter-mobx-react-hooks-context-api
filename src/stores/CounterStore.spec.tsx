import { CounterStore } from './CounterStore';

describe('CounterStore', () => {
  it('has an initial count value of zero', () => {
    const store = new CounterStore;
    expect(store.count).toBe(0);
  });

  it('increments count by one when increment() method is called', () => {
    const store = new CounterStore;
    store.increment();
    expect(store.count.valueOf()).toBe(1);
    expect(store.count.valueOf()).toEqual(1);
    expect(store.count).toBe(1);
  });

  it('decrements count by one when decrement() method is called', () => {
    const store = new CounterStore;
    store.decrement();
    expect(store.count.valueOf()).toBe(-1);
    expect(store.count.valueOf()).toEqual(-1);
    expect(store.count).toBe(-1);
  });

});

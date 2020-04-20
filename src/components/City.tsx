import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger';

type CityViewProps = { cities: string[], setSelectedCity(city:string): void, selectedCity: string }

export const CityView: React.FC<CityViewProps> = ({ cities, setSelectedCity, selectedCity }) => {
  return (
    <ul>
      {cities.map((city, index) => (

        // <li key={city + index}>{city}</li>
        <li
          key={city + index}
          onClick={() => setSelectedCity(city)}
          // @ts-ignore
          className={city === selectedCity ? 'selected' : null}
        >
          {city}
          <button>select city</button>
        </li>
      ))
      }
    </ul>
  );
};

export const CityList: React.FC<CityViewProps> = () => {
  const { cityStore } = React.useContext(storeContext);
  if (!cityStore) {
    throw Error('Store shouldn\'t be null');
  }
  return useObserver(() => {
    return <>
      <CityView
        cities={cityStore?.filteredCities}
        setSelectedCity={cityStore.setSelectedCity}
        selectedCity={'Amsterdam'}/>
      <Logger label="CityList"/>
    </>;
  });
};

export default CityList;

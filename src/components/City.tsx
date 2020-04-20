import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger';

export const CityView: React.FC<{ cities: string[] }> = ({ cities, setSelectedCity, selectedCity }) => {
  return (
    <ul>
      {cities.map((city, index) => (

        // <li key={city + index}>{city}</li>
        <li
          key={city + index}
          onClick={() => setSelectedCity(city)}
        // @ts-ignore
          className={ city === selectedCity ? 'selected' : null}
        >
          {city} <button>select city</button>
        </li>
        ))
      }
    </ul>
  );
};

export const CityList: React.FC = () => {
  const { cityStore } = React.useContext(storeContext);
  if (!cityStore) {
    throw Error('Store shouldn\'t be null');
  }
  return useObserver(() => {
    return <>
      <CityView cities={cityStore?.filteredCities} setSelectedCity={cityStore.setSelectedCity} selectedCity={'Amsterdam'}/>
      {/*<CityView cities={cityStore?.filteredCities}/>*/}
      <Logger label="CityList" />
    </>;
  });
};

export default CityList;

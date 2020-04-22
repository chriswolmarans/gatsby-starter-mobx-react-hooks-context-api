/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui';
import * as React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from '../../RootLayout';
import { Logger } from './Logger';

type CityViewProps = { cities: string[], setSelectedCity(city:string): void, selectedCity: string }

export const CityView: React.FC<CityViewProps> = ({ cities, setSelectedCity, selectedCity }) => {
  return (
    <ul
      sx={{
        margin: '0 auto',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'fit-content',
        listStyle: 'none',
        '& > li': {
          margin: '10px 10px',
          textAlign: 'end',
        },
        '& > li > span': {
          margin: '20px 10px',
        }
      }}
    >
      {cities.map((city) => (
        <li
          key={city}
          onClick={() => setSelectedCity(city)}
          className={city === selectedCity ? 'selected' : undefined}
        >
          <span>{city}</span><Button>select city</Button>
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
    return <Box>
      <CityView
        cities={cityStore?.filteredCities}
        setSelectedCity={cityStore.setSelectedCity}
        selectedCity={'Amsterdam'}/>
      <Logger label="CityList"/>
    </Box>;
  });
};

export default CityList;

/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui';
import * as React from 'react';
import { observer } from "mobx-react-lite";
import { useMst } from '../models/Root';
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

export const CityList: React.FC = observer(() => {
  const { city } = useMst();
    return (<Box>
      <CityView
        cities={city?.filteredCities}
        setSelectedCity={city.setSelectedCity}
        selectedCity={'Amsterdam'}/>
      <Logger label="CityList"/>
    </Box>);
});

export default CityList;

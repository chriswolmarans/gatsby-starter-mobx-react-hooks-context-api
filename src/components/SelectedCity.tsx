import * as React from 'react';
import { observer } from "mobx-react-lite";
import { useMst } from '../models/Root';
import { Box } from 'theme-ui';

export const SelectedCity: React.FC = observer(() => {
  const { city } = useMst();

    return (<Box>
      {city.selectedCity}
    </Box>);

});

export default SelectedCity;

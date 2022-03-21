/* eslint-disable react/jsx-no-undef */
import React from 'react';

//import {NavigationContainer} from '@react-navigation/native';
import Route from './src/routes';

//Different importing examples(Use Nº 2)
//1 import * as logoCluckinBell from './src/assets/images/logoCluckinBell.png';
//2 const logoCluckinBell = require('./src/assets/images/logoCluckinBell.png');
import {StoresProvider} from './src/contexts/use-store';

const App = () => {
  return (
    <StoresProvider>
      <Route />
    </StoresProvider>
  );
};

export default App;

import React from 'react';

import {SplashScreen, Home, Map} from '../../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator initialRouteName="SplashScreen">
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="Home" component={Home} />
      <Screen name="Map" component={Map} />
    </Navigator>
  );
}

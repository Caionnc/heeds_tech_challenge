import React from 'react';

import {Home, CreateStore} from '../../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CreateStore" component={CreateStore} />
    </Navigator>
  );
}

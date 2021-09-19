import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/Home'
import CharacterInfo from './views/CharacterInfo';

const Stack = createNativeStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
    </Stack.Navigator>
  );
}

export default MainRoute;

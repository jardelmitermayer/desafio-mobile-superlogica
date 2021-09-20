import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/Home'
import CharacterInfo from './views/CharacterInfo';
import FavoriteCharacters from './views/FavoriteCharacters';

const Stack = createNativeStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
      <Stack.Screen name="FavoriteCharacters" component={FavoriteCharacters} />
    </Stack.Navigator>
  );
}

export default MainRoute;

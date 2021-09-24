import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './views/Home'
import { CharacterInfo } from './views/CharacterInfo';
import { FavoriteCharacters } from './views/FavoriteCharacters';
import { FilterByName } from './views/FilterByName';

const Stack = createNativeStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
      <Stack.Screen name="FavoriteCharacters" component={FavoriteCharacters} />
      <Stack.Screen name="FilterByName" component={FilterByName} />
    </Stack.Navigator>
  );
}

export default MainRoute;

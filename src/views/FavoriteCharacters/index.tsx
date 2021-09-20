import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import Character from '../../types/character';
import { loadFavoriteCharacter } from '../../types/favoriteCharacter';

const FavoriteCharacters = () => {

  const [myFavoriteCharacters, setMyFavoriteCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const favoriteCharactersStoraged = await loadFavoriteCharacter();

      setMyFavoriteCharacters(favoriteCharactersStoraged)
      setLoading(false)
    }

    loadStorageData();
  }, [])


  return (
    <View>
      <FlatList
        data={myFavoriteCharacters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CharacterCard data={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FavoriteCharacters
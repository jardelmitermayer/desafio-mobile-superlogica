import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native'
import CharacterType from '../../types/character';
import { useRoute } from '@react-navigation/core';
import api from '../../services/api';
import CharacterCard from '../../components/CharacterCard';

interface Params {
  name: string
}
const FilterByName = () => {

  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const route = useRoute();
  const name = route.params as Params;
  async function getFilteredNames() {

    const { data } = await api.get(`/character/?name=${name}`);

    if (page > 1) {
      setCharacters(oldCharacters => [...oldCharacters, ...data.results])
    } else {
      setCharacters(data.results)
    }
  }
  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    getFilteredNames();
  }
  useEffect(() => {
    getFilteredNames();
  }, [])
  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) =>
          <CharacterCard
            data={item}
          />
        }
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator size="large" color="#00ff00" /> : <></>
        }
      />
    </View>
  )
}

export default FilterByName
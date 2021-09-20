import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import exampleSlice from '../../redux/reducers/example';
import { FlatList, Text, ActivityIndicator, View, Pressable } from 'react-native';
import api from '../../services/api';
import CharacterCard from '../../components/CharacterCard';
import CharacterType from '../../types/character';
import { useNavigation } from '@react-navigation/core';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const navigation = useNavigation();
  async function getCharacters() {

    const { data } = await api.get(`/character/?page=${page}`);

    if (data.info.next === null) {
      setLoadingAll(true);
    }
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
    getCharacters();
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <Container>
      <Pressable onPress={() => navigation.navigate('FavoriteCharacters')}>
        <Text>Favorite</Text>
      </Pressable>
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

    </Container>
  )
}

export default Home;

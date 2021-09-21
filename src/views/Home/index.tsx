import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

import { Container, FavoriteButton, FavoriteButtonText, Filters, Input } from './styles';
import api from '../../services/api';
import CharacterCard from '../../components/CharacterCard';
import CharacterType from '../../types/character';

const Home: React.FC = () => {
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [filterName, setFilterName] = useState<string>("");

  const navigation = useNavigation();

  async function getCharacters() {

    const { data } = await api.get(`/character/?page=${page}`);

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
  function handleFilterName(name: string) {
    navigation.navigate('FilterByName', name)
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <Container>
      <Filters>
        <FavoriteButton onPress={() => navigation.navigate('FavoriteCharacters')}>
          <FavoriteButtonText>Favorite </FavoriteButtonText>
          <Icon
            name="heart"
            color="red"
            type="font-awesome"
            size={20}
          />
        </FavoriteButton>
        <Input
          placeholder="Type a character name here"
          onChangeText={(value: React.SetStateAction<string>) => setFilterName(value)}
          value={filterName}
          onSubmitEditing={() => handleFilterName(filterName)}
        />
      </Filters>
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

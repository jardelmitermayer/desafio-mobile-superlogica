import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import exampleSlice from '../../redux/reducers/example';
import { FlatList, Text, ActivityIndicator , View } from 'react-native';
import api from '../../services/api';
import CharacterCard from '../../components/CharacterCard';

type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  image: string,
  location: {
    name: string
  }
}  
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }: any) => (
  <View>
    <Text >{title}</Text>
  </View>
);

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const renderItem = ({ item }: any) => (
    <Item title={item.title} />
  );

  async function getCharacters() {
    
    const { data } = await api.get(`/character/?page=${page}`);

    if (data.info.next === null ){
      setLoadingAll(true);
    }
    if (page > 1) {      
      setCharacters( oldCharacters => [...oldCharacters, ...data.results])
      console.log('after page', characters)
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
      <FlatList 
        data={characters} 
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => 
          <CharacterCard data={item} />
        }
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
            loadingMore ? <ActivityIndicator  size="large" color="#00ff00"/> : <></>
        } 
      /> 
      
    </Container>
  )
}

export default Home;

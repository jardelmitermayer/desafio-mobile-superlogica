import React from 'react';
import { Text, Image, Pressable, Alert } from 'react-native';
import { Card, Row, Name, LocationBold, Location, Favorite } from './styles'
import { Icon } from 'react-native-elements';
import CharacterType from '../../types/character';
import CharacterInfo from '../../views/CharacterInfo';
import { useNavigation } from '@react-navigation/core';
import { saveFavoriteCharacter } from '../../utils/favoriteCharacter';
interface CharacterCardProps {
  data: CharacterType
}

const CharacterCard = ({ data }: CharacterCardProps) => {
  const navigation = useNavigation();
  function handleCharacterInfo(character: CharacterType) {
    navigation.navigate('CharacterInfo', { character });
  }

  async function handleSave() {
    try {
      await saveFavoriteCharacter({
        ...data
      })
    } catch {
      Alert.alert('Não foi possível favoritar seu personagem. 😭')
    }
  }

  return (

    <Card>
      <Row>
        <Pressable onPressIn={() => handleCharacterInfo(data)}>
          <Image source={{ uri: data.image }} style={{ width: 120, height: 120 }} />
        </Pressable>
        <Pressable onPress={() => <CharacterInfo id={data.id} />}
        >
          <Name> {data.name} </Name>
          <Row>
            <Icon
              name="circle"
              type="font-awesome"
              color={data.status === 'Alive' ? 'green' : (data.status === 'Dead' ? 'red' : 'gray')}
              size={20}
              style={{ marginLeft: 6, marginBottom: 5 }}
            />
            <Text> {data.status} - {data.species}</Text>
          </Row>
          <LocationBold> Location:</LocationBold>
          <Location> {data.location.name}</Location>
        </Pressable>

        <Favorite onPressIn={handleSave}>
          <Icon
            name="heart-o"
            type="font-awesome"
            size={22}
          />
        </Favorite>
      </Row>
    </Card>
  )
}
export default CharacterCard;


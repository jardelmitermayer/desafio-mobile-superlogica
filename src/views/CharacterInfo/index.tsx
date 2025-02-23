import React from 'react';
import { Row, Location, CircleImage, BoldText, CharacterInfoView } from './styles'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native';
import { Character } from '../../types/character'
import { useRoute } from '@react-navigation/core';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux'

interface Params {
  character: Character
}

export const CharacterInfo = (data: any) => {

  const route = useRoute();
  const { character } = route.params as Params;
  const loading = useSelector((state: RootState) => state)
  return (
    <CharacterInfoView>
      <CircleImage source={{ uri: character.image }} />
      <BoldText> {character.name} </BoldText>
      <Row>
        <Icon
          name="circle"
          type="font-awesome"
          color={data.status === 'Dead' ? 'red' : 'green'}
          size={20}
          style={{ marginLeft: 6, marginBottom: 5 }}
        />
        <Text> {character.status} - {character.species}</Text>
      </Row>

      <Text> {character.species}</Text>
      <BoldText> Origin: </BoldText>
      <Text>{character.origin.name}</Text>
      <BoldText> Last known location:</BoldText>
      <Location> {character.location.name}</Location>
    </CharacterInfoView>
  )

}

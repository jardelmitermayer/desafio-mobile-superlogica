import React, { useState, useEffect } from 'react';
import { Row, Location, CircleImage, BoldText, CharacterInfoView } from './styles'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native';
import api from '../../services/api';
import axios from 'axios';
import CharacterType from '../../types/character'
import EpisodeType from '../../types/episode'
import { useRoute } from '@react-navigation/core';

interface CharacterProps {
  data: CharacterType
}

interface Params {
  character: CharacterType
}

const CharacterInfo = (data: any) => {

  const [episodeInfo, setEpisodeInfo] = useState<EpisodeType>();

  const route = useRoute();
  const { character } = route.params as Params;
  async function getEpisodeName(idCharacter: any) {

    const { data } = await api.get(`/character/${idCharacter}`);
    const epiUrl = data.episode[0]
  }

  useEffect(() => {
    console.log(character)
  }, [])
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
      <BoldText>First seen in:</BoldText>
      <Text>{character.episode[0]}</Text>
    </CharacterInfoView>
  )

}

export default CharacterInfo
import React, { useState } from 'react';
import { Text, Image, View, Pressable, Modal } from 'react-native';
import { Card, Row, Name, LocationBold, Location, Favorite, CircleImage, BoldText, ModalView } from './styles'
import { Icon } from 'react-native-elements'
import axios from 'axios';

type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  image: string,
  origin:{
    name:string
  }
  location: {
    name: string
  }
  episode:[string]
}
interface CharacterCardProps {
  data: Character
}
type Episode = {
  id: number,
  name: string,
  type: string,
  dimension: string,
  url: string,
}
interface EpisodeProps {
  data: Episode
}

const CharacterCard = ({ data }: CharacterCardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  async function getEpisodeName({episode}: any) {
    const { data } = await axios.get(`${episode}`);
    console.log(data)
    return data.name;
  }
  return (
    <Card>
      <Row>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image source={{ uri: data.image }} style={{ width: 120, height: 120 }} />
        </Pressable>
        <Pressable 
          style={{ flexDirection: 'column', justifyContent: 'space-around', padding: 5, marginLeft: 2 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Name> {data.name} </Name>
          <Row>
            <Icon
              name="circle"
              type="font-awesome"
              color={data.status === 'Dead' ? 'red' : 'green'}
              size={20}
              style={{ marginLeft: 6, marginBottom: 5 }}
            />
            <Text> {data.status} - {data.species}</Text>
          </Row>
          <LocationBold> Location:</LocationBold>
          <Location> {data.location.name}</Location>
        </Pressable>

        <Favorite>
          <Icon
            name="heart-o"
            type="font-awesome"
            size={22}
          />
        </Favorite>
      </Row>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible)}}
      >
        <ModalView>
          <CircleImage source={{ uri: data.image }} />
          <BoldText> {data.name} </BoldText>
          <Row>
            <Icon
              name="circle"
              type="font-awesome"
              color={data.status === 'Dead' ? 'red' : 'green'}
              size={20}
              style={{ marginLeft: 6, marginBottom: 5 }}
            />
            <Text> {data.status} - {data.species}</Text>
          </Row>

          <Text> {data.species}</Text>
          <BoldText> Origin: </BoldText>
          <Text>{data.origin.name}</Text>
          <BoldText> Last known location:</BoldText>
          <Location> {data.location.name}</Location>
          <BoldText>First seen in:</BoldText> 
        </ModalView>
      </Modal>
    </Card>
  )
}
export default CharacterCard;
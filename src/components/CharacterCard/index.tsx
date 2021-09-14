import React from 'react';
import { Text, Image, View } from 'react-native';

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
interface CharacterCardProps  {
  data: Character
}

const CharacterCard = ({data}: CharacterCardProps) => { 
  return (
    <View>        
      <Image source={{uri:data.image}}  style={{width: 100, height: 100}} />
      <Text> {data.name} </Text>
      <Text> {data.status}</Text>
    </View>
  )
}

export default CharacterCard;
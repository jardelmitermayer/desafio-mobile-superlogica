import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, Status, Name, LocationBold, Location } from './styles'
import { Icon } from 'react-native-elements'

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
    <Card>
      <View style={{display:'flex', flexDirection:'row'}}>        
        <Image source={{uri:data.image}}  style={{width: 100, height: 120}} />
        
        <View style={{flexDirection:'column', justifyContent:'space-around', padding:5}}>
        <Name> {data.name} </Name>
          <Status>
            <Icon 
              name="circle"
              type="font-awesome"
              color={data.status === 'Dead' ? 'red' : 'green' }
              size={20}
              style={{marginLeft:6,marginBottom:5}}
            /> 
            <Text> {data.status} - {data.species}</Text>
          </Status>
          <LocationBold> Location:</LocationBold>
          <Location> {data.location.name}</Location>
        </View>      
      
      </View>
    </Card>
  )
}

export default CharacterCard;
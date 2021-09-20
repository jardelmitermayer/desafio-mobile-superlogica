import AsyncStorage from "@react-native-async-storage/async-storage";
import Character from "./character";

interface StorageFavoriteCharacter {
  [id: string]: {
    data: Character;
  }
}

export async function saveFavoriteCharacter(character: Character): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@favoriteCharacters:character')
    const oldFavoriteCharacters = data ? (JSON.parse(data) as StorageFavoriteCharacter) : {};

    const newFavoriteCharacter = {
      [character.id]: {
        data: character
      }
    }

    await AsyncStorage.setItem('@favoriteCharacters:character',
      JSON.stringify({
        ...newFavoriteCharacter,
        ...oldFavoriteCharacters
      })
    )

  } catch (error) {
    throw new Error(error);
  }
}

export async function loadFavoriteCharacter(): Promise<Character[]> {
  try {
    const data = await AsyncStorage.getItem('@favoriteCharacters:character')
    const favoriteCharacters = data ? (JSON.parse(data) as StorageFavoriteCharacter) : {};

    const favoriteCharactersSorted = Object
    .keys(favoriteCharacters)
    .map((favoriteCharacter) => {
      return {
        ...favoriteCharacters[favoriteCharacter].data
      }
    })
    .sort((a, b) => {
      return(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    })  
    
    return favoriteCharactersSorted;

  } catch (error) {
    throw new Error(error);
  }
}
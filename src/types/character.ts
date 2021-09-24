export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  image: string,
  origin: {
    name: string
  }
  location: {
    name: string
  }
  episode: string[]
}

import Characters from '../components/characters'
import { useCharacter } from '../hooks/useCharacter'

const Home = () => {
  const { character, isLoading, error } = useCharacter()

  if (isLoading) {
    return <h1>Loading!</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  console.log(character)

  return <Characters characters={character.results} />
}

export default Home

import { useEffect, useState } from 'react'
import { getCharacter } from '../services/character'

export const useCharacter = () => {
  const [character, setCharacter] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setCharacter(await getCharacter())
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getCharacters()
  }, [])

  return { character, isLoading, error }
}

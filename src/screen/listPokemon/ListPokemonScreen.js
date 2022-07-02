import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ListPokemons from '../../components/pokemons/ListPokemons'
import { getPokemons } from '../../services/API'

function ListPokemonScreen () {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getPokemons(0, 151)
      setPokemons(data)
    }
    getData()
  }, [])

  if (!pokemons) {
    return (
      <View>
        <Text>Chargement</Text>
      </View>
    )
  }
  return (
    <View>
      <ListPokemons pokemons={pokemons.results} />
    </View>
  )
}

export default ListPokemonScreen

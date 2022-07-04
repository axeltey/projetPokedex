import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ListPokemons from '../../components/pokemons/ListPokemons'
import { getGeneration } from '../../services/API'

function ListPokemonScreen ({ navigation, route }) {
  const [pokemons, setPokemons] = useState([])
  const { generation } = route.params

  useEffect(() => {
    const getData = async (generation) => {
      const data = await getGeneration(generation.split('/')[6])
      // const temp = data.pokemon_species.sort((a, b) => parseInt(a.url.split('/')[6]) - parseInt(b.url.split('/')[6]))
      // console.log(temp)
      setPokemons(data)
    }
    getData(generation)
  }, [generation])

  if (!pokemons) {
    return (
      <View>
        <Text>Chargement</Text>
      </View>
    )
  }
  return (
    <View>
      <ListPokemons pokemons={pokemons.pokemon_species} />
    </View>
  )
}

export default ListPokemonScreen

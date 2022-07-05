import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import PokemonDetails from '../../components/pokemons/PokemonDetails'
import { getPokemon } from '../../services/API'

function PokemonScreen ({ route, navigation }) {
  const [pokemon, setPokemon] = useState()
  const { id } = route.params

  useEffect(() => {
    const getData = async () => {
      const data = await getPokemon(id)
      setPokemon(data)
      navigation.setOptions({ title: data.name })
    }
    getData()
  })

  if (!pokemon) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <PokemonDetails pokemon={pokemon} />
    </ScrollView>
  )
}

export default PokemonScreen

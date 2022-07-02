import React from 'react'
import { View, Image } from 'react-native'
import Style from './style/PokemonDetailsStyle'

function PokemonDetails ({ pokemon }) {
  return (
    <View style={Style.container}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={Style.image} />
    </View>
  )
}

export default PokemonDetails

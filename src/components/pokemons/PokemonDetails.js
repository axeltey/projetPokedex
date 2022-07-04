import React from 'react'
import { View } from 'react-native'
import Style from './style/PokemonDetailsStyle'
import Pinchable from 'react-native-pinchable'
import PokemonImage from '../fastimage/PokemonImage'

function PokemonDetails ({ pokemon }) {
  return (
    <View style={Style.container}>
      <Pinchable>
        {/* <Image source={{ uri: pokemon.sprites.front_default }} style={Style.image} /> */}
        <PokemonImage id={pokemon.id} width={200} height={200} />
      </Pinchable>
    </View>
  )
}

export default PokemonDetails

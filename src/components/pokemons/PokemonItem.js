import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import PokemonImage from '../fastimage/PokemonImage'
import Style from './style/PokeItemStyle'

const windowH = Dimensions.get('window').height

function PokemonItem ({ pokemon }) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Pokemon', { name: pokemon.name })
        }}
        style={Style.item}
      >
        <View style={Style.container}>
          <Text style={Style.namePoke}>{pokemon.name}</Text>
          <PokemonImage id={pokemon.url.split('/')[6]} width={windowH / 12} height={windowH / 12} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PokemonItem

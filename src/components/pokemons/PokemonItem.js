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
          navigation.navigate('Pokemon', { id: pokemon.url.split('/')[6] })
        }}
        style={Style.item}
      >
        <View style={Style.container}>
          <Text style={Style.namePoke}>{pokemon.name[0].toUpperCase()}{pokemon.name.slice(1)}</Text>
          <PokemonImage id={pokemon.url.split('/')[6]} width={windowH / 12} height={windowH / 12} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PokemonItem

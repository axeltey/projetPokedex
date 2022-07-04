import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Style from './style/ItemGenStyle'
import Images from '../../images/image'

function GenerationItem ({ generation }) {
  const navigation = useNavigation()
  return (
    <View style={Style.item}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Pokemons', { generation: generation.url })
        }}
      >
        <View style={Style.container}>
          <Text style={Style.nameGen}>
            {generation.name[0].toUpperCase()}{generation.name.split('-')[0].slice(1)} {generation.name.split('-')[1].toUpperCase()}
          </Text>
          <Image source={Images.pokedex} style={Style.pokedexImage} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default GenerationItem

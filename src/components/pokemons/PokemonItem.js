import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function PokemonItem ({ pokemon }) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Pokemon', { name: pokemon.name })
        }}
      >
        <View>
          <Text>{pokemon.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PokemonItem

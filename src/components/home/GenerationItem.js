import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function GenerationItem ({ generation }) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Pokemons', { generation: generation.url })
        }}
      >
        <View>
          <Text>{generation.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default GenerationItem

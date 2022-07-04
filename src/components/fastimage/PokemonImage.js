import FastImage from 'react-native-fast-image'
import React from 'react'

const PokemonImage = ({ id, width, height }) => {
  return (
    <FastImage
      style={{ width, height }}
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        priority: FastImage.priority.normal
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  )
}

export default PokemonImage

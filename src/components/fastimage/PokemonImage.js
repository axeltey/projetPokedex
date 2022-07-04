import FastImage from 'react-native-fast-image'

const PokemonImage = ({ id, face, width, height }) => (
  <FastImage
    style={{ width, height }}
    source={{
      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${face}/${id}.png`,
      headers: {},
      priority: FastImage.priority.normal
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
)

export default PokemonImage

import React from 'react'
import { Image, Text, View } from 'react-native'
import Style from './style/HomeStyle'
import Images from '../../images/image'

function HomeScreen () {
  return (
    <View style={[Style.borderSection, Style.masterContainer]}>
      <Image style={Style.imageSize} source={Images.pokemonLogo} />
      <Text style={Style.textIntro}>Bienvenue sur l'application regroupant tous les pokedexs existant sur la pokeAPI.</Text>
      <Text style={Style.textIntro}>Bonne découverte des pokemons et de leurs caractéristiques.</Text>
    </View>
  )
}

export default HomeScreen

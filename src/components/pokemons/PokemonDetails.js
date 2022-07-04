import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Style from './style/PokemonDetailsStyle'
import Pinchable from 'react-native-pinchable'
import PokemonImage from '../fastimage/PokemonImage'

const windowH = Dimensions.get('window').height

function PokemonDetails ({ pokemon }) {
  return (
    <View style={Style.masterContainer}>
      <View style={[Style.container, Style.borderSection]}>
        <View style={Style.sectionMarginBottom}>
          <Pinchable>
            <PokemonImage id={pokemon.id} width={windowH / 4} height={windowH / 4} />
          </Pinchable>
        </View>
        <View style={[Style.section, Style.borderSection, Style.sectionMarginBottom]}>
          <Text style={Style.text}>Type</Text>
          <View style={Style.typeContainer}>
            <View style={Style.typeItem}>
              <Text style={Style.text}>{pokemon.types[0].type.name[0].toUpperCase()}{pokemon.types[0].type.name.slice(1)}</Text>
            </View>
            <View style={Style.typeItem}>
              <Text style={Style.text}>{pokemon.types[1] ? pokemon.types[1].type.name[0].toUpperCase().concat(pokemon.types[1].type.name.slice(1)) : 'None'}</Text>
            </View>
          </View>
        </View>
        <View style={[Style.section, Style.borderSection, Style.sectionMarginBottom]}>
          <Text style={Style.text}>Stat</Text>
          <View style={Style.typeContainer}>
            <View style={Style.typeItem}>
              <Text style={Style.textStat}>HP: {pokemon.stats[0].base_stat}</Text>
            </View>
            <View style={Style.typeItem}>
              <Text style={Style.textStat}>ATT: {pokemon.stats[1].base_stat}</Text>
            </View>
            <View style={Style.typeItem}>
              <Text style={Style.textStat}>DEF: {pokemon.stats[2].base_stat}</Text>
            </View>
            <View style={Style.typeItem}>
              <Text style={Style.textStat}>ATT-SPE: {pokemon.stats[3].base_stat}</Text>
            </View>
            <View style={Style.typeItem}>
              <Text style={Style.textStat}>DEF-SPE: {pokemon.stats[4].base_stat}</Text>
            </View>
            <View style={Style.typeItem}>
              <Text style={Style.textStat}>SPE: {pokemon.stats[5].base_stat}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PokemonDetails

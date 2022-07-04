import React from 'react'
import { FlatList } from 'react-native'
import PokemonItem from './PokemonItem'
import Style from './style/PokeListStyle'

function ListPokemons ({ pokemons }) {
  const renderItem = ({ item }) => (
    <PokemonItem pokemon={item} />
  )

  return (
    <FlatList
      columnWrapperStyle={Style.list}
      data={pokemons}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={item => item.url.split('/')[6]}
    />
  )
}

export default ListPokemons

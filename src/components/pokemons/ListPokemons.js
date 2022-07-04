import React from 'react'
import { FlatList } from 'react-native'
import PokemonItem from './PokemonItem'

function ListPokemons ({ pokemons }) {
  const renderItem = ({ item }) => (
    <PokemonItem pokemon={item} />
  )

  return (
    <FlatList
      data={pokemons}
      renderItem={renderItem}
      keyExtractor={item => item.url.split('/')[6]}
    />
  )
}

export default ListPokemons

import React from 'react'
import { FlatList } from 'react-native'
import PokemonItem from './PokemonItem'

function ListPokemons ({ pokemons, state }) {
  const renderItem = ({ item }) => (
    <PokemonItem pokemon={item} />
  )

  return (
    <FlatList
      data={pokemons}
      extraData={state}
      renderItem={renderItem}
      keyExtractor={item => item.url.split('/')[6]}
    />
  )
}

export default ListPokemons

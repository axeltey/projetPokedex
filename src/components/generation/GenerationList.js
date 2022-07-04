import React from 'react'
import { FlatList } from 'react-native'
import GenerationItem from './GenerationItem'

function GenerationList ({ generations }) {
  const renderItem = ({ item }) => (
    <GenerationItem generation={item} />
  )

  return (
    <FlatList
      data={generations}
      renderItem={renderItem}
      keyExtractor={item => item.url.split('/')[6]}
    />
  )
}

export default GenerationList

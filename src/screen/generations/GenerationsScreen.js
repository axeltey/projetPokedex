import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import GenerationList from '../../components/generation/GenerationList'
import { getGenerations } from '../../services/API'

function GenerationsScreen () {
  const [generations, setGenerations] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getGenerations()
      setGenerations(data)
    }
    getData()
  }, [])

  if (!generations) {
    return (
      <View>
        <Text>Chargement</Text>
      </View>
    )
  }
  return (
    <View>
      <GenerationList generations={generations.results} />
    </View>
  )
}

export default GenerationsScreen

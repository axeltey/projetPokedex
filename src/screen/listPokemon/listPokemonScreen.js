import React from 'react'
import { Button, View } from 'react-native'
import { useAuth } from '../../contexts/AuthContext'

function ListPokemonScreen () {
  const { logout, state: { error } } = useAuth()

  const handle = async () => {
    await logout()
  }

  return (
    <View>
      <Button title='logout' onPress={handle} />
    </View>
  )
}

export default ListPokemonScreen

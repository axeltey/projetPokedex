import React from 'react'
import { Button } from 'react-native'
import { useAuth } from '../../contexts/AuthContext'

const LogoutButton = () => {
  const { logout, state: { error } } = useAuth()

  const handle = async () => {
    await logout()
  }

  return (
    <Button title='Se déconnecter' onPress={handle} />
  )
}

export default LogoutButton

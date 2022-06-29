import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import TextInput from '../input/TextInput'
import { useAuth } from '../../contexts/AuthContext'

function AuthForm () {
  const { loginUser, state: { error } } = useAuth()

  const [credentials, setCredentials] = useState({
    username: 'user',
    password: 'userpassword'
  })

  const updateAuth = async () => {
    await loginUser(credentials)
  }

  return (
    <View>
      <Text>Se connecter</Text>
      <TextInput
        iconName='person-circle'
        value={credentials.username}
        onChangeText={(text) => {
          setCredentials({ ...credentials, username: text })
        }}
      />
      <TextInput
        secureTextEntry
        iconName='lock-closed'
        value={credentials.password}
        onChangeText={(text) => {
          setCredentials({ ...credentials, password: text })
        }}
      />
      <Button
        title='Se connecter'
        onPress={updateAuth}
      />
    </View>
  )
}

export default AuthForm

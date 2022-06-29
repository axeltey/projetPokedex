import React from 'react'
import AuthScreen from '../screen/auth/AuthScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListPokemonScreen from '../screen/listPokemon/listPokemonScreen'
import LoadingScreen from '../screen/loading/LoadingScreen'
import { useAuth } from '../contexts/AuthContext'
import { Button } from 'react-native'
import LogoutButton from '../components/logout/logout'

const TabNavigator = createBottomTabNavigator()

const AuthStackNavigator = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStackNavigator.Screen name='Login' component={AuthScreen} />
    </AuthStackNavigator.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <TabNavigator.Navigator screenOptions={{
      headerRight: () => (
        <LogoutButton />
      )
    }}
    >
      <TabNavigator.Screen
        name='Pokemons' component={ListPokemonScreen}
      />
    </TabNavigator.Navigator>
  )
}

const RootNavigator = () => {
  const { state: { loading, user } } = useAuth()

  console.log(user)

  if (loading) {
    return <LoadingScreen />
  }

  return user ? <MainNavigator /> : <AuthNavigator />
}

export default RootNavigator

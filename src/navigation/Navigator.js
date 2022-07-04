import React, { useEffect } from 'react'
import AuthScreen from '../screen/auth/AuthScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListPokemonScreen from '../screen/listPokemon/ListPokemonScreen'
import LoadingScreen from '../screen/loading/LoadingScreen'
import { useAuth } from '../contexts/AuthContext'
import LogoutButton from '../components/logout/Logout'
import PokemonScreen from '../screen/pokemon/PokemonScreen'
import GenerationsScreen from '../screen/generations/GenerationsScreen'
import HomeScreen from '../screen/home/HomeScreen'
import { AppState, Image } from 'react-native'
import Images from '../images/image'

const TabNavigator = createBottomTabNavigator()

const AuthStackNavigator = createNativeStackNavigator()

const PokemonStackNavigator = createNativeStackNavigator()

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
    <TabNavigator.Navigator screenOptions={({ route }) => ({
      headerRight: () => (
        <LogoutButton />
      ),
      tabBarIcon: ({ focused, size }) => {
        const iconSize = focused ? 40 : 35
        switch (route.name) {
          case 'Home':
            return (
              <Image
                source={Images.pikachuHome}
                style={{ width: iconSize, height: iconSize }}
              />
            )
          case 'Pokedex':
            return (
              <Image
                source={Images.pokeball}
                style={{ width: iconSize, height: iconSize }}
              />
            )
          default:
            break
        }
      },
      tabBarActiveTintColor: 'dodgerblue',
      tabBarInactiveTintColor: 'gray'
    })}
    >
      <TabNavigator.Screen name='Home' component={HomeScreen} />
      <TabNavigator.Screen
        options={{
          headerShown: false
        }}
        name='Pokedex' component={PokemonNavigator}
      />
    </TabNavigator.Navigator>
  )
}

const PokemonNavigator = () => {
  return (
    <PokemonStackNavigator.Navigator
      screenOptions={{
        headerRight: () => (
          <LogoutButton />
        )
      }}
    >
      <PokemonStackNavigator.Screen name='Generations' component={GenerationsScreen} />
      <PokemonStackNavigator.Screen name='Pokemons' component={ListPokemonScreen} />
      <PokemonStackNavigator.Screen name='Pokemon' component={PokemonScreen} />
    </PokemonStackNavigator.Navigator>
  )
}

const RootNavigator = () => {
  // useEffect(() => {
  //   const appStateId = AppState.addEventListener('change', handleAppStateChange)

  //   return () => {
  //     appStateId.remove()
  //   }
  // }, [AppState.currentState])

  // const handleAppStateChange = async (nextAppState) => {
  //   if (nextAppState === 'background') {
  //     await logout()
  //   }
  // }

  const { /* logout, */ state: { loading, user } } = useAuth()

  if (loading) {
    return <LoadingScreen />
  }

  return user ? <MainNavigator /> : <AuthNavigator />
}

export default RootNavigator

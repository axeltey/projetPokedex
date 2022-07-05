import React, { createContext, useReducer, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthData from '../../ressources/AuthFile.json'
import fs from 'react-native-fs'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  ERROR: 'ERROR',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING'
}

const initialState = {
  user: null,
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
    case actionTypes.LOGIN:
      return {
        ...initialState, user: action.data.user
      }
    case actionTypes.ERROR:
      return {
        ...initialState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      return initialState
    case actionTypes.LOADING:
      return {
        ...initialState, loading: true
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const ContextFactory = (dispatch) => ({
  loginUser: async (credentials) => {
    let verif = false
    AuthData.profiles.forEach(profile => {
      if (profile.username === credentials.username && profile.password === credentials.password) {
        verif = true
        dispatch({
          type: actionTypes.LOGIN,
          data: { user: credentials.username }
        })
      }
    })
    if (!verif) {
      dispatch({
        type: actionTypes.ERROR,
        data: { error: 'Profile non trouvée' }
      })
    }
  },
  registerUser: async (userData) => {
    if (userData.username && userData.password) {
      AuthData.profiles.push({ username: userData.username, password: userData.password })
      fs.writeFile('../../ressources/AuthFile.json', AuthData, (error) => {
        if (error) {
          throw error
        }
      })
      dispatch({
        type: actionTypes.REGISTER,
        data: { user: userData.username }
      })
    } else {
      dispatch({
        type: actionTypes.ERROR,
        data: { error: 'Register impossible' }
      })
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
})

const persistAuth = async (state) => {
  try {
    await AsyncStorage.setItem('@auth', JSON.stringify(state))
  } catch (error) {
    console.error(error)
  }
}

const rehydrateAuth = async () => {
  try {
    const persistedState = await AsyncStorage.getItem('@auth')
    if (persistedState) {
      return JSON.parse(persistedState)
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // Récupération de l'état d'authenfication sauvegardé
  useEffect(() => {
    const loadStoredState = async () => {
      dispatch({ type: actionTypes.LOADING })
      const storedState = await rehydrateAuth()
      if (storedState) {
        dispatch({
          type: actionTypes.LOGIN,
          data: { user: storedState.user }
        })
      } else {
        dispatch({ type: actionTypes.LOGOUT })
      }
    }
    loadStoredState()
  }, [])

  // Persistance de l'état d'authentification
  useEffect(() => {
    // On créé une méthode afin de sauvegarde le state en synchrone tout en ne bloquant pas le render()
    const save = async (state) => {
      // Enregistrement du state dans le AsyncStorage
      await persistAuth(state)
    }
    save(state)
  }, [state]) // On met [state] pour redéclencher le useEffect() dès que le state change

  // On envoie le dispatch() dans notre Factory afin que toutes les autres méthodes puissent l'utiliser
  return <AuthContext.Provider value={{ state, ...ContextFactory(dispatch) }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  actionTypes,
  AuthProvider,
  useAuth
}

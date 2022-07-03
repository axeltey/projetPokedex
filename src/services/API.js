import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getPokemons = async (offset, limit) => {
  try {
    const response = await api.get(`/pokemon/?offset=${offset}&limit=${limit}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPokemon = async (name) => {
  try {
    const response = await api.get(`/pokemon/${name}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getGenerations = async () => {
  try {
    const response = await api.get('/generation/')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getGeneration = async (id) => {
  try {
    const response = await api.get(`/generation/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getPokemons,
  getPokemon,
  getGenerations,
  getGeneration
}

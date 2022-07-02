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

export {
  getPokemons,
  getPokemon
}

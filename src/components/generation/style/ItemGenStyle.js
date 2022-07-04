import { Dimensions, StyleSheet } from 'react-native'

const windowH = Dimensions.get('window').height

export default StyleSheet.create({
  item: {
    marginTop: 15
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20
  },
  pokedexImage: {
    width: windowH / 12,
    height: windowH / 12
  },
  nameGen: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Subscribe'
  },
  touchZone: {
    borderWidth: 5,
    borderRadius: 20
  }
})

import { Dimensions, StyleSheet } from 'react-native'

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default StyleSheet.create({
  item: {
    marginTop: 15,
    borderWidth: 1.5,
    borderRadius: 20,
    width: windowW / 2.1
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  namePoke: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Subscribe'
  },
  imgPoke: {
    width: windowH / 12,
    height: windowH / 12
  }
})

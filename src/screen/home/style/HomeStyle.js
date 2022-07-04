import { Dimensions, StyleSheet } from 'react-native'

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default StyleSheet.create({
  masterContainer: {
    display: 'flex',
    alignItems: 'center',
    width: windowW
  },
  borderSection: {
    borderWidth: 1.5,
    borderRadius: 20
  },
  textIntro: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Subscribe',
    width: windowW / 1.1,
    marginBottom: windowH / 70
  },
  imageSize: {
    width: windowW / 1,
    height: windowW / 1,
    resizeMode: 'contain'
  }
})

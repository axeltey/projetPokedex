import { Dimensions, StyleSheet } from 'react-native'

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default StyleSheet.create({
  masterContainer: {
    display: 'flex',
    alignItems: 'center',
    width: windowW
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: windowW / 1.02
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    width: windowW / 1.08
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: windowW / 1.05
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Subscribe'
  },
  textStat: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Subscribe'
  },
  typeItem: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 20,
    width: windowW / 3,
    marginBottom: windowH / 70
  },
  borderSection: {
    borderWidth: 1.5,
    borderRadius: 20
  },
  sectionMarginBottom: {
    marginBottom: windowH / 50
  }
})

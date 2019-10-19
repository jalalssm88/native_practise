import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal:17,
    paddingVertical:20
  },
  weatherHeader:{
    fontSize:22,
    fontWeight:'bold'
  },
  temp:{
    fontWeight:'bold',
    fontSize:43,
    marginLeft:20
  },
  descFont:{
    fontSize:22
  }
})
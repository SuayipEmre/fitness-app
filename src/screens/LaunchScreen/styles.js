import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {

  },
  image_container: {
    width: width,
    height: height
  },
  image: {
    width: '100%',
    height: '100%',

    ...Platform.select({
      ios : {},
      android : {
        height: '120%',
        resizeMode :'cover',
      }
    })
  },
  bottom_container: {
    position: 'absolute',
    bottom: height * 0.1,
    left: 0,
    right: 0,
    alignItems: 'center',
    gap: 12,
  },
  button: {
    backgroundColor: 'red',
    height : height * 0.05,
    width: width * 0.9,
    alignItems : 'center',
    justifyContent :'center',
    borderRadius : 20,
    borderWidth : 1,
    borderColor : '#fff'
  },
  button_text: {
    color : '#fff',
    fontWeight: 'bold',
    fontSize :18,
  },
})
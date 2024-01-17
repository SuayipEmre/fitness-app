import { Dimensions, Image, Platform, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, {FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'
const App = () => {
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.image_container} >
        <Image style={styles.image} source={require('./assets/welcome.png')} />
      </View>

      <Animated.View  entering={FadeInDown.delay(100).springify()} style={styles.bottom_container}>
        <Text style={{ color: '#fff', fontSize: 35, }}>
          Best <Text style={{ color: 'red' }}>Workouts</Text> For You
        </Text>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text} >Get Started</Text>
        </TouchableOpacity>
        </Animated.View>

      </Animated.View>
    </>
  )
}

export default App

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
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
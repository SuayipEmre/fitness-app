import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, {FadeInDown} from 'react-native-reanimated'
import { styles } from './styles'

const LaunchScreen = ({navigation}) => {
    return (
        <>
            <StatusBar style='light' />
            <View style={styles.image_container} >
                <Image style={styles.image} source={require('../../../assets/welcome.png')} />
            </View>

            <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.bottom_container}>
                <Text style={{ color: '#fff', fontSize: 35, }}>
                    Best <Text style={{ color: 'red' }}>Workouts</Text> For You
                </Text>

                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.button_text} >Get Started</Text>
                    </TouchableOpacity>

                </Animated.View>

            </Animated.View>
        </>
    )
}

export default LaunchScreen
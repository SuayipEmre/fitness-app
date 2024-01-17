import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from '../../components/imageSlider'
import BodyPart from '../../components/bodyPart'
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar style='dark' />

            {/*Header */}
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>READY TO </Text>
                    <Text style={{ color: 'red', fontSize: 35, fontWeight: 'bold' }}>WORKOUT</Text>
                </View>

                <View style={styles.header_rightside}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/140286752?v=4' }} />
                    <Ionicons name="notifications-outline" size={30} color="black" />
                </View>
            </View>

            {/*ImageSlider */}
            <View>
                <ImageSlider />
            </View>

            {/*Body Parts */}
            <BodyPart />


        </SafeAreaView>
    )
}

export default HomeScreen
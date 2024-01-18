import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchExcersisesByBodyPart } from '../../../APIs/exercises'
import ExercisesContent from '../../components/exercisesContentContainer'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const ExercisesScreen = ({navigation,route}) => {
    const {bodyPart, image} = route.params
    const [exercises, setExercises] = useState([])

    const handleExercises = async() => {
        const data = await fetchExcersisesByBodyPart(bodyPart)
        setExercises(data)
      
    }
    useEffect(() => {
        if(bodyPart) handleExercises()
    },[route])

  return (
    <View style={{flex : 1, backgroundColor : '#fff',}}>
        <View style={styles.image_container}>
                <Image source={image} style={styles.image} />
                <View style={styles.icon_container}>
                    <Ionicons name="caret-back-sharp" size={30} color="white" onPress={() => navigation.goBack()} />
                </View>
            </View>
      <ExercisesContent exercises={exercises} />
    </View>
  )
}

export default ExercisesScreen


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    image_container: {
        position: 'relative'
    },
    image: {
        width: width,
        height: height / 2,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        resizeMode: 'cover'
    },
    icon_container: {
        backgroundColor: 'red',
        position: 'absolute',
        top: '20%',
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
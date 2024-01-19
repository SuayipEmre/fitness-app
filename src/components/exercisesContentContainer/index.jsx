import { FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { styles } from './style'
import ExerciseDetailsModal from '../ExerciseDetailsModal';


const ExercisesContent = ({ exercises }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [exerciseDetails, setExerciseDetails] = useState([])


    const handleExerciseDetails = (details) => {
        console.log('im here : ', details)
        setExerciseDetails(details)
        setIsModalVisible(true)
    }



    const renderExerciseItem = ({ item }) => (
        <TouchableOpacity style={{ margin: 12, }} onPress={() => handleExerciseDetails(item)} >

            <View style={styles.gif_container}>
                <Image source={item.gifUrl} style={styles.gif} />
            </View>


        </TouchableOpacity>
    )
    return (
        <View style={styles.container}>


            <FlatList
                data={exercises}
                renderItem={renderExerciseItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content_container}
                style={styles.content_container}
            />

            <ExerciseDetailsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} exerciseDetails={exerciseDetails} />

        </View>
    )
}

export default ExercisesContent


import { FlatList, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image';
import { styles } from './style'
const ExercisesContent = ({ exercises }) => {

    const renderExerciseItem = ({ item }) => (
        <TouchableOpacity style={{margin :12,}} >
            
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
        </View>
    )
}

export default ExercisesContent


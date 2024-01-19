import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { bodyParts } from '../../constants/bodyParts'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInDown } from 'react-native-reanimated'


const BodyPart = () => {
    const navigation = useNavigation()

    const renderListItems = ({ item, index}) => (

        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()} >
            <TouchableOpacity style={styles.button} activeOpacity={.9} onPress={() => navigation.navigate('Exercises', {
                bodyPart: item.name,
                image : item.image  
            })}>
                <View style={styles.button_text_container}>
                    <Text style={styles.button_text} >{item.name}</Text>
                </View>
                <Image source={item.image} style={styles.image} />

            </TouchableOpacity>
        </Animated.View>
    )

    return (
        <View style={{ flex: 1, }}>
            <Text style={styles.title} >Exercises</Text>

            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content_container}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    gap: 12,
                }}
                renderItem={renderListItems}
            />
        </View>
    )
}

export default BodyPart
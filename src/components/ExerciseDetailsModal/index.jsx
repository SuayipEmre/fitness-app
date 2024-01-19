import { Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInLeft, FadeInRight, FadeOut } from 'react-native-reanimated';
const ExerciseDetailsModal = ({ isModalVisible, setIsModalVisible, exerciseDetails }) => {





    return (
        <Modal
            animationType='slide'
            transparent
            visible={isModalVisible}
        >
            <View style={styles.container}>

                <View style={styles.gif_container}>
                    <Image
                        source={{ uri: exerciseDetails?.gifUrl }}
                        style={styles.gif}
                    />
                </View>

                <ScrollView contentContainerStyle={styles.content_container} showsVerticalScrollIndicator={false}>
                    <View >
                        <Text style={styles.name}>{(exerciseDetails?.name)?.toUpperCase()}</Text>

                        <Text style={styles.title}>
                            Equipment :
                            <Text style={styles.subtitle}> {exerciseDetails?.equipment}</Text>
                        </Text>

                        <Text  style={styles.title}>
                            Target :
                            <Text style={styles.subtitle}> {exerciseDetails?.target}</Text>
                        </Text>

                    </View>
                    {/*   <Text>SecondaryMuscles : {exerciseDetails.secondaryMuscles}</Text> */}


                    <View style={styles.instructions_container}>
                        <Animated.Text entering={FadeInRight.delay(400).springify()} style={styles.instructions_title}>Instructions</Animated.Text>
                        {
                            exerciseDetails?.instructions?.map((item, idx) => (
                                <Animated.Text entering={FadeInRight.delay(idx * 400).springify()} key={item}>{`${idx + 1} - ${item}`}</Animated.Text>
                            ))
                        }

                    </View>
                </ScrollView>

                <AntDesign name="close" size={24} color="black" style={styles.close_icon} onPress={() => setIsModalVisible(!isModalVisible)} />

            </View>

        </Modal>
    )
}

export default ExerciseDetailsModal

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: width,
        height: height,
    },
    gif_container: {
        width: width,
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gif: {
        width: '80%',
        height: '80%',
    },
    content_container: {
        paddingHorizontal: 22,
        gap: 12,
        paddingBottom: 30,
    },
    name: {
        fontSize: 22,
        fontWeight: '500',
        marginVertical: 12,
    },
    title: {
        fontSize: 17,
    },
    subtitle: {
        fontSize: 14,
        color: '#333',
    },
    instructions_container: {
        gap: 12
    },
    instructions_title: {
        fontSize: 20,
        fontWeight: '400',
    },
    close_icon: {
        position: 'absolute',
        right: height * 0.05,
        top: height * 0.1

    },
})
import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export const styles=  StyleSheet.create({
    title:{
        fontSize : 40,
        fontStyle : 'italic',
        margin : 12,
        color : '#333'
    },

})
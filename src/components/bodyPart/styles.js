import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export const styles=  StyleSheet.create({
    title:{
        fontSize : 40,
        margin : 12,
        color : '#0009'
    },

    content_container:{
        paddingTop : 20,
        paddingBottom : 50,
        paddingHorizontal : 12,
       gap: 15,
    },
    button:{},
    button_text_container:{
        position : 'absolute',
        top : 0,
        bottom : 0,
        right : 0,
        left : 0,
        zIndex : 12,
        backgroundColor: '#0004', 
        borderRadius : 20,
        justifyContent : 'flex-end',
        paddingVertical: 12,
    },
    button_text:{
        color : '#fff',
        alignSelf:'center',
        fontSize :18,
        
    },
    image:{
        width : width * 0.4,
        height : height * 0.2,
        borderRadius : 20,
    }

})
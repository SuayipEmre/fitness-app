import { Dimensions, StyleSheet } from "react-native";

const {width, height}  = Dimensions.get('window')
export const styles = StyleSheet.create({
    container : {
        flex : 1,
        width :width,
        alignItems:'center'
    },
    content_container:{ 
    },
    gif_container : {
        width : width / 2.4,
        height : height * 0.2,
        borderWidth :0.3,
        alignItems:'center',
        justifyContent :'center',
        borderRadius : 15,
    },
    gif : {
       width : '90%',
       height : '90%',
       borderRadius : 15,
    },
})
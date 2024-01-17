import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:'#fff'
    },
    header:{
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems:'center',
        paddingHorizontal : 20,
    },
    header_rightside:{
        alignItems:'center',
        gap : 10,
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 25,
    }
})
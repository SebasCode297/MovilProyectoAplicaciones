import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius: 12,
        padding: 16,
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        minWidth:300,
        marginTop: 10,
        marginLeft:10,
        marginRight: 10 
    },
    avatarContainer: {
        marginRight: 16
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor:'#e0e0e0'
    },
    infoContainer:{
        flex: 1,
        justifyContent:'center'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333'
    },
    species: {
        fontSize: 16,
        color:'#666'
    }
});
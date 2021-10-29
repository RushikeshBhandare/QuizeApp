import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        height: 100,
        padding: 20

    },  
    mainTextContainer:{
        flexDirection: 'row',
        marginTop: 30
    },  
    mainText:{
        fontSize: 35,
        fontWeight:'bold',
        paddingLeft: 20,
        color: '#4f4e4e'
    },
    categories:{
        height: 100,
        flex: 7
    },  
    playButton:{
        height: 100,
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    playButtonST:{
        backgroundColor: '#5ff582',  
        height: 50,
        width: '80%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles
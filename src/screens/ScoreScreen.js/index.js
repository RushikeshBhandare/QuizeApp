import React from "react";
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ScoreScreen = ({route}) =>{
    const navigation = useNavigation()
    return(
        <View style={styles.root}>
            <Text style={styles.mainText}>
                Your score
            </Text>
            <View style={styles.ScoreBox}>
                <Text style={styles.Score}>{route.params.CorrectAnsersCount}</Text>
            </View>
            {/* Home Mene */}
            <TouchableOpacity
                 style={styles.button}
                onPress={()=>{
                    navigation.navigate('home')
                }}
            >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>

            {/* Retry
            <TouchableOpacity
                 style={styles.button}
                 onPress={()=>{
                    navigation.navigate('quations')
                }}
            >
                <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center'
    },
    mainText:{
        fontSize: 50,
        fontWeight :'bold',
        marginTop: 50
    },
    ScoreBox:{
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'red',
        width: 200,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'black'
    },
    Score:{
        fontSize: 150,
        color: 'white'
    },
    button:{

        marginTop: 50,
        // backgroundColor: 'red',
        width: 200,
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'gray',
        borderWidth: 0.2
        
    },
    buttonText:{
        fontSize: 40,
        
    }
})

export default ScoreScreen
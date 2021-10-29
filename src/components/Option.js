import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";


const Option = ({answers, setIsCorrect, data, currentQuationNo}) =>{
    return(
        // option one 
        <TouchableOpacity 
            onPress={()=>{
                   console.log('tapping oin answer') 
                    if(answers === data[currentQuationNo].correct_answer){
                        console.log("Ypur Answer IS correct")
                        setIsCorrect('Correct Answer')
                    }else{
                        setIsCorrect('Incorrenct Answer')
                    }
            }}
            style={styles.answersBlock}
        >
            <View style={styles.bulletPoint}></View>
            {/* answers */}
            <Text style={styles.answers}>
                {answers}
            </Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
      answersBlock:{
        width: 350,
        // height: 50,
        borderRadius: 10,
        marginTop: 20,
        textAlign: 'center',
        // backgroundColor: 'gray',
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 0.5,
        // overflow: 'scroll'
    },  
    bulletPoint:{
        width: 30,
        height: 30,
        // backgroundColor: 'red',
        borderRadius: 25,
        margin: 10,
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    answers:{  
        marginLeft: 10,   
        fontSize: 16,
        paddingTop: 10,
        fontWeight: '500'
    }
})

export default Option
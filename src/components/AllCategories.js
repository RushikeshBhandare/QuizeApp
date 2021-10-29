import React from "react";
import { Text, View,StyleSheet, Pressable } from "react-native";


const AllCategories = ( {text, settSelectedCategory, ExtraStyle} ) =>{
    const onPressButton = () =>{
        settSelectedCategory(text)
    }
    return(
        <Pressable onPress={onPressButton}>
            <View style={[styles.root, ExtraStyle]}>
                <Text style={[styles.text, ExtraStyle]}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root:{
        // borderWidth: 1,
        // borderColor: 'red',
        width: 170,
        alignContent: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginLeft: 15
    },
    text:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#4f4e4e'
    }

})

export default AllCategories
import React from "react";
import { Text, View,StyleSheet, Image, Pressable } from "react-native";

const Category = ({text, settSelectedCategory,no, setCategoryNo,ExtraStyle, image}) =>{
    const onPressButton = () =>{
        settSelectedCategory(text)
        setCategoryNo(no)
    }
    return(
        <Pressable onPress={onPressButton}>
            <View style={[styles.root, ExtraStyle]}>
                <View style={styles.imageBlock}>
                    <Image
                      style={styles.image}
                        source = {image}
                    />
                </View>
                <View style={styles.textBlock}>
                    <Text style={[styles.text, ExtraStyle]}>{text}</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.numberTextOne}>
                        10
                    </Text>
                    <Text style={styles.numberTextTwo}>
                        Quations
                    </Text>
                </View>
                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root:{
        borderWidth: 1,
        borderColor: '#e6e3e3',
        marginHorizontal: 20,
        marginTop: 10,
        // height: 80,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 5,
        // backgroundColor: '#43e33b'S
    },
    imageBlock:{
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden'
        // borderColor: 'blue',
        // borderWidth: 1
    },
    image:{
        width: 80,
        height: 110     
    },
    textBlock:{
        flex: 2,
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 20
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4f4e4e',

    },
    NumberBlock:{
        flex: 1,
        borderColor: '#e6e3e3',
        backgroundColor: '#e3e3e3',
        borderRadius: 15,
        // borderWidth: 1,
        justifyContent: 'center'
    },
    numberTextOne: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
        color: '#4f4e4e'
    },numberTextTwo: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '500',
        color: '#4f4e4e'
    },
})

export default Category
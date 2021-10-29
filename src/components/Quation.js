import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {useNavigation} from '@react-navigation/native'

import Option from "./Option";


const Quations =({data, category}) =>{
    const [isCorrect, setIsCorrect] = useState('')
    const [currentQuationNo, setCorrentQuationNo] = useState(0)
    const [CorrectAnsersCount, setCurrectAnsersCount] = useState(0)

    

    const navigation = useNavigation()

   if(!data){
        return <Text>Loading..</Text>
   }else{
        return(
            <View style={styles.root}>
              {/* Show Category  */}
                <Text 
                    style={{ 
                        marginTop: 20,
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}
                >
                    {category}
                </Text>
              {/* Show Answer is correct or not   */}

                <Text 
                    style={{ 
                        textAlign: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                >
                    {isCorrect}
                </Text>
                {/* Quaitons */}
                <View style={styles.QuaitonBlock}>
                    <Text style={styles.quationText}>
                        Q.{currentQuationNo + 1} : {data[currentQuationNo].question}
                    </Text>
                </View>
                    
                
                {/* Options */}
                <View style={styles.optionsBlock}>
                    {/* answers */}     
                    <Option 
                        setIsCorrect={setIsCorrect} 
                        answers={data[currentQuationNo].options[0]}
                        data={data}
                        currentQuationNo={currentQuationNo}
                    />
                    <Option 
                        setIsCorrect={setIsCorrect} 
                        answers={data[currentQuationNo].options[1]}
                        data={data}
                        currentQuationNo={currentQuationNo}
                    />
                    <Option 
                        setIsCorrect={setIsCorrect} 
                        answers={data[currentQuationNo].options[2]}
                        data={data}
                        currentQuationNo={currentQuationNo}
                    />
                    <Option 
                        setIsCorrect={setIsCorrect} 
                        answers={data[currentQuationNo].options[3]}
                        data={data}
                        currentQuationNo={currentQuationNo}

                    />
                    
                </View>

                {/* Next Button */}
                <View 
                    style={{
                        flexDirection:'row',
                        alignItems:'flex-end',
                        justifyContent:'flex-end'
                    }}
                >
                    <TouchableOpacity 
                        onPress={()=>{
                            if(currentQuationNo >= 9){
                                console.log('All Quaiton Ha been over ')
                                navigation.navigate('score', {CorrectAnsersCount})
                                return
                            }
                            console.log(currentQuationNo + 1)
                            setCorrentQuationNo(currentQuationNo + 1)
                            if(isCorrect === 'Correct Answer'){
                                setCurrectAnsersCount(CorrectAnsersCount + 1)
                            }
                            setIsCorrect('')

                        }}
                        style={styles.nextButton}
                    >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )

    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    QuaitonBlock:{
        flex: 1,
        padding: 10
    },
    optionsBlock:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quationText:{
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
    answersBlock:{
        width: 350,
        height: 50,
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
        fontSize: 22,
        paddingTop: 10,
        fontWeight: '500'
    },
    nextButton:{
        // borderWidth: 1,
        width: 100,
        height: 50,
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'lightgreen'
    },
    nextButtonText:{
        fontSize: 30,
        color: 'white',
        fontWeight: '500',
        textAlign: 'center'
    }

})

export default Quations

                     
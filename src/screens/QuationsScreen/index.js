import React, {useEffect, useState} from "react";
import { View, Text, Pressable, FlatList, SafeAreaView } from "react-native";
import axios from "axios";    
import Quations from "../../components/Quation";

const QuationsScreen = ({route}) =>{
    const [quationSet, setQuationSet] = useState()
    const [data, setData] = useState()
    const [answers, setAnswers] = useState()

    // Get The selected Category of Quations
    const category = route.params.selectedCategory
    const no = route.params.CategoryNo
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const fetchedData = await axios.get(`https://opentdb.com/api.php?amount=10&category=${no}&type=multiple`)
                // console.log(fetchedData.data.results)
                // console.log('Fetching Data')
                await setData(fetchedData.data.results)

            }catch(error){
                console.log('Error Fetch Data :- ', error)
            }   

        }
        fetchData()
    }, [])

    useEffect(()=>{
        changeArray();
    }, [data])
 

    const changeArray =()=>{
         if(data){
            // Get correct ansers answers
            const answer = data.map((item)=>{
                    // console.log(item.category)
                return {
                    question: item.question,
                    correct_answer: item.correct_answer
                }
            })
            setAnswers(answer)

            // getIncorrent Ansers
            const incorrectAnswer = data.map((item)=>{
                // console.log(item.incorrect_answers)
                return{
                    question: item.question,
                    incorrect_answers: item.incorrect_answers
                }
            })

            // combine incorret anser and correct answer
            const quations = answer.map((item)=>{
                // console.log(item.question)
                return{
                    question : item.question,
                    correct_answer: item.correct_answer,
                    options:  [...incorrectAnswer.find((element)=>{
                                // console.log(element)
                                if(element.question === item.question){
                                    return element.incorrect_answers                                
                                    
                                }
                            }).incorrect_answers, item.correct_answer]
                }
            })
            // setting Quations
            setQuationSet(quations)
 
        }
    }

    return( 
        // <View style={{flex: 1}}>
            // <FlatList
            //     data={quationSet}
            //     renderItem={({item})=>{
            //         console.log(item)
            //         return(
            //             <View>
            //                 <Quations data={item}/>
            //             </View>
            //             )
            //     }}
            //     horizontal
            // />
        // </View>
        <SafeAreaView style={{flex: 1}}>
            <Quations category={category} data={quationSet}/>
        </SafeAreaView>
    )
}

export default QuationsScreen
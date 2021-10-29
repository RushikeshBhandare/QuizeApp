import React, {useState} from 'react'
import { FlatList, Text, View, Pressable, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import AllCategories from '../../components/AllCategories'
import Category from '../../components/Category'
import Images from '../../constants/images'

import styles from './styles'

const categories =[
    {
        name: 'General Knowledge',
        image: Images.General,
        no: 10
    },
    {
        name: 'History',
        image: Images.History,
        no:23
    },
    {
        name: 'Science Computer',
        image: Images.Computer,
        no: 18
    },
    {
        name: 'Sports',
        image: Images.Sport,
        no: 21  
    },
    {
        name: 'Science & Nature',
        image: Images.Nature,
        no: 17
    },
    {
        name: 'Geography',
        image: Images.Geography,
        no: 22
    },
    {
        name: 'Art',
        image: Images.Art,
        no: 25
    },
    {
        name: 'Animal',
        image: Images.Animal,
        no: 27
    },
    {
        name: 'Vehicles',
        image: Images.Vehicle,
        no: 28
    },
  
]

const HomeScreen = ( ) =>{
    const [selectedCategory, settSelectedCategory] = useState('')
    const [CategoryNo, setCategoryNo] = useState(0)
    const navigation = useNavigation()
    console.log(selectedCategory)
    console.log(CategoryNo)
    return(
        <View style={styles.root}>
        
            {/* Main Text  */}
            <View style={styles.mainTextContainer}>
                <View style={{flex: 2}}>         
                    <Text style={styles.mainText}>Populer</Text>
                    <Text style={styles.mainText}>categories</Text>
                </View>
                {/* add Icon  */}
                <View style={{flex: 1, paddingRight: 50, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 50}}>=</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={{
                flex: 1,
                
            }}>
                <View style={styles.categories}>
                    <FlatList
                        data={categories}
                        renderItem={({item, index})=>{
                            return(
                                <Category 
                                    setCategoryNo={setCategoryNo}
                                    settSelectedCategory={settSelectedCategory} 
                                    no={item.no}
                                    text={item.name}
                                    ExtraStyle={item.name === selectedCategory ? {backgroundColor: '#43e33b', color: 'white'} : {}}
                                    image={item.image}
                                />
                            )
                        }}
                        showsVerticalScrollIndicator= {false}
                    />
                </View>

                {/* Play Button  */}
                <View style={styles.playButton}>
                    <Pressable 
                        style={styles.playButtonST}
                        onPress={()=>{
                            navigation.navigate('quations', {selectedCategory, CategoryNo})
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '500'
                        }}>Lets Start</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

// code that not in use at a movement 

// <View style={styles.header}>
// {/* <Text style={{fontSize: 40, fontWeight:'bold'}}> {'<'} </Text> */}
// </View>
// {/* List Of All the Catagaories */}
// <View >
// <FlatList
//     data={categories}
//     renderItem={({item, index})=>{
//         return(
//             <AllCategories
//                  settSelectedCategory={settSelectedCategory} 
//                  text={item.name}
//                  ExtraStyle={item.name === selectedCategory ? {backgroundColor: '#a7eda4', color: 'white'} : {}}
                 
//             />
//         )
//     }}
//     horizontal
//     showsHorizontalScrollIndicator= {false}
// />
// </View>

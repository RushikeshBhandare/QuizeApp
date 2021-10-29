import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import QuationsScreen from "./src/screens/QuationsScreen";
import ScoreScreen from "./src/screens/ScoreScreen.js";

const Stack = createStackNavigator()

const App = () =>{
  return( 
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="quations" component={QuationsScreen} options={{headerShown: false}}/>
          <Stack.Screen name="score" component={ScoreScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
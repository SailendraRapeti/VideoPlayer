
import React, { Component } from 'react'
import VideoPlayer from './components/VideoPlayer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home"

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
     
    </Stack.Navigator>
      </NavigationContainer>
      

    
    )
  }
}

export default App
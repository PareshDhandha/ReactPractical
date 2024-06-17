import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import DeviceInformation from '../Screens/DeviceInformation';
import About from '../Screens/About';
import Battery from '../Screens/Battery';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name='Tab' component={TabNavigation}/>
     <Stack.Screen name='About' component={About}/>
     <Stack.Screen name='Battery' component={Battery}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})
import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash.js'
import Login from './Login.js'

const Stack = createStackNavigator();

const ComponentManager = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
               title: "Splash",
               headerShown:false
            }}
        />
        <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
               title: "Login",
               headerShown:false
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ComponentManager

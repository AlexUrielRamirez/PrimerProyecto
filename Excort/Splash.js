import React, { Component } from 'react'
import LottieView from 'lottie-react-native';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Splash extends Component {
   state = {
      splash_text: 'EXCORT'
   }

   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.splash_text}>{this.state.splash_text}</Text>
            <LottieView style = {styles.animation} source={require('../assets/lottie_files/square_loading.json')} autoPlay loop />
         </View>
      )
   }
}
export default Splash

const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
   },
   splash_text:{
        textAlign: 'center',
        fontSize: 50,
        color: '#FFFFFF',
        fontFamily: "brushield"
   },
   animation:{
         width: 100,
         height: 100
   }
})
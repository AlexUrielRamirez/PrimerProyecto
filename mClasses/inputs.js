import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      value_1: '',
      value_2: '',
      final_value: 'Esperando resultado...',
   }
   handleValue1 = (text) => {
      this.setState({ value_1: text })
   }
   handleValue2 = (text) => {
      this.setState({ value_2: text })
   }
   mOnClick = (value_1, value_2) => {

        //this.setState({ final_value: 'Valor 1:' + value_1 + " Valor 2:" + value_2})
        this.setState({ final_value: 'Resultado:' + (parseInt(value_1) + parseInt(value_2))})
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Valor 1"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleValue1}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Valor 2"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleValue2}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.mOnClick(this.state.value_1, this.state.value_2)
               }>
               <Text style = {styles.submitButtonText}> Obtener </Text>
            </TouchableOpacity>
            <Text style={{margin:15}}>{this.state.final_value}</Text>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
import React, { Component } from 'react'
import LottieView from 'lottie-react-native';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native'

const width_proportion = '80%';
const height_proportion = '40%';

class Login extends Component {
   
   local_strings = {
      forgot_password_text: '¿Olvidaste tu contraseña?',
      user_mail_text: 'Usuario o correo electrónico',
      user_main_hint: 'Usuario o correo electrónico',
      password_text: 'Contraseña',
      password_hint: 'Contraseña',
      sign_in_button_text: 'Iniciar Sesión',
      sign_up_button_text: 'Regístrarse'
   }

   state = {
      user_mail: '',
      user_password: ''
   }

   handleMail = (text) => {
      this.setState({ user_mail: text })
   }
   handlePassword = (text) => {
      this.setState({ user_password: text })
   }
   login_function = (user, pass) => {
      let text  = null;
      if(user == '123'  &&  pass == '456'){
         text = ' Ok';
      }else{
         text = ' ERRNO';
      }
      Alert.alert(
         "Login chido",
         "Respuesta: " + text,
         [
           { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
       );
   }
   
   render() {
      return (
         <View style = {styles.container}>
            <View style={styles.form_container}>
               <Text style={styles.app_title}>EXCORT</Text>
               <Text style={styles.simple_text}>{this.local_strings.user_mail_text}</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = {this.local_strings.user_main_hint}
                  placeholderTextColor = "#909090"
                  autoCapitalize = "none"
                  onChangeText = {this.handleMail}/>
               <Text style={styles.simple_text}>{this.local_strings.password_text}</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = {this.local_strings.password_hint}
                  placeholderTextColor = "#909090"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePassword}/>
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => this.login_function(this.state.user_mail, this.state.user_password)
                  }>
                  <Text style = {styles.submitButtonText}>{this.local_strings.sign_in_button_text}</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {styles.submitButton}>
                  <Text style = {styles.submitButtonText}>{this.local_strings.sign_up_button_text}</Text>
               </TouchableOpacity>
               </View>
               <View style = {styles.addons_container}>
                  <Text style={styles.addon_simple_text}>{this.local_strings.forgot_password_text}</Text>
               </View>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      flex:1,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      alignItems: 'center'
   },
   form_container:{
      flex:5,
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#000000'
   },
   addons_container:{
      flex:1,
      backgroundColor: '#000000',
      width: '100%',
      alignItems: 'center'
   },
   app_title:{
      textAlign: 'center',
      fontSize: 70,
      marginTop: '7%',
      color: '#FFFFFF',
      fontFamily: "brushield"
   },
   simple_text: {
      color: '#FFFFFF',
      width: width_proportion,
      marginTop: 15
   },
   addon_simple_text:{
      color: '#FFFFFF',
      textDecorationLine: 'underline'
   },
   input: {
      width: width_proportion,
      margin: 15,
      padding: 10,
      borderColor: '#FFFFFF',
      borderWidth: 1,
      color: '#FFFFFF'
   },
   submitButton: {
      width: width_proportion,
      backgroundColor: '#181818',
      margin: 15,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center'
   },
   submitButtonText:{
      color: 'white',
   }
})
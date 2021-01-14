import React, { Component } from 'react'
import LottieView from 'lottie-react-native';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import CustomListview from './../TimeLine/CustomListView'
class MainView extends Component {
   state = {
      splash_text: 'E'
   }

   getData() {
    return [
      {
        key: 1,
        title: 'Moolang',
        alias: '@Moon99',
        description: 'Hace 9h',
        image_url: 'https://media1.tenor.com/images/577dd5aeb540184c204136a4dff6a2c7/tenor.gif?itemid=13038202',
        comment:'Que fans tan maravillosos *w*',
        content_media_url:'https://pbs.twimg.com/media/C_oyCq0VwAALLsq.jpg'
      },
      {
        key: 2,
        title: 'Tracer',
        alias: '@CadeteOxton',
        description: 'Ayer a las 23:35h',
        image_url: 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-11-05-20-09/new.jpg',
        comment:'Winston debería buscar un nuevo hobbie\n#OverwatchTeam',
        content_media_url:'https://pbs.twimg.com/media/CkicOAnUUAA7hzt.jpg'
      },
      {
        key: 3,
        title: 'Jett',
        alias: '@FastAsWind',
        description: 'Ayer a las 21:09h',
        image_url: 'https://files.cults3d.com/uploaders/14684840/illustration-file/e52ddf50-dd29-45fc-b7a6-5fca62a84f18/jett-avatar_large.jpg',
        comment:'Debería tomar unas vacaciones o algo así, a Phoenix no le agrada mucho la idea, jajajaja',
        content_media_url:'https://pbs.twimg.com/media/EWI5obdWkAEGI_E.jpg'
      }
  
    ]
    }

   render() {
      return (
         <View style = {styles.container}>
            <CustomListview
                itemList={this.getData()}
            />
         </View>
      )
   }
}
export default MainView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    }
})
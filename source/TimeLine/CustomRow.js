import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomRow = ({ title, alias, description, image_url, comment, content_media_url }) => (
    <View style={styles.LinearLayout}>
        <View style={styles.container}>
            <Image source={{ uri: image_url }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.alias}>
                    {alias}
                </Text>
                <Text style={styles.time}>
                    {description}
                </Text>
            </View>
        </View>
        <Text style={styles.comment}>{comment}</Text>
        <Image
            style={styles.image_content}
            source={{
                uri:content_media_url,
            }}
        />
      <View style={styles.container}>
            <TouchableOpacity style={styles.to_interact}>
                <View style={styles.container}>
                <Image
                    style={styles.to_interact_icon}
                    source={{
                        uri:'https://lh3.googleusercontent.com/proxy/qmRv57GH_k-RZOayvVTbZUjAt5R55u8aFs10FuCQfgFs3dDm1E13Va9M9ezrNwz5LPZ7Jv0IsJedtaNClvtnyUBGrU31feNURbaZlJSBYPoipI41dFo'
                    }}/>
                <Text>Me gusta</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.to_interact}>
                <View style={styles.container}>
                <Image
                    style={styles.to_interact_icon}
                    source={{
                        uri:'https://img.icons8.com/ios/452/comments.png'
                    }}/>
                <Text>Comentar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.to_interact}>
                <View style={styles.container}>
                <Image
                    style={styles.to_interact_icon}
                    source={{
                        uri:'https://cdn0.iconfinder.com/data/icons/social-15/200/share-icon-512.png'
                    }}/>
                <Text>Compartir</Text>
                </View>
            </TouchableOpacity>
      </View>
    </View>
);

const styles = StyleSheet.create({
    LinearLayout:{
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    alias: {
        fontSize: 12,
        color: '#909090'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    comment:{
        fontSize: 15,
        marginTop: 8,
        color: '#000',
    },
    time: {
        fontSize: 11,
        color: '#909090'
    },
    photo: {
        height: 50,
        width: 50,
    },
    image_content: {
        width: '100%',
        height: undefined,
        borderRadius:8,
        aspectRatio: 1,
    },
    to_interact:{
        flex:1,
        padding: 7,
        marginTop: 15,
        justifyContent: 'center',
    },
    to_interact_icon:{
        flex:1,
        height: 25,
        width:25,
        resizeMode: 'contain'
    }
});

export default CustomRow;
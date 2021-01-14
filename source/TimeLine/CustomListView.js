import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    alias={item.alias}
                    description={item.description}
                    image_url={item.image_url}
                    comment={item.comment}
                    content_media_url={item.content_media_url}
                />}
            />

    </View>
);

export default CustomListview;
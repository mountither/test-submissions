import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SCREEN_WIDTH } from '../utils/dimensions'

const NewsHeader = () => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>News App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: SCREEN_WIDTH,
        paddingBottom: 10,
        alignItems: "center",
        borderBottomColor: "#e1e1e1",
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default NewsHeader
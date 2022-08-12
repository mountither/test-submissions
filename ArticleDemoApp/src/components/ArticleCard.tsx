import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NewsArticle } from '../api/types';
import { formatDateTime } from '../utils/dateFormatters';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/dimensions';


const ArticleCard = ({ item }: { item: NewsArticle }) => {
    return (
        <View style={styles.container}>
            {/* Image and Title  */}
            <ImageBackground
                source={{ uri: item.imgURL }}
                style={styles.image}
            >
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </ImageBackground>

            {/* description */}
            <View style={styles.descContainer}>
                <Text style={{ fontSize: 14, marginTop: 5 }} numberOfLines={5}>{item.desc}</Text>
            </View>

            {/* author/date details */}
            <View style={styles.metaContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }} numberOfLines={1}>
                    <Text style={{ fontWeight: "400" }}>by </Text>
                    {item.author || "Unnamed author"}
                    <Text style={{ fontWeight: "400" }}> on </Text>
                    {formatDateTime(item.datePublished)}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 40
    },
    image: {
        width: SCREEN_WIDTH - 8,
        height: SCREEN_HEIGHT / 3.5,
        overflow: "hidden",
        padding: 15,
        backgroundColor: "gray",
        borderRadius: 10
    },
    descContainer: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        position: "absolute",
        bottom: 10,
        left: 0,
        color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    metaContainer: {
        position: "absolute",
        bottom: 0,
        right: 20
    }
});


export default ArticleCard
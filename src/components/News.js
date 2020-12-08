import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export const News = ({ news, openNews }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => openNews(news)}
            activeOpacity={0.9}
        >
            <View>
                <View style={styles.imgWrapper}>
                    <Image
                        style={styles.img}
                        source={{uri: news.img}}
                    />
                </View>
                <Text style={styles.text}>{news.text.toString()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "48%",
        maxHeight: 250,
        marginVertical: 5,
        marginHorizontal: "1%"
    },
    imgWrapper: {
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        borderRadius: 5
    },
    img: {
        width: "100%",
        height: 150,
        borderRadius: 5,
        resizeMode: "stretch"
    },
    text: {
        textAlign: "center",
        padding: 5
    }
})

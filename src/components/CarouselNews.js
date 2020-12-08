import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'

export const CarouselNews = ({ news, openNews }) => {
    return (
        <View style={styles.carouselWrapper}>
            <TouchableOpacity
                onPress={() => openNews(news)}
                activeOpacity={0.9}
                style={styles.container}
            >
                <View>
                    <Image
                        style={styles.img}
                        source={{uri: news.img}}
                    />
                    <Text style={styles.text}>{news.text.toString()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    carouselWrapper: {
        height: 150,
        paddingTop: 5,
        marginBottom: 12
    },
    container: {
        maxWidth: Dimensions.get('window').width / 3 - 10,
        marginHorizontal: 4
    },
    img: {
        width: "100%",
        height: 100,
        resizeMode: "stretch"
    },
    text: {
        fontSize: 10,
        textAlign: "center"
    }
})

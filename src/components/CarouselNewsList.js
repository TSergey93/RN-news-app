import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CarouselNews } from "./CarouselNews"
import { View, FlatList, StyleSheet, Dimensions } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const CarouselNewsList = ({ newsId, openNews }) => {
    const selectionForCarousel = (massNews, currentId, currentCategory) => {
        const selected = []
        let count = 0
        for (let news of massNews) {
            if (news.id === currentId) continue
            if (news.category === currentCategory) {
                selected.push(news)
                count++
                if (count === 10) break
            }
        }
        return selected
    }

    const [isCarousel, setCarousel] = useState(true)

    const allNews = useSelector(state => state.news.allNews)
    const currentNews = allNews.find(n => n.id === newsId)

    const listNewsForCarousel = selectionForCarousel(allNews, currentNews.id, currentNews.category)

    return (
        <View style={{...styles.container, display: listNewsForCarousel.length ? "flex" : "none", bottom: isCarousel ? 0 : -155}}>
            <View style={styles.btnWrapper}>
                <FontAwesome onPress={() => setCarousel(!isCarousel)} name={isCarousel ? "chevron-down" : "chevron-up"} size={22} color="black" />
            </View>
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around', backgroundColor: "#fff"}}
                horizontal
                data={listNewsForCarousel}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <CarouselNews news={item} openNews={openNews} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        marginTop: 20,
        width: "100%",
        height: 160
    },
    btnWrapper: {
        width: 30,
        height: 20,
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 160,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#fff"
    }
})
import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { News } from './News'

export const NewsList = ({ NewsData = [], openNews }) => {
    if (!NewsData.length) {
        return (
            <View style={styles.wrapper}>
                <View style={styles.imgWrap}>
                    <Image
                        style={styles.image}
                        source={require('../images/no_news.png')}
                    />
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={NewsData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <News news={item} openNews={openNews} />
                )}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgWrap: {
        width: '65%',
        height: '65%'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

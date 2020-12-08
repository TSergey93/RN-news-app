import React, { useEffect, useCallback } from 'react'

import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { WebView } from 'react-native-webview'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { toggleChosen } from '../store/actions/news'
import { CarouselNewsList } from "../components/CarouselNewsList";
import { removeData, setData } from "../AsyncStorage";

export const NewsScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const newsId = navigation.getParam('newsId')

    const news = useSelector(state =>
        state.news.allNews.find(n => n.id === newsId)
    )

    const chosed = useSelector(state =>
        state.news.chosenNews.some(n => n.id === newsId)
    )

    useEffect(() => {
        navigation.setParams({ chosed })
    }, [chosed])

    const toggleHandler = useCallback(() => {
        dispatch(toggleChosen(newsId))
    }, [dispatch, newsId])

    useEffect(() => {
        navigation.setParams({ toggleHandler })
    }, [toggleHandler])

    const openNews = news => {
        navigation.replace('News', {newsId: news.id, title: news.text, chosen: news.chosen})
    }

    return (
        <View style={styles.container}>
            <View style={styles.webviewWrapper}>
                <WebView
                    source={{uri: news.link}}
                    androidHardwareAccelerationDisabled={true}
                />
            </View>
        <CarouselNewsList
            newsId={newsId}
            openNews={openNews}
        />
        </View>
    )
}

NewsScreen.navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')
    const chosen = navigation.getParam('chosed')
    const newsId = navigation.getParam('newsId')
    const toggleHandler = navigation.getParam('toggleHandler')
    const iconName = chosen ? 'star' : 'star-o'

    return {
        headerTitle: title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title='Chosen'
                    iconName={iconName}
                    onPress={() => {
                        toggleHandler()
                        chosen ? removeData(newsId) : setData(newsId)
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    webviewWrapper: {
        flex: 1
    }
})
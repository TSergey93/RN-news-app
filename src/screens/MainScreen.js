import React, { useEffect } from 'react'

import {View, ActivityIndicator, StyleSheet, Alert} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { loadNews } from '../store/actions/news'
import { NewsList } from '../components/NewsList'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const createTwoButtonAlert = () =>
    Alert.alert(
        "Функция недоступна",
        "В процессе разработки",
        [
            { text: "OK" }
        ],
        { cancelable: false }
    );

export const MainScreen = ({ navigation }) => {
    const openNews = news => {
        navigation.navigate('News', {newsId: news.id, title: news.text, chosen: news.chosen})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadNews())
    }, [dispatch])

    const allNews = useSelector(state => state.news.allNews)
    const loading = useSelector(state => state.news.loading)

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color='#42aaff' />
            </View>
        )
    }
    return <NewsList NewsData={allNews} openNews={openNews} />
}

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Новости',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle Drawer'
                iconName='list-ul'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    ),
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='filter'
                iconName='filter'
                onPress={createTwoButtonAlert}
            />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

import React from 'react'

import { Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { NewsList } from '../components/NewsList'
import { News } from '../components/News'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
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

export const ChosenScreen = ({ navigation }) => {
    const openNews = news => {
        navigation.navigate('News', {newsId: news.id, title: news.text, chosen: news.chosen})
    }

    const chosenNews = useSelector(state => state.news.chosenNews)

    return <NewsList NewsData={chosenNews} openNews={openNews} />
}

ChosenScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: "Избранное",
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
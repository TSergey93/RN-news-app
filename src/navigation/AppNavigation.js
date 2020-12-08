import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MainScreen } from '../screens/MainScreen'
import { NewsScreen } from '../screens/NewsScreen'
import { ChosenScreen } from '../screens/ChosenScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { FiltersScreen } from '../screens/FiltersScreen'

const NewsNavigator = createStackNavigator({
    Main: {
        screen: MainScreen,
        path: 'main'
    },
    News: {
        screen: NewsScreen,
        path: 'news/:news'
    },
    Filters: FiltersScreen
})

const ChosenNavigator = createStackNavigator({
    Chosen: ChosenScreen,
    News: NewsScreen
})

const AboutNavigator = createStackNavigator({
    About: AboutScreen
})

const MainNavigator = createDrawerNavigator({
        NewsTabs: {
            screen: NewsNavigator,
            navigationOptions: {
                drawerLabel: 'Новости'
            }
        },
        Chosen: {
            screen: ChosenNavigator,
            navigationOptions: {
                drawerLabel: 'Избранное'
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'О приложении'
            }
        }
    },
    {
        contentOptions: {
            itemStyle: {
                marginVertical: 8
            },
            labelStyle: {
                fontSize: 18
            }
        }
    })

export const AppNavigation = createAppContainer(MainNavigator)
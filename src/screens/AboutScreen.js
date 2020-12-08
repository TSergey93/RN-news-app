import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text><Text style={styles.warning}>!!!</Text> Данное приложение на этапе разработки <Text style={styles.warning}>!!!</Text></Text>
            <Text style={styles.paddings}>Новостное приложение</Text>
            <Text>Версия приложения: <Text style={styles.version}>0.6.1</Text></Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'О приложении',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle Drawer'
                iconName='list-ul'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    warning: {
        fontWeight: 'bold',
        color: 'red'
    },
    paddings: {
        paddingVertical: 10
    },
    version: {
        fontWeight: 'bold'
    }
})

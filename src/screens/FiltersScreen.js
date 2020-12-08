import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export const FiltersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Фильтры</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = () => ({
    headerTitle: "Выберите категорию"
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

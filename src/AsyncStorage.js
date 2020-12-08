import AsyncStorage from '@react-native-async-storage/async-storage'

export const setData = async (value) => {
    try {
        let values = await AsyncStorage.getItem('data')
        if (values === null) {
            values = value
        } else {
            values = `${values},${value}`
        }

        await AsyncStorage.setItem('data', values)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async () => {
    try {
        let values = await AsyncStorage.getItem('data')

        if (values === null) return []

        return  values.split(',')
    } catch (e) {
        console.log(e)
    }
}

export const removeData = async (value) => {
    try {
        let values = await AsyncStorage.getItem('data')

        if (values === null) return false

        values = values.split(',')

        for (let i in values) {
            if (values[i] === value) {
                values.splice(i, 1)
                break
            }
        }

        await AsyncStorage.setItem('data',  values.join())
    } catch (e) {
        console.log(e)
    }
}
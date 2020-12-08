import React, { useEffect } from 'react'

import { Provider } from 'react-redux'
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification'
import { AppNavigation } from './src/navigation/AppNavigation'
import store from './src/store'

export default function App() {
    const getPushData = async (message) => {
        PushNotification.localNotification({
            message: message.notification.body,
            title: message.notification.title
        })
    }

    messaging().onMessage(getPushData)
    messaging().setBackgroundMessageHandler(getPushData)

    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    )
}

import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const AppHeaderIcon = props => (
    <HeaderButton
        {...props}
        iconSize={24}
        IconComponent={FontAwesome}
    />
)
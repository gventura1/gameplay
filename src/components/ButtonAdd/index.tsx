import React from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './style'
import { theme } from '../../global/styles/theme'

type props = RectButtonProperties

export function ButtonAdd({ ...rest }: props) {
    return (
        <RectButton style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons name="plus"
                color={theme.colors.heading}
                size={24}
            >

            </MaterialCommunityIcons>

        </RectButton>

    )
}
import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles } from './style'

type props = RectButtonProperties & {
    title: string
}

export function Button({ title, ...rest }: props) {
    return (
        <RectButton style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}
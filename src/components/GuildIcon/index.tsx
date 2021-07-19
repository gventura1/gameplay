import React from 'react'
import { Image } from 'react-native'

import { styles } from './style'

type Props = {

}

export function GuildIcon() {

    const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-icone.png'
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />

    )
}
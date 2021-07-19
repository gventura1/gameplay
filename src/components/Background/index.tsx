import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './style'
import { theme } from '../../global/styles/theme'

type Props = {
    children: ReactNode
}

export function Background({ children }: Props) {
    return (
        <LinearGradient style={styles.container}
            colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}
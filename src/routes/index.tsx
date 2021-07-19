import React from 'react'
import { AppRoutes } from './app.routes'
import { SignIn } from '../screens/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../context/auth'

export function Routes() {
    const { user } = useAuth()

    return (
        <NavigationContainer>
            {user.id ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>

    )
}
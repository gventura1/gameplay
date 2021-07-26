import React, { createContext, ReactNode, useState, useEffect } from 'react'
import * as Auth from 'expo-auth-session'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USER } from '../config/storage'

import {
    SCOPE, CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from '../config'

import { api } from '../services/api'
import { useContext } from 'react'

interface AuthContextData {
    user: User
    loading: boolean
    signIn(): Promise<void>
}

interface AuthProviderProp {
    children: ReactNode
}
interface User {
    id: string
    username: string
    firstName: string
    avatar: string
    email: string
    token: string
}

type AuthorizationResponse = Auth.AuthSessionResult & {
    params: {
        access_token: string
        error?: string
    }

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProp) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    async function signIn() {
        try {
            setLoading(true)
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            const { type, params } = await Auth.startAsync({ authUrl }) as AuthorizationResponse

            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`
                const userInfo = await api.get('/users/@me')

                const firstName = userInfo.data.username.split(' ')[0]
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }
                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
                setUser(userData)
            }
        } catch {
            throw new Error('Não foi possivel autenticar')

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        async function loadUser() {
            const storagedUser = await AsyncStorage.getItem(COLLECTION_USER)

            if (storagedUser) {
                const userLogged = JSON.parse(storagedUser) as User
                api.defaults.headers.authorization = `Bearer ${userLogged.token}`
                setUser(userLogged)
            }
        }
        loadUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}
export {
    AuthProvider,
    useAuth
}
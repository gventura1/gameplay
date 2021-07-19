import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';

import { ListHeader } from '../../components/ListHeader'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Member } from '../../components/Member'
import BannerImg from '../../assets/banner.png'
import { ListDivider } from '../../components/ListDivider'

import { theme } from '../../global/styles/theme'
import { styles } from './style'
import { FlatList } from 'react-native-gesture-handler'


export function AppointmentDetails() {
    const players = [
        {
            id: '1',
            username: 'Guilherme',
            avatar_url: 'https://github.com/gventura1.png',
            status: 'online'

        },
        {
            id: '2',
            username: 'Guilherme',
            avatar_url: 'https://github.com/gventura1.png',
            status: 'offline'

        }
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </BorderlessButton>
                }
            />
            <ImageBackground source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendários</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList
                data={players}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na Partida"
                />
            </View>

        </Background>
    )
}
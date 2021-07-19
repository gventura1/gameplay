import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './style'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { Background } from '../../components/Background'

import { CategorySelect } from '../../components/CategorySelect'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export function Home() {
    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos ao challenger'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos ao challenger'
        },
    ]

    function handleCategorySelected(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (
        <Background >
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleAppointmentCreate}
                />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelected}
                hasCheckBox={true}
            />
            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />
            <FlatList
                data={appointments}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.match}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 69 }}

            />
        </Background>
    )
}
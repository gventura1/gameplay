import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import {
    Text,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native'

import { ModalView } from '../../components/ModalView'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { Guilds } from '../Guilds'
import { Background } from '../../components/Background'

import { theme } from '../../global/styles/theme'
import { styles } from './style'
import { GuildProps } from '../../components/Guild'

export function AppointmentCreate() {
    const [category, setCategory] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [guildSelected, setGuildSelected] = useState<GuildProps>({} as GuildProps)

    function handleCategorySelected(categoryId: string) {
        setCategory(categoryId)
    }
    function handleGuildSelected(guildSelected: GuildProps) {
        setGuildSelected(guildSelected)
        setModalIsOpen(false)
    }
    function handleCloseModal() {
        setModalIsOpen(false)
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar Partida"
                    />
                    <Text style={[styles.label, {
                        marginLeft: 24,
                        marginTop: 36,
                        marginBottom: 18
                    }]}>Categoria</Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelected}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton onPress={() => setModalIsOpen(true)}>
                            <View style={styles.select}>
                                {
                                    guildSelected.icon ?
                                        <GuildIcon /> :
                                        < View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guildSelected.name ? guildSelected.name : 'Selecione um servidor'}
                                    </Text>
                                </View>
                                <Feather name="chevron-right"
                                    size={18}
                                    color={theme.colors.heading}
                                />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput
                                        maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput
                                        maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Hora e minutos
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput
                                        maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput
                                        maxLength={2} />
                                </View>
                            </View>

                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.limit}>Max 100 caracteres</Text>
                        </View>
                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />
                        <View style={styles.footer}>
                            <Button
                                title='Agendar'
                            />
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={modalIsOpen} setModalIsClose={handleCloseModal}>
                <Guilds handleGuildSelected={handleGuildSelected} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}
import React from 'react'
import { ScrollView } from 'react-native'

import { styles } from './style'
import { categories } from '../../utils/categories'

import { Category } from '../Category'

type Props = {
    categorySelected: string
    hasCheckBox?: boolean
    setCategory(categoryId: string): void
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox }: Props) {
    return (
        <ScrollView style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => {
                    return <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id == categorySelected}
                        hasCheckBox={hasCheckBox}
                        onPress={() => setCategory(category.id)}
                    />
                })
            }
        </ScrollView>
    )
}


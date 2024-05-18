import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Text } from 'react-native';

import { RootStackParams } from '../navigation/StackNavigator';
import { Header } from '../components/pokemon/Header';
import { usePokemon } from '../hooks/usePokemon';

type Props = StackScreenProps<RootStackParams, 'Pokemon'>

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon, status } = usePokemon(pokemonItem.id)

    return (
        <>
            <Header
                backgroundColor={color}
                picture={pokemonItem.picture}
                name={pokemonItem.name}
                types={pokemon?.types}
                id={pokemonItem.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    tabsContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    }
})

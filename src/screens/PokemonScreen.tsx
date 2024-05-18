import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Text } from 'react-native';

import { RootStackParams } from '../navigation/StackNavigator';
import { Header } from '../components/pokemon/Header';
import { usePokemon } from '../hooks/usePokemon';
import { Spinner } from '../components/Spinner';
import { NoDetailsFound } from '../components/pokemon/NoDetailsFound';
import { TabNavigator } from '../navigation/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

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
            <View style={styles.tabsContainer}>
                {
                    status === 'loading' && <Spinner />
                }
                {
                    status === 'error' && <NoDetailsFound message='No details found for this pokemon.' />
                }
                {
                    status === 'success' && <TabNavigator />
                }
            </View>
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

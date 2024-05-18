import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

import { PokemonCustom } from '../types/pokemonList'
import { getImageColors } from '../utils/getColors'
import { Card } from './Card';

type Props = {
    item: PokemonCustom,
}
const DEFAULT_COLOR = '#f5f5f5'

const PokemonCard = ({ item }: Props) => {
    const [background, setBackground] = useState(DEFAULT_COLOR)
    const { picture, name, id } = item
    const { navigate } = useNavigation()

    // const getPictureColors = useCallback(
    //     async () => {
    //         const [primary = DEFAULT_COLOR] = await getImageColors(picture)
    //         setBackground(primary)
    //     },
    //     [picture],
    // )

    // useEffect(() => {
    //     let isMounted = true
    //     if (isMounted) {
    //         getPictureColors()
    //     }

    //     return () => {
    //         isMounted = false
    //     }
    // }, [])

    return (
        <>
            {/* @ts-ignore */ }
            <TouchableOpacity onPress={() => navigate('Pokemon', {
                    pokemonItem: item,
                    color: background
                })}
                activeOpacity={0.9}
            >
                <Card id={id} name={name} pokeballColor='gray'>
                    <Image source={{ uri: picture }} style={styles.img} />
                </Card>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        position: 'absolute',
        bottom: -15,
        right: -10,
        zIndex: 1
    }
})

export const PokedexItem = React.memo(PokemonCard)
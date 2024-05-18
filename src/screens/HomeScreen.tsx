import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pokeball } from '../components/Pokeball'
import { colors } from '../theme/colors'
import { SearchInput } from '../components/SearchInput'

interface HomeProps extends StackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: HomeProps) => {
    const [searchText, setSearchText] = useState('');
    const [term, setTerm] = useState('')

    return (
        <>
            <View style={styles.titleContainer}>
                <Pokeball color='gray' />
                <Text style={styles.title}>What Pokemon</Text>
                <Text style={styles.title}>are you looking for?</Text>
                <View style={styles.wrapperSearch}>
                    <SearchInput
                        placeholder="Type Something"
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                        onDebounce={setTerm}
                    />
                </View>
            </View>

            <View style={styles.mainContainer}>
                <Pressable style={{ ...styles.button, backgroundColor: colors.red }} onPress={() => navigation.navigate('Pokedex')}>
                    <Pokeball color='white' size={140} position={-50} />
                    <Text style={styles.text}>Pokedex</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#fff',
        minHeight: '30%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'black'
    },
    wrapperSearch: {
        marginTop: 30, 
        paddingHorizontal: 10
    },
    inputSearch: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    mainContainer: {
        marginTop: 20,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    button: {
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: 'black',
        height: 80
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDebounce } from '../hooks/useDebounce';

interface Props {
    onDebounce: (value: string) => void;
    placeholder: string;
    onChangeText: (value: string) => void;
    value: string
}

export const SearchInput = ({ onDebounce, placeholder, onChangeText, value }: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedValue = useDebounce(searchValue)

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignSelf: 'center',
        elevation: 1,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});

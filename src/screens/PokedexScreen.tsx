import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from "../theme/colors";
import { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen';
import { usePokemons } from "../hooks/usePokemons";

export const PokedexScreen = () => {
    const {pokemons, getPokemons, status} = usePokemons();

    useEffect(() => {
        if (SplashScreen) {
            SplashScreen.hide();
        }
    }, []);

    return (
        <View style={styles.withoutResults}>
            <Text style={styles.withoutResultText}>
                At this time there are no pokemons available
            </Text>
            <Image
                style={styles.withoutResultImg}
                source={require('../assets/pokeball-white.png')}
            />
        </View>
    )

    // return (
    //     <SafeAreaView>
    //         <Text>Pokedex Screen</Text>
    //     </SafeAreaView>
    // )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: colors.red,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#fff',
    },
    withoutResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
    },
    withoutResultText: {
        fontSize: 25,
        width: '80%',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    withoutResultImg: {
        width: 150,
        height: 150,
        opacity: 0.9,
    },
});
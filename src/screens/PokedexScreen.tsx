import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from "../theme/colors";
import { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen';
import { usePokemons } from "../hooks/usePokemons";
import { Spinner } from "../components/Spinner";
import { FlatList } from "react-native-gesture-handler";
import { PokedexItem } from "../components/PokedexItem";
import { Pokeball } from "../components/Pokeball";

export const PokedexScreen = () => {
    const { pokemons, getPokemons, status } = usePokemons();

    useEffect(() => {
        if (SplashScreen) {
            SplashScreen.hide();
        }
    }, []);

    if (status === 'loading' && pokemons.length === 0) {
        return <Spinner />;
    }

    if (status === 'error' || (status === 'success' && pokemons.length === 0)) {
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
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={pokemons}
                    keyExtractor={pokemon => pokemon.id}
                    renderItem={({ item }) => <PokedexItem item={item}/>}
                    showsVerticalScrollIndicator={false}
                    onEndReached={getPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={<Spinner />}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'space-evenly'
                    }}
                    ListHeaderComponent={
                        <View style={styles.titleContainer}>
                            <Pokeball size={180} position={-50} />
                            <Text style={styles.title}>Pokédex</Text>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
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
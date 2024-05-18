import { createStackNavigator } from '@react-navigation/stack';
import { PokedexScreen } from '../screens/PokedexScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { PokemonCustom } from '../types/pokemonList';

export type RootStackParams = {
    Pokemon: { pokemonItem: PokemonCustom, color: string }
    Pokedex: undefined;
    Search: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParams { }
    }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#fff' }
            }}
        >
            <Stack.Screen name="Pokedex" component={PokedexScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
        </Stack.Navigator>
    )
}
import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {
        fallback: '#f44336'
    });

    let primary = '#f44336'; 
    let secondary = '#f44336';

    if (colors.platform === 'android') {
        primary = colors.dominant || primary;
        secondary = colors.darkMuted || secondary;
    } else if (colors.platform === 'ios') {
        primary = colors.primary || primary;
        secondary = colors.secondary || secondary;
    }

    return [primary, secondary];
}

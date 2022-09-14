import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

export interface GameCardProps {
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

interface localProps extends TouchableOpacityProps {
    data: GameCardProps
}

export default function GameCard({data}: localProps ) {
    const {id, ads, cover, name, ...rest} = data

  return (
    <TouchableOpacity style={styles.Container} {...rest}>
        <ImageBackground 
        style={styles.cover}
        source={cover}
        >

        <LinearGradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
        >
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.ads}>
                {ads} anúncios
            </Text>
        </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  )
}
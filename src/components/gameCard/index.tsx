import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

export interface GameCardProps {
    id: string,
    title: string,
    _count:{
        ads: number
    },
    bannerUrl: string
}

interface localProps extends TouchableOpacityProps {
    data: GameCardProps
}

export default function GameCard({data, ...rest}: localProps ) {
    const {id, _count, bannerUrl, title} = data

  return (
    <TouchableOpacity style={styles.Container} {...rest}>
        <ImageBackground 
        style={styles.cover}
        source={{uri: data.bannerUrl}}
        >

        <LinearGradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
        >
            <Text style={styles.name}>
                {data.title}
            </Text>
            <Text style={styles.ads}>
                {data._count.ads} anúncios
            </Text>
        </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  )
}
import { View, Text, ColorValue } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

interface DuoInfoProps {
    label: string,
    value: string,
    colorValue?: ColorValue
}
export function DuoInfo(props: DuoInfoProps) {
    const { label, value, colorValue=THEME.COLORS.TEXT } = props

  return (
    <View style={styles.Container}>
        <Text style={styles.label}>{label}</Text>
        <Text 
        style={[styles.value, {color: colorValue}]}
        numberOfLines={1}
        >
          {value}
        </Text>
    </View>
  )
}
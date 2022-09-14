import { View, Text, ViewProps } from 'react-native'
import { styles } from './styles'

interface HeadingProps extends ViewProps {
  title: string,
  subtitle: string
} 

export default function Heading(props: HeadingProps) {
  const { title, subtitle, ...rest} = props
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}
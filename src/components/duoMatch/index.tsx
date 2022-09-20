import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { MaterialIcons} from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import { THEME } from '../../theme'
import { Heading } from '../heading'

interface DuoMatchProps extends ModalProps{
    discord: string,
    onClose: ()=> void
}

export function DuoMatch(props: DuoMatchProps) {
    const { discord, onClose, ...rest} = props
  return (
    <Modal 
    {...rest}
    transparent
    statusBarTranslucent
    animationType='fade'
    >
        <View style={styles.Container}>
            <View style={styles.content}>

                <TouchableOpacity 
                style={styles.closeIcon}
                onPress={onClose}
                >
                    <MaterialIcons
                    name='close'
                    size={20}
                    color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle
                size={64}
                color={THEME.COLORS.SUCCESS}
                weight='bold'
                />

                <Heading
                title='Lets play'
                subtitle='Agora é só começar a jogar'
                style={{alignItems: 'center', marginTop: 24}}
                />

                <Text style={styles.label}>
                    Adicione no Discord
                </Text>

                <TouchableOpacity style={styles.discordButton}>
                    <Text style={styles.discord}>
                        {discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}
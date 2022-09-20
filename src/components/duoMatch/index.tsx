import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { MaterialIcons} from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import { THEME } from '../../theme'
import { Heading } from '../heading'
import * as Clipboard from 'expo-clipboard'
import { useState } from 'react'

interface DuoMatchProps extends ModalProps{
    discord: string,
    onClose: ()=> void
}

export function DuoMatch(props: DuoMatchProps) {
    const { discord, onClose, ...rest} = props
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordUserToClipboard() {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord)

        Alert.alert("Discord cópiado!", "Usuário copiado para você colar no discord")
        setIsCopping(false)
    }

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

                <TouchableOpacity
                style={styles.discordButton}
                onPress={handleCopyDiscordUserToClipboard}
                disabled={isCopping}
                >
                    <Text style={styles.discord}>
                        {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}
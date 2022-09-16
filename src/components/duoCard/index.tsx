import { Text, View } from 'react-native'
import { THEME } from '../../theme'
import { DuoInfo } from '../duoInfo'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native'
import { GameController } from 'phosphor-react-native'

export interface DuoCardProps {
    hourEnd: string,
    hourStart: string,
    id: string,     
    name: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearsPlaying: number,
}

interface Props {
    data: DuoCardProps,
    onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
    const { name, hourEnd, hourStart, useVoiceChannel, yearsPlaying, weekDays,} = data
  return (
    <View style={styles.Container}>
        <DuoInfo
        label='Nome'
        value={name}
        />
        <DuoInfo
        label='Tempo de jogo'
        value={`${yearsPlaying} anos`}
        />
        <DuoInfo
        label='Disponibilidade'
        value={`${weekDays.length} dias \u2022 ${hourStart} - ${hourEnd}`}
        />
        <DuoInfo
        label='Chamada de áudio'
        value={useVoiceChannel? 'Sim': 'Não'}
        colorValue={useVoiceChannel? THEME.COLORS.SUCCESS: THEME.COLORS.ALERT}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={onConnect}
        >
          <GameController
          color={THEME.COLORS.TEXT}
          size={20}
          />

          <Text style={styles.buttonTitle}>
            Conectar
          </Text>
        </TouchableOpacity>
    </View>
  )
}
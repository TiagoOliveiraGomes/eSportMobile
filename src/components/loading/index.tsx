import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { THEME } from '../../theme'

export function Loading() {
  return (
    <View style={styles.Container}>
      <ActivityIndicator
      color={THEME.COLORS.PRIMARY}
      />
    </View>
  )
}
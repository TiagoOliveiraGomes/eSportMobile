import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import Heading from '../../components/heading'
import GameCard from '../../components/gameCard'
import { GAMES } from '../../utils/games'

export function Home() {
  return (
    <View style={styles.Container}>
      <Image 
      source={logoImg}
      style={styles.logo}
      />

      <Heading
      title='Encontre seu duo'
      subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
      data={GAMES}
      keyExtractor={item => item.id}
      renderItem={({item})=> {
        return (
          <GameCard
          data={item}
          />
        )
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
      />

    </View>
  )
}
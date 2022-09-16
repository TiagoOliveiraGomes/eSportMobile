import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import Heading from '../../components/heading'
import GameCard from '../../components/gameCard'

import { GAMES } from '../../utils/games'

export function Home() {
  const [gameList, setGameList] = useState()

  useEffect(()=>{
    async function getGameList () {
      const response = await fetch('http://192.168.0.102:3333/games')
      const data = await response.json()
      setGameList(data)
    }
    getGameList()
  }, [])

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
      data={gameList}
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
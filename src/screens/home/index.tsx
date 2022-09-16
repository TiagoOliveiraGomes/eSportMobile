import { Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/heading";
import GameCard, { GameCardProps } from "../../components/gameCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../../components/background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [gameList, setGameList] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl});
  }

  useEffect(() => {
    let unmount = false;
    async function getGameList() {
      const response = await fetch("http://192.168.0.102:3333/games");
      const data = await response.json();
      !unmount && setGameList(data);
    }
    getGameList();

    return () => {
      unmount = true;
    };
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.Container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={gameList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard 
            data={item}
            onPress={()=> handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}

import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import Background from '../../components/background'
import { styles } from './styles'
import { GameParams } from '../../@types/navigation'
import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme'
import { Heading } from '../../components/heading'
import { DuoCard, DuoCardProps } from '../../components/duoCard'


export function Game() {
    const route = useRoute()
    const game = route.params as GameParams
    const navigation = useNavigation()
    const [duos, setDuos] = useState<DuoCardProps[]>([])

    function handleGoBack () {
      navigation.goBack()
    }

    useEffect(() => {
      let unmount = false;
      async function getGameList() {
        const response = await fetch(`http://192.168.0.102:3333/games/${game.id}/ads`);
        const data = await response.json();
        
        !unmount && setDuos(data);
      }
      getGameList();
  
      return () => {
        unmount = true;
      };
    }, []);

  return (
    <Background>
        <SafeAreaView style={styles.Container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
              />
            </TouchableOpacity>

            <Image
            source={{uri: game.bannerUrl}}
            style={styles.cover}
            resizeMode='cover'
            />
            <View style={styles.right} />
          </View>

          <Heading 
          title={game.title}
          subtitle='Conect-se e comece a jogar'
          />

          <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard
            data={duos[0]}
            onConnect={() => {}}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={()=> (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
          />


        </SafeAreaView>
    </Background>
  )
}
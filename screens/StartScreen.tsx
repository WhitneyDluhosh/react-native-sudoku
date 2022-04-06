import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import {styles} from '../components/styles/index'
import { Text, View, HomeButton } from '../components/Themed';
import { RootStackParamList } from '../types';

type StartScreenProps = NativeStackScreenProps<RootStackParamList, "Root">;

export default function StartScreen(props:StartScreenProps){
  return (
    <View style={styles.layout.container}>
      <Text style={styles.text.h1}>Start</Text>
      <View style={styles.layout.separator} lightColor="#F2F2F2" darkColor="#ffffff" />
      <Text style={styles.text.h2}> Hello</Text>
      <HomeButton onPress={()=>{props.navigation.navigate("Game")}} title="Start Game" />
    </View>
  );
}



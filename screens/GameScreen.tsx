import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {styles} from '../components/styles/index'
import { Text, View} from '../components/Themed';
import { RootStackParamList } from '../types';

type GameScreenProps = NativeStackScreenProps<RootStackParamList, "Root">;

export default function GameScreen(props:GameScreenProps) {
  return (
    <View style={styles.layout.container}>
      <Text style={styles.text.h1}>Tab Two</Text>
      <View style={styles.layout.separator} lightColor={styles.colors.lightPrimary} darkColor={styles.colors.darkPrimary}  />
    </View>
  );
}

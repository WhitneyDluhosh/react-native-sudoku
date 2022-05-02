import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageBackground,TextStyle, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from '../components/styles/index'
import { Text, View, HomeButton, ThemeColor} from '../components/Themed';
import { RootStackParamList } from '../types';
import { layout } from '../components/styles/layout';

type StartScreenProps = NativeStackScreenProps<RootStackParamList, "Root">;
const lightImage = '../assets/images/lightLanding.gif';
const darkImage = '../assets/images/darkLanding.gif';
export default function StartScreen(props:StartScreenProps){
  return (
    <SafeAreaView style={styles.layout.safeAreaView}>
       <ImageBackground source={ThemeColor() === "dark"?require(darkImage):require(lightImage)} resizeMode="cover" style={styles.layout.background}>
        <View style={styles.layout.container} >
          <Text style={styles.text.h1}>Scintillating Sudoku</Text>
        </View>
        <View style={[styles.layout.container]} >
          <HomeButton style={styles.buttons.startButton as ViewStyle} onPress={()=>{props.navigation.navigate("Game")}} title="New Game" lightColor={styles.colors.lightPrimary} darkColor={styles.colors.darkPrimary}/>
          <HomeButton style={styles.buttons.startButton as ViewStyle} onPress={()=>{props.navigation.navigate("Game")}} title="Continue" lightColor={styles.colors.lightPrimary} darkColor={styles.colors.darkPrimary}/>
        </View>
        </ImageBackground>
    </SafeAreaView>
  );
}



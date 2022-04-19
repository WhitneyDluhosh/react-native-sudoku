import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSchemeName, useColorScheme } from 'react-native';

export async function getData():Promise<ColorSchemeName>{
    try {
      const value = await AsyncStorage.getItem('theme')
      return value as NonNullable<ColorSchemeName>
    } catch(e) {
        // display fetch error
        
        // error reading value
        return useColorScheme() as NonNullable<ColorSchemeName>;
    }
  }
  
export async function storeData(value:NonNullable<ColorSchemeName>){
    try {
      await AsyncStorage.setItem('theme', value).then(() => {return true})
     
    } catch (e) {
      // saving error
      return false;
      //display not stored alert, try again later
    }
  }
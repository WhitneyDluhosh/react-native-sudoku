import AsyncStorage from '@react-native-async-storage/async-storage';
  
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('game')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

const storeData = async (value:JSON) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('game', jsonValue)
    } catch (e) {
      // saving error
    }
  }


export default {getData, storeData}
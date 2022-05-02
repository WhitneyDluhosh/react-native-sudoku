import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useState} from 'react'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {getData, storeData} from './async/theme';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  getData().then((data) => {(data === "light")?setColorScheme("light"):setColorScheme("dark")});


  if (!isLoadingComplete) {
    //Add Loading Screen
    return (<SafeAreaProvider></SafeAreaProvider>);
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}

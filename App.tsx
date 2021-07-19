import React from 'react';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { Background } from './src/components/Background'
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/global/styles/theme';
import { AuthProvider } from './src/context/auth';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) //expo install expo-app-loading
    return <AppLoading />  //segura a tela de splash

  return (

    <Background>
      <StatusBar barStyle="light-content"
        backgroundColor={theme.colors.secondary100}
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>


  );
}


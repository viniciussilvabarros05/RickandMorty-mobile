import { ThemeProvider } from 'styled-components'
import { StatusBar } from "react-native";
import React from "react";
import theme from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard/Dash";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if(!fontsLoaded){
    return <></>
  }
  return( 
    <ThemeProvider theme={theme}>  
        <StatusBar barStyle="light-content"/>
        <Dashboard/>
    </ThemeProvider> 
  )
}


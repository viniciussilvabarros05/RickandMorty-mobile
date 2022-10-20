import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import theme from "./src/global/styles/theme";
import { Home } from "./src/screens/Home/Home";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import NavigationBar from 'expo-navigation-bar'
export default function App() {
    const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content"  backgroundColor="transparent" translucent />
        <AppRoutes />  
      </NavigationContainer> 
    </ThemeProvider>
  );
}

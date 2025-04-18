import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import {
  getAuth, initializeAuth,
  // @ts-ignore
  getReactNativePersistence
} from "firebase/auth";
import { firebaseApp } from "@/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// app/_layout.tsx
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage)
  })

  return (
    <TamaguiProvider config={config}>    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </TamaguiProvider>
  );
}

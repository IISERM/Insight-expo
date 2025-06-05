import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useContext, createContext } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// app/_layout.tsx
import { TamaguiProvider, ToggleGroup, Text, XStack } from "tamagui";
import config from "../tamagui.config";
import { AuthProvider } from "./auth-context";
import NavBar from "@/components/Navbar";
import { Check } from "@tamagui/lucide-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [value, setValue] = useState("Pre-selected")
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
  console.log("Hello");
  return (
    <TamaguiProvider config={config}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="lost&found" options={{header: () => (
            <NavBar 
              centerComponent = {
                <ToggleGroup 
                  type="single"
                  value= {value}
                  onValueChange={setValue}
                  bg={"#00000000"}
                  borderRadius={30}
                >
                  <ToggleGroup.Item 
                    value="Pre-selected"
                    borderColor={"#D1D1D1"}
                    backgroundColor={value === "Pre-selected" ? "#B580CD" : "#00000000"}
                    pressStyle={{
                      backgroundColor:"#00000000", 
                      borderColor:"$colorTransparent"
                    }}
                  >
                    <XStack 
                      ai="center" 
                      space = "10"
                    >
                      {value === "Pre-selected" && <Check size={16} color={"#D1D1D1"} />}
                      <Text 
                        color={"#D1D1D1"} 
                        fontSize={14}
                      >
                        Lost
                      </Text>
                    </XStack>
                  </ToggleGroup.Item>

                  <ToggleGroup.Item 
                    value="Selected"
                    borderColor={"#D1D1D1"}
                    backgroundColor={value === "Selected" ? "#10504C" : "#00000000"}
                    pressStyle={{
                      backgroundColor:"#00000000", 
                      borderColor:"$colorTransparent"
                    }}
                  >
                    <XStack 
                      ai="center" 
                      space = "10"
                    >
                      {value === "Selected" && <Check size={16} color={"#D1D1D1"} />}
                      <Text 
                        color={"#D1D1D1"} 
                        fontSize={14}
                      >
                        Found
                      </Text>
                    </XStack>
                  </ToggleGroup.Item>
                </ToggleGroup>
              }
            />
          )}} />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </TamaguiProvider>
  );
}

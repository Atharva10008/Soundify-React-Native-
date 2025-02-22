const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LaunchScreen from "./screens/LaunchScreen";
import AndroidSmall1 from "./screens/AndroidSmall1";
import Iphone16 from "./screens/Iphone16";
import AndroidCompact from "./screens/AndroidCompact";
import SignupEmail from "./screens/SignupEmail";
import Walkthrough from "./screens/Walkthrough";
import LoginEmail from "./screens/LoginEmail";
import AndroidSmall from "./screens/AndroidSmall";
import Info from "./screens/Info";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "KonkhmerSleokchher-Regular": require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),

  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LaunchScreen"
              component={LaunchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall1"
              component={AndroidSmall1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Iphone16"
              component={Iphone16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidCompact"
              component={AndroidCompact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupEmail"
              component={SignupEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Walkthrough"
              component={Walkthrough}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginEmail"
              component={LoginEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall"
              component={AndroidSmall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

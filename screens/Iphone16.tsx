import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily } from "../GlobalStyles";

const Iphone16 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone161}>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/2292434200.png")}
      />
      <View style={styles.iphone161Child} />
      <Image
        style={styles.camerawhite1Icon}
        contentFit="cover"
        source={require("../assets/camerawhite-1.png")}
      />
      <Pressable
        style={styles.camerawhite1Icon}
        onPress={() => navigation.navigate("AndroidCompact")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/images-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.loginSignup, styles.iconPosition]}
        onPress={() => navigation.navigate("Walkthrough")}
      >
        <Text style={styles.loginSignup1}>Login /Signup</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  icon: {
    left: 0,
    width: 77,
    height: 62,
  },
  iphone161Child: {
    top: 220,
    left: 88,
    backgroundColor: "#4d4dff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 185,
    height: 198,
    position: "absolute",
  },
  camerawhite1Icon: {
    top: 255,
    left: 113,
    width: 132,
    height: 132,
    position: "absolute",
  },
  icon1: {
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },
  loginSignup1: {
    fontSize: FontSize.title3_size,
    fontFamily: FontFamily.konkhmerSleokchherRegular,
    color: "#2c8a5b",
    textAlign: "center",
    width: 221,
    height: 52,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    opacity: 0.8,
  },
  loginSignup: {
    right: -29,
  },
  iphone161: {
    backgroundColor: "#fbfbfe",
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Iphone16;

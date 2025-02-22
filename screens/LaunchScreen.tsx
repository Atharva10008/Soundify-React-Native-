import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Nativehomeindicator1 from "../assets/native--home-indicator1.svg";
import Mobilesignal1 from "../assets/mobile-signal1.svg";
import Union from "../assets/union.svg";
import Battery from "../assets/battery.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LaunchScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.launchScreen}>
      <View style={[styles.frame, styles.framePosition]}>
        <Nativehomeindicator1
          style={[styles.nativeHomeIndicator, styles.controlsButtonsPosition]}
          height={34}
        />
        
        <Text style={[styles.convertLearningInto, styles.frame1Position]}>
          Convert learning into the best moment of the day
        </Text>
        <Image
          style={[styles.untitledDesign1, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/untitled-design-1.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frame1Position]}>
        <Text style={[styles.soundify, styles.soundifyTypo]}>SOUNDIFY</Text>
        <Pressable
          style={[styles.controlsButtons, styles.controlsButtonsPosition]}
          onPress={() => navigation.navigate("Walkthrough")}
        >
          <Text style={[styles.text1, styles.textTypo]}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  controlsButtonsPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneRegular_size,
    color: Color.inkDarkest,
    lineHeight: 16,
    top: "50%",
    position: "absolute",
  },
  frame1Position: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  soundifyTypo: {
    fontSize: FontSize.title3_size,
    textAlign: "center",
  },
  nativeHomeIndicator: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    marginTop: -6,
    left: 30,
    textAlign: "left",
    color: Color.inkDarkest,
  },
  mobileSignalIcon: {},
  unionIcon: {},
  batteryIcon: {
    marginTop: -4,
    right: 16,
    top: "50%",
    position: "absolute",
  },
  nativeStatusBar: {
    height: 44,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  convertLearningInto: {
    top: 116,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.title3,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    fontSize: FontSize.title3_size,
    color: Color.inkDarkest,
  },
  untitledDesign1: {
    top: 254,
    height: 377,
    width: 375,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    height: 812,
  },
  soundify: {
    left: 0, // Ensures it stays centered
    right: 0,
    letterSpacing: -1,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "#e58d2e",
    textAlign: "center",
    lineHeight: 40, // Adjusted for better readability
    fontSize: FontSize.title3_size,
    position: "absolute",
    top: 10, // Adjusted to move it slightly up
    width: "100%", // Ensures it doesn't get cut off
  },
  
  
  text1: {
    marginTop: -8,
    marginLeft: -43.5,
    left: "50%",
    textAlign: "center",
    color: Color.inkDarkest,
  },
  controlsButtons: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.skyWhite,
    height: 48,
  },
  frame1: {
    top: 60,
    height: 720, // Increased height
    overflow: "hidden",
  },
  
  launchScreen: {
    borderRadius: Border.br_13xl,
    backgroundColor: "#dae2eb",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default LaunchScreen;

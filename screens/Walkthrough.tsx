import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Nativehomeindicator from "../assets/native--home-indicator.svg";
import Battery from "../assets/battery.svg";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Walkthrough = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.walkthrough}>
      <Text
        style={[
          styles.createBrilliantLearning,
          styles.viewsImagesRatioPosition,
        ]}
      >
        Create brilliant learning pathways
      </Text>
      <View style={[styles.stepperDots, styles.stepperDotsFlexBox]}>
        <View style={[styles.controlsPageControlsDot, styles.controlsLayout]} />
        <View style={[styles.controlsPageControlsDot, styles.controlsLayout]} />
        <View style={[styles.controlsPageControlsDot, styles.controlsLayout]} />
        <View style={[styles.stepperDotsInner, styles.controlsLayout]} />
      </View>
      <Pressable
        style={[styles.controlsButtons, styles.stepperDotsFlexBox]}
        onPress={() => navigation.navigate("SignupEmail")}
      >
        <Text style={[styles.text, styles.textTypo]}>Create account</Text>
      </Pressable>
      <Pressable
        style={styles.haveAnAccountContainer}
        onPress={() => navigation.navigate("LoginEmail")}
      >
        <Text style={styles.text1}>
          <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
          <Text style={[styles.logIn, styles.textTypo]}>Log in</Text>
        </Text>
      </Pressable>
      <Text style={[styles.soundify, styles.soundifyTypo]}>
        <Text style={styles.soun}>soun</Text>
        <Text style={styles.dify}>dify</Text>
      </Text>
      <Image
        style={[styles.viewsImagesRatio, styles.viewsImagesRatioPosition]}
        contentFit="cover"
        source={require("../assets/views--images-ratio.png")}
      />
      <Nativehomeindicator
        style={[styles.nativeHomeIndicator, styles.nativePosition]}
        height={34}
      />
      <Pressable
        style={[styles.walkthroughChild, styles.nativePosition]}
        onPress={() => navigation.navigate("Iphone16")}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewsImagesRatioPosition: {
    width: 327,
    marginLeft: -163.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  stepperDotsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  controlsLayout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_81xl,
  },
  textTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
  },
  soundifyTypo: {
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.title3_size,
    textAlign: "center",
  },
  nativePosition: {
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  createBrilliantLearning: {
    marginTop: 93,
    textAlign: "center",
    color: Color.inkDarkest,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.title3_size,
  },
  controlsPageControlsDot: {
    backgroundColor: Color.skyLight,
  },
  stepperDotsInner: {
    backgroundColor: Color.primaryBase,
  },
  stepperDots: {
    marginLeft: -27.5,
    bottom: 194,
    gap: 8,
    left: "50%",
  },
  text: {
    color: Color.skyWhite,
    lineHeight: 16,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneRegular_size,
    textAlign: "center",
    flexWrap: "nowrap", // Ensures text stays in one line
     // Prevents wrapping
  },
  
  controlsButtons: {
    position: "absolute",
    bottom: 114, // Keeps it at the correct position from the bottom
    left: "50%", // Moves the left edge to the center of the screen
    transform: [{ translateX: -100 }], // Moves it back by half of its width (assuming 200px width)
    borderRadius: Border.br_29xl,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: Color.primaryBase,
    alignItems: "center",
    justifyContent: "center",
    width: 200, // Ensures proper button width
  },
  
  
  haveAnAccount: {
    fontFamily: FontFamily.regularNoneRegular,
    color: Color.inkDarker,
  },
  logIn: {
    color: Color.primaryBase,
  },
  text1: {
    marginLeft: -93.5,
    lineHeight: 24,
    fontSize: FontSize.regularNoneRegular_size,
    textAlign: "center",
  },
  haveAnAccountContainer: {
    bottom: 66,
    left: "50%",
    position: "absolute",
  },
  soun: {
    color: Color.primaryBase,
  },
  dify: {
    color: "#030403",
  },
  soundify: {
    top: 76,
    left: 135,
    textAlign: "center",
    position: "absolute",
  },
  viewsImagesRatio: {
    marginTop: -266,
    borderRadius: Border.br_base,
    height: 327,
  },
  nativeHomeIndicator: {
    bottom: 0,
    maxWidth: "100%",
    right: 0,
    left: 0,
    overflow: "hidden",
  },
  walkthroughChild: {
    top: 73,
    backgroundColor: "#d9d9d9",
    width: 38,
    height: 35,
  },
  text2: {
    marginTop: -6,
    left: 30,
    textAlign: "left",
    lineHeight: 16,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneRegular_size,
    color: Color.inkDarkest,
    top: "50%",
    position: "absolute",
  },
  mobileSignalIcon: {
    marginTop: -1.5,
    right: 69,
    width: 18,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3,
    right: 49,
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 16,
  },
  nativeStatusBar: {
    top: 0,
    height: 44,
    right: 0,
    left: 0,
    backgroundColor: Color.skyWhite,
  },
  walkthrough: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.skyWhite,
  },
});

export default Walkthrough;

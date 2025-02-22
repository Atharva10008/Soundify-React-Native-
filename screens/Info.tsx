import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Viewsbottomsheetslight from "../assets/views--bottom-sheetslight.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Info = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.info}>
      <View style={[styles.partialsOverlay, styles.partialsOverlayPosition]} />
      <Viewsbottomsheetslight
        style={[styles.viewsBottomSheetslight, styles.partialsOverlayPosition]}
        height={510}
      />
      <Text style={styles.introducingNewFeature}>Introducing new feature</Text>
      <Text style={styles.thisIsA}>
        This is a short explanation about the new feature of the app.
      </Text>
      <Pressable
        style={[styles.controlsButtons, styles.controlsPosition]}
        onPress={() => navigation.navigate("AndroidSmall")}
      >
        <Text style={[styles.text, styles.textTypo]}>Check out</Text>
      </Pressable>
      <Pressable
        style={[styles.controlsButtons1, styles.controlsPosition]}
        onPress={() => navigation.navigate("AndroidSmall1")}
      >
        <Text style={[styles.text1, styles.textTypo]}>Maybe Later</Text>
      </Pressable>
      <Image
        style={styles.viewsImagesRatio}
        contentFit="cover"
        source={require("../assets/views--images-ratio1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  partialsOverlayPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  controlsPosition: {
    height: 48,
    borderRadius: Border.br_29xl,
    right: 24,
    left: 24,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    lineHeight: 16,
    top: "50%",
    marginTop: -8,
    left: "50%",
    fontSize: FontSize.regularNoneRegular_size,
    textAlign: "center",
    position: "absolute",
  },
  partialsOverlay: {
    top: 0,
    backgroundColor: Color.inkDarkest,
    opacity: 0.7,
  },
  viewsBottomSheetslight: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    maxWidth: "100%",
    overflow: "hidden",
  },
  introducingNewFeature: {
    bottom: 430,
    fontSize: FontSize.title3_size,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.title3,
    width: 327,
    textAlign: "center",
    color: Color.inkDarkest,
    left: 24,
    position: "absolute",
  },
  thisIsA: {
    bottom: 374,
    lineHeight: 24,
    fontFamily: FontFamily.regularNoneRegular,
    fontSize: FontSize.regularNoneRegular_size,
    width: 327,
    textAlign: "center",
    color: Color.inkDarkest,
    left: 24,
    position: "absolute",
  },
  text: {
    marginLeft: -38.5,
    color: Color.skyWhite,
  },
  controlsButtons: {
    bottom: 90,
    backgroundColor: Color.primaryBase,
  },
  text1: {
    marginLeft: -47.5,
    color: Color.inkDarker,
  },
  controlsButtons1: {
    bottom: 34,
  },
  viewsImagesRatio: {
    marginLeft: -109.5,
    bottom: 146,
    width: 220,
    height: 220,
    left: "50%",
    position: "absolute",
  },
  info: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.skyWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Info;

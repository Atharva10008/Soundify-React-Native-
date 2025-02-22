import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const AndroidCompact = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidCompact6}>
      <Image
        style={styles.androidMedium1}
        contentFit="cover"
        source={require("../assets/android-medium--1.png")}
      />
      <Pressable
        style={styles.cameraCaptureIconInLineCi}
        onPress={() => navigation.navigate("AndroidSmall1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/cameracaptureiconinlinecirclebuttonvector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.galleryCircleIcon512x511Ta}
        onPress={() => navigation.navigate("AndroidSmall1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/gallerycircleicon512x511taox4rum.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  androidMedium1: {
    top: 169,
    left: 0,
    width: 412,
    height: 407,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cameraCaptureIconInLineCi: {
    left: 120,
    top: 584,
    width: 172,
    height: 141,
    position: "absolute",
  },
  galleryCircleIcon512x511Ta: {
    left: 155,
    top: 725,
    width: 101,
    height: 96,
    position: "absolute",
  },
  androidCompact6: {
    backgroundColor: Color.skyWhite,
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidCompact;

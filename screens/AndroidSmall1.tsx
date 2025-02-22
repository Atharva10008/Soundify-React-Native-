import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const AndroidSmall1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.androidSmall2}
      onPress={() => navigation.navigate("Info")}
    />
  );
};

const styles = StyleSheet.create({
  androidSmall2: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall1;

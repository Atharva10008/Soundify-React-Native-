import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const AndroidSmall = () => {
  return <View style={styles.androidSmall3} />;
};

const styles = StyleSheet.create({
  androidSmall3: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall;

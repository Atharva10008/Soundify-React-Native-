import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Leftactionable from "../assets/left-actionable.svg";
import Battery from "../assets/battery.svg";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LoginEmail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginEmail}>
      {/* Username (Email) Input */}
      <TextInput
        style={[styles.inputField, styles.controlsPosition]}
        placeholder="Email"
        placeholderTextColor={Color.inkLighter}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={[styles.inputField, styles.controlsPosition, styles.passwordInput]}
        placeholder="Password"
        placeholderTextColor={Color.inkLighter}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <Pressable
        style={styles.controlsButtons}
        onPress={() => navigation.navigate("Iphone16")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>Log in</Text>
      </Pressable>

      {/* Terms and Privacy */}
      <Text
        style={[styles.byContinuingYouContainer, styles.forgotPasswordLayout]}
      >
        By continuing, you agree to our{" "}
        <Text style={styles.termsOfService}>Terms of Service</Text> and{" "}
        <Text style={styles.termsOfService}>Privacy Policy</Text>.
      </Text>

      {/* Forgot Password */}
      <Text style={[styles.forgotPassword, styles.forgotPasswordLayout]}>
        Forgot password?
      </Text>

      {/* Top Navigation Bar */}
      <Pressable
        style={[styles.barsNavBarsStandard, styles.barsPosition]}
        onPress={() => navigation.navigate("Walkthrough")}
      >
        
      </Pressable>

      
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    left: "50%",
  },
  controlsPosition: {
    height: 50,
    left: 24,
    position: "absolute",
    borderRadius: Border.br_5xs,
    borderColor: Color.skyLight,
    borderWidth: 1,
    backgroundColor: Color.skyWhite,
    paddingHorizontal: 12,
    fontFamily: FontFamily.regularNoneRegular,
    fontSize: FontSize.size_xl,
  },
  inputField: {
    width: "85%",
    top: 220,
    color: Color.inkDarkest,
  },
  passwordInput: {
    top: 290,
  },
  forgotPasswordLayout: {
    width: 327,
    textAlign: "left",
    lineHeight: 16,
    left: 24,
    position: "absolute",
  },
  barsPosition: {
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.skyWhite,
  },
  titlePosition: {
    lineHeight: 18,
    fontSize: FontSize.largeNoneMedium_size,
    marginTop: -9,
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -22.5,
    color: Color.skyWhite,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    lineHeight: 16,
    marginTop: -8,
    textAlign: "center",
    fontSize: FontSize.regularNoneRegular_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  controlsButtons: {
    bottom: 94,
    borderRadius: Border.br_29xl,
    backgroundColor: Color.primaryBase,
    height: 48,
    left: 24,
    position: "absolute",
    right: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  byContinuingYou: {
    color: Color.inkDarkest,
  },
  termsOfService: {
    color: Color.primaryBase,
    fontWeight: "500",
  },
  byContinuingYouContainer: {
    bottom: 162,
    fontSize: FontSize.tinyNormalRegular_size,
    fontFamily: FontFamily.regularNoneRegular,
  },
  forgotPassword: {
    top: 359,
    color: Color.primaryBase,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneRegular_size,
  },
  title: {
    marginLeft: -25.5,
    color: Color.inkDarkest,
    fontFamily: FontFamily.regularNoneRegular,
    textAlign: "center",
  },
  leftActionableIcon: {
    marginTop: -12,
    left: 18,
    overflow: "hidden",
  },
  barsNavBarsStandard: {
    top: 44,
    height: 48,
  },
  text3: {
    marginTop: -6,
    left: 30,
    color: Color.inkDarkest,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneRegular_size,
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
  },
  loginEmail: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.skyWhite,
  },
});

export default LoginEmail;

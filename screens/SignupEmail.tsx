import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignupEmail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signupEmail}>
      {/* Email Input Field */}
      <TextInput 
        style={styles.inputField} 
        placeholder="Email" 
        placeholderTextColor={Color.inkLighter} 
        keyboardType="email-address"
      />

      {/* Create Password Input Field */}
      <TextInput 
        style={styles.inputField} 
        placeholder="Create Password" 
        placeholderTextColor={Color.inkLighter} 
        secureTextEntry={true}
      />

      {/* Confirm Password Input Field */}
      <TextInput 
        style={styles.inputField} 
        placeholder="Confirm Password" 
        placeholderTextColor={Color.inkLighter} 
        secureTextEntry={true}
      />

      {/* Sign Up Button */}
      <Pressable style={styles.controlsButtons} onPress={() => navigation.navigate("LoginEmail")}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      {/* Terms & Privacy Text */}
      <Text style={styles.byContinuingYouContainer}>
        <Text>By continuing, you agree to our </Text>
        <Text style={styles.linkText}>Terms of Service</Text>
        <Text> and </Text>
        <Text style={styles.linkText}>Privacy Policy</Text>
        <Text>.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signupEmail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.skyWhite,
    paddingHorizontal: 24,
  },
  inputField: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Color.skyLight,
    borderRadius: Border.br_5xs,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: FontSize.regularNoneRegular_size,
    fontFamily: FontFamily.regularNoneRegular,
    backgroundColor: Color.skyWhite,
    color: Color.inkDarkest,
  },
  controlsButtons: {
    width: "100%",
    height: 48,
    borderRadius: Border.br_29xl,
    backgroundColor: Color.primaryBase,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: Color.skyWhite,
    fontSize: FontSize.regularNoneRegular_size,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
  },
  byContinuingYouContainer: {
    marginTop: 16,
    fontSize: FontSize.tinyNormalRegular_size,
    textAlign: "center",
    color: Color.inkDarkest,
    fontFamily: FontFamily.regularNoneRegular,
  },
  linkText: {
    color: Color.primaryBase,
  },
});

export default SignupEmail;

import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PURPLECOLOR } from '../constants/color';
import InputField from '../components/Input';
import ReusableButton from '../components/SubmitBtn';

const VerificationCode = ({ navigation }) => {
  const img1 = require('assets/forgotpwd.png');

  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate("Login")} />
      <Image source={img1} style={styles.image} />
      <View style={styles.form}>
        <Text style={styles.heading}>Verification Code Sent!</Text>
        <Text style={styles.subHeading}>A verification code has been sent to your email for password change.</Text>
        <InputField placeholder={"Enter Verification Code.."} />
        <View style={styles.txtNavigation}>
          <Text style={styles.navigateTxt}>Go back to</Text>
          <Text style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>LOGIN</Text>
        </View>
        <ReusableButton title={"Verify"} onPress={() => navigation.navigate("resetPassword")} />
      </View>
    </View>
  );
};

export default VerificationCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  form: {
    width: "100%"
  },
  heading: {
    color: PURPLECOLOR,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "500",
    marginTop: 15
  },
  subHeading: {
    color: '#4F4F4F',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: "400",
    marginBottom: 20
  },
  txtNavigation: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20
  },
  loginBtn: {
    color: PURPLECOLOR,
    fontWeight: 600,
    fontSize: 14
  },
  navigateTxt: {
    fontWeight: 400,
    color: "#646982",
    fontSize: 16
  },
});

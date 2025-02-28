import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import { PURPLECOLOR } from '../constants/color';
import OTPInput from '../components/OtpInput';
import ReusableButton from '../components/SubmitBtn';

const PhoneVerification = ({ navigation }) => {
    const img1 = require("assets/verification.png")
    return (
        <View style={styles.container}>
            <Text style={styles.heading} onPress={() => navigation.navigate("Login")}>Phone Verification</Text>
            <Text style={styles.subHeading}>We've sent an verification to <Text style={styles.email}></Text> to verify your email address and activate your account.</Text>
            <Image source={img1} style={styles.image} />
            <OTPInput placeholder={"Enter Verification Code"}/>
            <Text style={styles.resentxt}>Didn’t receive any code! <Text style={styles.resentBtn}>Resend Code</Text></Text>
            <ReusableButton title={"Verify My Email"} style={styles.submitBtn} onPress={() => navigation.navigate("AccountVerified")}/>
        </View>
    )
}

export default PhoneVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: "white",
    },
    heading: {
        color: PURPLECOLOR,
        fontWeight: "600",
        fontSize: 24,
        textAlign: "center",
        marginTop: 25,
    },
    subHeading: {
        fontWeight: "400",
        color: "#6C7278",
        textAlign: "center",
        fontSize: 16,
        marginTop: 14,
    },
    email: {
        color: PURPLECOLOR,
        fontWeight: "500"
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    resentxt:{
        fontWeight : "400",
        textAlign : "center",
        fontSize : 14,
        color : "#7D7D7D"
    },
    resentBtn : {
        color : PURPLECOLOR,
        fontWeight : "500"
    },
    submitBtn : {
        marginTop : 120
    }
})
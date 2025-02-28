import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { PURPLECOLOR } from '../constants/color';
import ReusableButton from '../components/SubmitBtn';

const AccountVerified = ({ navigation }) => {
    const Img1 = require("assets/PasswordReset.png")
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={Img1} style={styles.img} />
                <Text style={styles.heading}>Verification Successful</Text>
                <Text style={styles.subHeading}>Your Verification has been done successfully</Text>
                <ReusableButton title={"Continue"} style={styles.btn} />
            </View>
        </View>
    )
}

export default AccountVerified;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: 40
    },
    heading: {
        color: PURPLECOLOR,
        fontSize: 25,
        fontWeight: 500,
        textAlign: "center",
        marginTop: 30
    },
    subHeading: {
        color: "#80807F",
        fontWeight: "400",
        fontSize: 15,
        textAlign: "center"
    },
    btn: {
        marginTop: 80
    },
})
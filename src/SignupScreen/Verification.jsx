import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { PURPLECOLOR } from '../constants/color';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; //mail-outline and call
import Feather from "react-native-vector-icons/Feather";//edit-2
import ReusableButton from '../components/SubmitBtn';

const Verification = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Verify your account</Text>
            <Text style={styles.subHeading}>Please sign in to your existing account</Text>
            <View style={styles.optionContainer}>
                <View style={styles.containerHead}>
                   <MaterialIcons name="call" color={PURPLECOLOR} size={27}/>
                   <Text style={styles.optionText}>+91 9823989834</Text>
                   <Feather name="edit-2" color={PURPLECOLOR} size={18} />
                </View>
                <ReusableButton title={"Select Phone"} style={styles.btn} onPress={() => navigation.navigate("PhoneVerification")}/>
            </View>
            <View style={styles.optionContainer}>
                <View style={styles.containerHead}>
                   <MaterialIcons name="mail-outline" color={PURPLECOLOR} size={27}/>
                   <Text style={styles.optionText}>techno@gmail.com</Text>
                   <Feather name="edit-2" color={PURPLECOLOR} size={18} />
                </View>
                <ReusableButton title={"Select Email"} style={styles.btn} onPress={() => navigation.navigate("EmailVerification")}/>
            </View>
            <Text style={styles.para}>Make sure you have access to your selected option to receive the code.</Text>
            <ReusableButton title={"Continue"} style={[styles.btn2]}/>
        </View>
    )
}

export default Verification;

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
        marginTop: 14,
    },
    subHeading: {
        fontWeight: "500",
        color: "#6C7278",
        textAlign: "center",
        fontSize: 14,
        marginTop: 10,
    },
    optionContainer  : {
        borderColor : PURPLECOLOR,
        borderWidth : 1.7,
        paddingVertical : 30,
        paddingHorizontal : 40,
        borderRadius : 10,
        marginTop : 30,
        marginHorizontal : 30
    },
    containerHead : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        gap : 10,
    },
    optionText : {
        color : PURPLECOLOR,
        fontWeight : '400',
        fontSize :17
    },
    btn : {
        marginTop : 25
    },
    btn2 : {
        marginTop : 80
    },
    para : {
        textAlign : "center",
        fontSize : 15,
        fontWeight : "400",
        color : "#7D7D7D",
        marginTop : 30
    }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { PURPLECOLOR } from '../constants/color';

const BottomTab = () => {
    const unsavedImg = require("assets/unsaved.png")
    return (
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <Entypo name="home" size={18} color={PURPLECOLOR} />
                <Text style={styles.tabText}>Home</Text>
            </View>
            <View style={styles.childContainer}>
                <MaterialIcons name="video-library" size={18} color={PURPLECOLOR} />
                <Text style={styles.tabText}>video</Text>
            </View>
            <View style={styles.childContainer}>
                <MaterialIcons name="explore" size={18} color={PURPLECOLOR} />
                <Text style={styles.tabText}>Explore</Text>
            </View>
            <View style={styles.childContainer}>
                <Image source={unsavedImg} height={18} width={18} />
                <Text style={styles.tabText}>Saved</Text>
            </View>
            <View style={styles.childContainer}>
                <Entypo name="user" size={18} color={PURPLECOLOR} />
                <Text style={styles.tabText}>Profile</Text>
            </View>
        </View>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        position : "absolute",
        bottom : 0,
        width : 100
    },
    childContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    tabText: {
        fontSize: 10
    }
})
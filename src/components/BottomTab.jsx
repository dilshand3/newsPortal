import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { PURPLECOLOR } from '../constants/color';

const { width } = Dimensions.get('window'); 

const BottomTab = () => {
    const unsavedImg = require("assets/unsaved.png");
    
    return (
        <View style={styles.container}>
            <View style={styles.tabWrapper}>
                <View style={styles.childContainer}>
                    <Entypo name="home" size={22} color={PURPLECOLOR} />
                    <Text style={styles.tabText}>Home</Text>
                </View>
                <View style={styles.childContainer}>
                    <MaterialIcons name="video-library" size={22} color={PURPLECOLOR} />
                    <Text style={styles.tabText}>Video</Text>
                </View>
                <View style={styles.childContainer}>
                    <MaterialIcons name="explore" size={22} color={PURPLECOLOR} />
                    <Text style={styles.tabText}>Explore</Text>
                </View>
                <View style={styles.childContainer}>
                    <Image 
                        source={unsavedImg} 
                        style={styles.tabImage} 
                        resizeMode="contain"
                    />
                    <Text style={styles.tabText}>Saved</Text>
                </View>
                <View style={styles.childContainer}>
                    <Entypo name="user" size={22} color={PURPLECOLOR} />
                    <Text style={styles.tabText}>Profile</Text>
                </View>
            </View>
        </View>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        elevation: 8, 
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: -3 },
    },
    tabWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width,
        paddingVertical: 8,
    },
    childContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    tabText: {
        fontSize: 12,
        marginTop: 4,
        color: '#333',
    },
    tabImage: {
        width: 20,
        height: 20,
    },
});
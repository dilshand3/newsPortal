import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather"; // Bell icon
import AntDesign from "react-native-vector-icons/AntDesign"; // Search icon
import { PURPLECOLOR } from "../constants/color"; // Import karo agar color constants file hai

const HeaderInput = ({
    title,
    showSearchInput = true,
    searchValue,
    onSearchChange,
    rightIcon,
    onRightIconPress,
}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Pressable onPress={() => console.log("Bell Icon Pressed!")}>
                    <Feather name="bell" size={30} color="#FCBA37" style={styles.bellIcon} />
                </Pressable>
            </View>

            {showSearchInput && (
                <View style={styles.searchContainer}>
                    <AntDesign name="search1" size={20} color={PURPLECOLOR} style={styles.searchIcon} />
                    <TextInput
                        value={searchValue}
                        onChangeText={onSearchChange}
                        placeholder="Search News..."
                        placeholderTextColor="#A0A0A0"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                    />
                    <Pressable onPress={onRightIconPress}>
                        <Feather name={rightIcon} size={22} color={PURPLECOLOR} style={styles.rightIcon} />
                    </Pressable>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: PURPLECOLOR,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical : 10,
        paddingHorizontal : 20,
        paddingTop : 40
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom : 16
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FCBA37",
    },
    bellIcon: {
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 12,
        marginBottom : 18
    },
    searchIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    rightIcon: {
        marginLeft: 10,
    },
});

export default HeaderInput;
